/* ===== Pola News 共享脚本 ===== */

/* 级别定义 */
const LEVELS = {
  "A1": {label:"A1", name:"幼儿启蒙", desc:"3-6岁 · 童话/动物/日常", color:"#f97316", emoji:"🧒"},
  "A2": {label:"A2", name:"小学初级", desc:"7-12岁 · 冒险/科学/文化", color:"#22c55e", emoji:"📚"},
  "B1": {label:"B1", name:"初中中级", desc:"10-12岁 · 科普新闻", color:"#0ea5e9", emoji:"🚀"},
  "B2": {label:"B2", name:"高中高级", desc:"高中生·大学生 · 文学/经济/科技", color:"#8b5cf6", emoji:"🎓"},
  "C1": {label:"C1-C2", name:"雅思托福", desc:"备考冲刺 · 学术/政治/法律", color:"#ec4899", emoji:"🏆"},
};

/* B1 内容分类 */
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

function renderCard(e, showCheckbox){
  var c = CATS[e.category] || CATS.general;
  var lv = LEVELS[e.level] || LEVELS.B1;
  var cb = showCheckbox ? '<label class="card-check" onclick="event.stopPropagation()"><input type="checkbox" class="vocab-cb" data-slug="'+e.slug+'" data-level="'+e.level+'"></label>' : '';
  return '<a class="card" href="'+e.url+'">'+
    cb+
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
  '</a>';
}

/* 按日期倒序 */
function sortedEpisodes(){
  return EPISODES.slice().sort(function(a,b){return b.date.localeCompare(a.date);});
}

/* 按级别筛选 */
function byLevel(level){
  if(level==="all") return sortedEpisodes();
  return sortedEpisodes().filter(function(e){return e.level===level;});
}

/* 分类统计 */
function catCounts(level){
  var list = level ? byLevel(level) : EPISODES;
  var counts={};
  list.forEach(function(e){counts[e.category]=(counts[e.category]||0)+1;});
  return counts;
}

/* 级别统计 */
function levelCounts(){
  var counts={};
  EPISODES.forEach(function(e){counts[e.level]=(counts[e.level]||0)+1;});
  return counts;
}

/* ===== 单词翻卡复习 ===== */
var reviewWords = [];
var reviewIdx = 0;
var reviewShuffled = false;

function collectReviewWords(){
  reviewWords = [];
  document.querySelectorAll('.vocab-cb:checked').forEach(function(cb){
    var slug = cb.dataset.slug;
    var level = cb.dataset.level;
    var ep = EPISODES.find(function(e){return e.slug===slug && e.level===level;});
    if(ep && ep.vocab){
      ep.vocab.forEach(function(v){
        reviewWords.push({word:v.word, zh:v.zh, ex:v.ex, from:ep.title});
      });
    }
  });
  return reviewWords.length;
}

function openReview(){
  var n = collectReviewWords();
  if(n===0){
    alert('请先选择至少一节课（勾选卡片左上角的复选框）');
    return;
  }
  reviewIdx = 0;
  reviewShuffled = false;
  document.getElementById('reviewModal').classList.add('open');
  showReviewCard();
}

function closeReview(){
  document.getElementById('reviewModal').classList.remove('open');
}

function showReviewCard(){
  if(reviewIdx >= reviewWords.length) reviewIdx = 0;
  if(reviewIdx < 0) reviewIdx = reviewWords.length - 1;
  var w = reviewWords[reviewIdx];
  document.getElementById('reviewCount').textContent = (reviewIdx+1) + ' / ' + reviewWords.length;
  document.getElementById('reviewWord').textContent = w.word;
  document.getElementById('reviewZh').textContent = w.zh;
  document.getElementById('reviewEx').textContent = w.ex || '';
  document.getElementById('reviewFrom').textContent = '来自：' + w.from;
  document.getElementById('reviewCard').classList.remove('flipped');
}

function flipCard(){
  document.getElementById('reviewCard').classList.toggle('flipped');
}

function nextCard(){
  reviewIdx++;
  showReviewCard();
}

function prevCard(){
  reviewIdx--;
  showReviewCard();
}

function shuffleCards(){
  for(var i=reviewWords.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t = reviewWords[i]; reviewWords[i]=reviewWords[j]; reviewWords[j]=t;
  }
  reviewIdx = 0;
  reviewShuffled = true;
  showReviewCard();
}

function updateReviewButton(){
  var checked = document.querySelectorAll('.vocab-cb:checked').length;
  var btn = document.getElementById('reviewFloat');
  if(checked > 0){
    btn.classList.add('show');
    btn.querySelector('.review-count').textContent = checked;
  } else {
    btn.classList.remove('show');
  }
}
