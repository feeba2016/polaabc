/* ===== TEM-4 词汇漫画 · 数据层 =====
 * 架构：8 大类 × 40 主题 × 每主题多 Part × 每 Part 6 词
 * 状态：F1 已上线（5 Part / 30 词），其余主题 status:"soon" 待生产
 * 新主题上线流程：把 parts 数组填上 + status 改 "live" 即可，页面自动渲染
 */

const TEM4_META = {
  brand: "小叶学姐教英语",
  mascot: "assets/tem4/mascot.png",
  tagline: "看漫画 · 记单词 · 过专四",
  exam: "TEM-4",
  planThemes: 34,
  planWords: 2000,
  planPages: 334,
  intro: "小叶学姐是一只戴学士帽的黑叶猴。她把英语专业四级（TEM-4）大纲核心词汇画成了场景漫画——每一页 6 个目标词嵌进一句连贯的旅行故事，看完漫画顺便把单词记住。"
};

/* 八大主题分类（与 8 姿态一一对应） */
const TEM4_CATS = {
  A: {label:"学习与校园", emoji:"🏫", color:"#0ea5e9", pose:"assets/tem4/poses/xiaoye_pose_A_campus.png"},
  B: {label:"工作与职业", emoji:"💼", color:"#8b5cf6", pose:"assets/tem4/poses/xiaoye_pose_B_career.png"},
  C: {label:"日常生活",   emoji:"🏠", color:"#22c55e", pose:"assets/tem4/poses/xiaoye_pose_C_daily.png"},
  D: {label:"社交与情感", emoji:"💬", color:"#ec4899", pose:"assets/tem4/poses/xiaoye_pose_D_social.png"},
  E: {label:"科学与探索", emoji:"🔬", color:"#f59e0b", pose:"assets/tem4/poses/xiaoye_pose_E_science.png"},
  F: {label:"旅行与地理", emoji:"✈️", color:"#14b8a6", pose:"assets/tem4/poses/xiaoye_pose_F_travel.png"},
  G: {label:"兴趣与文化", emoji:"🎨", color:"#f97316", pose:"assets/tem4/poses/xiaoye_pose_G_hobby.png"},
  H: {label:"健康与心理", emoji:"🏥", color:"#64748b", pose:"assets/tem4/poses/xiaoye_pose_H_health.png"},
};

/*
 * 主题清单（40 个全量声明）
 * status: "live" 已上线 | "soon" 敬请期待
 * words 字段：live = 实际词数；soon = 规划词数（按大纲估）
 * part 数据结构：{id, slug, title, shape, poster, sentence, sentenceCn, words:[{word, ipa, pos, zh, forms}]}
 *   - forms: 该词在本句中的词形变化（用于高亮），缺省为原形
 */
