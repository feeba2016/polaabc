/* ===== Pola ABC 共享脚本 ===== */

const LEVELS = {
  "A1": {label:"A1", name:"幼儿启蒙", desc:"3-6岁 · 童话/动物/日常", color:"#f97316", emoji:"🧒"},
  "A2": {label:"A2", name:"小学初级", desc:"7-12岁 · 冒险/科学/文化", color:"#22c55e", emoji:"📚"},
  "B1": {label:"B1", name:"初中中级", desc:"10-12岁 · 科普新闻", color:"#0ea5e9", emoji:"🚀"},
  "B2": {label:"B2", name:"高中高级", desc:"高中生·大学生 · 文学/经济/科技", color:"#8b5cf6", emoji:"🎓"},
  "C1": {label:"C1-C2", name:"雅思托福", desc:"备考冲刺 · 学术/政治/法律", color:"#ec4899", emoji:"🏆"},
};

const CATS = {
  space:      {label:"太空探索",  emoji:"🚀", grad:"linear-gradient(135deg,#1e3a8a,#0ea5e9)", color:"#0ea5e9"},
  prehistoric:{label:"史前生物",  emoji:"🦕", grad:"linear-gradient(135deg,#92400e,#f59e0b)", color:"#f59e0b"},
  animals:    {label:"动物世界",  emoji:"🐾", grad:"linear-gradient(135deg,#166534,#22c55e)", color:"#22c55e"},
  ocean:      {label:"海洋奇观",  emoji:"🌊", grad:"linear-gradient(135deg,#0e7490,#14b8a6)", color:"#14b8a6"},
  science:    {label:"科技发明",  emoji:"🧪", grad:"linear-gradient(135deg,#6d28d9,#8b5cf6)", color:"#8b5cf6"},
  earth:      {label:"地球自然",  emoji:"🌍", grad:"linear-gradient(135deg,#15803d,#84cc16)", color:"#84cc16"},
  general:    {label:"综合",      emoji:"📘", grad:"linear-gradient(135deg,#475569,#64748b)", color:"#64748b"},
};

function fmtDate(d){
  const m=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
  const [y,mo,da]=d.split("-");
  return `${y}年${m[+mo-1]}${+da}日`;
}

/* ===== 课程选择 + localStorage 持久化 ===== */
var STORAGE_KEY = "pola_selected_lessons";

