/* ===== TEM-4 词汇漫画 · 数据层 =====
 * 架构：8 大类 × 40 主题 × 每主题多 Part × 每 Part 6 词
 * 状态：A1/F1/F2/F3/G1 已上线（5 主题 / 25 Part / 150 词），其余主题 status:"soon" 待生产
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
  /* ===== A 校园生活 ===== */
  {
    id:"A1", cat:"A", zh:"校园生活", name:"Campus Life", status:"live",
    date:"2026-09-08", words:30, desc:"一天的校园节奏：晨读课堂、自习笔记、专注分心、考试周、师长与毕业",
    color:"#4A90D9",
    parts:[
      {
        id:"A1-P1", slug:"tem4-A1-P1", title:"晨光课堂", shape:"拱门",
        poster:"assets/tem4/posters/A1_P1.png",
        sentence:"Every morning we attend the first class: our professor instructs us in grammar, educates us with stories, and hopes we comprehend, grasp and memorize each rule.",
        sentenceCn:"每天早晨我们出席第一堂课：教授为我们讲授语法、用故事教导我们，盼我们领会、掌握并牢记每条规则。",
        scene:"小叶学姐坐在洒满晨光的教室第一排，认真听讲并在笔记本上做记录。",
        words:[
          {word:"attend",     ipa:"/əˈtend/",       pos:"v.",  zh:"出席；注意听",        forms:["attend"]},
          {word:"instruct",   ipa:"/ɪnˈstrʌkt/",    pos:"vt.", zh:"教育，指导，讲授",     forms:["instructs"]},
          {word:"educate",    ipa:"/ˈedjuːkeɪt/",   pos:"vt.", zh:"教育，培养，训练",     forms:["educates"]},
          {word:"comprehend", ipa:"/ˌkɒmpriˈhend/", pos:"v.",  zh:"了解，领会",          forms:["comprehend"]},
          {word:"grasp",      ipa:"/ɡrɑːsp/",       pos:"vt.", zh:"抓住；掌握，领会",     forms:["grasp"]},
          {word:"memorize",   ipa:"/ˈmeməraɪz/",    pos:"vt.", zh:"记住，熟记",          forms:["memorize"]}
        ]
      },
      {
        id:"A1-P2", slug:"tem4-A1-P2", title:"自习笔记", shape:"叶形",
        poster:"assets/tem4/posters/A1_P2.png",
        sentence:"In the library I draft an outline, scribble notes, compile materials, quote a famous scholar, then revise and review my essay before the deadline.",
        sentenceCn:"在图书馆里，我先拟好提纲、记下笔记、汇编资料、引用一位名家，再在截止日前修订并复习我的文章。",
        scene:"小叶学姐在图书馆的木桌前摊开草稿与资料卡片，埋头整理笔记。",
        words:[
          {word:"draft",    ipa:"/drɑːft/",    pos:"n./vt.", zh:"草稿；起草",         forms:["draft"]},
          {word:"scribble", ipa:"/ˈskrɪbl/",   pos:"v.",  zh:"潦草地书写；乱涂",      forms:["scribble"]},
          {word:"compile",  ipa:"/kəmˈpaɪl/",  pos:"v.",  zh:"编辑，汇编，编纂",      forms:["compile"]},
          {word:"quote",    ipa:"/kwəʊt/",     pos:"v.",  zh:"引用，引证",           forms:["quote"]},
          {word:"revise",   ipa:"/rɪˈvaɪz/",   pos:"v.",  zh:"修订；温习",           forms:["revise"]},
          {word:"review",   ipa:"/rɪˈvjuː/",   pos:"v.",  zh:"复习，回顾 n. 评论",   forms:["review"]}
        ]
      },
      {
        id:"A1-P3", slug:"tem4-A1-P3", title:"专注与分心", shape:"椭圆",
        poster:"assets/tem4/posters/A1_P3.png",
        sentence:"To concentrate, I focus on one chapter at a time and never let my phone distract me; a hard question may confuse or perplex me, then a walk helps me absorb new ideas again.",
        sentenceCn:"为了专注，我一次只钻研一个章节，绝不让手机分心；难题或许令我困惑难解，散个步便能重新专注、吸收新知。",
        scene:"小叶学姐在书桌前专心读书，手机收进一旁的小盒子里。",
        words:[
          {word:"concentrate", ipa:"/ˈkɒnsəntreɪt/", pos:"v.",  zh:"聚精会神，集中精神",  forms:["concentrate"]},
          {word:"focus",       ipa:"/ˈfəʊkəs/",      pos:"n./v.", zh:"焦点；聚焦，集中",  forms:["focus"]},
          {word:"distract",    ipa:"/dɪsˈtrækt/",    pos:"vt.", zh:"转移（注意力），使分心", forms:["distract"]},
          {word:"confuse",     ipa:"/kənˈfjuːz/",    pos:"vt.", zh:"混淆，弄错；使糊涂",   forms:["confuse"]},
          {word:"perplex",     ipa:"/pəˈpleks/",     pos:"vt.", zh:"使困惑，难住",        forms:["perplex"]},
          {word:"absorb",      ipa:"/əbˈsɔːb/",      pos:"vt.", zh:"吸收；使专心",        forms:["absorb"]}
        ]
      },
      {
        id:"A1-P4", slug:"tem4-A1-P4", title:"考试周", shape:"超圆角",
        poster:"assets/tem4/posters/A1_P4.png",
        sentence:"In exam week every candidate is examined in three papers: we mark key points, never omit a definition, and hope our effort earns credit and is awarded a prize.",
        sentenceCn:"考试周里每位应试者要考三门：我们标出要点、不遗漏任何定义，盼努力换来学分、赢得奖励。",
        scene:"小叶学姐在安静的考场里认真答题，窗外是初夏的绿树。",
        words:[
          {word:"examine",   ipa:"/ɪɡˈzæmɪn/",   pos:"v.",  zh:"对…进行考试；检查",   forms:["examined"]},
          {word:"candidate", ipa:"/ˈkændɪdət/",  pos:"n.",  zh:"应试者，应考者；候选人", forms:["candidate"]},
          {word:"mark",      ipa:"/mɑːk/",       pos:"n./v.", zh:"分数；标记，给予分数", forms:["mark"]},
          {word:"omit",      ipa:"/əʊˈmɪt/",     pos:"vt.", zh:"省略，删除；遗漏",     forms:["omit"]},
          {word:"credit",    ipa:"/ˈkredɪt/",    pos:"n.",  zh:"学分；信用，荣誉",     forms:["credit"]},
          {word:"award",     ipa:"/əˈwɔːd/",     pos:"vt.", zh:"授予，给予奖励 n. 奖品", forms:["awarded"]}
        ]
      },
      {
        id:"A1-P5", slug:"tem4-A1-P5", title:"师长与毕业", shape:"波浪",
        poster:"assets/tem4/posters/A1_P5.png",
        sentence:"At the ceremony our principal praises the diligent seniors: guided by the whole faculty and strict discipline, they will graduate, each defending a thesis.",
        sentenceCn:"典礼上校长表扬勤奋的毕业生：在全体教师与严格纪律的引领下，他们即将毕业，各自为自己的论文答辩。",
        scene:"小叶学姐戴着学士帽站在礼堂前的樱花树下，师长们在身后鼓掌祝贺。",
        words:[
          {word:"faculty",   ipa:"/ˈfækəlti/",   pos:"n.",  zh:"全体教师；才能；学院",  forms:["faculty"]},
          {word:"principal", ipa:"/ˈprɪnsəpəl/", pos:"n.",  zh:"校长 adj. 主要的",     forms:["principal"]},
          {word:"graduate",  ipa:"/ˈɡrædʒueɪt/", pos:"v.",  zh:"毕业；取得资格",       forms:["graduate"]},
          {word:"discipline",ipa:"/ˈdɪsɪplɪn/",  pos:"n.",  zh:"纪律；学科；训练",     forms:["discipline"]},
          {word:"thesis",    ipa:"/ˈθiːsɪs/",    pos:"n.",  zh:"学位论文；论点",       forms:["thesis"]},
          {word:"diligent",  ipa:"/ˈdɪlɪdʒənt/", pos:"adj.", zh:"勤勉的，勤奋的",       forms:["diligent"]}
        ]
      }
    ]
  },
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
  {
    id:"F2", cat:"F", zh:"城乡对比", name:"City vs Country", status:"live",
    date:"2026-09-07", words:30, desc:"都市的喧嚣与田园的安宁：通勤、农耕、污染、变迁、安居",
    color:"#4A90D9",
    parts:[
      {
        id:"F2-P1", slug:"tem4-F2-P1", title:"都市脉搏", shape:"拱门",
        poster:"assets/tem4/posters/F2_P1.png",
        sentence:"Block after block, the morning hustle never stops downtown: crowds of civil servants commute by subway, and the new transit facility has finally eased the congestion.",
        sentenceCn:"市中心，清晨的奔忙涌动在每一个街区：大批城市公务员乘地铁通勤，新的交通设施终于缓解了拥堵。",
        scene:"小叶学姐站在早高峰的路口，人流与地铁通勤大军从她身旁涌过。",
        words:[
          {word:"block",      ipa:"/blɒk/",        pos:"n.",  zh:"街区；大块 v. 阻塞", forms:["Block","block"]},
          {word:"hustle",     ipa:"/ˈhʌsl/",       pos:"n.",  zh:"奔忙，忙碌 v. 催促", forms:["hustle"]},
          {word:"civil",      ipa:"/ˈsɪvl/",       pos:"adj.", zh:"城市的；公民的",    forms:["civil"]},
          {word:"commute",    ipa:"/kəˈmjuːt/",    pos:"v.",  zh:"定时往返两地；通勤", forms:["commute"]},
          {word:"facility",   ipa:"/fəˈsɪləti/",   pos:"n.",  zh:"[pl.] 设备，设施",  forms:["facility"]},
          {word:"congestion", ipa:"/kənˈdʒestʃən/", pos:"n.", zh:"阻塞，拥挤",        forms:["congestion"]}
        ]
      },
      {
        id:"F2-P2", slug:"tem4-F2-P2", title:"田园牧歌", shape:"叶形",
        poster:"assets/tem4/posters/F2_P2.png",
        sentence:"Fertile fields cover the valley: farmers cultivate golden wheat, breed hardy sheep, watch the flock graze on the slopes, pick tender sprouts after rain, and enjoy a rich autumn yield.",
        sentenceCn:"肥沃的田野铺满山谷：农人耕种金黄的麦子、饲养健壮的羊群，看羊儿在坡上吃草，雨后采摘嫩芽，享受丰收的秋天。",
        scene:"小叶学姐走在金色麦田间的田埂上，山坡上羊群正在吃草。",
        words:[
          {word:"fertile",   ipa:"/ˈfɜːtaɪl/",    pos:"adj.", zh:"肥沃的，富饶的",           forms:["Fertile"]},
          {word:"cultivate", ipa:"/ˈkʌltɪveɪt/",  pos:"v.",  zh:"耕作；栽培；培养",          forms:["cultivate"]},
          {word:"breed",     ipa:"/briːd/",       pos:"v.",  zh:"饲养；繁殖 n. 品种",        forms:["breed"]},
          {word:"flock",     ipa:"/flɒk/",        pos:"n.",  zh:"羊群；（禽畜的）群 v. 聚集", forms:["flock"]},
          {word:"sprout",    ipa:"/spraʊt/",      pos:"v.",  zh:"发芽 n. 新芽，籽苗",        forms:["sprouts"]},
          {word:"yield",     ipa:"/jiːld/",       pos:"v.",  zh:"结出（果实）；产出 n. 产量", forms:["yield"]}
        ]
      },
      {
        id:"F2-P3", slug:"tem4-F2-P3", title:"喧嚣与宁静", shape:"椭圆",
        poster:"assets/tem4/posters/F2_P3.png",
        sentence:"Contaminated by traffic fumes, the city feels heavy: waste is dumped at the roadside and litter lies along the streets; the serene countryside, by contrast, soothes the tired heart.",
        sentenceCn:"被尾气污染的城市空气令人窒闷；垃圾倒在路边、废弃物散落街头——相比之下，宁静的乡村抚慰疲惫的心灵。",
        scene:"画面一分为二：左侧车流尾气笼罩的街道，右侧小叶学姐在宁静乡野小憩。",
        words:[
          {word:"contaminate", ipa:"/kənˈtæmɪneɪt/", pos:"vt.", zh:"污染，玷污",            forms:["Contaminated"]},
          {word:"fume",        ipa:"/fjuːm/",        pos:"n.",  zh:"[pl.] （浓烈难闻的）烟，气", forms:["fumes"]},
          {word:"dump",        ipa:"/dʌmp/",         pos:"v.",  zh:"倾倒，倾卸；丢弃",       forms:["dumped"]},
          {word:"litter",      ipa:"/ˈlɪtə/",        pos:"n.",  zh:"乱丢的废弃物 v. 乱丢",   forms:["litter"]},
          {word:"serene",      ipa:"/səˈriːn/",      pos:"adj.", zh:"安详的，平静的，宁谧的", forms:["serene"]},
          {word:"soothe",      ipa:"/suːð/",         pos:"v.",  zh:"抚慰；使（痛苦）减轻",   forms:["soothes"]}
        ]
      },
      {
        id:"F2-P4", slug:"tem4-F2-P4", title:"城乡变迁", shape:"超圆角",
        poster:"assets/tem4/posters/F2_P4.png",
        sentence:"Booming all over, the town renews itself: shabby old houses are demolished, historic streets renovated, new apartments erected along the avenues, and the once-poor village grows prosperous and affluent.",
        sentenceCn:"全镇一片繁荣：破旧的老屋被拆除，历史街道被整修，新公寓沿街竖起，曾经贫困的村庄变得繁荣富裕。",
        scene:"小叶学姐站在塔吊与脚手架之间，见证老屋拆除、新楼拔地而起。",
        words:[
          {word:"boom",       ipa:"/buːm/",        pos:"v.",  zh:"迅速发展，繁荣 n. 激增", forms:["Booming"]},
          {word:"demolish",   ipa:"/dɪˈmɒlɪʃ/",    pos:"vt.", zh:"拆毁；废除",             forms:["demolished"]},
          {word:"renovate",   ipa:"/ˈrenəveɪt/",   pos:"vt.", zh:"修复，整修；革新",        forms:["renovated"]},
          {word:"erect",      ipa:"/ɪˈrekt/",      pos:"vt.", zh:"建造；竖立 adj. 直立的",  forms:["erected"]},
          {word:"prosperous", ipa:"/ˈprɒspərəs/",  pos:"adj.", zh:"繁荣的，昌盛的",         forms:["prosperous"]},
          {word:"affluent",   ipa:"/ˈæfluənt/",    pos:"adj.", zh:"富裕的，富有的",         forms:["affluent"]}
        ]
      },
      {
        id:"F2-P5", slug:"tem4-F2-P5", title:"安居乐业", shape:"波浪",
        poster:"assets/tem4/posters/F2_P5.png",
        sentence:"More families now dwell in the countryside: every household keeps a cosy garden, villagers stroll along the river after supper, people live in harmony with nature, and small shops flourish.",
        sentenceCn:"越来越多家庭迁居乡村：家家户户打理着温馨的花园，村民晚饭后在河边漫步，人与自然和谐相处，小店处处兴旺。",
        scene:"小叶学姐在乡村小河边悠闲漫步，身后是花园民宅与兴旺的小店。",
        words:[
          {word:"dwell",     ipa:"/dwel/",        pos:"v.",  zh:"居住，生活于，栖息", forms:["dwell"]},
          {word:"household", ipa:"/ˈhaʊshəʊld/",  pos:"n.",  zh:"家庭，户 adj. 家庭的", forms:["household"]},
          {word:"cosy",      ipa:"/ˈkəʊzi/",      pos:"adj.", zh:"温暖舒适的，安逸的", forms:["cosy"]},
          {word:"stroll",    ipa:"/strəʊl/",      pos:"n./v.", zh:"漫步，闲逛，遨游", forms:["stroll"]},
          {word:"harmony",   ipa:"/ˈhɑːməni/",    pos:"n.",  zh:"调和，和谐；和睦",   forms:["harmony"]},
          {word:"flourish",  ipa:"/ˈflʌrɪʃ/",     pos:"v.",  zh:"茂盛；繁荣，兴旺",   forms:["flourish"]}
        ]
      }
    ]
  },
  {
    id:"F3", cat:"F", zh:"地理奇观", name:"Geography", status:"live",
    date:"2026-09-07", words:30, desc:"山峡、大漠、江河、四季与星空：一部地理词汇小百科",
    color:"#4A90D9",
    parts:[
      {
        id:"F3-P1", slug:"tem4-F3-P1", title:"高山峡谷", shape:"拱门",
        poster:"assets/tem4/posters/F3_P1.png",
        sentence:"Abrupt cliffs rise along the mountain range: a stone bridge spans the deep gorge, mist gathers in every hollow below, and eagles soar over the brink into the clouds.",
        sentenceCn:"陡峭的悬崖沿山脉耸立：一座石桥横跨深谷，雾气在下方每一处凹陷中聚拢，雄鹰越过崖边翱翔入云。",
        scene:"小叶学姐站在峡谷观景台，石桥横跨深谷，雄鹰在崖边盘旋。",
        words:[
          {word:"abrupt", ipa:"/əˈbrʌpt/",  pos:"adj.", zh:"陡峭的；突然的",          forms:["Abrupt"]},
          {word:"range",  ipa:"/reɪndʒ/",   pos:"n.",  zh:"山脉；范围 v. 变化",       forms:["range"]},
          {word:"span",   ipa:"/spæn/",     pos:"v.",  zh:"横跨，架桥于 n. 跨度",     forms:["spans"]},
          {word:"hollow", ipa:"/ˈhɒləʊ/",   pos:"adj.", zh:"中空的；凹陷的",          forms:["hollow"]},
          {word:"soar",   ipa:"/sɔː/",      pos:"vi.", zh:"高飞，翱翔；骤升",         forms:["soar"]},
          {word:"brink",  ipa:"/brɪŋk/",    pos:"n.",  zh:"（峭壁等的）边沿，边缘",   forms:["brink"]}
        ]
      },
      {
        id:"F3-P2", slug:"tem4-F3-P2", title:"大漠孤烟", shape:"叶形",
        poster:"assets/tem4/posters/F3_P2.png",
        sentence:"Across the arid desert the ground lies barren and sterile, painfully desolate beneath a bleak sky, while thin cattle starve beside the dry well.",
        sentenceCn:"干旱的沙丘绵延在贫瘠的荒原上：不长草木的土地显得荒凉，天空阴沉，牛群在枯井旁挨饿。",
        scene:"小叶学姐披着斗篷走在连绵沙丘间，枯井旁的牛群无精打采。",
        words:[
          {word:"arid",     ipa:"/ˈærɪd/",     pos:"adj.", zh:"干旱的；贫瘠的",        forms:["arid"]},
          {word:"barren",   ipa:"/ˈbærən/",    pos:"adj.", zh:"贫瘠的；不毛的",        forms:["barren"]},
          {word:"sterile",  ipa:"/ˈsteraɪl/",  pos:"adj.", zh:"不毛的；无菌的",        forms:["sterile"]},
          {word:"desolate", ipa:"/ˈdesələt/",  pos:"adj.", zh:"荒凉的，荒废的",        forms:["desolate"]},
          {word:"bleak",    ipa:"/bliːk/",     pos:"adj.", zh:"荒凉的；阴沉的",        forms:["bleak"]},
          {word:"starve",   ipa:"/stɑːv/",     pos:"v.",  zh:"（使）挨饿，饿死",       forms:["starve"]}
        ]
      },
      {
        id:"F3-P3", slug:"tem4-F3-P3", title:"江河湖海", shape:"椭圆",
        poster:"assets/tem4/posters/F3_P3.png",
        sentence:"When the tides ebb, boats ford the channel by the buoy; but storms make rivers overflow their banks, submerge the fields and engulf the village.",
        sentenceCn:"退潮后浅滩露出水面：小船在红色浮标旁涉水过河道；但暴雨后河水漫过堤岸，洪水淹没田野，吞没了村庄。",
        scene:"小叶学姐在河口灯塔下看潮水退去，小船贴着红色浮标驶过浅滩。",
        words:[
          {word:"ebb",      ipa:"/eb/",          pos:"n./vi.", zh:"退潮，落潮",          forms:["ebb"]},
          {word:"ford",     ipa:"/fɔːd/",        pos:"n.",  zh:"浅滩 v. 涉水，涉过",      forms:["ford"]},
          {word:"buoy",     ipa:"/bɔɪ/",         pos:"n.",  zh:"浮标 v. 鼓励，支持",      forms:["buoy"]},
          {word:"overflow", ipa:"/ˌəʊvəˈfləʊ/",  pos:"v.",  zh:"（使）溢出，（使）泛滥",  forms:["overflow"]},
          {word:"submerge", ipa:"/səbˈmɜːdʒ/",   pos:"v.",  zh:"浸没，淹没",              forms:["submerge"]},
          {word:"engulf",   ipa:"/ɪnˈɡʌlf/",     pos:"vt.", zh:"吞没，淹没",              forms:["engulf"]}
        ]
      },
      {
        id:"F3-P4", slug:"tem4-F3-P4", title:"四季天候", shape:"超圆角",
        poster:"assets/tem4/posters/F3_P4.png",
        sentence:"The climate softens in spring: light drizzle drenches the hills, frosty mornings thaw into mist, and the air stays temperate all April.",
        sentenceCn:"谷地的气候早春转温和：清晨的霜冻融化成蒙蒙细雨，四月的阵雨浸透了苏醒的山丘。",
        scene:"小叶学姐撑伞走在春雨润湿的山丘小路上，远山刚从霜冻中苏醒。",
        words:[
          {word:"climate",   ipa:"/ˈklaɪmət/",   pos:"n.",  zh:"气候；（社会）风气", forms:["climate"]},
          {word:"temperate", ipa:"/ˈtempərət/",  pos:"adj.", zh:"（气候）温和的",     forms:["temperate"]},
          {word:"frosty",    ipa:"/ˈfrɒsti/",    pos:"adj.", zh:"霜冻的，严寒的",     forms:["frosty"]},
          {word:"thaw",      ipa:"/θɔː/",        pos:"v.",  zh:"解冻，融化；变得温和", forms:["thaw"]},
          {word:"drizzle",   ipa:"/ˈdrɪzl/",     pos:"n./vi.", zh:"毛毛雨",          forms:["drizzle"]},
          {word:"drench",    ipa:"/drentʃ/",     pos:"vt.", zh:"使湿透，浸湿",        forms:["drenches"]}
        ]
      },
      {
        id:"F3-P5", slug:"tem4-F3-P5", title:"仰望星空", shape:"波浪",
        poster:"assets/tem4/posters/F3_P5.png",
        sentence:"Above the lake the galaxy appears: countless stars glitter and twinkle over the southern hemisphere, until a lunar eclipse gives campers a rare glimpse of shadow.",
        sentenceCn:"繁星闪烁在湖面上空：银河横贯南半天球，直到月食开始，营员们得以一睹月影奇观。",
        scene:"小叶学姐在湖边营地仰望星空，银河横贯天际，月食悄然开始。",
        words:[
          {word:"glitter",    ipa:"/ˈɡlɪtə/",     pos:"n./vi.", zh:"闪光，反光",           forms:["glitter"]},
          {word:"twinkle",    ipa:"/ˈtwɪŋkl/",    pos:"v.",  zh:"闪烁，闪耀",              forms:["twinkle"]},
          {word:"galaxy",     ipa:"/ˈɡæləksi/",   pos:"n.",  zh:"星系；[G-] 银河系",       forms:["galaxy"]},
          {word:"hemisphere", ipa:"/ˈhemɪsfɪə/",  pos:"n.",  zh:"（地球的）半球",          forms:["hemisphere"]},
          {word:"eclipse",    ipa:"/ɪˈklɪps/",    pos:"n.",  zh:"日食，月食 v. 使黯然失色", forms:["eclipse"]},
          {word:"glimpse",    ipa:"/ɡlɪmps/",     pos:"n.",  zh:"一瞥，一看",              forms:["glimpse"]}
        ]
      }
    ]
  },
  /* ===== G 兴趣与文化 ===== */
  {
    id:"G1", cat:"G", zh:"音乐与艺术", name:"Music & Arts", status:"live",
    date:"2026-09-07", words:30, desc:"从舞台首演到美术馆巡礼：演奏、作曲、鉴展、创作、策展",
    color:"#4A90D9",
    parts:[
      {
        id:"G1-P1", slug:"tem4-G1-P1", title:"舞台首演", shape:"拱门",
        poster:"assets/tem4/posters/G1_P1.png",
        sentence:"Tonight she will perform on stage: every beat and string resounds as fans applaud, fingers gently pluck the silk of a classic melody.",
        sentenceCn:"今晚古筝登台演奏：每个节拍都赢得满场掌声，她的手指拨动琴弦，弹奏一曲经典名曲。",
        scene:"小叶学姐抱古筝登上舞台，聚光灯下拨动琴弦，台下掌声雷动。",
        words:[
          {word:"perform", ipa:"/pəˈfɔːm/",  pos:"v.",  zh:"表演；实行",            forms:["perform"]},
          {word:"applaud", ipa:"/əˈplɔːd/",  pos:"v.",  zh:"鼓掌，喝彩；称赞",       forms:["applaud"]},
          {word:"beat",    ipa:"/biːt/",     pos:"v.",  zh:"敲打；打败 n. 节拍",     forms:["beat"]},
          {word:"string",  ipa:"/strɪŋ/",    pos:"n.",  zh:"细绳；（乐器的）弦",     forms:["string"]},
          {word:"pluck",   ipa:"/plʌk/",     pos:"v.",  zh:"拨（弦）；采，摘",       forms:["pluck"]},
          {word:"classic", ipa:"/ˈklæsɪk/",  pos:"adj.", zh:"第一流的；古典的 n. 杰作", forms:["classic"]}
        ]
      },
      {
        id:"G1-P2", slug:"tem4-G1-P2", title:"作曲大师", shape:"叶形",
        poster:"assets/tem4/posters/G1_P2.png",
        sentence:"A genius can compose pop hits and symphonies that inspire millions; one vivid melody can fascinate the world.",
        sentenceCn:"天才作曲家既写流行金曲也写交响乐：一段鲜活的旋律能鼓舞千万人，令每位听众着迷。",
        scene:"小叶学姐在琴房伏案谱曲，钢琴上摊开写满音符的手稿。",
        words:[
          {word:"genius",    ipa:"/ˈdʒiːniəs/",   pos:"n.",  zh:"天才，天资，天赋",   forms:["genius"]},
          {word:"compose",   ipa:"/kəmˈpəʊz/",    pos:"v.",  zh:"作曲；组成；使安定", forms:["compose"]},
          {word:"pop",       ipa:"/pɒp/",         pos:"n.",  zh:"流行音乐 adj. 流行的", forms:["pop"]},
          {word:"inspire",   ipa:"/ɪnˈspaɪə/",    pos:"v.",  zh:"鼓舞；激起灵感",     forms:["inspire"]},
          {word:"vivid",     ipa:"/ˈvɪvɪd/",      pos:"adj.", zh:"鲜明的；生动的",     forms:["vivid"]},
          {word:"fascinate", ipa:"/ˈfæsɪneɪt/",   pos:"v.",  zh:"迷住，使着迷",        forms:["fascinate"]}
        ]
      },
      {
        id:"G1-P3", slug:"tem4-G1-P3", title:"画廊鉴赏", shape:"椭圆",
        poster:"assets/tem4/posters/G1_P3.png",
        sentence:"The gallery will display these abstract and contemporary works: experts check each is authentic, not a fake, before the auction opens.",
        sentenceCn:"画廊展出当代艺术家的抽象作品：拍卖开始前，专家逐一鉴定每件展品是真迹还是赝品。",
        scene:"小叶学姐与伙伴们在画廊里看展，专家正用放大镜鉴定画作真伪。",
        words:[
          {word:"display",     ipa:"/dɪˈspleɪ/",      pos:"n./vt.", zh:"陈列，展示，展览",   forms:["display"]},
          {word:"abstract",    ipa:"/ˈæbstrækt/",     pos:"adj.", zh:"抽象的 n. 摘要",       forms:["abstract"]},
          {word:"contemporary", ipa:"/kənˈtempərəri/", pos:"adj.", zh:"当代的；同时代的",    forms:["contemporary"]},
          {word:"authentic",   ipa:"/ɔːˈθentɪk/",     pos:"adj.", zh:"真迹的，正宗的",       forms:["authentic"]},
          {word:"fake",        ipa:"/feɪk/",          pos:"n.",  zh:"赝品 adj. 假的 v. 伪造", forms:["fake"]},
          {word:"auction",     ipa:"/ˈɔːkʃən/",       pos:"n./vt.", zh:"拍卖",              forms:["auction"]}
        ]
      },
      {
        id:"G1-P4", slug:"tem4-G1-P4", title:"画室创作", shape:"超圆角",
        poster:"assets/tem4/posters/G1_P4.png",
        sentence:"Every master was once a student who learned to sketch and portray the hero, then depict the exquisite lace with grace and ease.",
        sentenceCn:"绘画大师先打素描草稿：粗犷的笔触描绘英雄，柔和的线条优雅地画出精致的蕾丝。",
        scene:"小叶学姐在画室里执笔素描，画架上是一幅英雄肖像草稿。",
        words:[
          {word:"master",    ipa:"/ˈmɑːstə/",     pos:"n.",  zh:"大师，名家 vt. 精通", forms:["master"]},
          {word:"sketch",    ipa:"/sketʃ/",       pos:"n.",  zh:"素描，草图 v. 速写",  forms:["sketch"]},
          {word:"portray",   ipa:"/pɔːˈtreɪ/",    pos:"vt.", zh:"描绘，描写；扮演",    forms:["portray"]},
          {word:"depict",    ipa:"/dɪˈpɪkt/",     pos:"vt.", zh:"（用图画）描绘，描述", forms:["depict"]},
          {word:"exquisite", ipa:"/ˈekskwɪzɪt/",  pos:"adj.", zh:"精美的，精湛的",      forms:["exquisite"]},
          {word:"grace",     ipa:"/ɡreɪs/",       pos:"n.",  zh:"优美，雅致；风度",    forms:["grace"]}
        ]
      },
      {
        id:"G1-P5", slug:"tem4-G1-P5", title:"美术馆巡礼", shape:"波浪",
        poster:"assets/tem4/posters/G1_P5.png",
        sentence:"Golden ornaments cover the jade crown: visitors adore and cherish such treasures, whose dragons symbolize power; scholars imitate the craft as guides narrate its legends.",
        sentenceCn:"玉冠上的饰物象征王权：参观者珍爱这些宝藏，学者仿制工艺，讲解员讲述它的传说。",
        scene:"小叶学姐在美术馆展柜前端详鎏金玉冠，讲解员正向观众讲述传说。",
        words:[
          {word:"ornament",  ipa:"/ˈɔːnəmənt/",   pos:"n.",  zh:"装饰品，饰物；装饰",  forms:["ornaments"]},
          {word:"symbolize", ipa:"/ˈsɪmbəlaɪz/",  pos:"v.",  zh:"象征，代表",           forms:["symbolize"]},
          {word:"adore",     ipa:"/əˈdɔː/",       pos:"vt.", zh:"敬慕，钟爱，崇拜",     forms:["adore"]},
          {word:"cherish",   ipa:"/ˈtʃerɪʃ/",     pos:"vt.", zh:"珍爱；怀有（希望）",   forms:["cherish"]},
          {word:"imitate",   ipa:"/ˈɪmɪteɪt/",    pos:"vt.", zh:"模仿，仿效；仿制",     forms:["imitate"]},
          {word:"narrate",   ipa:"/næˈreɪt/",     pos:"v.",  zh:"叙述，描述",           forms:["narrate"]}
        ]
      }
    ]
  },
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