const TEM4_THEMES = [
  /* ===== A 学习与校园 ===== */
  {id:"A1", cat:"A", zh:"校园生活",   name:"Campus Life",       status:"soon", words:100, desc:"教室、宿舍、食堂、操场"},
  {id:"A2", cat:"A", zh:"学术阅读",   name:"Academic Reading",  status:"soon", words:80,  desc:"图书馆、书桌、笔记"},
  {id:"A3", cat:"A", zh:"考试与备考", name:"Exam & Study",      status:"soon", words:90,  desc:"考场、复习、笔记"},
  {id:"A4", cat:"A", zh:"图书馆与书籍", name:"Library & Books", status:"soon", words:70,  desc:"书架、借阅、阅读"},
  {id:"A5", cat:"A", zh:"学科与课程", name:"Class Subjects",     status:"soon", words:100, desc:"数学/历史/科学课堂"},
  {id:"A6", cat:"A", zh:"毕业季",     name:"Graduation",        status:"soon", words:60,  desc:"学士服、典礼、合影"},
  /* ===== B 工作与职业 ===== */
  {id:"B1", cat:"B", zh:"职场日常",   name:"Office Daily",      status:"soon", words:90,  desc:"办公室、会议、邮件"},
  {id:"B2", cat:"B", zh:"求职面试",   name:"Job Interview",     status:"soon", words:80,  desc:"面试间、简历、问答"},
  {id:"B3", cat:"B", zh:"商务会议",   name:"Business Meeting",  status:"soon", words:70,  desc:"投影、白板、谈判"},
  {id:"B4", cat:"B", zh:"职业规划",   name:"Career Planning",   status:"soon", words:60,  desc:"简历、目标、白板"},
  {id:"B5", cat:"B", zh:"办公工具",   name:"Workplace Tools",   status:"soon", words:60,  desc:"电脑、电话、打印机"},
  /* ===== C 日常生活 ===== */
  {id:"C1", cat:"C", zh:"家庭与家居", name:"Family & Home",     status:"soon", words:100, desc:"客厅、卧室、厨房"},
  {id:"C2", cat:"C", zh:"饮食与餐厅", name:"Food & Dining",     status:"soon", words:90,  desc:"餐桌、菜单、烹饪"},
  {id:"C3", cat:"C", zh:"购物与消费", name:"Shopping",          status:"soon", words:80,  desc:"商场、付款、橱窗"},
  {id:"C4", cat:"C", zh:"日常作息",   name:"Daily Routine",     status:"soon", words:70,  desc:"起床、通勤、睡前"},
  {id:"C5", cat:"C", zh:"服饰与时尚", name:"Clothing & Fashion", status:"soon", words:60,  desc:"试衣、衣柜、搭配"},
  /* ===== D 社交与情感 ===== */
  {id:"D1", cat:"D", zh:"友情与爱情", name:"Friendship & Love", status:"soon", words:100, desc:"咖啡馆、牵手、对话"},
  {id:"D2", cat:"D", zh:"情绪表达",   name:"Emotions",          status:"soon", words:80,  desc:"开心、悲伤、惊讶"},
  {id:"D3", cat:"D", zh:"沟通与对话", name:"Communication",     status:"soon", words:70,  desc:"电话、视频、写作"},
  {id:"D4", cat:"D", zh:"社交礼仪",   name:"Social Etiquette",  status:"soon", words:60,  desc:"拜访、致谢、道歉"},
  /* ===== E 科学与探索 ===== */
  {id:"E1", cat:"E", zh:"太空探索",   name:"Space Exploration", status:"soon", words:80,  desc:"火箭、星球、宇航员"},
  {id:"E2", cat:"E", zh:"自然探索",   name:"Nature Discovery",  status:"soon", words:90,  desc:"森林、动物、植物"},
  {id:"E3", cat:"E", zh:"实验室与科学", name:"Lab & Science",   status:"soon", words:70,  desc:"试管、显微镜、实验"},
  {id:"E4", cat:"E", zh:"科技与人工智能", name:"Tech & AI",     status:"soon", words:90,  desc:"电脑、手机、机器人"},
  /* ===== F 旅行与地理 ===== */
  {
    id:"F1", cat:"F", zh:"旅行与观光", name:"Travel & Tourism", status:"live",
    date:"2026-09-07", words:30, desc:"一次完整的旅行：出发、徒步、巡游、住宿、纪念",
    color:"#4A90D9",
    parts:[
      {
        id:"F1-P1", slug:"tem4-F1-P1", title:"出发与抵达", shape:"拱门",
        poster:"assets/tem4/posters/F1_P1.png",
        sentence:"After we depart, a quick transfer transports us to the mountains: we ascend by cable car, navigate the fog, and descend into the green valley.",
        sentenceCn:"我们启程后迅速换乘，被送往群山——乘缆车登高、穿雾前行，最终下抵翠绿的山谷。",
        scene:"小叶学姐背着行囊站在山区小火车站台，缆车正升向云端的群山。",
        words:[
          {word:"depart",    ipa:"/dɪˈpɑːt/",     pos:"vi.", zh:"启程，离开",        forms:["depart"]},
          {word:"transfer",  ipa:"/trænsˈfɜː/",   pos:"v.",  zh:"换乘；转移",        forms:["transfer"]},
          {word:"transport", ipa:"/trænsˈpɔːt/",  pos:"vt.", zh:"运输，输送",        forms:["transports"]},
          {word:"ascend",    ipa:"/əˈsend/",      pos:"v.",  zh:"登高，上升",        forms:["ascend"]},
          {word:"navigate",  ipa:"/ˈnævɪɡeɪt/",   pos:"v.",  zh:"导航；航行",        forms:["navigate"]},
          {word:"descend",   ipa:"/dɪˈsend/",     pos:"v.",  zh:"下降，落下",        forms:["descend"]}
        ]
      },
      {
        id:"F1-P2", slug:"tem4-F1-P2", title:"徒步冒险", shape:"叶形",
        poster:"assets/tem4/posters/F1_P2.png",
        sentence:"Our weekend adventure began with a long hike: we tramped through the mud, wandered off the main trail, and every risky venture turned worthwhile as we loved to explore the unknown.",
        sentenceCn:"我们的周末冒险从一次长途徒步开始：踏过泥泞，偏离主路漫步，而每一次大胆的尝试都物有所值——因为我们热爱探索未知。",
        scene:"小叶学姐穿登山靴、拄登山杖，在森林小径上展开地图辨认路线。",
        words:[
          {word:"adventure", ipa:"/ədˈventʃə/",   pos:"n.",  zh:"冒险，奇遇",        forms:["adventure"]},
          {word:"hike",      ipa:"/haɪk/",        pos:"n./v.", zh:"远足，徒步旅行",  forms:["hike"]},
          {word:"tramp",     ipa:"/træmp/",       pos:"v.",  zh:"跋涉；长途徒步",    forms:["tramped"]},
          {word:"wander",    ipa:"/ˈwɒndə/",      pos:"v.",  zh:"漫步，闲逛",        forms:["wandered"]},
          {word:"venture",   ipa:"/ˈventʃə/",     pos:"n./v.", zh:"冒险（尝试）",   forms:["venture"]},
          {word:"explore",   ipa:"/ɪkˈsplɔː/",     pos:"v.",  zh:"探索，探险",        forms:["explore"]}
        ]
      },
      {
        id:"F1-P3", slug:"tem4-F1-P3", title:"山水巡游", shape:"椭圆",
        poster:"assets/tem4/posters/F1_P3.png",
        sentence:"From the summit of the mountain we admired the snow-capped peaks; then we cruised along the coast, watching white clouds drift above the wonderful prospect of the endless blue sea.",
        sentenceCn:"从山巅之上，我们饱览白雪皑皑的群峰；随后沿海岸巡游，看白云漂过无垠碧海的壮丽景色。",
        scene:"小叶学姐站在山顶观景台，远眺雪峰与云海，山脚海面上有一艘小游轮。",
        words:[
          {word:"summit",   ipa:"/ˈsʌmɪt/",     pos:"n.",  zh:"山顶，巅峰",        forms:["summit"]},
          {word:"mount",    ipa:"/maʊnt/",      pos:"n./v.", zh:"山（峰）；登上",   forms:["mountain"]},
          {word:"peak",     ipa:"/piːk/",       pos:"n.",  zh:"山顶，最高点",      forms:["peaks"]},
          {word:"cruise",   ipa:"/kruːz/",      pos:"v.",  zh:"巡航，漫游",        forms:["cruised"]},
          {word:"drift",    ipa:"/drɪft/",      pos:"v.",  zh:"漂流，漂浮",        forms:["drift"]},
          {word:"prospect", ipa:"/ˈprɒspekt/",  pos:"n.",  zh:"景色；前景",        forms:["prospect"]}
        ]
      },
      {
        id:"F1-P4", slug:"tem4-F1-P4", title:"住宿安排", shape:"超圆角",
        poster:"assets/tem4/posters/F1_P4.png",
        sentence:"The seaside hotel can accommodate five guests; we reserved two rooms, consulted the tariff for the best price, and found cozy lodging near a quiet holiday resort.",
        sentenceCn:"这家海滨酒店能容纳五位客人；我们订了两个房间，查阅价目表找最优价格，在静谧的度假村旁找到了舒适的住处。",
        scene:"小叶学姐在温馨的海滨酒店前台办理入住，窗外是棕榈树和沙滩。",
        words:[
          {word:"accommodate", ipa:"/əˈkɒmədeɪt/", pos:"vt.", zh:"容纳；提供住宿",  forms:["accommodate"]},
          {word:"reserve",    ipa:"/rɪˈzɜːv/",    pos:"vt.", zh:"预订；保留",      forms:["reserved"]},
          {word:"tariff",     ipa:"/ˈtærɪf/",     pos:"n.",  zh:"价目表；关税",    forms:["tariff"]},
          {word:"consult",    ipa:"/kənˈsʌlt/",   pos:"v.",  zh:"查阅；商议",      forms:["consulted"]},
          {word:"lodging",    ipa:"/ˈlɒdʒɪŋ/",    pos:"n.",  zh:"住所；出租的房间", forms:["lodging"]},
          {word:"resort",     ipa:"/rɪˈzɔːt/",    pos:"n.",  zh:"度假胜地",        forms:["resort"]}
        ]
      },
      {
        id:"F1-P5", slug:"tem4-F1-P5", title:"旅途体验", shape:"波浪",
        poster:"assets/tem4/posters/F1_P5.png",
        sentence:"At leisure we visited an exhibit that would attract anyone: we inspected local crafts, bought gifts to commemorate the trip, and even dreamed of emigrating to this lovely island someday.",
        sentenceCn:"闲暇之余，我们参观了一场吸引所有人的展览：细细赏看当地手工艺品，买下礼物纪念这趟旅程，甚至梦想着有朝一日移居到这座可爱的岛屿。",
        scene:"小叶学姐在海岛手工艺展览馆里，捧着刚买到的纪念品礼盒。",
        words:[
          {word:"leisure",     ipa:"/ˈleʒə/",        pos:"n.",  zh:"空闲，悠闲",     forms:["leisure"]},
          {word:"attract",     ipa:"/əˈtrækt/",      pos:"v.",  zh:"吸引",           forms:["attract"]},
          {word:"exhibit",     ipa:"/ɪɡˈzɪbɪt/",     pos:"n./vt.", zh:"展览；展出", forms:["exhibit"]},
          {word:"inspect",     ipa:"/ɪnˈspekt/",     pos:"v.",  zh:"参观；检查",     forms:["inspected"]},
          {word:"commemorate", ipa:"/kəˈmeməreɪt/",  pos:"vt.", zh:"纪念",           forms:["commemorate"]},
          {word:"emigrate",    ipa:"/ˈemɪɡreɪt/",    pos:"v.",  zh:"移居国外",       forms:["emigrating"]}
        ]
      }
    ]
  },
  {id:"F2", cat:"F", zh:"城乡对比",   name:"City vs Country",  status:"soon", words:70,  desc:"高楼、田野、街道"},
  {id:"F3", cat:"F", zh:"地理与地貌", name:"Geography",        status:"soon", words:60,  desc:"山海、河流、气候"},
  /* ===== G 兴趣与文化 ===== */
  {id:"G1", cat:"G", zh:"音乐与艺术", name:"Music & Arts",     status:"soon", words:90,  desc:"乐器、画室、展览"},
  {id:"G2", cat:"G", zh:"影视与电视", name:"Movies & TV",      status:"soon", words:80,  desc:"影院、追剧、导演"},
  {id:"G3", cat:"G", zh:"运动与健身", name:"Sports & Fitness", status:"soon", words:90,  desc:"球场、跑步、瑜伽"},
  {id:"G4", cat:"G", zh:"节日与庆典", name:"Festival & Celebration", status:"soon", words:70, desc:"圣诞、新年、生日"},
  /* ===== H 健康与心理 ===== */
  {id:"H1", cat:"H", zh:"身体与健康", name:"Body & Health",    status:"soon", words:100, desc:"医院、运动、饮食"},
  {id:"H2", cat:"H", zh:"看医生",     name:"Hospital Visit",  status:"soon", words:70,  desc:"诊室、药方、检查"},
  {id:"H3", cat:"H", zh:"心理与情绪", name:"Psychology",       status:"soon", words:70,  desc:"大脑、对话、冥想"}
];

/* ===== 工具函数 ===== */
function tem4GetTheme(id){
  return TEM4_THEMES.find(function(t){return t.id === id;}) || null;
}
function tem4LiveThemes(){
  return TEM4_THEMES.filter(function(t){return t.status === "live";});
}
function tem4AllParts(){
  var parts = [];
  tem4LiveThemes().forEach(function(t){
    (t.parts || []).forEach(function(p){ p._theme = t; parts.push(p); });
  });
  return parts;
}
function tem4FindPart(slug){
  return tem4AllParts().find(function(p){return p.slug === slug;}) || null;
}
function tem4LiveWordCount(){
  return tem4AllParts().reduce(function(n,p){return n + p.words.length;}, 0);
}
/* 例句高亮渲染：把 forms 词形加 <b class="hl"> */
function tem4HighlightSentence(part){
  var esc = part.sentence.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  part.words.forEach(function(w){
    var forms = w.forms && w.forms.length ? w.forms : [w.word];
    forms.forEach(function(f){
      var re = new RegExp("\\b(" + f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")\\b", "g");
      esc = esc.replace(re, '<b class="hl">$1</b>');
    });
  });
  return esc;
}
