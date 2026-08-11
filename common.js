/* ===== Pola News 共享脚本 ===== */
const CATS = {
  space:      {label:"太空探索",  emoji:"🚀", grad:"linear-gradient(135deg,#1e3a8a,#0ea5e9)", color:"#0ea5e9"},
  prehistoric:{label:"史前生物",  emoji:"🦕", grad:"linear-gradient(135deg,#92400e,#f59e0b)", color:"#f59e0b"},
  animals:    {label:"动物世界",  emoji:"🐾", grad:"linear-gradient(135deg,#166534,#22c55e)", color:"#22c55e"},
  ocean:      {label:"海洋奇观",  emoji:"🌊", grad:"linear-gradient(135deg,#0e7490,#14b8a6)", color:"#14b8a6"},
  science:    {label:"科技发明",  emoji:"🧪", grad:"linear-gradient(135deg,#6d28d9,#8b5cf6)", color:"#8b5cf6"},
  earth:      {label:"地球自然",  emoji:"🌍", grad:"linear-gradient(135deg,#15803d,#84cc16)", color:"#84cc16"},
};

function fmtDate(d){
  const m=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
  const [y,mo,da]=d.split("-");
  return `${y}年${m[+mo-1]}${+da}日`;
}

function renderCard(e){
  const c = CATS[e.category];
  return `<a class="card" href="${e.url}">
    <div class="card-banner">
      <div class="bg" style="background:${c.grad}"></div>
      <span class="emoji">${e.emoji}</span>
      <span class="cat-tag" style="color:${c.color}">${c.label}</span>
    </div>
    <div class="card-body">
      <div class="card-date">📅 ${fmtDate(e.date)}</div>
      <div class="card-title">${e.title}</div>
      <div class="card-desc">${e.desc}</div>
      <div class="card-foot">
        <span class="go">开始学习 →</span>
        <span class="lvl">B1 · 英语</span>
      </div>
    </div>
  </a>`;
}

/* 按日期倒序 */
function sortedEpisodes(){
  return EPISODES.slice().sort((a,b)=> b.date.localeCompare(a.date));
}

/* 分类统计 */
function catCounts(){
  const counts = {};
  EPISODES.forEach(e => counts[e.category] = (counts[e.category]||0)+1);
  return counts;
}