function saveSelection(){
  var selected = [];
  document.querySelectorAll('.vocab-cb:checked').forEach(function(cb){
    selected.push({slug:cb.dataset.slug, level:cb.dataset.level});
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
}

function restoreSelection(){
  var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  saved.forEach(function(s){
    var cb = document.querySelector('.vocab-cb[data-slug="'+s.slug+'"][data-level="'+s.level+'"]');
    if(cb) cb.checked = true;
  });
}

function getSelectedWords(){
  var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  var words = [];
  saved.forEach(function(s){
    var ep = EPISODES.find(function(e){return e.slug===s.slug && e.level===s.level;});
    if(ep && ep.vocab){
      ep.vocab.forEach(function(v){
        words.push({word:v.word, zh:v.zh, ex:v.ex||'', from:ep.title, level:ep.level});
      });
    }
  });
  return words;
}

function getSelectedCount(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]').length;
}

function updateNavButtons(){
  var count = getSelectedCount();
  ['navReview','navMatch','navReading'].forEach(function(id){
    var btn = document.getElementById(id);
    if(!btn) return;
    var badge = btn.querySelector('.review-badge');
    if(count > 0){
      btn.classList.add('has-selection');
      if(badge) badge.textContent = count;
    } else {
      btn.classList.remove('has-selection');
      if(badge) badge.textContent = '';
    }
  });
}

/* ===== 卡片渲染 ===== */
function renderCard(e, showCheckbox){
  var c = CATS[e.category] || CATS.general;
  var lv = LEVELS[e.level] || LEVELS.B1;
  var cb = showCheckbox ? '<label class="card-select"><input type="checkbox" class="vocab-cb" data-slug="'+e.slug+'" data-level="'+e.level+'"><span>复习</span></label>' : '';
  return '<div class="card-item">'+
    cb+
    '<a class="card" href="'+e.url+'">'+
      '<div class="card-banner">'+
        '<div class="bg" style="background:'+c.grad+'"></div>'+
        '<span class="emoji">'+e.emoji+'</span>'+
        '<span class="level-badge" style="background:'+lv.color+'">'+lv.label+'</span>'+
        '<span class="cat-tag" style="color:'+c.color+'">'+c.label+'</span>'+
      '</div>'+
      '<div class="card-body">'+
        '<div class="card-date">📅 '+fmtDate(e.date)+'</div>'+
        '<div class="card-title">'+e.title+'</div>'+
        '<div class="card-desc">'+e.desc+'</div>'+
        '<div class="card-foot">'+
          '<span class="go">开始学习 →</span>'+
          '<span class="lvl">'+e.level+' · 英语</span>'+
        '</div>'+
      '</div>'+
    '</a>'+
  '</div>';
}

function sortedEpisodes(){
  return EPISODES.slice().sort(function(a,b){return b.date.localeCompare(a.date);});
}

function byLevel(level){
  if(level==="all") return sortedEpisodes();
  return sortedEpisodes().filter(function(e){return e.level===level;});
}

function catCounts(level){
  var list = level ? byLevel(level) : EPISODES;
  var counts={};
  list.forEach(function(e){counts[e.category]=(counts[e.category]||0)+1;});
  return counts;
}

function levelCounts(){
  var counts={};
  EPISODES.forEach(function(e){counts[e.level]=(counts[e.level]||0)+1;});
  return counts;
}

/* ===== 单词消消乐 ===== */
var matchCards = [];
var matchFlipped = [];
var matchMatched = 0;
var matchTotal = 0;
var matchTimer = null;
var matchStartTime = 0;

function startMatch(){
  var words = getSelectedWords();
  if(words.length < 3){
    alert('请先在「全部课程」页面勾选至少 3 个词汇的课程（建议勾选 2-3 课）');
    return;
  }
  // 取最多 8 对（16 张牌）
  words = words.slice(0, 8);
  matchCards = [];
  words.forEach(function(w, i){
    matchCards.push({id:i, side:'en', text:w.word, pair:i});
    matchCards.push({id:i+100, side:'zh', text:w.zh, pair:i});
  });
  // 洗牌
  for(var i=matchCards.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t = matchCards[i]; matchCards[i]=matchCards[j]; matchCards[j]=t;
  }
  matchFlipped = [];
  matchMatched = 0;
  matchTotal = words.length;
  matchStartTime = Date.now();
  if(matchTimer) clearInterval(matchTimer);
  matchTimer = setInterval(updateMatchTimer, 1000);
  renderMatchBoard();
  document.getElementById('matchBoard').style.display = 'grid';
  document.getElementById('matchStart').style.display = 'none';
  document.getElementById('matchResult').style.display = 'none';
}

function renderMatchBoard(){
  var html = matchCards.map(function(card, idx){
    var flipped = matchFlipped.indexOf(idx) !== -1 || card.matched;
    var cls = 'mcard' + (flipped ? ' flipped' : '') + (card.matched ? ' matched' : '');
    var content = flipped ? card.text : '?';
    return '<div class="'+cls+'" onclick="flipMatch('+idx+')">'+content+'</div>';
  }).join('');
  document.getElementById('matchBoard').innerHTML = html;
  document.getElementById('matchProgress').textContent = matchMatched + ' / ' + matchTotal;
}

function flipMatch(idx){
  if(matchFlipped.length >= 2) return;
  if(matchFlipped.indexOf(idx) !== -1) return;
  if(matchCards[idx].matched) return;
  matchFlipped.push(idx);
  renderMatchBoard();
  if(matchFlipped.length === 2){
    setTimeout(checkMatch, 600);
  }
}

function checkMatch(){
  var a = matchCards[matchFlipped[0]];
  var b = matchCards[matchFlipped[1]];
  if(a.pair === b.pair && a.side !== b.side){
    matchCards[matchFlipped[0]].matched = true;
    matchCards[matchFlipped[1]].matched = true;
    matchMatched++;
    if(matchMatched >= matchTotal){
      clearInterval(matchTimer);
      var elapsed = Math.floor((Date.now() - matchStartTime) / 1000);
      document.getElementById('matchBoard').style.display = 'none';
      document.getElementById('matchResult').style.display = 'block';
      document.getElementById('matchTime').textContent = elapsed + ' 秒';
    }
  }
  matchFlipped = [];
  renderMatchBoard();
}

function updateMatchTimer(){
  var elapsed = Math.floor((Date.now() - matchStartTime) / 1000);
  var t = document.getElementById('matchTimer');
  if(t) t.textContent = elapsed + ' 秒';
}

/* ===== 连词成句 ===== */
var sbWords = [];
var sbAnswer = [];
var sbCurrent = 0;
var sbSentences = [];

function startSentenceBuilder(){
  var words = getSelectedWords();
  var sentences = words.filter(function(w){return w.ex && w.ex.length > 10;}).map(function(w){
    return {text:w.ex.replace(/["']/g,''), word:w.word, zh:w.zh, from:w.from};
  });
  if(sentences.length < 2){
    alert('请先在「全部课程」页面勾选课程（需含有例句的词汇）');
    return;
  }
  sbSentences = sentences;
  sbCurrent = 0;
  showSentence();
}

function showSentence(){
  if(sbCurrent >= sbSentences.length){
    document.getElementById('sbGame').style.display = 'none';
    document.getElementById('sbDone').style.display = 'block';
    return;
  }
  var s = sbSentences[sbCurrent];
  var wordList = s.text.split(/\s+/);
  // 洗牌
  for(var i=wordList.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t = wordList[i]; wordList[i]=wordList[j]; wordList[j]=t;
  }
  sbWords = wordList;
  sbAnswer = [];
  document.getElementById('sbGame').style.display = 'block';
  document.getElementById('sbDone').style.display = 'none';
  document.getElementById('sbProgress').textContent = (sbCurrent+1) + ' / ' + sbSentences.length;
  document.getElementById('sbSource').textContent = s.from + ' · ' + s.zh;
  renderSentenceBuilder();
}

function renderSentenceBuilder(){
  var pool = sbWords.map(function(w, i){
    var used = sbAnswer.indexOf(i) !== -1;
    return '<span class="sb-word'+(used?' used':'')+'" onclick="addWord('+i+')">'+w+'</span>';
  }).join('');
  var built = sbAnswer.map(function(i){
    return '<span class="sb-picked">'+sbWords[i]+'</span>';
  }).join(' ');
  document.getElementById('sbPool').innerHTML = pool;
  document.getElementById('sbBuilt').innerHTML = built || '<span class="sb-hint">点击下方单词组成句子</span>';
}

function addWord(idx){
  if(sbAnswer.indexOf(idx) !== -1) return;
  sbAnswer.push(idx);
  renderSentenceBuilder();
}

function removeLastWord(){
  sbAnswer.pop();
  renderSentenceBuilder();
}

function checkSentence(){
  var built = sbAnswer.map(function(i){return sbWords[i];}).join(' ');
  var correct = sbSentences[sbCurrent].text;
  var feedback = document.getElementById('sbFeedback');
  if(built.trim() === correct.trim()){
    feedback.innerHTML = '<span class="sb-correct">✅ 正确！</span>';
    setTimeout(function(){sbCurrent++; showSentence();}, 1200);
  } else {
    feedback.innerHTML = '<span class="sb-wrong">❌ 再试试。正确答案：'+correct+'</span>';
    setTimeout(function(){sbCurrent++; showSentence();}, 2500);
  }
}

function skipSentence(){
  sbCurrent++;
  showSentence();
}

/* ===== 填空练习 ===== */
var fbCurrent = 0;
var fbItems = [];

function startFillBlank(){
  var words = getSelectedWords();
  var items = words.filter(function(w){return w.ex && w.ex.length > 10 && w.word;}).map(function(w){
    var ex = w.ex.replace(/["']/g,'');
    var blanked = ex.replace(new RegExp(w.word, 'gi'), '____');
    return {sentence:blanked, answer:w.word.toLowerCase(), zh:w.zh, from:w.from};
  });
  if(items.length < 2){
    alert('请先在「全部课程」页面勾选课程');
    return;
  }
  fbItems = items;
  fbCurrent = 0;
  showFillBlank();
}

function showFillBlank(){
  if(fbCurrent >= fbItems.length){
    document.getElementById('fbGame').style.display = 'none';
    document.getElementById('fbDone').style.display = 'block';
    return;
  }
  var item = fbItems[fbCurrent];
  document.getElementById('fbGame').style.display = 'block';
  document.getElementById('fbDone').style.display = 'none';
  document.getElementById('fbProgress').textContent = (fbCurrent+1) + ' / ' + fbItems.length;
  document.getElementById('fbSentence').textContent = item.sentence;
  document.getElementById('fbHint').textContent = '提示：' + item.zh;
  document.getElementById('fbSource').textContent = item.from;
  document.getElementById('fbInput').value = '';
  document.getElementById('fbInput').focus();
  document.getElementById('fbFeedback').innerHTML = '';
}

function checkFillBlank(){
  var input = document.getElementById('fbInput').value.trim().toLowerCase();
  var answer = fbItems[fbCurrent].answer.toLowerCase();
  var feedback = document.getElementById('fbFeedback');
  if(input === answer){
    feedback.innerHTML = '<span class="sb-correct">✅ 正确！</span>';
    setTimeout(function(){fbCurrent++; showFillBlank();}, 1200);
  } else {
    feedback.innerHTML = '<span class="sb-wrong">❌ 正确答案：'+answer+'</span>';
    setTimeout(function(){fbCurrent++; showFillBlank();}, 2500);
  }
}

function skipFillBlank(){
  fbCurrent++;
  showFillBlank();
}

/* ===== 背景音乐生成器 (Web Audio API) ===== */
var GameMusic = {
  ctx: null,
  oscillator: null,
  gainNode: null,
  timeoutId: null,
  playing: false,
  melodies: [
    // 5首欢快的8-bit旋律 [频率Hz, 持续拍数]
    [[523,1],[659,1],[784,1],[659,1],[523,1],[659,1],[784,2],[880,1],[784,1],[659,1],[523,2]],
    [[440,1],[554,1],[659,1],[554,1],[440,1],[554,1],[659,2],[740,1],[659,1],[554,1],[440,2]],
    [[349,1],[440,1],[523,1],[440,1],[349,1],[440,1],[523,2],[587,1],[523,1],[440,1],[349,2]],
    [[587,1],[740,1],[880,1],[740,1],[587,1],[740,1],[880,2],[988,1],[880,1],[740,1],[587,2]],
    [[392,1],[494,1],[587,1],[494,1],[392,1],[494,1],[587,2],[698,1],[587,1],[494,1],[392,2]]
  ],
  currentMelody: 0,
  noteIdx: 0,
  bpm: 140,

  start: function(){
    if(this.playing) return;
    try {
      this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = 0.08;
      this.gainNode.connect(this.ctx.destination);
      this.currentMelody = Math.floor(Math.random() * this.melodies.length);
      this.noteIdx = 0;
      this.playing = true;
      this.playNext();
    } catch(e){ console.warn('Music init failed:', e); }
  },

  playNext: function(){
    if(!this.playing) return;
    var melody = this.melodies[this.currentMelody];
    var note = melody[this.noteIdx % melody.length];
    var freq = note[0];
    var beats = note[1];
    var duration = (60 / this.bpm) * beats * 1000;

    var osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    var env = this.ctx.createGain();
    env.gain.setValueAtTime(0, this.ctx.currentTime);
    env.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.02);
    env.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + beats * (60/this.bpm));
    osc.connect(env);
    env.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + beats * (60/this.bpm) + 0.05);

    this.noteIdx++;
    var self = this;
    this.timeoutId = setTimeout(function(){ self.playNext(); }, duration * 0.9);
  },

  stop: function(){
    this.playing = false;
    if(this.timeoutId) clearTimeout(this.timeoutId);
    if(this.gainNode) this.gainNode.gain.value = 0;
  },

  toggle: function(){
    if(this.playing){ this.stop(); return false; }
    else { this.start(); return true; }
  }
};
