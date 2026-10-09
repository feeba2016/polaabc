/* ===== TEM-4 词汇漫画 · 数据层 =====
 * 架构：8 大类 × 40 主题 × 每主题多 Part × 每 Part 6 词
 * 状态：A1-A6/B1-B5/C1-C5/D1-D4/E1-E3/F1/F2/F3/G1 已上线（27 主题 / 135 Part / 810 词），其余主题 status:"soon" 待生产
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
  {
    id:"A2", cat:"A", zh:"学术阅读", name:"Academic Reading", status:"live",
    date:"2026-09-09", words:30, desc:"阅读方法全流程：泛读浏览、精读笔记、攻克难句、整理压缩、文献与收获",
    color:"#4A90D9",
    parts:[
      {
        id:"A2-P1", slug:"tem4-A2-P1", title:"泛读与浏览", shape:"拱门",
        poster:"assets/tem4/posters/A2_P1.png",
        sentence:"Every weekend I browse the campus bookshop, skim the openings of new titles, scan a few journals for fresh ideas, then devour one whole novel and slowly digest and interpret its meaning.",
        sentenceCn:"每逢周末我都会逛校园书店：浏览新书的开头、翻阅几本期刊寻找新点子，然后一口气读完一整本小说，再慢慢消化、解读其中的意涵。",
        scene:"小叶学姐坐在温馨书房的书桌前，开心地翻阅一摞书与期刊。",
        words:[
          {word:"browse",    ipa:"/braʊz/",      pos:"v.",  zh:"浏览（书刊）；随意翻阅", forms:["browse"]},
          {word:"skim",      ipa:"/skɪm/",       pos:"v.",  zh:"略读，快读；掠过",      forms:["skim"]},
          {word:"scan",      ipa:"/skæn/",       pos:"v.",  zh:"审视，扫描；浏览",      forms:["scan"]},
          {word:"devour",    ipa:"/dɪˈvaʊə/",    pos:"vt.", zh:"贪婪地读；吞吃，吞噬",  forms:["devour"]},
          {word:"digest",    ipa:"/dɪˈdʒest/",   pos:"v.",  zh:"消化；理解，吸收；摘要", forms:["digest"]},
          {word:"interpret", ipa:"/ɪnˈtɜːprɪt/", pos:"v.",  zh:"解释，说明；理解；口译", forms:["interpret"]}
        ]
      },
      {
        id:"A2-P2", slug:"tem4-A2-P2", title:"精读与笔记", shape:"叶形",
        poster:"assets/tem4/posters/A2_P2.png",
        sentence:"As I read closely, I underline the key arguments, highlight memorable lines, jot questions in the margin, paraphrase difficult passages in my own words, summarize each section, and insert sticky notes to mark the best quotes.",
        sentenceCn:"精读时，我会给核心论点画线、把精彩句子标亮、在页边写下疑问、用自己的话改述难懂的段落、概括每一节内容，并贴上便利贴标记佳句。",
        scene:"小叶学姐伏在书桌前精读课本，手握荧光笔，书页贴满彩色便利贴。",
        words:[
          {word:"underline",  ipa:"/ˌʌndəˈlaɪn/",  pos:"vt.",    zh:"在…下面画线；强调",        forms:["underline"]},
          {word:"highlight",  ipa:"/ˈhaɪlaɪt/",    pos:"vt.",    zh:"使突出，强调；最精彩的部分", forms:["highlight"]},
          {word:"margin",     ipa:"/ˈmɑːdʒɪn/",    pos:"n.",     zh:"页边空白；边缘；余地",      forms:["margin"]},
          {word:"paraphrase", ipa:"/ˈpærəfreɪz/",  pos:"n./v.",  zh:"释义，改述",              forms:["paraphrase"]},
          {word:"summarize",  ipa:"/ˈsʌməraɪz/",   pos:"v.",     zh:"摘要，概述",              forms:["summarize"]},
          {word:"insert",     ipa:"/ɪnˈsɜːt/",     pos:"vt.",    zh:"插入，嵌入 n. 插页",       forms:["insert"]}
        ]
      },
      {
        id:"A2-P3", slug:"tem4-A2-P3", title:"攻克难句", shape:"椭圆",
        poster:"assets/tem4/posters/A2_P3.png",
        sentence:"The aged manuscript is almost illegible, so I decode its abbreviations, clarify every confusing phrase, define the unfamiliar terms, and pay close attention to the footnotes, never overlooking a single clue.",
        sentenceCn:"这份旧手稿几乎难以辨认，于是我先破译缩写、阐明每个费解的短语、给生僻术语下定义，并密切注意脚注，不放过任何一条隐藏线索。",
        scene:"小叶学姐举着放大镜，专注研究桌上难以辨认的旧手稿。",
        words:[
          {word:"illegible", ipa:"/ɪˈledʒəbl/",  pos:"adj.", zh:"难以辨认的，（字迹）模糊的", forms:["illegible"]},
          {word:"decode",    ipa:"/diːˈkəʊd/",   pos:"v.",   zh:"破译，解密",             forms:["decode"]},
          {word:"clarify",   ipa:"/ˈklærɪfaɪ/",  pos:"v.",   zh:"澄清，阐明",             forms:["clarify"]},
          {word:"define",    ipa:"/dɪˈfaɪn/",    pos:"vt.",  zh:"下定义；界定，确定范围",   forms:["define"]},
          {word:"attention", ipa:"/əˈtenʃən/",   pos:"n.",   zh:"注意，专心",             forms:["attention"]},
          {word:"overlook",  ipa:"/ˌəʊvəˈlʊk/",  pos:"vt.",  zh:"俯瞰；忽略；宽容",        forms:["overlooking"]}
        ]
      },
      {
        id:"A2-P4", slug:"tem4-A2-P4", title:"整理与压缩", shape:"超圆角",
        poster:"assets/tem4/posters/A2_P4.png",
        sentence:"To prepare my seminar handout, I compress the messy drafts, condense forty pages into two, keep the summary brief, format every heading neatly, add graphic charts, and remark on the trends I find.",
        sentenceCn:"为了准备研讨课讲义，我把凌乱的草稿压缩、将四十页浓缩成两页、让摘要保持简短、把每个标题排版整齐，再配上形象的图表，并评论我发现的新趋势。",
        scene:"小叶学姐在书桌前整理笔记卡片，纸上画着图表，准备研讨课讲义。",
        words:[
          {word:"compress", ipa:"/kəmˈpres/", pos:"v.",   zh:"压缩；（思想、文字）浓缩", forms:["compress"]},
          {word:"condense", ipa:"/kənˈdens/", pos:"v.",   zh:"冷凝；压缩，缩写（文章）", forms:["condense"]},
          {word:"brief",    ipa:"/briːf/",    pos:"adj.", zh:"简短的 n. 概要，摘要",    forms:["brief"]},
          {word:"format",   ipa:"/ˈfɔːmæt/",  pos:"n.",   zh:"格式，版式 vt. 编排格式", forms:["format"]},
          {word:"graphic",  ipa:"/ˈɡræfɪk/",  pos:"adj.", zh:"图解的；生动的",         forms:["graphic"]},
          {word:"remark",   ipa:"/rɪˈmɑːk/",  pos:"v.",   zh:"评论，谈论 n. 话语",     forms:["remark"]}
        ]
      },
      {
        id:"A2-P5", slug:"tem4-A2-P5", title:"文献与收获", shape:"波浪",
        poster:"assets/tem4/posters/A2_P5.png",
        sentence:"Before the library closes, I check the catalog for a related title, trace my topic through the index, return a volume two days overdue, and walk home content, for this worthy book has aroused a real passion for research.",
        sentenceCn:"图书馆闭馆前，我查了目录寻找相关书名、通过索引追查研究主题、归还一本过期两天的书，然后心满意足地走回家——因为这本值得一读的书唤起了我对研究的真正热情。",
        scene:"夕阳下小叶学姐抱着一摞书走出图书馆，头顶闪着灵感的小星星。",
        words:[
          {word:"catalog", ipa:"/ˈkætəlɒɡ/",  pos:"n.",   zh:"目录 vt. 编目录",       forms:["catalog"]},
          {word:"index",   ipa:"/ˈɪndeks/",   pos:"n.",   zh:"索引；指数；标志",      forms:["index"]},
          {word:"overdue", ipa:"/ˌəʊvəˈdjuː/", pos:"adj.", zh:"过期的，延误的",        forms:["overdue"]},
          {word:"content", ipa:"/kənˈtent/",  pos:"adj.", zh:"满足的，满意的",        forms:["content"]},
          {word:"worthy",  ipa:"/ˈwɜːði/",    pos:"adj.", zh:"值得…的；值得尊敬的",   forms:["worthy"]},
          {word:"arouse",  ipa:"/əˈraʊz/",    pos:"vt.",  zh:"唤起，激起；唤醒",      forms:["aroused"]}
        ]
      }
    ]
  },
  {
    id:"A3", cat:"A", zh:"考试与备考", name:"Exam & Study", status:"live",
    date:"2026-09-10", words:30, desc:"考试全流程：制定复习计划、考前心态调适、考场规则与诚信、答题技巧与检查、坚持与收获",
    color:"#4A90D9",
    parts:[
      {
        id:"A3-P1", slug:"tem4-A3-P1", title:"制定复习计划", shape:"拱门",
        poster:"assets/tem4/posters/A3_P1.png",
        sentence:"A month before the exam, I schedule two study sessions every day, set a clear target for each subject, estimate how long each chapter will take, and pick a smarter approach and strategy before I attempt my first practice paper.",
        sentenceCn:"考前一个月，我会安排好每天两个学习时段、给每个科目定下明确目标、估算每一章要花的时间，并在初次尝试做模拟卷之前，选出更聪明的应对方法和策略。",
        scene:"小叶学姐坐在书桌前规划复习日程，墙上贴着彩色圆点月历，桌上放着计划卡片。",
        words:[
          {word:"schedule", ipa:"/ˈʃedjuːəl/",  pos:"n./v.",  zh:"进度表，计划；时刻表 vt. 安排", forms:["schedule"]},
          {word:"target",   ipa:"/ˈtɑːɡɪt/",    pos:"n./v.",  zh:"目标，指标 vt. 把…作为目标",   forms:["target"]},
          {word:"estimate", ipa:"/ˈestɪmeɪt/",  pos:"vt.",    zh:"估计，估算；评价",            forms:["estimate"]},
          {word:"approach", ipa:"/əˈprəʊtʃ/",   pos:"v./n.",  zh:"接近；处理，对付 n. 方法",     forms:["approach"]},
          {word:"strategy", ipa:"/ˈstrætɪdʒi/", pos:"n.",     zh:"战略；策略，谋略",            forms:["strategy"]},
          {word:"attempt",  ipa:"/əˈtempt/",    pos:"vt./n.", zh:"尝试，企图",                  forms:["attempt"]}
        ]
      },
      {
        id:"A3-P2", slug:"tem4-A3-P2", title:"考前心态调适", shape:"叶形",
        poster:"assets/tem4/posters/A3_P2.png",
        sentence:"The night before the exam, anxiety creeps in and small things make me anxious, so I put the heavy stress down, breathe slowly to stay calm, and sleep early to refresh my mind and wake up with quiet confidence.",
        sentenceCn:"考前一晚，焦虑悄悄袭来，一点小事就让我心神不安；于是我放下沉重的压力、放慢呼吸保持镇定，早早入睡让头脑焕然一新，醒来时带着从容的自信。",
        scene:"夜晚温馨卧室，小叶学姐盘腿坐在床上闭眼深呼吸，窗外月亮与星星相伴。",
        words:[
          {word:"anxiety",    ipa:"/æŋˈzaɪəti/",  pos:"n.",     zh:"忧虑，担心，焦虑；渴望", forms:["anxiety"]},
          {word:"anxious",    ipa:"/ˈæŋkʃəs/",    pos:"adj.",   zh:"忧虑的，不安的；渴望的", forms:["anxious"]},
          {word:"stress",     ipa:"/stres/",      pos:"n./v.",  zh:"压力；强调 vt. 着重",    forms:["stress"]},
          {word:"calm",       ipa:"/kɑːm/",       pos:"adj./v.",zh:"镇静的，平静的（使）平静", forms:["calm"]},
          {word:"refresh",    ipa:"/rɪˈfreʃ/",    pos:"v.",     zh:"使精神振作，使清爽",     forms:["refresh"]},
          {word:"confidence", ipa:"/ˈkɒnfɪdəns/", pos:"n.",     zh:"信心，自信；信任",       forms:["confidence"]}
        ]
      },
      {
        id:"A3-P3", slug:"tem4-A3-P3", title:"考场规则与诚信", shape:"椭圆",
        poster:"assets/tem4/posters/A3_P3.png",
        sentence:"In the exam hall, strict rules forbid phones and prohibit note cards, and anyone caught trying to cheat faces a heavy penalty and may even be disqualified, because honesty and integrity matter far more than one grade.",
        sentenceCn:"考场上，严格的规则禁止携带手机和小抄；任何试图作弊的人都会面临严厉处罚，甚至被取消资格——因为诚实与正直远比一个分数重要。",
        scene:"明亮考场里小叶学姐端正答题，戴圆框眼镜的猫头鹰老师在过道巡视。",
        words:[
          {word:"forbid",      ipa:"/fəˈbɪd/",       pos:"v.",  zh:"禁止，不许",           forms:["forbid"]},
          {word:"prohibit",    ipa:"/prəˈhɪbɪt/",    pos:"vt.", zh:"禁止；阻止，妨碍",     forms:["prohibit"]},
          {word:"cheat",       ipa:"/tʃiːt/",        pos:"v./n.",zh:"欺诈，骗取 n. 骗子",   forms:["cheat"]},
          {word:"penalty",     ipa:"/ˈpenəlti/",     pos:"n.",  zh:"惩罚，处罚；罚款",     forms:["penalty"]},
          {word:"disqualify",  ipa:"/dɪsˈkwɒlɪfaɪ/", pos:"vt.", zh:"使不合格，取消资格",   forms:["disqualified"]},
          {word:"integrity",   ipa:"/ɪnˈteɡrəti/",   pos:"n.",  zh:"正直，诚实；完整",     forms:["integrity"]}
        ]
      },
      {
        id:"A3-P4", slug:"tem4-A3-P4", title:"答题技巧与检查", shape:"超圆角",
        poster:"assets/tem4/posters/A3_P4.png",
        sentence:"When a hard question makes my mind go blank, I leave a rough outline beside it, respond to the easier items first, solve each problem step by step, look for a hidden hint in the wording, and use the final minutes to correct every careless slip.",
        sentenceCn:"当难题让我的大脑一片空白时，我会先在旁边列出粗略的提纲、先回答较容易的题目、一步步解开每道题、从措辞里寻找隐藏的提示，并用最后几分钟改正每一个粗心的失误。",
        scene:"考场座位上小叶学姐托腮思考，笔尖点着试卷，头顶亮起小灯泡。",
        words:[
          {word:"blank",   ipa:"/blæŋk/",    pos:"adj./n.", zh:"空白的；茫然的 n. 空白，空格", forms:["blank"]},
          {word:"rough",   ipa:"/rʌf/",      pos:"adj.",    zh:"粗糙的；概略的，粗略的",       forms:["rough"]},
          {word:"respond", ipa:"/rɪˈspɒnd/", pos:"v.",      zh:"作答，回答；回应",            forms:["respond"]},
          {word:"solve",   ipa:"/sɒlv/",     pos:"v.",      zh:"解决；解答",                  forms:["solve"]},
          {word:"hint",    ipa:"/hɪnt/",     pos:"n./v.",   zh:"暗示；提示",                  forms:["hint"]},
          {word:"correct", ipa:"/kəˈrekt/",  pos:"adj./v.", zh:"正确的 v. 改正，纠正",        forms:["correct"]}
        ]
      },
      {
        id:"A3-P5", slug:"tem4-A3-P5", title:"坚持与收获", shape:"波浪",
        poster:"assets/tem4/posters/A3_P5.png",
        sentence:"Looking back, the students who persevere and persist through the hardest weeks, striving a little every day, accomplish their plans, achieve real progress, and are rewarded with a confidence no exam can ever take away.",
        sentenceCn:"回望来路，那些在最艰难的几周里坚持不懈、每天努力一点的同学们，完成了自己的计划、取得了真正的进步，并获得了一种任何考试都无法夺走的自信。",
        scene:"夕阳校园草坪上小叶学姐高举金牌开心跳跃，彩带与金星飞舞。",
        words:[
          {word:"persevere",  ipa:"/ˌpɜːsɪˈvɪə/",  pos:"vi.",   zh:"坚持不懈，不屈不挠",           forms:["persevere"]},
          {word:"persist",    ipa:"/pəˈsɪst/",     pos:"v.",    zh:"坚持；持续",                   forms:["persist"]},
          {word:"strive",     ipa:"/straɪv/",      pos:"vi.",   zh:"奋勉，努力；抗争",             forms:["striving"]},
          {word:"accomplish", ipa:"/əˈkʌmplɪʃ/",   pos:"vt.",   zh:"完成，实现，达到（目的）",     forms:["accomplish"]},
          {word:"achieve",    ipa:"/əˈtʃiːv/",     pos:"v.",    zh:"取得（成绩等）；达到（目的）", forms:["achieve"]},
          {word:"reward",     ipa:"/rɪˈwɔːd/",     pos:"n./vt.",zh:"报酬，奖赏 vt. 奖赏",          forms:["rewarded"]}
        ]
      }
    ]
  },
  {
    id:"A4", cat:"A", zh:"图书馆与书籍", name:"Library & Books", status:"live",
    date:"2026-09-12", words:30, desc:"图书馆的一天：开馆检索、静读时光、借阅与归还、报刊之趣、爱书人的传承",
    color:"#4A90D9",
    parts:[
      {
        id:"A4-P1", slug:"tem4-A4-P1", title:"开馆检索", shape:"拱门",
        poster:"assets/tem4/posters/A4_P1.png",
        sentence:"At the start of term, new students enrol for a library card at the desk, while the librarian checks the inventory of fresh arrivals, lists the most popular titles, refers readers to the user manual, and helps everyone make a wise selection.",
        sentenceCn:"开学伊始，新生们在服务台登记办理图书证；管理员清点新到书籍、把最受欢迎的书名列在卡片上、引导读者查阅使用手册，并帮助每个人做出明智的选择。",
        scene:"图书馆服务台前小叶学姐翻阅木质卡片目录，身后是高高的书架与拱形窗。",
        words:[
          {word:"enrol",     ipa:"/ɪnˈrəʊl/",    pos:"v.",     zh:"登记，注册；使入会",        forms:["enrol"]},
          {word:"inventory", ipa:"/ˈɪnvəntəri/", pos:"n.",     zh:"目录，清单；盘存",          forms:["inventory"]},
          {word:"list",      ipa:"/lɪst/",       pos:"n./v.",  zh:"清单，名单 vt. 列出",       forms:["lists"]},
          {word:"refer",     ipa:"/rɪˈfɜː/",     pos:"v.",     zh:"查阅，参考；谈及",          forms:["refers"]},
          {word:"manual",    ipa:"/ˈmænjuəl/",   pos:"n./adj.",zh:"手册，指南 adj. 手工的",    forms:["manual"]},
          {word:"selection", ipa:"/sɪˈlekʃən/",  pos:"n.",     zh:"选择；精选集，供选择之物",  forms:["selection"]}
        ]
      },
      {
        id:"A4-P2", slug:"tem4-A4-P2", title:"静读时光", shape:"叶形",
        poster:"assets/tem4/posters/A4_P2.png",
        sentence:"A gentle hush falls over the reading room as curious students dive into profound books, eager to acquire new knowledge and to catch a flash of insight between the lines.",
        sentenceCn:"阅览室里一片静谧，好奇的同学们埋头钻研深奥的书籍，渴望习得新知，并在字里行间捕捉灵光一现的洞见。",
        scene:"安静的阅览室里，小叶学姐蜷在薄荷绿扶手椅中捧读厚书，落地灯洒下暖光。",
        words:[
          {word:"hush",     ipa:"/hʌʃ/",        pos:"n./v.",  zh:"（使）安静，寂静",           forms:["hush"]},
          {word:"curious",  ipa:"/ˈkjʊəriəs/",  pos:"adj.",   zh:"好奇的，有求知欲的",         forms:["curious"]},
          {word:"dive",     ipa:"/daɪv/",       pos:"v./n.",  zh:"潜心钻研；跳水，俯冲",       forms:["dive"]},
          {word:"profound", ipa:"/prəˈfaʊnd/",  pos:"adj.",   zh:"深刻的，深奥的；渊博的",     forms:["profound"]},
          {word:"acquire",  ipa:"/əˈkwaɪə/",    pos:"vt.",    zh:"取得，获得；学到（知识）",   forms:["acquire"]},
          {word:"insight",  ipa:"/ˈɪnsaɪt/",    pos:"n.",     zh:"洞察力，深入了解，洞悉",     forms:["insight"]}
        ]
      },
      {
        id:"A4-P3", slug:"tem4-A4-P3", title:"借阅与归还", shape:"椭圆",
        poster:"assets/tem4/posters/A4_P3.png",
        sentence:"To borrow a rare volume you deposit your student card at the desk, and the library will impose a small fine if you fail to restore the book on time, while only authorized staff may duplicate or retain the most precious copies.",
        sentenceCn:"借阅珍贵书籍时，你要把学生卡押在服务台；如果未能按时归还，图书馆会处以小额罚款，而且只有经授权的工作人员才能复制或保留最珍贵的藏书。",
        scene:"借还书服务台前，小叶学姐递上学生卡，戴圆框眼镜的猫头鹰管理员在盖章。",
        words:[
          {word:"deposit",   ipa:"/dɪˈpɒzɪt/",   pos:"v./n.",   zh:"存放，寄存 n. 押金",      forms:["deposit"]},
          {word:"impose",    ipa:"/ɪmˈpəʊz/",    pos:"v.",      zh:"处以（罚款）；把…强加于", forms:["impose"]},
          {word:"restore",   ipa:"/rɪˈstɔː/",    pos:"vt.",     zh:"归还，交还；修复",        forms:["restore"]},
          {word:"authorize", ipa:"/ˈɔːθəraɪz/",  pos:"vt.",     zh:"授权，批准，允许",        forms:["authorized"]},
          {word:"duplicate", ipa:"/ˈdjuːplɪkət/",pos:"n./adj.", zh:"复制（的），副本（的）",  forms:["duplicate"]},
          {word:"retain",    ipa:"/rɪˈteɪn/",    pos:"vt.",     zh:"保存，保留；留住",        forms:["retain"]}
        ]
      },
      {
        id:"A4-P4", slug:"tem4-A4-P4", title:"报刊之趣", shape:"超圆角",
        poster:"assets/tem4/posters/A4_P4.png",
        sentence:"Xiaoye loves to subscribe to her favourite magazine, admire how the stories are illustrated in every new issue, enjoy the colourful weekend supplement, and share the articles that thrill and entertain her friends.",
        sentenceCn:"小叶学姐喜欢订阅自己最爱的杂志，欣赏每一期新刊里配有插图的精彩故事，享受五彩缤纷的周末副刊，并把那些让朋友们既激动又开心的文章分享出去。",
        scene:"阳光洒落的图书馆角落，小叶学姐窝在奶黄色沙发里翻看插图丰富的杂志。",
        words:[
          {word:"subscribe",  ipa:"/səbˈskraɪb/",  pos:"v.",     zh:"订阅；签署；捐助",        forms:["subscribe"]},
          {word:"issue",      ipa:"/ˈɪʃuː/",       pos:"n./v.",  zh:"（报刊）期号；问题 vt. 发行", forms:["issue"]},
          {word:"illustrate", ipa:"/ˈɪləstreɪt/",  pos:"vt.",    zh:"加插图于；说明，表明",    forms:["illustrated"]},
          {word:"supplement", ipa:"/ˈsʌplɪmənt/",  pos:"n./v.",  zh:"增补；增刊，副刊，附录",  forms:["supplement"]},
          {word:"thrill",     ipa:"/θrɪl/",        pos:"n./v.",  zh:"激动，震颤 v. 使激动",    forms:["thrill"]},
          {word:"entertain",  ipa:"/ˌentəˈteɪn/",  pos:"v.",     zh:"使欢乐，给…娱乐；招待",   forms:["entertain"]}
        ]
      },
      {
        id:"A4-P5", slug:"tem4-A4-P5", title:"爱书人的传承", shape:"波浪",
        poster:"assets/tem4/posters/A4_P5.png",
        sentence:"True book lovers bind their favourite volumes in soft leather, preserve them for many years, cite them in careful essays, recommend them to close friends, remember how each chapter is entitled, and delight in every rereading.",
        sentenceCn:"真正的爱书人会用柔软的皮革装订心爱的书卷并珍藏多年；他们在严谨的文章里引用书中内容、把好书推荐给挚友、记得每一章的标题，并在每次重读中获得欣喜。",
        scene:"温馨的夜晚书房里，小叶学姐用丝带细心包扎一本心爱的旧皮面书。",
        words:[
          {word:"bind",      ipa:"/baɪnd/",      pos:"v.",    zh:"捆，绑；装订",             forms:["bind"]},
          {word:"preserve",  ipa:"/prɪˈzɜːv/",   pos:"v.",    zh:"保存；保护，维护",         forms:["preserve"]},
          {word:"cite",      ipa:"/saɪt/",       pos:"v.",    zh:"引用，引证，举（例）",     forms:["cite"]},
          {word:"recommend", ipa:"/ˌrekəˈmend/", pos:"v.",    zh:"推荐，介绍；劝告，建议",   forms:["recommend"]},
          {word:"entitle",   ipa:"/ɪnˈtaɪtl/",   pos:"vt.",   zh:"定标题，定名称；给权利",   forms:["entitled"]},
          {word:"delight",   ipa:"/dɪˈlaɪt/",    pos:"n./v.", zh:"欣喜，乐趣 v. 使快乐",     forms:["delight"]}
        ]
      }
    ]
  },
  {
    id:"A5", cat:"A", zh:"学科与课程", name:"Class Subjects", status:"live",
    date:"2026-09-13", words:30, desc:"学科课堂巡礼：数字与计算、力与物质、文明的足迹、像科学家一样思考、新学期选课",
    color:"#4A90D9",
    parts:[
      {
        id:"A5-P1", slug:"tem4-A5-P1", title:"数字与计算", shape:"拱门",
        poster:"assets/tem4/posters/A5_P1.png",
        sentence:"On the blackboard the teacher asks us to calculate the total, compute the average, measure the window, compare the quantity of two jars, work out nine minus four, and find the smallest multiple of six.",
        sentenceCn:"老师在黑板上要求我们算出总数、计算平均值、测量窗户、比较两个罐子的数量、算出九减四，并找出六的最小倍数。",
        scene:"小叶学姐在数学课堂上用长尺认真测量木块模型，黑板上画满彩色几何图形。",
        words:[
          {word:"calculate", ipa:"/ˈkælkjuleɪt/", pos:"v.",        zh:"计算，核算；预测，推测",  forms:["calculate"]},
          {word:"compute",   ipa:"/kəmˈpjuːt/",   pos:"v.",        zh:"计算，估算",             forms:["compute"]},
          {word:"measure",   ipa:"/ˈmeʒə/",       pos:"n./v.",     zh:"度量，量度 n. 措施 v. 测量", forms:["measure"]},
          {word:"quantity",  ipa:"/ˈkwɒntɪti/",   pos:"n.",        zh:"量，数量；大量",          forms:["quantity"]},
          {word:"minus",     ipa:"/ˈmaɪnəs/",     pos:"prep./adj.",zh:"减去；负的，零下的",      forms:["minus"]},
          {word:"multiple",  ipa:"/ˈmʌltɪpl/",    pos:"n./adj.",   zh:"倍数；多重的",            forms:["multiple"]}
        ]
      },
      {
        id:"A5-P2", slug:"tem4-A5-P2", title:"力与物质", shape:"叶形",
        poster:"assets/tem4/posters/A5_P2.png",
        sentence:"In the science room we watch a drop of acid react with the blue liquid, see a spark leap from the wire, and learn how gravity pulls on every element of matter.",
        sentenceCn:"科学教室里，我们观察一滴酸液与蓝色液体发生反应、看火花从电线中跃出，并学习重力如何作用于物质的每一种成分。",
        scene:"科学教室里小叶学姐戴着护目镜观察试管中冒泡的蓝色液体，一旁电线间迸出火花。",
        words:[
          {word:"gravity", ipa:"/ˈɡrævɪti/", pos:"n.",     zh:"重力，引力；严重性",          forms:["gravity"]},
          {word:"element", ipa:"/ˈelɪmənt/", pos:"n.",     zh:"要素，成分；[pl.] 基本原理",  forms:["element"]},
          {word:"acid",    ipa:"/ˈæsɪd/",    pos:"adj./n.",zh:"酸味的；尖刻的 n. 酸",        forms:["acid"]},
          {word:"liquid",  ipa:"/ˈlɪkwɪd/",  pos:"n./adj.",zh:"液体；液体的，清澈的",        forms:["liquid"]},
          {word:"react",   ipa:"/riˈækt/",   pos:"v.",     zh:"反应；起化学反应",            forms:["react"]},
          {word:"spark",   ipa:"/spɑːk/",    pos:"n./v.",  zh:"火花，电花 v. 发出火花",      forms:["spark"]}
        ]
      },
      {
        id:"A5-P3", slug:"tem4-A5-P3", title:"文明的足迹", shape:"椭圆",
        poster:"assets/tem4/posters/A5_P3.png",
        sentence:"Our history teacher lines the events up in chronological order, tells how early people began to civilize the land, shows an antique coin unearthed from the ruins, and asks us to trace each milestone of the ancient kingdom.",
        sentenceCn:"历史老师把事件按年代顺序排列，讲述早期人类如何开化这片土地，展示一枚从遗址出土的古币，并要我们追溯古王国的每一个里程碑。",
        scene:"历史教室里小叶学姐举着放大镜细看绒布垫上的古币，身后墙上挂着长长的历史时间轴。",
        words:[
          {word:"chronological", ipa:"/ˌkrɒnəˈlɒdʒɪkəl/", pos:"adj.",   zh:"按年代顺序排列的",       forms:["chronological"]},
          {word:"civilize",      ipa:"/ˈsɪvɪlaɪz/",       pos:"v.",     zh:"使文明，使开化；教化",   forms:["civilize"]},
          {word:"unearth",       ipa:"/ʌnˈɜːθ/",          pos:"vt.",    zh:"发掘，挖出；披露",       forms:["unearthed"]},
          {word:"antique",       ipa:"/ænˈtiːk/",         pos:"adj./n.",zh:"古时的 n. 古物，古玩",   forms:["antique"]},
          {word:"trace",         ipa:"/treɪs/",           pos:"v./n.",  zh:"追溯，追踪 n. 踪迹，痕迹", forms:["trace"]},
          {word:"milestone",     ipa:"/ˈmaɪlstəʊn/",      pos:"n.",     zh:"里程碑；重大事件",       forms:["milestone"]}
        ]
      },
      {
        id:"A5-P4", slug:"tem4-A5-P4", title:"像科学家一样思考", shape:"超圆角",
        poster:"assets/tem4/posters/A5_P4.png",
        sentence:"Good scientists investigate a question step by step, detect tiny errors in the data, devise a fair test, demonstrate the results to the class, and finally prove their ideas — that is how a small breakthrough is born.",
        sentenceCn:"优秀的科学家一步步调查问题、察觉数据中的细微差错、设计出公正的实验、向全班演示结果，并最终证明自己的想法——小小的突破正是这样诞生的。",
        scene:"温暖的台灯下，小叶学姐对着实验记录本皱眉思考，旁边立着她自制的小实验装置。",
        words:[
          {word:"investigate",  ipa:"/ɪnˈvestɪɡeɪt/", pos:"v.",  zh:"调查，调查研究，审查", forms:["investigate"]},
          {word:"detect",       ipa:"/dɪˈtekt/",      pos:"vt.", zh:"发现，查明，测出",     forms:["detect"]},
          {word:"devise",       ipa:"/dɪˈvaɪz/",      pos:"vt.", zh:"计划，发明，设计",     forms:["devise"]},
          {word:"demonstrate",  ipa:"/ˈdemənstreɪt/", pos:"v.",  zh:"证明；示范",           forms:["demonstrate"]},
          {word:"prove",        ipa:"/pruːv/",        pos:"v.",  zh:"证明，证实；表明是",   forms:["prove"]},
          {word:"breakthrough", ipa:"/ˈbreɪkθruː/",   pos:"n.",  zh:"突破；重大发现",       forms:["breakthrough"]}
        ]
      },
      {
        id:"A5-P5", slug:"tem4-A5-P5", title:"新学期选课", shape:"波浪",
        poster:"assets/tem4/posters/A5_P5.png",
        sentence:"At the start of term, our institute makes logic a compulsory course for every freshman: we learn the basic concepts of reasoning, train our intelligence with puzzles, and pick which subject to specialize in next year.",
        sentenceCn:"新学期伊始，学院把逻辑学定为每位新生的必修课：我们学习推理的基本概念、用谜题锻炼智力，并挑选明年要专攻的学科。",
        scene:"走廊公告栏前，小叶学姐翻着课程手册，开心地选定了新学期的课程。",
        words:[
          {word:"institute",    ipa:"/ˈɪnstɪtjuːt/",  pos:"n./vt.", zh:"学院，研究院；协会 vt. 建立", forms:["institute"]},
          {word:"compulsory",   ipa:"/kəmˈpʌlsəri/",  pos:"adj.",   zh:"强迫的，强制的，义务的",     forms:["compulsory"]},
          {word:"logic",        ipa:"/ˈlɒdʒɪk/",      pos:"n.",     zh:"逻辑（学），逻辑性",         forms:["logic"]},
          {word:"concept",      ipa:"/ˈkɒnsept/",     pos:"n.",     zh:"概念，观念，思想",           forms:["concepts"]},
          {word:"intelligence", ipa:"/ɪnˈtelɪdʒəns/", pos:"n.",     zh:"智力，理解力，智慧；情报",   forms:["intelligence"]},
          {word:"specialize",   ipa:"/ˈspeʃəlaɪz/",   pos:"v.",     zh:"专攻，专门研究，专门从事",   forms:["specialize"]}
        ]
      }
    ]
  },
  {
    id:"A6", cat:"A", zh:"毕业季", name:"Graduation", status:"live",
    date:"2026-09-14", words:30, desc:"毕业季巡礼：盛大典礼、学士服与合影、告别与祝福、难忘的回忆、奔向新起点",
    color:"#4A90D9",
    parts:[
      {
        id:"A6-P1", slug:"tem4-A6-P1", title:"盛大典礼", shape:"拱门",
        poster:"assets/tem4/posters/A6_P1.png",
        sentence:"On this grand day the president presides over the closing ceremony and delivers a warm speech on behalf of all the teachers, while the graduates celebrate with cheers and flowers.",
        sentenceCn:"在这盛大的一天，校长主持闭幕典礼并代表全体老师致辞，毕业生们用欢呼与鲜花庆祝。",
        scene:"粉彩礼堂里彩带飞舞，穿学士袍的小叶学姐和动物毕业生们在舞台上庆祝，纸屑纷飞。",
        words:[
          {word:"grand",     ipa:"/ɡrænd/",      pos:"adj.", zh:"壮大的，堂皇的；伟大的",    forms:["grand"]},
          {word:"ceremony",  ipa:"/ˈserɪməʊni/", pos:"n.",   zh:"典礼，仪式；礼节，礼仪",    forms:["ceremony"]},
          {word:"preside",   ipa:"/prɪˈzaɪd/",   pos:"vi.",  zh:"主持（会议等），负责指挥",  forms:["presides"]},
          {word:"deliver",   ipa:"/dɪˈlɪvə/",    pos:"v.",   zh:"发表（演讲）；送交，投递",  forms:["delivers"]},
          {word:"behalf",    ipa:"/bɪˈhɑːf/",    pos:"n.",   zh:"[用于惯用语] 代表；利益",   forms:["behalf"]},
          {word:"celebrate", ipa:"/ˈselɪbreɪt/", pos:"v.",   zh:"庆祝；歌颂",               forms:["celebrate"]}
        ]
      },
      {
        id:"A6-P2", slug:"tem4-A6-P2", title:"学士服与合影", shape:"叶形",
        poster:"assets/tem4/posters/A6_P2.png",
        sentence:"In the garden we clasp our gowns, pose beside the old tree, laugh at every camera click, and later enlarge the best photo to present it to our parents.",
        sentenceCn:"花园里我们扣好学士服，在老树旁摆好姿势拍照，被相机的每一次咔嗒声逗得大笑，之后把最好的一张照片放大，送给我们的父母。",
        scene:"阳光校园花园里，穿学士袍的小叶学姐和同学们在老树下摆姿势，兔子摄影师举着相机拍照，花瓣飘飞。",
        words:[
          {word:"clasp",   ipa:"/klɑːsp; klæsp/", pos:"v./n.", zh:"扣住，扣紧；紧握 n. 扣子，钩子",      forms:["clasp"]},
          {word:"pose",    ipa:"/pəʊz/",          pos:"v.",    zh:"摆姿势；提出（问题）；造成",          forms:["pose"]},
          {word:"laugh",   ipa:"/lɑːf; læf/",     pos:"n./v.", zh:"笑，笑声 v. 笑，发笑",               forms:["laugh"]},
          {word:"click",   ipa:"/klɪk/",          pos:"n./v.", zh:"（摄影机等的）咔嗒声 v. 发出咔嗒声", forms:["click"]},
          {word:"enlarge", ipa:"/ɪnˈlɑːdʒ/",      pos:"v.",    zh:"扩大，放大（照片），扩展",            forms:["enlarge"]},
          {word:"present", ipa:"/prɪˈzent/",      pos:"vt.",   zh:"给予，赠送；呈递；上演",              forms:["present"]}
        ]
      },
      {
        id:"A6-P3", slug:"tem4-A6-P3", title:"告别与祝福", shape:"椭圆",
        poster:"assets/tem4/posters/A6_P3.png",
        sentence:"Before we separate, we share a sincere hug, cheer for each other\u2019s future, appreciate our teachers with all our hearts, and hope this album will always remind us of the good old days.",
        sentenceCn:"分开之前，我们真诚地相拥，为彼此的未来欢呼，由衷地感谢老师，并希望这本相册能永远让我们想起美好的旧日时光。",
        scene:"粉色夕阳下的校门口，小叶学姐与含泪的兔子同学拥抱告别，周围同学们挥手欢呼，鲜花盛开。",
        words:[
          {word:"separate",   ipa:"/ˈseprɪt/",     pos:"adj.",  zh:"分离的，分开的；各自的",   forms:["separate"]},
          {word:"sincere",    ipa:"/sɪnˈsɪə/",     pos:"adj.",  zh:"真实的，真诚的；直率的",   forms:["sincere"]},
          {word:"hug",        ipa:"/hʌɡ/",         pos:"v./n.", zh:"拥抱，紧抱 n. 热烈拥抱",   forms:["hug"]},
          {word:"cheer",      ipa:"/tʃɪə/",        pos:"v./n.", zh:"使振奋；为…喝彩 n. 欢呼",  forms:["cheer"]},
          {word:"appreciate", ipa:"/əˈpriːʃieɪt/", pos:"v.",    zh:"感谢，感激；欣赏，鉴赏",   forms:["appreciate"]},
          {word:"remind",     ipa:"/rɪˈmaɪnd/",    pos:"vt.",   zh:"提醒，使想起",             forms:["remind"]}
        ]
      },
      {
        id:"A6-P4", slug:"tem4-A6-P4", title:"难忘的回忆", shape:"超圆角",
        poster:"assets/tem4/posters/A6_P4.png",
        sentence:"Years later we still recall our first class, recollect the sleepless nights before exams, acknowledge every teacher who guided us, and dedicate this page to the eternal memory of our campus days.",
        sentenceCn:"多年以后，我们仍会忆起第一堂课，回想考试前的不眠之夜，感谢每一位指引过我们的老师，并把这一页献给校园岁月的永恒记忆。",
        scene:"温馨的夜晚宿舍里，暖灯下小叶学姐坐在地毯上翻看大相册，四周散落着拍立得照片和干花。",
        words:[
          {word:"recall",      ipa:"/rɪˈkɔːl/",    pos:"v./n.", zh:"忆起，想起；召回 n. 回忆",       forms:["recall"]},
          {word:"recollect",   ipa:"/ˌrekəˈlekt/", pos:"v.",    zh:"回忆，回想",                     forms:["recollect"]},
          {word:"acknowledge", ipa:"/əkˈnɒlɪdʒ/",  pos:"v.",    zh:"承认；表示感谢；告知收到",       forms:["acknowledge"]},
          {word:"dedicate",    ipa:"/ˈdedɪkeɪt/",  pos:"vt.",   zh:"把（时间、精力等）献给；奉献",   forms:["dedicate"]},
          {word:"eternal",     ipa:"/ɪˈtɜːnl/",    pos:"adj.",  zh:"永远（不变）的，永恒的",         forms:["eternal"]},
          {word:"memory",      ipa:"/ˈmeməri/",    pos:"n.",    zh:"记忆，记忆力；回忆，怀念",       forms:["memory"]}
        ]
      },
      {
        id:"A6-P5", slug:"tem4-A6-P5", title:"奔向新起点", shape:"波浪",
        poster:"assets/tem4/posters/A6_P5.png",
        sentence:"With great ambition and optimistic hearts, the graduates envision a promising future, view the world from a fresh perspective, and set out to realize their full potential.",
        sentenceCn:"毕业生们满怀壮志与乐观，展望大有希望的未来，以全新的视角看待世界，并启程去实现自身的全部潜力。",
        scene:"穿学士袍的小叶学姐拉着小行李箱，沿着小路走出敞开的校门，奔向粉彩色的朝阳，飞鸟相伴。",
        words:[
          {word:"ambition",    ipa:"/æmˈbɪʃən/",     pos:"n.",      zh:"志向，抱负，雄心；野心",     forms:["ambition"]},
          {word:"optimistic",  ipa:"/ˌɒptɪˈmɪstɪk/", pos:"adj.",    zh:"乐观的，乐观主义的",         forms:["optimistic"]},
          {word:"envision",    ipa:"/ɪnˈvɪʒən/",     pos:"vt.",     zh:"想象；展望",                 forms:["envision"]},
          {word:"promising",   ipa:"/ˈprɒmɪsɪŋ/",    pos:"adj.",    zh:"有希望的，有前途的，有出息的", forms:["promising"]},
          {word:"perspective", ipa:"/pəˈspektɪv/",   pos:"n.",      zh:"观点，看法；前景，展望",     forms:["perspective"]},
          {word:"potential",   ipa:"/pəˈtenʃəl/",    pos:"n./adj.", zh:"潜力，潜能 adj. 潜在的",     forms:["potential"]}
        ]
      }
    ]
  },
  /* ===== B 工作与职业 ===== */
  {
    id:"B1", cat:"B", zh:"职场日常", name:"Office Daily", status:"live",
    date:"2026-09-14", words:30, desc:"职场一天：清晨到岗、部门会议、项目与合同、邮件与沟通、加班与收获",
    color:"#4A90D9",
    parts:[
      {
        id:"B1-P1", slug:"tem4-B1-P1", title:"清晨到岗", shape:"拱门",
        poster:"assets/tem4/posters/B1_P1.png",
        sentence:"Punctual as ever, the staff begin their morning routine in the bright office, and the superior assigns each task that will occupy everyone until dusk.",
        sentenceCn:"和往常一样准时，职员们在明亮的办公室里开始晨间例行工作，上司分派好每一项任务，让大家一直忙碌到傍晚。",
        scene:"清晨明亮的办公室里，背着小包的小叶学姐准时走进来，向工位上的动物同事们挥手问好，墙上挂钟指向早晨。",
        words:[
          {word:"punctual", ipa:"/ˈpʌŋktjuəl/",  pos:"adj.",    zh:"准时的，按时的",               forms:["Punctual"]},
          {word:"routine",  ipa:"/ruːˈtiːn/",    pos:"n.",      zh:"常规，惯例；例行公事",         forms:["routine"]},
          {word:"staff",    ipa:"/stɑːf; stæf/", pos:"n.",      zh:"全体职员，全体工作人员",       forms:["staff"]},
          {word:"superior", ipa:"/sjuːˈpɪəriə/", pos:"adj./n.", zh:"优良的，卓越的 n. 上司，上级", forms:["superior"]},
          {word:"assign",   ipa:"/əˈsaɪn/",      pos:"vt.",     zh:"分配（工作、任务等）；委派",   forms:["assigns"]},
          {word:"occupy",   ipa:"/ˈɒkjupaɪ/",    pos:"vt.",     zh:"使忙碌；占据，占用",           forms:["occupy"]}
        ]
      },
      {
        id:"B1-P2", slug:"tem4-B1-P2", title:"部门会议", shape:"叶形",
        poster:"assets/tem4/posters/B1_P2.png",
        sentence:"In the meeting room the team arranges today\u2019s agenda, the manager proposes a new plan, everyone communicates ideas freely and cooperates on every detail, until the director finally confirms and approves the proposal.",
        sentenceCn:"会议室里，团队安排好今天的议程，经理提出一个新方案，大家畅所欲言、在每个细节上通力合作，最后由主管确认并批准这项提议。",
        scene:"温馨的会议室里，小叶学姐拿着教鞭在贴满便利贴的白板前讲解，动物同事们围坐椭圆桌认真听讲，笔记本电脑和茶杯摆放整齐。",
        words:[
          {word:"arrange",     ipa:"/əˈreɪndʒ/",      pos:"v.",  zh:"筹备，安排；整理，排列",       forms:["arranges"]},
          {word:"propose",     ipa:"/prəˈpəʊz/",      pos:"v.",  zh:"建议，提议；企图，打算",       forms:["proposes"]},
          {word:"approve",     ipa:"/əˈpruːv/",       pos:"v.",  zh:"批准，通过；赞成，称许",       forms:["approves"]},
          {word:"communicate", ipa:"/kəˈmjuːnɪkeɪt/", pos:"v.",  zh:"传达（意见、消息等），交流",   forms:["communicates"]},
          {word:"cooperate",   ipa:"/kəʊˈɒpəreɪt/",   pos:"v.",  zh:"合作，协力",                   forms:["cooperates"]},
          {word:"confirm",     ipa:"/kənˈfɜːm/",      pos:"vt.", zh:"确认；证实；批准，使有效",     forms:["confirms"]}
        ]
      },
      {
        id:"B1-P3", slug:"tem4-B1-P3", title:"项目与合同", shape:"椭圆",
        poster:"assets/tem4/posters/B1_P3.png",
        sentence:"To complete the project on time, the team checks every budget item, studies the contract clause by clause, and negotiates each transaction carefully with the client before signing.",
        sentenceCn:"为了按时完成项目，团队核对每一项预算条目，逐条研究合同，并在签署前与客户仔细商谈每笔交易。",
        scene:"明亮的办公室里，小叶学姐坐在整洁的办公桌前用钢笔签署合同，动物合作伙伴竖起大拇指，桌上有计算器和预算图表。",
        words:[
          {word:"budget",      ipa:"/ˈbʌdʒɪt/",     pos:"n.",      zh:"预算；金额 v. 编制预算",       forms:["budget"]},
          {word:"item",        ipa:"/ˈaɪtəm/",      pos:"n.",      zh:"条，项目，条款",               forms:["item"]},
          {word:"contract",    ipa:"/ˈkɒntrækt/",   pos:"n.",      zh:"契约，合同",                   forms:["contract"]},
          {word:"negotiate",   ipa:"/nɪˈɡəʊʃieɪt/", pos:"v.",      zh:"谈判，协商",                   forms:["negotiates"]},
          {word:"transaction", ipa:"/trænˈzækʃən/", pos:"n.",      zh:"业务，交易；办理，处理",       forms:["transaction"]},
          {word:"complete",    ipa:"/kəmˈpliːt/",   pos:"v./adj.", zh:"完成 adj. 完整的，全部的",     forms:["complete"]}
        ]
      },
      {
        id:"B1-P4", slug:"tem4-B1-P4", title:"邮件与沟通", shape:"超圆角",
        poster:"assets/tem4/posters/B1_P4.png",
        sentence:"Each morning the manager announces the day\u2019s plan by email, the assistant circulates the memo, colleagues correspond with clients, and the secretary conveys every change to inform and notify the whole team.",
        sentenceCn:"每天早上，经理用电子邮件宣布当天的计划，助理传阅备忘录，同事们与客户通信往来，秘书传达每一处变动，告知整个团队。",
        scene:"小叶学姐坐在办公桌前开心地敲笔记本电脑，粉彩信封和邮件图标从屏幕飞向背景里的动物同事，桌上有绿植和奶茶。",
        words:[
          {word:"announce",   ipa:"/əˈnaʊns/",     pos:"v.",  zh:"宣布；预告，通报",             forms:["announces"]},
          {word:"circulate",  ipa:"/ˈsɜːkjuleɪt/", pos:"v.",  zh:"（使）循环；散布，传阅",       forms:["circulates"]},
          {word:"correspond", ipa:"/ˌkɒrɪˈspɒnd/", pos:"v.",  zh:"通信；符合，一致",             forms:["correspond"]},
          {word:"convey",     ipa:"/kənˈveɪ/",     pos:"v.",  zh:"传达，传递；运输，运送",       forms:["conveys"]},
          {word:"inform",     ipa:"/ɪnˈfɔːm/",     pos:"v.",  zh:"通知，告知，使了解",           forms:["inform"]},
          {word:"notify",     ipa:"/ˈnəʊtɪfaɪ/",   pos:"vt.", zh:"（正式）通知（某人），告知",   forms:["notify"]}
        ]
      },
      {
        id:"B1-P5", slug:"tem4-B1-P5", title:"加班与收获", shape:"波浪",
        poster:"assets/tem4/posters/B1_P5.png",
        sentence:"To meet the deadline she adjusts her heavy load of tasks, works out more efficient methods, toils late into the evening, and finally attains the goal she truly deserves.",
        sentenceCn:"为了赶上截止日期，她调整繁重的任务量，想出更高效的方法，一直忙碌到深夜，最终实现了自己应得的目标。",
        scene:"温馨的夜晚办公室，窗外是粉彩星空和月牙，小叶学姐伸着懒腰，桌上暖灯、金色小奖杯和亮着对勾的笔记本电脑。",
        words:[
          {word:"efficient", ipa:"/ɪˈfɪʃənt/", pos:"adj.",    zh:"效率高的；有能力的，能胜任的", forms:["efficient"]},
          {word:"adjust",    ipa:"/əˈdʒʌst/",  pos:"v.",      zh:"调整，整顿；使适应",           forms:["adjusts"]},
          {word:"load",      ipa:"/ləʊd/",     pos:"n.",      zh:"负担，负荷；工作量",           forms:["load"]},
          {word:"toil",      ipa:"/tɔɪl/",     pos:"n./vi.",  zh:"苦工，苦活 vi. 辛苦工作",      forms:["toils"]},
          {word:"attain",    ipa:"/əˈteɪn/",   pos:"v.",      zh:"达到，完成，获得，实现",       forms:["attains"]},
          {word:"deserve",   ipa:"/dɪˈzɜːv/",  pos:"v.",      zh:"应得，应受，值得",             forms:["deserves"]}
        ]
      }
    ]
  },
  {
    id:"B2", cat:"B", zh:"求职面试", name:"Job Interview", status:"live",
    date:"2026-09-15", words:30, desc:"求职一天：职位空缺、面试前的准备、问答环节、面试官的青睐、录用与展望",
    color:"#4A90D9",
    parts:[
      {
        id:"B2-P1", slug:"tem4-B2-P1", title:"职位空缺", shape:"拱门",
        poster:"assets/tem4/posters/B2_P1.png",
        sentence:"Seeing that a post is vacant at a well-known company, she decides to apply for it, hoping that her solid ability and rich experience will qualify her to be engaged as a designer.",
        sentenceCn:"看到一家知名公司的职位空缺，她决定立即申请，希望自己扎实的能力和丰富的经验能让她有资格受聘为一名设计师。",
        scene:"粉彩蓝的公司公告栏前，小叶学姐抱着简历夹、背着电脑包驻足，公告栏上一张闪着星星的职位卡片正在发光。",
        words:[
          {word:"vacant",     ipa:"/ˈveɪkənt/",     pos:"adj.",   zh:"空的，未占用的；空缺的",       forms:["vacant"]},
          {word:"apply",      ipa:"/əˈplaɪ/",       pos:"v.",     zh:"申请，请求；应用，施用",       forms:["apply"]},
          {word:"ability",    ipa:"/əˈbɪlɪti/",     pos:"n.",     zh:"能力；才能，才智",             forms:["ability"]},
          {word:"experience", ipa:"/ɪkˈspɪəriəns/", pos:"vt./n.", zh:"经历，体验；经验，阅历",       forms:["experience"]},
          {word:"qualify",    ipa:"/ˈkwɒlɪfaɪ/",    pos:"v.",     zh:"使合适，（使）具有资格",       forms:["qualify"]},
          {word:"engage",     ipa:"/ɪnˈɡeɪdʒ/",     pos:"v.",     zh:"雇用，聘；使从事，使参加",     forms:["engaged"]}
        ]
      },
      {
        id:"B2-P2", slug:"tem4-B2-P2", title:"面试前的准备", shape:"叶形",
        poster:"assets/tem4/posters/B2_P2.png",
        sentence:"The evening before the interview, she polishes her self-introduction again and again, picks an appropriate and elegant outfit, and reminds herself to keep a positive attitude and courteous manners.",
        sentenceCn:"面试前的傍晚，她一遍遍润饰自我介绍，挑好一套得体又优雅的着装，并提醒自己保持积极的态度与礼貌的举止。",
        scene:"温馨的粉彩卧室里，小叶学姐对着圆镜整理着装和红丝巾，小桌上摊着笔记本和钢笔，门口放着擦得锃亮的鞋子和整洁的包。",
        words:[
          {word:"polish",      ipa:"/ˈpɒlɪʃ/",              pos:"v.",   zh:"磨光，擦亮；使完善，润饰",     forms:["polishes"]},
          {word:"appropriate", ipa:"/əˈprəʊpriət/",         pos:"adj.", zh:"适合的，适宜的",               forms:["appropriate"]},
          {word:"elegant",     ipa:"/ˈelɪɡənt/",            pos:"adj.", zh:"优雅的；精美的",               forms:["elegant"]},
          {word:"attitude",    ipa:"/ˈætɪtjuːd; ˈætɪtuːd/", pos:"n.",   zh:"态度，看法；姿势",             forms:["attitude"]},
          {word:"courteous",   ipa:"/ˈkɜːtjəs/",            pos:"adj.", zh:"有礼貌的，谦恭的",             forms:["courteous"]},
          {word:"manner",      ipa:"/ˈmænə/",               pos:"n.",   zh:"方式；态度，举止；[pl.] 礼貌", forms:["manners"]}
        ]
      },
      {
        id:"B2-P3", slug:"tem4-B2-P3", title:"问答环节", shape:"椭圆",
        poster:"assets/tem4/posters/B2_P3.png",
        sentence:"In the question round she answers in fluent English, explains the advantage of her teamwork and the drawback of being a perfectionist, reveals what she gained from her internship, and guarantees that she will keep learning.",
        sentenceCn:"问答环节里，她用流利的英语作答，说明自己团队合作的优势和追求完美的小缺点，讲述实习中的收获，并保证会不断学习。",
        scene:"明亮的粉彩面试间，小叶学姐端正地坐在圆桌前自信举手作答，对面两位穿西装的成年猴子面试官拿着问号卡和记录板。",
        words:[
          {word:"fluent",    ipa:"/ˈfluːənt/",                  pos:"adj.",   zh:"流畅的，流利的",               forms:["fluent"]},
          {word:"advantage", ipa:"/ədˈvɑːntɪdʒ/",               pos:"n.",     zh:"优势，益处，利益",             forms:["advantage"]},
          {word:"drawback",  ipa:"/ˈdrɔːbæk/",                  pos:"n.",     zh:"缺点，不利条件，短处",         forms:["drawback"]},
          {word:"reveal",    ipa:"/rɪˈviːl/",                   pos:"v.",     zh:"展现，显露；揭露",             forms:["reveals"]},
          {word:"gain",      ipa:"/ɡeɪn/",                      pos:"v.",     zh:"获得，博得；赢得，挣得",       forms:["gained"]},
          {word:"guarantee", ipa:"/ˌɡɑːrənˈtiː; ˌɡærənˈtiː/",  pos:"n./v.",  zh:"保证，保证书 v. 保证，担保",   forms:["guarantees"]}
        ]
      },
      {
        id:"B2-P4", slug:"tem4-B2-P4", title:"面试官的青睐", shape:"超圆角",
        poster:"assets/tem4/posters/B2_P4.png",
        sentence:"The interviewers are cordial and hearty, which puts her at ease; she speaks with dignity about her competence in team projects, sounding enthusiastic and responsible throughout.",
        sentenceCn:"面试官们热情友好，让她很快放松下来；她从容庄重地讲述自己在团队项目中的胜任能力，全程显得热情而可靠。",
        scene:"同一间明亮的面试间，小叶学姐起身微笑握手，西装面试官竖起大拇指，另一位在身后开心鼓掌，四周金色星星与彩带飞舞。",
        words:[
          {word:"cordial",      ipa:"/ˈkɔːdjəl/",        pos:"adj.", zh:"热情友好的，热诚的",           forms:["cordial"]},
          {word:"hearty",       ipa:"/ˈhɑːti/",          pos:"adj.", zh:"热情友好的；衷心的；健壮的",   forms:["hearty"]},
          {word:"dignity",      ipa:"/ˈdɪɡnɪti/",        pos:"n.",   zh:"尊严，高贵，体面，庄严",       forms:["dignity"]},
          {word:"competence",   ipa:"/ˈkɒmpɪtəns/",      pos:"n.",   zh:"能力，胜任某种工作的资格",     forms:["competence"]},
          {word:"enthusiastic", ipa:"/ɪnˌθjuːzɪˈæstɪk/", pos:"adj.", zh:"热情的，热心的，热烈的",       forms:["enthusiastic"]},
          {word:"responsible",  ipa:"/rɪˈspɒnsəbl/",     pos:"adj.", zh:"应负责的；可靠的；责任重大的", forms:["responsible"]}
        ]
      },
      {
        id:"B2-P5", slug:"tem4-B2-P5", title:"录用与展望", shape:"波浪",
        poster:"assets/tem4/posters/B2_P5.png",
        sentence:"A week later comes the good news: she is appointed to the post, the manager commends her zeal and careful preparation, and she believes this job will benefit her career and that she will keep improving until she is promoted.",
        sentenceCn:"一周后传来好消息：她被录用了，经理称赞她的热情与用心准备；她相信这份工作将有益于自己的职业发展，她会不断进步，直到获得晋升。",
        scene:"小叶学姐高举烫金录用信开心跳跃，身后是通向日出中粉彩办公楼的开阔大路，彩带与星星在空中飞舞，长尾愉快地卷起。",
        words:[
          {word:"appoint", ipa:"/əˈpɔɪnt/",  pos:"v.",    zh:"任命，（委）派；约定（时间、地点）", forms:["appointed"]},
          {word:"commend", ipa:"/kəˈmend/",  pos:"vt.",   zh:"称赞，赞扬；推荐",                   forms:["commends"]},
          {word:"zeal",    ipa:"/ziːl/",     pos:"n.",    zh:"热心，热情",                         forms:["zeal"]},
          {word:"benefit", ipa:"/ˈbenɪfɪt/", pos:"n./v.", zh:"利益，好处；津贴 v. 有益于",         forms:["benefit"]},
          {word:"improve", ipa:"/ɪmˈpruːv/", pos:"v.",    zh:"改进，提高，改善",                   forms:["improving"]},
          {word:"promote", ipa:"/prəˈməʊt/", pos:"vt.",   zh:"提升；促进；宣传，促销",             forms:["promoted"]}
        ]
      }
    ]
  },
  {
    id:"B3", cat:"B", zh:"商务会议", name:"Business Meeting", status:"live",
    date:"2026-09-16", words:30, desc:"商务会议一天：紧急召集、会前准备、开场陈述、激烈讨论、妥协与决议",
    color:"#4A90D9",
    parts:[
      {
        id:"B3-P1", slug:"tem4-B3-P1", title:"紧急召集", shape:"拱门",
        poster:"assets/tem4/posters/B3_P1.png",
        sentence:"Reviewing the annual report, the manager finds that revenue has kept declining since spring; he treats it as a quiet crisis, summons all department heads to an emergency meeting, and asks each team to bring its own forecast.",
        sentenceCn:"审阅年度报告时，经理发现收入自春季以来持续下滑；他把这一局面视为一场悄然逼近的危机，召集所有部门主管开紧急会议，并要求每个团队带上自己的预测。",
        scene:"清晨的粉彩办公室里，小叶学姐坐在书桌前翻看厚厚的年度报告，一手举着听筒打电话，神情略带担忧，墙上挂着日历，窗边洒满晨光。",
        words:[
          {word:"summon",   ipa:"/ˈsʌmən/",    pos:"vt.",   zh:"召唤，传唤，召集；鼓起勇气",                    forms:["summons"]},
          {word:"annual",   ipa:"/ˈænjuəl/",   pos:"adj.",  zh:"每年的，年度的",                                forms:["annual"]},
          {word:"decline",  ipa:"/dɪˈklaɪn/",  pos:"v.",    zh:"衰退，下降，减少；拒绝，婉辞 n. 下降，减少；衰退，衰落期", forms:["declining"]},
          {word:"crisis",   ipa:"/ˈkraɪsɪs/",  pos:"n.",    zh:"[pl. crises] 危机；危急存亡之际；转折点",       forms:["crisis"]},
          {word:"forecast", ipa:"/ˈfɔːkɑːst/", pos:"n./v.", zh:"预测，预示，预报",                              forms:["forecast"]},
          {word:"revenue",  ipa:"/ˈrevənjuː/", pos:"n.",    zh:"国家的税收，岁入；[pl.] 收入总额",              forms:["revenue"]}
        ]
      },
      {
        id:"B3-P2", slug:"tem4-B3-P2", title:"会前准备", shape:"叶形",
        poster:"assets/tem4/posters/B3_P2.png",
        sentence:"Before Friday, every department must submit a specific and concrete plan: the slides need to be clearly designed, and an elaborate outline of key points will be printed out so that no one walks into the meeting unprepared.",
        sentenceCn:"周五之前，每个部门都必须提交一份具体而明确的方案：幻灯片要设计得清晰明了，还要印出一份详尽的重点提纲，确保没有人毫无准备地走进会场。",
        scene:"粉彩办公室里，小叶学姐和同事们忙着准备会议材料，笔记本电脑上是一页页彩色幻灯片，打印机吐出整齐的资料，桌上的文件夹摆放有序。",
        words:[
          {word:"submit",    ipa:"/səbˈmɪt/",               pos:"v.",     zh:"服从，屈从；呈送，提交，提出",       forms:["submit"]},
          {word:"specific",  ipa:"/spəˈsɪfɪk/",             pos:"adj.",   zh:"明确的，详尽的；特定的，特指的",     forms:["specific"]},
          {word:"concrete",  ipa:"/ˈkɒnkriːt; kɒnˈkriːt/",  pos:"adj.",   zh:"具体的，有形的；明确的",             forms:["concrete"]},
          {word:"outline",   ipa:"/ˈaʊtlaɪn/",              pos:"n./vt.", zh:"轮廓；提纲，要点，概括；画出…的轮廓，打出…的草图", forms:["outline"]},
          {word:"elaborate", ipa:"/ɪˈlæbərɪt/",             pos:"adj.",   zh:"精心制作的；详尽阐述的；复杂的；精致的", forms:["elaborate"]},
          {word:"design",    ipa:"/dɪˈzaɪn/",               pos:"n./v.",  zh:"设计，图样，图案 v. 计划，图谋，打算；构思设计", forms:["designed"]}
        ]
      },
      {
        id:"B3-P3", slug:"tem4-B3-P3", title:"开场陈述", shape:"椭圆",
        poster:"assets/tem4/posters/B3_P3.png",
        sentence:"Opening the meeting, the manager declares its purpose, emphasizes that time is short, explains the new sales policy with clear figures, expresses his trust in the team, indicates two possible directions, and finally convinces everyone that the target is within reach.",
        sentenceCn:"会议开始，经理宣布会议目的，强调时间紧迫，用清晰的数据解释新的销售政策，表达了对团队的信任，指出两个可能的方向，最终让每个人都相信目标并非遥不可及。",
        scene:"明亮的粉彩会议室，小叶学姐站在长桌一头指着大屏幕讲解彩色图表，小动物同事们围坐桌边认真记笔记，窗边绿植点缀。",
        words:[
          {word:"declare",   ipa:"/dɪˈkleə/",   pos:"v.",  zh:"宣告，公告；表明，断言；申报（纳税品等）", forms:["declares"]},
          {word:"emphasize", ipa:"/ˈemfəsaɪz/", pos:"vt.", zh:"强调，着重，加强",                         forms:["emphasizes"]},
          {word:"explain",   ipa:"/ɪkˈspleɪn/", pos:"vt.", zh:"解释，说明；为…辩解，说明…的理由",         forms:["explains"]},
          {word:"express",   ipa:"/ɪkˈspres/",  pos:"vt.", zh:"表达，表示，表白 n. 快车 adj. 明白的，确切的；快速的", forms:["expresses"]},
          {word:"indicate",  ipa:"/ˈɪndɪkeɪt/", pos:"v.",  zh:"标示，指示，指出；表明，暗示",             forms:["indicates"]},
          {word:"convince",  ipa:"/kənˈvɪns/",  pos:"v.",  zh:"使确信，使信服；说服",                     forms:["convinces"]}
        ]
      },
      {
        id:"B3-P4", slug:"tem4-B3-P4", title:"激烈讨论", shape:"超圆角",
        poster:"assets/tem4/posters/B3_P4.png",
        sentence:"The free discussion soon turns heated: several managers challenge the forecast and dispute its figures, a few query the cost, the sales director insists on his own view and refutes the doubts one by one, though the two sides still disagree on timing.",
        sentenceCn:"自由讨论很快变得热烈：几位经理对预测提出质疑，就数据展开争论，还有人追问成本；销售总监坚持己见，逐一反驳各种疑问，但双方在时间安排上仍有分歧。",
        scene:"粉彩会议室里讨论正酣，小叶学姐站在涂满彩色标记的白板旁，两位同事举手热情发言，头顶飘着空白对话气泡，气氛热烈又可爱。",
        words:[
          {word:"challenge", ipa:"/ˈtʃælɪndʒ/",  pos:"n./vt.", zh:"挑战；异议，质疑；向…挑战，对…表示异议", forms:["challenge"]},
          {word:"dispute",   ipa:"/dɪsˈpjuːt/",  pos:"n./v.",  zh:"争吵，争论，争夺；质疑，反对；阻止，反抗", forms:["dispute"]},
          {word:"query",     ipa:"/ˈkwɪəri/",    pos:"n./v.",  zh:"质问，疑问，（提）问题",                   forms:["query"]},
          {word:"insist",    ipa:"/ɪnˈsɪst/",    pos:"v.",     zh:"坚持，坚决认为；坚决要求；强调",           forms:["insists"]},
          {word:"refute",    ipa:"/rɪˈfjuːt/",   pos:"vt.",    zh:"反驳，驳斥",                               forms:["refutes"]},
          {word:"disagree",  ipa:"/ˌdɪsəˈɡriː/", pos:"vi.",    zh:"不一致，不符；意见不合，有分歧",           forms:["disagree"]}
        ]
      },
      {
        id:"B3-P5", slug:"tem4-B3-P5", title:"妥协与决议", shape:"波浪",
        poster:"assets/tem4/posters/B3_P5.png",
        sentence:"After hours of argument, both sides finally make a mutual compromise; the amended proposal wins unanimous consent, the board adopts it on the spot, and everyone leaves the room knowing exactly what to do next week.",
        sentenceCn:"经过数小时的争论，双方终于做出相互的妥协；修正后的提案获得一致同意，董事会当场予以通过，每个人都清楚下周该做什么，才离开会议室。",
        scene:"温馨的粉彩会议室，小叶学姐与同事握手，桌上放着盖章的文件和小金铃，其他同事鼓掌欢呼，彩纸与星星飞舞，窗外夕阳温暖。",
        words:[
          {word:"compromise", ipa:"/ˈkɒmprəmaɪz/", pos:"n./v.", zh:"妥协，折中办法；互让解决，折中处理；危及，连累", forms:["compromise"]},
          {word:"mutual",     ipa:"/ˈmjuːtʃuəl/",  pos:"adj.",  zh:"相互的；共同的，共有的",                        forms:["mutual"]},
          {word:"amend",      ipa:"/əˈmend/",      pos:"v.",    zh:"修改，修正，改进",                              forms:["amended"]},
          {word:"unanimous",  ipa:"/juːˈnænɪməs/", pos:"adj.",  zh:"一致同意的，一致通过的",                        forms:["unanimous"]},
          {word:"consent",    ipa:"/kənˈsent/",    pos:"vi.",   zh:"同意，答应；承诺",                              forms:["consent"]},
          {word:"adopt",      ipa:"/əˈdɒpt/",      pos:"v.",    zh:"采用，采取（态度等）；收养；接受某种习俗；正式通过", forms:["adopts"]}
        ]
      }
    ]
  },
  {
    id:"B4", cat:"B", zh:"职业规划", name:"Career Planning", status:"live",
    date:"2026-09-17", words:30, desc:"职业规划一天：认识自己、设定目标、技能与成长、导师的建议、迈向未来",
    color:"#4A90D9",
    parts:[
      {
        id:"B4-P1", slug:"tem4-B4-P1", title:"认识自己", shape:"拱门",
        poster:"assets/tem4/posters/B4_P1.png",
        sentence:"To map out her future, Xiaoye first assesses her capability and her instinct, finds that she is fond of drawing, and inclines to fancy a creative job in a small design studio.",
        sentenceCn:"为了规划未来，小叶学姐先评估了自己的能力与天资，发现自己喜爱画画，于是倾向于设想一份设计工作室里的创意工作。",
        scene:"清晨的粉彩书房里，小叶学姐伏在书桌前写自我评估笔记，身边散落着画册与彩色铅笔，墙上软木板贴着彩色便签，晨光透过窗户洒进来。",
        words:[
          {word:"assess",     ipa:"/əˈses/",          pos:"vt.",  zh:"评估（价值或数额），评定，核定",       forms:["assesses"]},
          {word:"capability", ipa:"/ˌkeɪpəˈbɪləti/",  pos:"n.",   zh:"能力；素质，潜能",                     forms:["capability"]},
          {word:"instinct",   ipa:"/ˈɪnstɪŋkt/",      pos:"n.",   zh:"本能，天性；直觉；天资，天赋",         forms:["instinct"]},
          {word:"fond",       ipa:"/fɒnd/",           pos:"adj.", zh:"喜爱的，爱好的；溺爱的，深情的",       forms:["fond"]},
          {word:"incline",    ipa:"/ɪnˈklaɪn/",       pos:"v.",   zh:"（使）倾向（于），意欲；赞同，爱好；倾斜", forms:["inclines"]},
          {word:"fancy",      ipa:"/ˈfænsi/",         pos:"vt.",  zh:"想象，设想；喜爱，爱好 adj. 别致的，花哨的", forms:["fancy"]}
        ]
      },
      {
        id:"B4-P2", slug:"tem4-B4-P2", title:"设定目标", shape:"叶形",
        poster:"assets/tem4/posters/B4_P2.png",
        sentence:"Weighing every option carefully, she decides on a challenging but clear goal — to become a children's book illustrator; she determines to make a bid for her dream studio, and resolves that no difficulty will change her mind.",
        sentenceCn:"仔细权衡各种选择后，她定下一个有挑战却清晰的目标——成为童书插画师；她下定决心争取梦想中的工作室，并打定主意：任何困难都不会让她改变心意。",
        scene:"小叶学姐踩着小板凳站在软木板前，把彩色目标卡片一张张钉上去，脸上写满坚定，房间里绿植点缀，温馨明亮。",
        words:[
          {word:"weigh",       ipa:"/weɪ/",          pos:"v.",    zh:"称…的重量；斟酌，权衡，掂量",         forms:["Weighing"]},
          {word:"decide",      ipa:"/dɪˈsaɪd/",      pos:"v.",    zh:"决定；解决，判决；使下决心",           forms:["decides"]},
          {word:"challenging", ipa:"/ˈtʃælɪndʒɪŋ/",  pos:"adj.",  zh:"困难的；引起兴趣的，激发干劲的",       forms:["challenging"]},
          {word:"determine",   ipa:"/dɪˈtɜːmɪn/",    pos:"v.",    zh:"下决心，决意，决定；确定，测定",       forms:["determines"]},
          {word:"bid",         ipa:"/bɪd/",          pos:"n./v.", zh:"企图，努力；出价，投标 v. 命令，吩咐；出价", forms:["bid"]},
          {word:"resolve",     ipa:"/rɪˈzɒlv/",      pos:"v.",    zh:"决定，下决心；解决 n. 决心，决定",     forms:["resolves"]}
        ]
      },
      {
        id:"B4-P3", slug:"tem4-B4-P3", title:"技能与成长", shape:"椭圆",
        poster:"assets/tem4/posters/B4_P3.png",
        sentence:"To possess stronger drawing skills, she takes an evening illustration course; the training expands her capacity, enables her to cope with harder tasks, and soon she makes steady progress and advances faster than her classmates.",
        sentenceCn:"为了掌握更扎实的绘画技能，她报了晚间插画课；训练拓展了她的能力，使她能够应付更难的任务，很快她就取得稳步进步，速度超过了同学们。",
        scene:"夜晚的小叶学姐戴着小耳机，在书桌前跟着笔记本电脑上的插画网课练习画板，桌上摆满习作，暖黄的台灯亮着，窗外有月亮和星星。",
        words:[
          {word:"possess",  ipa:"/pəˈzes/",    pos:"vt.",   zh:"拥有；掌握（技能）",                   forms:["possess"]},
          {word:"capacity", ipa:"/kəˈpæsəti/", pos:"n.",    zh:"容量；能力；资格，地位",               forms:["capacity"]},
          {word:"enable",   ipa:"/ɪˈneɪbl/",   pos:"vt.",   zh:"使能够，使成为可能，使实现",           forms:["enables"]},
          {word:"cope",     ipa:"/kəʊp/",      pos:"v.",    zh:"（成功地）对付，应付",                 forms:["cope"]},
          {word:"progress", ipa:"/ˈprəʊɡres/", pos:"n.",    zh:"进步，进展；前进，进行",               forms:["progress"]},
          {word:"advance",  ipa:"/ədˈvɑːns/",  pos:"v./n.", zh:"前进，进步；提前 n. 前进，进步；预付款", forms:["advances"]}
        ]
      },
      {
        id:"B4-P4", slug:"tem4-B4-P4", title:"导师的建议", shape:"超圆角",
        poster:"assets/tem4/posters/B4_P4.png",
        sentence:"Her mentor advises her to stay flexible, supervises her practice every week, and often uses vivid stories to enlighten her; under such guidance, she gradually adapts to the pressure and orients herself toward a clear career path.",
        sentenceCn:"导师建议她保持灵活变通，每周监督她的练习，还常用生动的故事启发她；在这样的指导下，她逐渐适应了压力，并为自己确定了清晰的职业方向。",
        scene:"小叶学姐与戴圆眼镜的猫头鹰导师隔桌而坐，导师端着茶杯耐心讲述，小叶学姐认真记笔记，身后是高高的书架，午后阳光温暖。",
        words:[
          {word:"advise",    ipa:"/ədˈvaɪz/",      pos:"v.",   zh:"劝告，忠告，建议；通知",               forms:["advises"]},
          {word:"flexible",  ipa:"/ˈfleksəbl/",    pos:"adj.", zh:"柔韧的，易弯曲的；可变通的，灵活的；易适应的", forms:["flexible"]},
          {word:"supervise", ipa:"/ˈsjuːpəvaɪz/",  pos:"v.",   zh:"监督，管理，指导",                     forms:["supervises"]},
          {word:"enlighten", ipa:"/ɪnˈlaɪtən/",    pos:"vt.",  zh:"启发；开导，使摆脱偏见；指导，教育",   forms:["enlighten"]},
          {word:"adapt",     ipa:"/əˈdæpt/",       pos:"v.",   zh:"适应，适合；改编，改写",               forms:["adapts"]},
          {word:"orient",    ipa:"/ˈɔːriˌent/",    pos:"vt.",  zh:"使适应；确定位置",                     forms:["orients"]}
        ]
      },
      {
        id:"B4-P5", slug:"tem4-B4-P5", title:"迈向未来", shape:"波浪",
        poster:"assets/tem4/posters/B4_P5.png",
        sentence:"With grit and steady effort, she struggles through every setback, learns to convert criticism into motivation, waits for the optimal moment to elevate her position, and finally thrives in the career she once only dreamed of.",
        sentenceCn:"凭着坚毅与持续的努力，她闯过每一次挫折，学会把批评转化为动力，等待最佳时机提升自己的职位，最终在她曾经只能梦想的事业里蓬勃发展。",
        scene:"日出时分，小叶学姐背着小背包站在山顶草地上，眺望粉彩色的城市天际线，一条小路蜿蜒而上，云朵与飞鸟相伴，充满希望。",
        words:[
          {word:"grit",     ipa:"/ɡrɪt/",     pos:"n.",    zh:"坚毅，勇气，决心；砂粒",               forms:["grit"]},
          {word:"struggle", ipa:"/ˈstrʌɡl/",  pos:"v./n.", zh:"打斗，斗争；努力，奋斗",               forms:["struggles"]},
          {word:"convert",  ipa:"/kənˈvɜːt/", pos:"v.",    zh:"改变，转变；改变…的信仰；兑换",       forms:["convert"]},
          {word:"optimal",  ipa:"/ˈɒptɪməl/", pos:"adj.",  zh:"最适宜的，最理想的",                   forms:["optimal"]},
          {word:"elevate",  ipa:"/ˈelɪveɪt/", pos:"vt.",   zh:"抬起，升高；提升（职位），振奋（情绪）", forms:["elevate"]},
          {word:"thrive",   ipa:"/θraɪv/",    pos:"vi.",   zh:"兴盛，成功，繁荣",                     forms:["thrives"]}
        ]
      }
    ]
  },
  {
    id:"B5", cat:"B", zh:"办公工具", name:"Workplace Tools", status:"live",
    date:"2026-09-22", words:30, desc:"办公工具一天：新电脑开箱、文件整理、打印机风波、电话与信号、保养日",
    color:"#4A90D9",
    parts:[
      {
        id:"B5-P1", slug:"tem4-B5-P1", title:"新电脑开箱", shape:"拱门",
        poster:"assets/tem4/posters/B5_P1.png",
        sentence:"Xiaoye assembles her new computer, installs the software, flips the switch, watches the screen load with the default settings, opens the terminal, and finally gains access to all her files.",
        sentenceCn:"小叶学姐组装好新电脑，安装软件，按下开关，看着屏幕加载出厂预设设置，打开终端机，终于能存取她所有的文件。",
        scene:"粉彩办公室里，小叶学姐拿着小螺丝刀组装一台淡绿色的新电脑，桌上摆着主机、显示器零件和彩色线缆，身后是置物架与小盆栽，星光点点。",
        words:[
          {word:"assemble", ipa:"/əˈsembl/",  pos:"v.",  zh:"聚集，集合；装配（机器等）",             forms:["assembles"]},
          {word:"install",  ipa:"/ɪnˈstɔːl/", pos:"vt.", zh:"安装，设置；安顿，安置",                 forms:["installs"]},
          {word:"switch",   ipa:"/swɪtʃ/",    pos:"n.",  zh:"开关；突然改变，转换 v. 接通或切断（电流）", forms:["switch"]},
          {word:"default",  ipa:"/dɪˈfɔːlt/", pos:"n.",  zh:"（电脑的）预设，预置（值）；违约；拖欠",   forms:["default"]},
          {word:"terminal", ipa:"/ˈtɜːmɪnəl/",pos:"n.",  zh:"（电脑的）终端机；终点站；末端",         forms:["terminal"]},
          {word:"access",   ipa:"/ˈækses/",   pos:"n.",  zh:"通路；使用权 vt. 存取（计算机文件）",     forms:["access"]}
        ]
      },
      {
        id:"B5-P2", slug:"tem4-B5-P2", title:"文件整理", shape:"叶形",
        poster:"assets/tem4/posters/B5_P2.png",
        sentence:"She inputs the interview records, processes them one by one, classifies the answers into groups, sorts out the key quotes, labels each folder clearly, and pastes her favorite comments on the wall.",
        sentenceCn:"她把访谈记录输入电脑，逐一处理，把回答分类归组，整理出关键引语，给每个文件夹贴上清楚的标签，再把最喜欢的评语粘贴在墙上。",
        scene:"小叶学姐在淡紫色键盘上专注打字，显示器上是彩色抽象图形，桌边堆着粉黄绿三色便签和文件夹，淡蓝色办公室背景温馨明亮。",
        words:[
          {word:"input",    ipa:"/ˈɪnpʊt/",    pos:"n./v.", zh:"输入（信息、程序等），投入",           forms:["inputs"]},
          {word:"process",  ipa:"/ˈprəʊses/",  pos:"n.",    zh:"步骤，过程；工序 vt. 加工，处理",       forms:["processes"]},
          {word:"classify", ipa:"/ˈklæsɪfaɪ/", pos:"v.",    zh:"把…分类，把（货物等）分等级；把…归入某类", forms:["classifies"]},
          {word:"sort",     ipa:"/sɔːt/",      pos:"vt.",   zh:"分类，整理 n. 种类，类别",             forms:["sorts"]},
          {word:"label",    ipa:"/ˈleɪbl/",    pos:"vt.",   zh:"贴标签于；把…称为 n. 标签，标贴",       forms:["labels"]},
          {word:"paste",    ipa:"/peɪst/",     pos:"vt.",   zh:"贴，粘贴 n. 糨糊",                     forms:["pastes"]}
        ]
      },
      {
        id:"B5-P3", slug:"tem4-B5-P3", title:"打印机风波", shape:"椭圆",
        poster:"assets/tem4/posters/B5_P3.png",
        sentence:"Suddenly the printer halts with a jam, the whole machine vibrates and gives everyone a small shock, so Xiaoye unplugs it first, then opens the cover to find the fault.",
        sentenceCn:"突然打印机卡纸停了下来，整台机器振动起来，还让大家被轻轻电了一下，小叶学姐先拔掉电源插头，再打开盖子查找毛病。",
        scene:"小叶学姐俯身查看一台卡纸的粉色打印机，出纸口卡着白纸，她一手扶着掀开的盖子、一手拿着电源插头，淡黄色办公室窗边有绿植。",
        words:[
          {word:"jam",     ipa:"/dʒæm/",      pos:"n.",  zh:"拥挤，堵塞；困境 v. 挤塞，夹住，卡住",   forms:["jam"]},
          {word:"halt",    ipa:"/hɔːlt/",     pos:"v.",  zh:"停止前进；停止，停住 n. 中止，停止",     forms:["halts"]},
          {word:"vibrate", ipa:"/vaɪˈbreɪt/", pos:"v.",  zh:"（使某物）颤动，振动；振动出声或发颤音", forms:["vibrates"]},
          {word:"shock",   ipa:"/ʃɒk/",       pos:"n.",  zh:"冲击，震动；电震，电击；休克；震惊",     forms:["shock"]},
          {word:"unplug",  ipa:"/ʌnˈplʌɡ/",   pos:"vt.", zh:"拔出（电器）的电源插头；除去障碍物",     forms:["unplugs"]},
          {word:"fault",   ipa:"/fɔːlt/",     pos:"n.",  zh:"缺点，毛病；错误；责任，过失",           forms:["fault"]}
        ]
      },
      {
        id:"B5-P4", slug:"tem4-B5-P4", title:"电话与信号", shape:"超圆角",
        poster:"assets/tem4/posters/B5_P4.png",
        sentence:"During the phone meeting the device transmits her voice, yet the reception is poor; Xiaoye links a new wire that conducts the signal better, raises the frequency a little, and finally hears the alert clearly.",
        sentenceCn:"电话会议中设备传送着她的声音，但信号接收很差；小叶学姐接上一根传导性能更好的新电线，把频率调高了一点，终于清晰地听到了提示音。",
        scene:"小叶学姐拿着珊瑚红色电话听筒开心通话，另一只手小心地把新电线插进电话底座，空中飘着信号波纹，淡绿色办公室背景有置物架和挂钟。",
        words:[
          {word:"transmit",  ipa:"/trænzˈmɪt/",   pos:"v.", zh:"播送，传送；传染，传播；传导，传动", forms:["transmits"]},
          {word:"reception", ipa:"/rɪˈsepʃən/",   pos:"n.", zh:"接待，欢迎；接受；（信号等）的接收",  forms:["reception"]},
          {word:"link",      ipa:"/lɪŋk/",        pos:"v.", zh:"连接，结合 n. 联系，关联；链环",      forms:["links"]},
          {word:"conduct",   ipa:"/ˈkɒndʌkt/",    pos:"v.", zh:"引导；实施；传导，传（热、电等）",    forms:["conducts"]},
          {word:"frequency", ipa:"/ˈfriːkwənsi/", pos:"n.", zh:"次数，频率；频繁，屡次；周率",        forms:["frequency"]},
          {word:"alert",     ipa:"/əˈlɜːt/",      pos:"n.", zh:"警报 v. 向…发出警报 adj. 警觉的",     forms:["alert"]}
        ]
      },
      {
        id:"B5-P5", slug:"tem4-B5-P5", title:"保养日", shape:"波浪",
        poster:"assets/tem4/posters/B5_P5.png",
        sentence:"Every Friday Xiaoye maintains each machine, checks that every mechanism operates smoothly, replaces the dirty filter, records any tiny defect, and keeps the account of all the tools in order.",
        sentenceCn:"每周五，小叶学姐都会保养每台机器，检查每个机械装置是否运转顺畅，更换脏了的滤网，记下任何细小瑕疵，并把工具账目整理得井井有条。",
        scene:"保养日的小叶学姐戴着小手套、提着打开的工具箱，用软刷清洁淡蓝色打印机和电脑主机，桌上摆着崭新的圆形滤网和放大镜，午后暖光洒进窗户。",
        words:[
          {word:"maintain",  ipa:"/menˈteɪn/",   pos:"vt.", zh:"维修，保养；赡养，供养；保持",         forms:["maintains"]},
          {word:"mechanism", ipa:"/ˈmekənɪzəm/", pos:"n.",  zh:"机械装置；结构，机制，机构",           forms:["mechanism"]},
          {word:"operate",   ipa:"/ˈɒpəreɪt/",   pos:"v.",  zh:"操作，（使）运转；经营；动手术",       forms:["operates"]},
          {word:"filter",    ipa:"/ˈfɪltə/",     pos:"n.",  zh:"过滤器，过滤装置 v. 过滤，滤除",       forms:["filter"]},
          {word:"defect",    ipa:"/ˈdiːfekt/",   pos:"n.",  zh:"缺点，瑕疵",                           forms:["defect"]},
          {word:"account",   ipa:"/əˈkaʊnt/",    pos:"n.",  zh:"账，账目，账户；报道，记载；理由",     forms:["account"]}
        ]
      }
    ]
  },
  /* ===== C 日常生活 ===== */
  {
    id:"C1", cat:"C", zh:"家庭与家居", name:"Family & Home", status:"live",
    date:"2026-09-23", words:30, desc:"安家一天：乔迁安家、晨光厨房、周末大扫除、傍晚修整、灯火晚安",
    color:"#4A90D9",
    parts:[
      {
        id:"C1-P1", slug:"tem4-C1-P1", title:"乔迁安家", shape:"拱门",
        poster:"assets/tem4/posters/C1_P1.png",
        sentence:"After signing the lease for a small property adjacent to the riverside park, the family decides to reside there at once, furnishes each room with warm wooden shelves, and decorates the walls with their own paintings.",
        sentenceCn:"签下游河畔公园旁一处小房产的租约后，一家人决定立刻入住，用温暖的木架布置好每个房间，再把自己画的画挂上墙作装饰。",
        scene:"粉彩暖调的新家客厅里，小叶学姐站在小梯凳上把画挂上墙，身旁堆着纸箱、木书架和钥匙串，窗外是河畔公园的绿树。",
        words:[
          {word:"lease",    ipa:"/liːs/",       pos:"n.",   zh:"租赁，租约 v. 出租，租得",  forms:["lease"]},
          {word:"property", ipa:"/ˈprɒpəti/",   pos:"n.",   zh:"财产，所有物；不动产，房地产", forms:["property"]},
          {word:"adjacent", ipa:"/əˈdʒeɪsənt/", pos:"adj.", zh:"邻近的",                    forms:["adjacent"]},
          {word:"reside",   ipa:"/rɪˈzaɪd/",    pos:"vi.",  zh:"居住，定居",                forms:["reside"]},
          {word:"furnish",  ipa:"/ˈfɜːnɪʃ/",    pos:"v.",   zh:"供应，提供；为…配备家具",   forms:["furnishes"]},
          {word:"decorate", ipa:"/ˈdekəreɪt/",  pos:"v.",   zh:"装饰，装修，粉刷",          forms:["decorates"]}
        ]
      },
      {
        id:"C1-P2", slug:"tem4-C1-P2", title:"晨光厨房", shape:"叶形",
        poster:"assets/tem4/posters/C1_P2.png",
        sentence:"In the bright morning kitchen, she bakes the toast carefully so as not to overdo it, scrapes the crumbs from the table, rinses the mugs and lines them up beside the sink, and flushes cold water through the pipes to drive out the overnight chill.",
        sentenceCn:"在明亮的晨间厨房里，她小心地烤着吐司以免烤过头，把面包屑从桌上刮落，洗净杯子一字排开放在水槽边，再放冷水冲一冲管道，赶走隔夜的寒气。",
        scene:"洒满晨光的粉彩厨房，小叶学姐系着围裙站在烤面包机旁，金黄吐司正跳出来，洗净的杯子在水槽边排成一排。",
        words:[
          {word:"toast",  ipa:"/təʊst/",     pos:"n.", zh:"烤面包片，吐司；祝酒词 v. 烤，烘", forms:["toast"]},
          {word:"overdo", ipa:"/ˌəʊvəˈduː/", pos:"v.", zh:"做（使用）…过度，把…煮太久",       forms:["overdo"]},
          {word:"scrape", ipa:"/skreɪp/",    pos:"v.", zh:"削，刮落，擦去；刮坏，擦伤",       forms:["scrapes"]},
          {word:"sink",   ipa:"/sɪŋk/",      pos:"n.", zh:"洗涤槽；污水池 v. 沉下，下陷",     forms:["sink"]},
          {word:"flush",  ipa:"/flʌʃ/",      pos:"v.", zh:"冲洗，清除；脸红，发红",           forms:["flushes"]},
          {word:"chill",  ipa:"/tʃɪl/",      pos:"n.", zh:"寒冷，寒气；寒战，寒意 v. 使变冷", forms:["chill"]}
        ]
      },
      {
        id:"C1-P3", slug:"tem4-C1-P3", title:"周末大扫除", shape:"椭圆",
        poster:"assets/tem4/posters/C1_P3.png",
        sentence:"On Saturday morning the whole family sweeps the floor, scrubs the sticky dining table, wipes every window until it shines, clears the clutter from the hallway, removes the old posters from the wall, and is glad to rid the house of a whole week's dust.",
        sentenceCn:"星期六早晨，全家人一起扫地、用力擦净黏黏的餐桌、把每扇窗擦得发亮、清走走廊里的杂物、揭下墙上的旧海报，很开心让房子摆脱了一整周的灰尘。",
        scene:"明亮的粉彩客厅里，小叶学姐挥着扫帚扫地，两位叶猴家人一起擦窗、擦桌，水桶里泡沫星星点点。",
        words:[
          {word:"sweep",  ipa:"/swiːp/",   pos:"v.",   zh:"打扫；掠过，拂过 n. 打扫",     forms:["sweeps"]},
          {word:"scrub",  ipa:"/skrʌb/",   pos:"v.",   zh:"用力擦洗，擦净；取消，剔除",   forms:["scrubs"]},
          {word:"wipe",   ipa:"/waɪp/",    pos:"v.",   zh:"抹，擦，去除",                 forms:["wipes"]},
          {word:"clear",  ipa:"/klɪə/",    pos:"adj.", zh:"清晰的，清澈的 v. 清除，扫清", forms:["clears"]},
          {word:"remove", ipa:"/rɪˈmuːv/", pos:"v.",   zh:"取去，移动；除去，消除",       forms:["removes"]},
          {word:"rid",    ipa:"/rɪd/",     pos:"vt.",  zh:"使摆脱，使去掉，使获自由",     forms:["rid"]}
        ]
      },
      {
        id:"C1-P4", slug:"tem4-C1-P4", title:"傍晚修整", shape:"超圆角",
        poster:"assets/tem4/posters/C1_P4.png",
        sentence:"Before supper she knocks the loose nail back into the old chair, repairs the handle worn by ten years of use, tosses the toys into the box, hangs the coats on the rack by the door, coaxes the shy kitten out from under the sofa, and watches the garden gate swing shut.",
        sentenceCn:"晚饭前，她把松动的钉子敲回旧椅子里，修好磨损了十年的把手，把玩具扔进箱子，把外套挂上门边的衣架，把害羞的小猫从沙发底下哄出来，看着院门在身后轻轻摆上关好。",
        scene:"黄昏的粉彩门厅，小叶学姐举小锤敲紧旧椅子上的钉子，门边衣架挂着外套，小猫从沙发下探出头来。",
        words:[
          {word:"knock", ipa:"/nɒk/",   pos:"v.",   zh:"打，击，敲；相撞 n. 一击，敲门（声）", forms:["knocks"]},
          {word:"wear",  ipa:"/weə/",   pos:"v.",   zh:"穿，戴，佩；耗损，磨损",               forms:["worn"]},
          {word:"toss",  ipa:"/tɒs/",   pos:"v.",   zh:"投，扔，抛；掷（钱币）",               forms:["tosses"]},
          {word:"rack",  ipa:"/ræk/",   pos:"n.",   zh:"（放置物件的）架子 vt. 使痛苦，折磨",  forms:["rack"]},
          {word:"coax",  ipa:"/kəʊks/", pos:"v.",   zh:"哄，劝诱；耐心地摆弄",                 forms:["coaxes"]},
          {word:"swing", ipa:"/swɪŋ/",  pos:"v.",   zh:"（使）来回摆动，摇荡；旋转 n. 秋千",   forms:["swing"]}
        ]
      },
      {
        id:"C1-P5", slug:"tem4-C1-P5", title:"灯火晚安", shape:"波浪",
        poster:"assets/tem4/posters/C1_P5.png",
        sentence:"When evening falls, the family lights the lanterns that illuminate the little garden, watches their soft glow sway in the breeze and fireflies flash above the flowerbeds, waves goodnight to a brood of sparrows under the eaves, and finally extinguishes the candles before bed.",
        sentenceCn:"夜幕降临，全家人点亮照亮小花园的灯笼，看着柔光在晚风中轻摆、萤火虫在花坛上空闪烁，向屋檐下的一窝小麻雀道晚安，最后在睡前熄灭蜡烛。",
        scene:"粉彩夜色的小花园里，小叶学姐提着暖黄的灯笼照亮花坛，萤火虫点点飞舞，屋檐下一窝小麻雀依偎而眠。",
        words:[
          {word:"light",      ipa:"/laɪt/",        pos:"n.",  zh:"光线；灯火 v. 点燃；照亮",          forms:["lights"]},
          {word:"illuminate", ipa:"/ɪˈluːmɪneɪt/", pos:"v.",  zh:"照明，照射；用灯装饰；阐明，启发", forms:["illuminate"]},
          {word:"sway",       ipa:"/sweɪ/",        pos:"v.",  zh:"（使）摇摆，（使）摆动；支配，影响", forms:["sway"]},
          {word:"flash",      ipa:"/flæʃ/",        pos:"v.",  zh:"（使）闪光，（使）闪烁；飞驰，掠过", forms:["flash"]},
          {word:"brood",      ipa:"/bruːd/",       pos:"n.",  zh:"（鸡等）窝，同窝幼鸟 v. 孵（蛋）；盘算", forms:["brood"]},
          {word:"extinguish", ipa:"/ɪkˈstɪŋɡwɪʃ/", pos:"vt.", zh:"熄灭，扑灭；压制，压抑",            forms:["extinguishes"]}
        ]
      }
    ]
  },
  {
    id:"C2", cat:"C", zh:"饮食与餐厅", name:"Food & Dining", status:"live",
    date:"2026-09-24", words:30, desc:"餐桌的一天：节日盛宴、备餐掌勺、热锅厨房、各有所爱、心满意足",
    color:"#4A90D9",
    parts:[
      {
        id:"C2-P1", slug:"tem4-C2-P1", title:"节日盛宴", shape:"拱门",
        poster:"assets/tem4/posters/C2_P1.png",
        sentence:"On New Year's Eve a well-known chef is invited to cater the family feast in a small garden where plum trees bloom, and every delicacy he serves, from crisp spring rolls to honeyed cakes, soon satisfies the eager guests of three generations.",
        sentenceCn:"除夕夜，一位名厨受邀在梅树开花的院子里为家宴掌勺备菜，他端上的每道佳肴，从脆脆的春卷到蜜汁糕点，很快就让满心期盼的三代宾客吃得心满意足。",
        scene:"粉彩暖调的除夕夜庭院里，小叶学姐和动物宾客围坐在摆满春卷、蜜汁糕点和热汤的圆桌旁，头顶挂着灯笼和灯串，身旁梅树枝头开花。",
        words:[
          {word:"cater",    ipa:"/ˈkeɪtə/",    pos:"v.",   zh:"供应伙食，为（宴会等）供应酒菜；迎合", forms:["cater"]},
          {word:"feast",    ipa:"/fiːst/",     pos:"n.",   zh:"盛宴，宴会 v. 盛宴款待；使（感官等）得到享受", forms:["feast"]},
          {word:"delicacy", ipa:"/ˈdelɪkəsi/", pos:"n.",   zh:"精致，优美；美味，佳肴", forms:["delicacy"]},
          {word:"eager",    ipa:"/ˈiːɡə/",     pos:"adj.", zh:"热切的，热衷的，渴望的", forms:["eager"]},
          {word:"bloom",    ipa:"/bluːm/",     pos:"vi.",  zh:"开花；繁盛，茂盛 n. 花；香味", forms:["bloom"]},
          {word:"crisp",    ipa:"/krɪsp/",     pos:"adj.", zh:"脆的，硬而易碎的；清新的，爽快的", forms:["crisp"]}
        ]
      },
      {
        id:"C2-P2", slug:"tem4-C2-P2", title:"备餐掌勺", shape:"叶形",
        poster:"assets/tem4/posters/C2_P2.png",
        sentence:"Early in the morning she stirs the mushroom soup with a wooden spoon, blends whole-wheat flour into the soft dough, whips the fresh cream, sprinkles sugar over the fruit tarts, squeezes ripe oranges into a glass of juice, and smears a little butter on the warm toast.",
        sentenceCn:"清晨，她用木勺搅好蘑菇汤，把全麦粉揉进柔软的面团，搅打鲜奶油，在水果挞上撒糖，把熟橘子挤成一杯果汁，再在温热的吐司上抹一点黄油。",
        scene:"洒满晨光的粉彩厨房，小叶学姐系着白围裙用木勺搅蘑菇汤，台面上有搅打好的鲜奶油、撒了糖的水果挞和刚挤出的橙汁。",
        words:[
          {word:"stir",     ipa:"/stɜː/",      pos:"v.",   zh:"搅和，搅拌；（使）轻移；激起 n. 搅拌", forms:["stirs"]},
          {word:"blend",    ipa:"/blend/",     pos:"v.",   zh:"混合，混杂", forms:["blends"]},
          {word:"whip",     ipa:"/wɪp/",       pos:"v.",   zh:"搅打（奶油、蛋等）；用鞭子抽 n. 鞭子", forms:["whips"]},
          {word:"sprinkle", ipa:"/ˈsprɪŋkl/",  pos:"v.",   zh:"洒，喷，淋 n. 少量，少数", forms:["sprinkles"]},
          {word:"squeeze",  ipa:"/skwiːz/",    pos:"v.",   zh:"挤压，压榨，紧握；榨取，挤出", forms:["squeezes"]},
          {word:"smear",    ipa:"/smɪə/",      pos:"v.",   zh:"涂，抹（黏性或油性的物质）；弄脏 n. 污点", forms:["smears"]}
        ]
      },
      {
        id:"C2-P3", slug:"tem4-C2-P3", title:"热锅厨房", shape:"椭圆",
        poster:"assets/tem4/posters/C2_P3.png",
        sentence:"Meanwhile Grandpa greases the hot iron pan and pours in the batter, small drops of oil bubble around the edges, a slice of cheese melts slowly over the noodles, the boiled greens are drained dry, and one drop of vanilla essence makes the pudding smell wonderful.",
        sentenceCn:"这时，爷爷给热铁锅涂上油、倒入面糊，小油滴在锅边噼啪起泡，一片奶酪在面上慢慢融化，煮好的青菜被沥干，一滴香草精让布丁香气四溢。",
        scene:"粉彩厨房的灶台边，小叶学姐小心地把面糊倒进热铁锅，油滴噼啪起泡，奶酪在面条上慢慢融化，沥水篮里是煮好的青菜。",
        words:[
          {word:"grease",   ipa:"/ɡriːs/",     pos:"vt.",  zh:"涂油脂于，润滑 n. 动物脂；润滑脂", forms:["greases"]},
          {word:"pour",     ipa:"/pɔː/",       pos:"v.",   zh:"倒，灌；蜂拥；倾诉", forms:["pours"]},
          {word:"bubble",   ipa:"/ˈbʌbl/",     pos:"v.",   zh:"吹泡，起泡 n. 泡，水泡，气泡", forms:["bubble"]},
          {word:"melt",     ipa:"/melt/",      pos:"v.",   zh:"（使）融化，（使）熔化；（使）消散；（态度等）软化", forms:["melts"]},
          {word:"drain",    ipa:"/dreɪn/",     pos:"v.",   zh:"排出；把…弄干；喝干 n. 排水沟；消耗", forms:["drained"]},
          {word:"essence",  ipa:"/ˈesəns/",    pos:"n.",   zh:"本质，实质；精髓，精华；香精，香料", forms:["essence"]}
        ]
      },
      {
        id:"C2-P4", slug:"tem4-C2-P4", title:"各有所爱", shape:"超圆角",
        poster:"assets/tem4/posters/C2_P4.png",
        sentence:"Grandpa spreads strawberry jam on a thick slice of loaf, finds the steak a little too rare and the soup rather bland, yet he loves the bitter herbal tea that saturates his tongue with a rich aftertaste.",
        sentenceCn:"爷爷把草莓酱涂在厚厚的面包片上，觉得牛排稍生、汤味偏淡，却钟爱那杯苦涩的凉茶，浓郁的回甘浸满舌尖。",
        scene:"粉彩长餐桌旁，小叶学姐往厚面包片上涂草莓酱，身旁的猴爷爷品着稍生的牛排和清淡的汤，手里端着一杯冒着热气的凉茶。",
        words:[
          {word:"spread",   ipa:"/spred/",     pos:"v.",   zh:"展开，摊开；涂敷；（使）传布 n. 涂抹食品", forms:["spreads"]},
          {word:"loaf",     ipa:"/ləʊf/",      pos:"n.",   zh:"一条面包 v. 消磨时间，闲逛", forms:["loaf"]},
          {word:"rare",     ipa:"/reə/",       pos:"adj.", zh:"罕见的，珍贵的；（指肉）半熟的；稀薄的", forms:["rare"]},
          {word:"bland",    ipa:"/blænd/",     pos:"adj.", zh:"（指食物）无刺激性的，清淡的；文雅的", forms:["bland"]},
          {word:"saturate", ipa:"/ˈsætʃəreɪt/",pos:"vt.",  zh:"浸透，浸湿；使饱和", forms:["saturates"]},
          {word:"bitter",   ipa:"/ˈbɪtə/",     pos:"adj.", zh:"有苦味的；辛酸的；厉害的；严寒的", forms:["bitter"]}
        ]
      },
      {
        id:"C2-P5", slug:"tem4-C2-P5", title:"心满意足", shape:"波浪",
        poster:"assets/tem4/posters/C2_P5.png",
        sentence:"After the meal the children chew the last bites slowly and swallow the warm soup politely, Dad consumes the remaining pie with a smile, the kitten laps up its milk and licks the bowl clean, and Grandma says that balanced nutrition is the heart of family cooking.",
        sentenceCn:"饭后，孩子们慢慢咀嚼最后几口、有礼貌地咽下温热的汤，爸爸笑着吃光剩下的派，小猫舔完牛奶还把碗舔得干干净净，奶奶说均衡的营养才是一家人饮食的核心。",
        scene:"晚霞映照的粉彩餐厅里，孩子们慢慢咀嚼、咽下温热的汤，爸爸吃光最后一块派，小猫舔完牛奶把碗舔得干干净净。",
        words:[
          {word:"chew",      ipa:"/tʃuː/",       pos:"v.", zh:"咀嚼；深思，回味，体味", forms:["chew"]},
          {word:"swallow",   ipa:"/ˈswɒləʊ/",    pos:"v.", zh:"吞，咽；吞没 n. 燕子；一次吞咽之量", forms:["swallow"]},
          {word:"consume",   ipa:"/kənˈsjuːm/",  pos:"v.", zh:"消费，耗尽；吃光，饮尽；烧毁", forms:["consumes"]},
          {word:"lap",       ipa:"/læp/",        pos:"v.", zh:"舔，舔食；（波浪）拍打 n. 膝部；一圈", forms:["laps"]},
          {word:"lick",      ipa:"/lɪk/",        pos:"v.", zh:"舔 n. 舔；少量", forms:["licks"]},
          {word:"nutrition", ipa:"/njuːˈtrɪʃən/", pos:"n.", zh:"营养，滋养；营养物，食物", forms:["nutrition"]}
        ]
      }
    ]
  },
  {
    id:"C3", cat:"C", zh:"购物与消费", name:"Shopping", status:"live",
    date:"2026-09-25", words:30, desc:"购物的一天：周末集市、货比三家、讨价还价、下单付款、售后维权",
    color:"#4A90D9",
    parts:[
      {
        id:"C3-P1", slug:"tem4-C3-P1", title:"周末集市", shape:"拱门",
        poster:"assets/tem4/posters/C3_P1.png",
        sentence:"On Saturday morning the riverside market is crowded: every stall along the lane supplies handmade snacks, vendors invite passers-by to sample dried fruit and cheese, and the fashion corner sells affordable scarves whose quality surprises even picky buyers.",
        sentenceCn:"周六清晨的河畔集市人头攒动：巷子里的每个摊位都供应手工小吃，摊主们邀请路人品尝果干和奶酪，时尚角出售的围巾价格亲民，质量连挑剔的买家都感到惊喜。",
        scene:"粉彩河畔周末集市，小叶学姐在小吃摊前请兔子和小熊顾客品尝果干与奶酪，旁边的木架上挂着彩色围巾，河畔帐篷和彩旗飘飘。",
        words:[
          {word:"stall",      ipa:"/stɔːl/",     pos:"n.",   zh:"摊位；畜舍，厩；戏院正厅的前排座位 v.（指引擎因动力不足而）停止转动；拖延，支吾", forms:["stall"]},
          {word:"supply",     ipa:"/səˈplaɪ/",   pos:"vt.",  zh:"供给，供应；满足（需要）n. 供应，供给之物；现货，现货储存量", forms:["supplies"]},
          {word:"sample",     ipa:"/ˈsɑːmpl/",   pos:"n.",   zh:"样品，货样 vt. 取…的样品，抽样检查；尝试", forms:["sample"]},
          {word:"affordable", ipa:"/əˈfɔːdəbl/", pos:"adj.", zh:"买得起的；担负得起的；担得起…风险的", forms:["affordable"]},
          {word:"fashion",    ipa:"/ˈfæʃən/",    pos:"n.",   zh:"流行式样；样子，方式；时尚，风尚", forms:["fashion"]},
          {word:"quality",    ipa:"/ˈkwɒliti/",  pos:"n.",   zh:"质量，品级，品质；性质，特性", forms:["quality"]}
        ]
      },
      {
        id:"C3-P2", slug:"tem4-C3-P2", title:"货比三家", shape:"叶形",
        poster:"assets/tem4/posters/C3_P2.png",
        sentence:"Smart shoppers make a careful comparison before they buy: they compare the cost of a luxury watch with that of an economical one, decide whether the extra price is worth paying, and avoid extravagant spending on things they never use.",
        sentenceCn:"聪明的买家购买前会仔细货比三家：他们比较豪华手表与经济实惠款的价格，衡量多付的钱是否值得，并避免为永远用不上的东西挥霍浪费。",
        scene:"粉彩钟表店里，小叶学姐趴在玻璃柜台前认真比较两只手表，猫头鹰店主在柜台后微笑注视，货架上摆满怀表和时钟。",
        words:[
          {word:"comparison",  ipa:"/kəmˈpærɪsən/",   pos:"n.",    zh:"比较，对照；比喻", forms:["comparison"]},
          {word:"cost",        ipa:"/kɒst/",          pos:"n.",    zh:"成本，价格，费用；代价 v. 使花费，值（多少钱）；付出代价，使丧失；估计…的成本", forms:["cost"]},
          {word:"worth",       ipa:"/wɜːθ/",          pos:"prep.", zh:"值；值得 n. 价值", forms:["worth"]},
          {word:"luxury",      ipa:"/ˈlʌkʃəri/",      pos:"n.",    zh:"奢侈；奢侈品；豪华", forms:["luxury"]},
          {word:"economical",  ipa:"/ˌiːkəˈnɒmɪkəl/", pos:"adj.",  zh:"节俭的，经济的，精打细算的", forms:["economical"]},
          {word:"extravagant", ipa:"/ɪkˈstrævəɡənt/", pos:"adj.",  zh:"浪费的，奢侈的；过度的，放肆的", forms:["extravagant"]}
        ]
      },
      {
        id:"C3-P3", slug:"tem4-C3-P3", title:"讨价还价", shape:"椭圆",
        poster:"assets/tem4/posters/C3_P3.png",
        sentence:"When the year-end discount season begins, frugal Aunt Lily rushes to the flea market, where she loves to bargain over teapots, haggles politely over the price of an old lamp, records every expense in her notebook, and still helps the shopkeeper celebrate a record monthly turnover.",
        sentenceCn:"年末折扣季一开场，节俭的莉莉阿姨就赶去跳蚤市场：她喜欢为茶壶讨价还价，为一盏旧灯的价格礼貌地砍价，把每笔开销记在本子上，还帮店主庆祝了创纪录的月营业额。",
        scene:"粉彩跳蚤市场的古董摊前，小叶学姐和熊摊主笑着讨价还价，桌上摆着旧灯、记账本和算盘，条纹遮阳棚下暖意融融。",
        words:[
          {word:"discount", ipa:"/ˈdɪskaʊnt/",  pos:"v.",  zh:"怀疑地看待；漠视，低估；（打）折扣", forms:["discount"]},
          {word:"frugal",   ipa:"/ˈfruːɡəl/",   pos:"adj.",zh:"节俭的，节约的；廉价的", forms:["frugal"]},
          {word:"bargain",  ipa:"/ˈbɑːɡɪn/",    pos:"v.",  zh:"议价，讨价还价 n. 廉价货；合同，协议；交易", forms:["bargain"]},
          {word:"haggle",   ipa:"/ˈhæɡl/",      pos:"v.",  zh:"争论；讨价还价", forms:["haggles"]},
          {word:"expense",  ipa:"/ɪkˈspens/",   pos:"n.",  zh:"费用，消费，支出；（精力、时间等的）消耗，耗费", forms:["expense"]},
          {word:"turnover", ipa:"/ˈtɜːnˌəʊvə/", pos:"n.",  zh:"（一定时期的）营业额；（商店的）货物周转率；人事变动率", forms:["turnover"]}
        ]
      },
      {
        id:"C3-P4", slug:"tem4-C3-P4", title:"下单付款", shape:"超圆角",
        poster:"assets/tem4/posters/C3_P4.png",
        sentence:"At the checkout Tom settles every outstanding bill, finds the new installment payable next month, evaluates the shiny camera carefully, then resists the impulse to purchase it and keeps his travel fund intact for the trip home.",
        sentenceCn:"在收银台，汤姆结清了所有未付的账单，得知新的分期款项下月支付，他仔细估量那台闪亮的相机，最终克制住购买的冲动，把旅行基金原封不动地留给回家的旅费。",
        scene:"粉彩百货商店收银台，小叶学姐递出银行卡结账付款，脚边堆着购物袋，她摇摇头婉拒小狐狸展示的新相机。",
        words:[
          {word:"evaluate",   ipa:"/ɪˈvæljueɪt/",    pos:"vt.",  zh:"评价，估计", forms:["evaluates"]},
          {word:"impulse",    ipa:"/ˈɪmpʌls/",       pos:"n.",   zh:"推动（力），驱使；冲动，心血来潮", forms:["impulse"]},
          {word:"purchase",   ipa:"/ˈpɜːtʃəs/",      pos:"vt.",  zh:"购买 n. 购买；购得之物", forms:["purchase"]},
          {word:"outstanding",ipa:"/ˌaʊtˈstændɪŋ/",  pos:"adj.", zh:"杰出的，优秀的；未付款的，（问题）未解决的", forms:["outstanding"]},
          {word:"payable",    ipa:"/ˈpeɪəbl/",       pos:"adj.", zh:"应付的，可支付的", forms:["payable"]},
          {word:"fund",       ipa:"/fʌnd/",          pos:"n.",   zh:"[pl.] 资金，公债；基金，专款，储备 v. 为…提供资金，资助，积累", forms:["fund"]}
        ]
      },
      {
        id:"C3-P5", slug:"tem4-C3-P5", title:"售后维权", shape:"波浪",
        poster:"assets/tem4/posters/C3_P5.png",
        sentence:"At the service desk, the clerk agrees to exchange the scratched watch and replace its strap, then uncovers a shop that forges receipts to swindle tourists and fleece visitors, so the police seize the counterfeit goods at once.",
        sentenceCn:"在服务台，店员同意调换划伤的手表并更换表带，随后又协助警方揪出一家伪造收据、专骗游客敲竹杠的店铺，警察立即查扣了店里的假货。",
        scene:"粉彩售后服务台，小叶学姐把划伤的手表递给戴眼镜的猫店员换新，一旁的獾警官正把假手镯和假包装箱查扣，柜台上摆着绿色茶壶。",
        words:[
          {word:"exchange", ipa:"/ɪksˈtʃeɪndʒ/", pos:"vt.", zh:"互换，兑换 n. 交换，互换；交流；交火，争吵；交换所，交易所", forms:["exchange"]},
          {word:"replace",  ipa:"/rɪˈpleɪs/",    pos:"vt.", zh:"放回，置于原处；代替，取代；替换，更换", forms:["replace"]},
          {word:"forge",    ipa:"/fɔːdʒ/",       pos:"vt.", zh:"伪造，假冒；锤造；打制", forms:["forges"]},
          {word:"swindle",  ipa:"/ˈswɪndl/",     pos:"v.",  zh:"榨取，骗取 n. 诈骗行为，骗人的事物", forms:["swindle"]},
          {word:"fleece",   ipa:"/fliːs/",       pos:"n.",  zh:"羊毛 v. 欺诈，敲竹杠，骗取", forms:["fleece"]},
          {word:"seize",    ipa:"/siːz/",        pos:"v.",  zh:"攫取，抓住；强占，夺取；扣押，没收", forms:["seize"]}
        ]
      }
    ]
  },
  {
    id:"C4", cat:"C", zh:"日常作息", name:"Daily Routine", status:"live",
    date:"2026-09-26", words:30, desc:"作息的一天：黎明即起、洗漱梳妆、挤车通勤、午间小憩、灯火晚安",
    color:"#4A90D9",
    parts:[
      {
        id:"C4-P1", slug:"tem4-C4-P1", title:"黎明即起", shape:"拱门",
        poster:"assets/tem4/posters/C4_P1.png",
        sentence:"At dawn the little alarm clock awakens the whole dormitory: Xiaoye yawns and stretches her arms, still half dreaming, her roommate arises without delay, and a busy but exciting school day awaits them all.",
        sentenceCn:"黎明时分，小闹钟唤醒了整间宿舍：小叶学姐打着哈欠伸了个懒腰，还半在梦中；室友毫不迟疑地起身，忙碌又精彩的校园一天正等着她们。",
        scene:"粉彩清晨宿舍，晨光透过窗帘，小叶学姐坐在床上打哈欠伸懒腰，小闹钟在床头柜上响铃，兔子室友正在拉开窗帘。",
        words:[
          {word:"dawn",    ipa:"/dɔːn/",     pos:"n.",  zh:"黎明，拂晓；开端 v. 破晓；开始；展现", forms:["dawn"]},
          {word:"awaken",  ipa:"/əˈweɪkən/", pos:"v.",  zh:"叫醒，闹醒；醒来，觉醒", forms:["awakens"]},
          {word:"yawn",    ipa:"/jɔːn/",     pos:"v.",  zh:"打哈欠，欠身；裂开，豁开 n. 呵欠；裂口，豁口", forms:["yawns"]},
          {word:"stretch", ipa:"/stretʃ/",   pos:"v.",  zh:"伸展，张开，拉紧；伸展（四肢），直躺；滥用，曲解 n. 伸展，张开，拉紧；（陆地或水域的）一大片；连续的一段时间", forms:["stretches"]},
          {word:"arise",   ipa:"/əˈraɪz/",   pos:"vi.", zh:"兴起，发生，出现；站起来，起立，起身", forms:["arises"]},
          {word:"await",   ipa:"/əˈweɪt/",   pos:"v.",  zh:"等待", forms:["awaits"]}
        ]
      },
      {
        id:"C4-P2", slug:"tem4-C4-P2", title:"洗漱梳妆", shape:"叶形",
        poster:"assets/tem4/posters/C4_P2.png",
        sentence:"Like every morning, Xiaoye goes through her habitual wash-up: accustomed to humming while she brushes her teeth, she splashes cold water on her face, grimaces at her tangled hair in the mirror, gives it a brisk comb, and grumbles only a little when her favourite ribbon cannot be found.",
        sentenceCn:"和每个早晨一样，小叶学姐按惯例洗漱：她习惯边刷牙边哼歌，掬起冷水泼在脸上，对着镜子里乱糟糟的头发扮了个鬼脸，飞快地梳了几下，只在找不到心爱的发带时小声抱怨了一句。",
        scene:"粉彩洗漱间，小叶学姐对着圆镜扮鬼脸、飞快梳头，双手掬起水花洗脸，台面上摆着牙刷杯和泡泡，小熊伙伴在身后叠被子。",
        words:[
          {word:"habitual", ipa:"/həˈbɪtjuəl/", pos:"adj.", zh:"通常的，惯常的；习惯性的，已养成习惯的", forms:["habitual"]},
          {word:"accustom", ipa:"/əˈkʌstəm/",   pos:"vt.",  zh:"使习惯", forms:["accustomed"]},
          {word:"splash",   ipa:"/splæʃ/",      pos:"v.",   zh:"溅，泼；（指液体）飞溅 n. 飞溅（声）；溅污的斑点；有颜色的斑点", forms:["splashes"]},
          {word:"grimace",  ipa:"/ɡrɪˈmeɪs/",   pos:"vi.",  zh:"扭曲脸部（以表示痛苦等）；扮鬼脸", forms:["grimaces"]},
          {word:"brisk",    ipa:"/brɪsk/",      pos:"adj.", zh:"活跃的，轻快的；（空气等）清新的，令人爽快的；兴旺的，生气勃勃的 v. 使活泼，兴旺；活泼起来，兴旺起来", forms:["brisk"]},
          {word:"grumble",  ipa:"/ˈɡrʌmbl/",    pos:"v.",   zh:"发牢骚 n. 不平，怨言", forms:["grumbles"]}
        ]
      },
      {
        id:"C4-P3", slug:"tem4-C4-P3", title:"挤车通勤", shape:"椭圆",
        poster:"assets/tem4/posters/C4_P3.png",
        sentence:"The morning rush never waits: crowds swarm into the bus station, passengers scramble for the few empty seats, the monotonous rattle of the wheels fills the whole trip, stops come only at long intervals, and even a tiny hitch on the road makes everyone anxious about being late.",
        sentenceCn:"早高峰从不等人：人群涌进公交站，乘客们争抢仅剩的几个空座，车轮单调的哐当声响了一路，停靠站间隔很久才来一趟，路上哪怕一点小意外都会让所有人担心迟到。",
        scene:"粉彩清晨公交站，动物乘客们涌向双层巴士，小叶学姐挤在人群中抓紧扶手背着书包，远处红灯前车队排成长龙。",
        words:[
          {word:"rush",       ipa:"/rʌʃ/",        pos:"n.",   zh:"冲，突进；匆忙，急忙；急需；高峰期，热潮 v. 冲，奔，使急行；仓促处理，匆忙地做；突发，突现", forms:["rush"]},
          {word:"swarm",      ipa:"/swɔːm/",      pos:"n.",   zh:"（昆虫等的）群，人群 v. 拥挤，蜂拥而行", forms:["swarm"]},
          {word:"scramble",   ipa:"/ˈskræmbl/",   pos:"v.",   zh:"爬行，攀爬；杂乱蔓延；抢夺 n. 攀缘，爬行；抢夺", forms:["scramble"]},
          {word:"hitch",      ipa:"/hɪtʃ/",       pos:"n.",   zh:"意外障碍，暂时的困难；结，绳套；急拉（推）v. 钩住，系住；搭便车", forms:["hitch"]},
          {word:"monotonous", ipa:"/məˈnɒtənəs/", pos:"adj.", zh:"单调的，无变化的，令人厌倦的", forms:["monotonous"]},
          {word:"interval",   ipa:"/ˈɪntəvəl/",   pos:"n.",   zh:"间隔，空隙，间歇；幕间休息", forms:["intervals"]}
        ]
      },
      {
        id:"C4-P4", slug:"tem4-C4-P4", title:"午间小憩", shape:"超圆角",
        poster:"assets/tem4/posters/C4_P4.png",
        sentence:"When the lunchtime recess arrives, the quiet reading lounge fills with sleepy students: they grow drowsy after morning classes, so a short nap helps to relieve the accumulated fatigue and revives everyone for the afternoon lessons.",
        sentenceCn:"午间休息一到，安静的阅览室里挤满困倦的学生：上午的课让大家昏昏欲睡，一小段午睡既能缓解积累的疲劳，又让每个人下午上课时重新精神起来。",
        scene:"粉彩午间阅览室，小叶学姐趴在桌上枕着小圆枕小睡，旁边同学懒洋洋地窝在豆袋沙发里，桌上一杯柠檬茶，阳光透过百叶窗。",
        words:[
          {word:"recess",  ipa:"/rɪˈses/",  pos:"n.",  zh:"工间休息，休会期，休业期；壁凹，壁龛；隐秘处 v. 使凹进", forms:["recess"]},
          {word:"lounge",  ipa:"/laʊndʒ/",  pos:"n.",  zh:"休息室 v. 懒洋洋地靠坐着；闲逛，混时间", forms:["lounge"]},
          {word:"drowsy",  ipa:"/ˈdraʊzi/", pos:"adj.", zh:"半醒半睡的，（使人）昏昏欲睡的", forms:["drowsy"]},
          {word:"relieve", ipa:"/rɪˈliːv/", pos:"vt.", zh:"减轻，解除（痛苦或困难）；救助，救济；换班，接替", forms:["relieve"]},
          {word:"fatigue", ipa:"/fəˈtiːɡ/", pos:"n.",  zh:"疲劳，劳累", forms:["fatigue"]},
          {word:"revive",  ipa:"/rɪˈvaɪv/", pos:"v.",  zh:"（使）苏醒，（使）恢复知觉；（使）复用，（使）复兴", forms:["revives"]}
        ]
      },
      {
        id:"C4-P5", slug:"tem4-C4-P5", title:"灯火晚安", shape:"波浪",
        poster:"assets/tem4/posters/C4_P5.png",
        sentence:"As the last evening light dims, another ordinary day quietly elapses: Mum tucks the quilt in and comforts Xiaoye, who closes her eyes to reflect on the whole day, grateful for every small joy it brought.",
        sentenceCn:"当傍晚最后一缕光线暗下来，平凡的一天悄然流逝：妈妈为小叶学姐掖好被角、轻声安抚，她闭上眼睛回想这一天的种种，为它带来的每一份小确幸心怀感激。",
        scene:"粉彩夜晚卧室，熊妈妈为小叶学姐掖好粉色被角、轻声安抚，床头小夜灯发着暖光，窗外星空与弯月，小叶闭眼微笑。",
        words:[
          {word:"elapse",  ipa:"/ɪˈlæps/",    pos:"vi.", zh:"（时间）过去，消逝", forms:["elapses"]},
          {word:"tuck",    ipa:"/tʌk/",       pos:"v.",  zh:"塞进，插进；卷起，折起；打褶裥", forms:["tucks"]},
          {word:"dim",     ipa:"/dɪm/",       pos:"adj.", zh:"暗淡的，昏暗的；朦胧的；迟钝的，愚蠢的 v.（使）变暗淡；（使）变模糊，（使）失去光泽", forms:["dims"]},
          {word:"comfort", ipa:"/ˈkʌmfət/",   pos:"n.",  zh:"安慰；舒适，安逸 vt. 安慰；使…舒适", forms:["comforts"]},
          {word:"grateful",ipa:"/ˈɡreɪtfəl/", pos:"adj.", zh:"感激的，感谢的；令人愉快的，可喜的", forms:["grateful"]},
          {word:"reflect", ipa:"/rɪˈflekt/",  pos:"v.",  zh:"反射，反映；表达，表现；考虑，思考", forms:["reflect"]}
        ]
      }
    ]
  },
  {
    id:"C5", cat:"C", zh:"服饰与时尚", name:"Clothing & Fashion", status:"live",
    date:"2026-09-28", words:30, desc:"穿搭的一天：衣柜晨选、织造工坊、洗衣晾晒、盛装细节、化装舞会",
    color:"#4A90D9",
    parts:[
      {
        id:"C5-P1", slug:"tem4-C5-P1", title:"衣柜晨选", shape:"拱门",
        poster:"assets/tem4/posters/C5_P1.png",
        sentence:"Facing an array of clothes, from bright summer dresses to decent grey cardigans, Xiaoye finally picks a cardinal-red coat that matches her gorgeous new boots.",
        sentenceCn:"面对一整排衣服——从鲜艳的夏裙到体面的灰色开衫——小叶学姐最终挑中一件深红大衣，正好配她那双漂亮的新靴子。",
        scene:"粉彩晨光卧室，小叶学姐站在敞开的衣柜前，面对一排彩色衣裙手拿深红大衣比较，脚边放着一双漂亮的小靴子。",
        words:[
          {word:"array",    ipa:"/əˈreɪ/",     pos:"n.",  zh:"展示，陈列；排列整齐的一队人，一长列（物品）", forms:["array"]},
          {word:"bright",   ipa:"/braɪt/",     pos:"adj.", zh:"明亮的；晴朗的；鲜艳的；开朗的，愉快的；聪明的", forms:["bright"]},
          {word:"decent",   ipa:"/ˈdiːsənt/",  pos:"adj.", zh:"体面的，正当的；严肃的；高雅的；和气的，过得去的，宽容的", forms:["decent"]},
          {word:"match",    ipa:"/mætʃ/",      pos:"v.",  zh:"与…相配；与…相匹敌 n. 比赛，竞赛；火柴；对手；匹配物", forms:["matches"]},
          {word:"cardinal", ipa:"/ˈkɑːdɪnəl/", pos:"adj.", zh:"主要的，基本的；深红的 n. 深红色；基数；红衣主教", forms:["cardinal"]},
          {word:"gorgeous", ipa:"/ˈɡɔːdʒəs/",  pos:"adj.", zh:"异常漂亮的，壮丽的；令人愉快的", forms:["gorgeous"]}
        ]
      },
      {
        id:"C5-P2", slug:"tem4-C5-P2", title:"织造工坊", shape:"叶形",
        poster:"assets/tem4/posters/C5_P2.png",
        sentence:"In the cozy workshop, Grandma weaves soft wool on an old loom while Xiaoye knits a delicate scarf, and baskets of coarse yarn and colorful elastic bands sit beside them.",
        sentenceCn:"在温馨的工坊里，猴奶奶在老织布机上织着软软的羊毛，小叶学姐织一条精致的围巾，旁边篮子里放着粗毛线和五颜六色的松紧带。",
        scene:"粉彩织造工坊，猴奶奶在老式木织布机前织羊毛，小叶学姐坐在旁边用棒针织一条精致围巾，篮子里装着粗毛线团和彩色松紧带。",
        words:[
          {word:"weave",    ipa:"/wiːv/",      pos:"v.",  zh:"编织，织；编造；迂回行进 n. 编织法，编织式样", forms:["weaves"]},
          {word:"loom",     ipa:"/luːm/",      pos:"n.",  zh:"织布机；隐隐呈现的形象 vt. 隐隐呈现；阴森地逼近", forms:["loom"]},
          {word:"knit",     ipa:"/nɪt/",       pos:"v.",  zh:"编织，针织；使密接，结合", forms:["knits"]},
          {word:"delicate", ipa:"/ˈdelɪkɪt/",  pos:"adj.", zh:"易碎的，娇弱的；精密的，精致的；微妙的；清香的，清淡的", forms:["delicate"]},
          {word:"coarse",   ipa:"/kɔːs/",      pos:"adj.", zh:"粗糙的，粗劣的；（举动等）粗鲁的，粗暴的，粗俗的", forms:["coarse"]},
          {word:"elastic",  ipa:"/ɪˈlæstɪk/",  pos:"adj.", zh:"弹性的，有弹力的；灵活的，可伸缩的 n. 橡皮带，松紧带", forms:["elastic"]}
        ]
      },
      {
        id:"C5-P3", slug:"tem4-C5-P3", title:"洗衣晾晒", shape:"椭圆",
        poster:"assets/tem4/posters/C5_P3.png",
        sentence:"Xiaoye soaks the durable jeans in cool water so the color will not fade, then hangs the clean shirts out to flutter in the breeze, fluffs the towels, and presses away every crinkle.",
        sentenceCn:"小叶学姐把耐穿的牛仔裤泡进凉水以免褪色，再把洗干净的衬衫挂出去让微风吹得飘动，抖松毛巾，熨平每一道褶皱。",
        scene:"粉彩阳光后院，晾衣绳上衬衫床单随风飘动，小叶学姐在木盆边抖松毛巾，盆里泡着牛仔裤，泡泡飘在空中。",
        words:[
          {word:"soak",     ipa:"/səʊk/",      pos:"v.",  zh:"浸，泡，（使）浸透 n. 浸，泡，渍", forms:["soaks"]},
          {word:"durable",  ipa:"/ˈdjʊərəbl/", pos:"adj.", zh:"持久的，耐用的，耐穿的 n. [pl.] 耐用品", forms:["durable"]},
          {word:"fade",     ipa:"/feɪd/",      pos:"v.",  zh:"（使）褪色，（使）枯萎，变衰；逐渐消失", forms:["fade"]},
          {word:"flutter",  ipa:"/ˈflʌtə/",    pos:"n. / v.", zh:"振翅，拍翼；飘动，摆动；激动，紧张，兴奋", forms:["flutter"]},
          {word:"fluff",    ipa:"/flʌf/",      pos:"n.",  zh:"松软的绒毛团；软毛，柔毛 v. 抖松，拍松；把…弄糟，弄错", forms:["fluffs"]},
          {word:"crinkle",  ipa:"/ˈkrɪŋkl/",   pos:"n.",  zh:"皱纹 v.（使）起皱", forms:["crinkle"]}
        ]
      },
      {
        id:"C5-P4", slug:"tem4-C5-P4", title:"盛装细节", shape:"超圆角",
        poster:"assets/tem4/posters/C5_P4.png",
        sentence:"Before the show, Xiaoye buckles her shiny belt, finds one sleeve loose, pierces the satin ribbon with a silver pin that pricks her finger, then steps out looking magnificent, her little ear studs sparkling under the lights.",
        sentenceCn:"走秀前，小叶学姐扣好闪亮的腰带，发现一只袖子松了，用银别针刺穿缎带别好——别针刺痛了她的手指——然后闪亮登场，气质华美，小耳钉在灯光下闪闪发光。",
        scene:"粉彩梳妆台前，小叶学姐对着椭圆镜扣金色腰带、用银别针别住缎带，首饰盒里项链耳钉闪闪发光，台面上摆着化妆刷和香水瓶。",
        words:[
          {word:"buckle",      ipa:"/ˈbʌkl/",        pos:"n.",  zh:"皮带扣环；装饰用扣环 v. 用扣环扣住；（使）弯曲，扭曲；让步，屈服", forms:["buckles"]},
          {word:"loose",       ipa:"/luːs/",         pos:"adj.", zh:"松动的，宽松的；不受束缚的；不精确的 v. 释放", forms:["loose"]},
          {word:"pierce",      ipa:"/pɪəs/",         pos:"v.",  zh:"刺穿，刺破；突破", forms:["pierces"]},
          {word:"prick",       ipa:"/prɪk/",         pos:"v.",  zh:"戳穿，刺；（使）感到刺痛 n. 刺痛；刺痕，刺孔", forms:["pricks"]},
          {word:"magnificent", ipa:"/mæɡˈnɪfɪsənt/", pos:"adj.", zh:"富丽堂皇的，宏伟的，极好的", forms:["magnificent"]},
          {word:"sparkle",     ipa:"/ˈspɑːkl/",      pos:"v.",  zh:"闪闪发光，闪烁，闪耀 n. 光亮；活力；闪光", forms:["sparkling"]}
        ]
      },
      {
        id:"C5-P5", slug:"tem4-C5-P5", title:"化装舞会", shape:"波浪",
        poster:"assets/tem4/posters/C5_P5.png",
        sentence:"At the costume ball, Xiaoye wraps a silk shawl around her shoulders and wears a cat mask as a playful disguise; when the host unveils the \"Best Dressed\" prize, her golden sash, neatly attached with a pin, clings softly and everyone cheers.",
        sentenceCn:"化装舞会上，小叶学姐肩披丝巾、戴着猫咪面具扮可爱；当主持人揭开“最佳着装”奖时，她用别针别好的金色腰带轻轻服帖着，大家欢呼起来。",
        scene:"粉彩化装舞会，小叶学姐额头推着猫咪面具、肩披丝巾、腰系金色缎带，兔子主持人揭开金奖杯，彩旗气球彩带飘扬，动物宾客鼓掌。",
        words:[
          {word:"wrap",     ipa:"/ræp/",       pos:"v.",  zh:"把…包起来，缠，捆 n. 披肩，围巾", forms:["wraps"]},
          {word:"mask",     ipa:"/mɑːsk/",     pos:"n.",  zh:"面罩，假面具 v. 掩饰，伪装", forms:["mask"]},
          {word:"disguise", ipa:"/dɪsˈɡaɪz/",  pos:"n. / vt.", zh:"假扮，伪装，掩盖", forms:["disguise"]},
          {word:"unveil",   ipa:"/ʌnˈveɪl/",   pos:"vt.", zh:"除去…的面纱（盖布）等，揭开；为…揭幕", forms:["unveils"]},
          {word:"attach",   ipa:"/əˈtætʃ/",    pos:"v.",  zh:"缚，系，贴；参加（党派）；把（重点等）放在", forms:["attached"]},
          {word:"cling",    ipa:"/klɪŋ/",      pos:"vi.", zh:"粘住，缠住；依附，依靠；紧紧握住，紧紧抱住", forms:["clings"]}
        ]
      }
    ]
  },
  /* ===== D 社交与情感 ===== */
  {id:"D1", cat:"D", zh:"友情与爱情", name:"Friendship & Love", status:"live",
    date:"2026-09-28", words:30, desc:"友情与爱情的一天：咖啡馆初遇、榕树下陪伴、一场误会、道歉与拥抱、夕阳下告白",
    color:"#4A90D9",
    parts:[
      {
        id:"D1-P1", slug:"tem4-D1-P1", title:"咖啡馆初遇", shape:"拱门",
        poster:"assets/tem4/posters/D1_P1.png",
        sentence:"At the campus café, the gregarious waiter greets every guest with warm hospitality, while a lovable girl with keen eyes waits in line, and her soft murmur of thanks makes a shy freshman's cheeks glow.",
        sentenceCn:"在校园咖啡馆里，热情健谈的服务生殷勤地招待每位客人；一个眼神灵动、讨人喜欢的女孩在排队，她轻声道谢的低语让一位害羞的新生脸颊泛起了红晕。",
        scene:"粉彩校园咖啡馆，小叶学姐双手捧着拿铁站在木柜台前，穿围裙的服务生热情招呼客人，空气中飘着心形与蒸汽。",
        words:[
          {word:"gregarious",  ipa:"/ɡrɪˈɡeəriəs/",  pos:"adj.",     zh:"爱交际的；群居的", forms:["gregarious"]},
          {word:"hospitality", ipa:"/ˌhɒspɪˈtælɪti/", pos:"n.",       zh:"好客，殷勤的款待", forms:["hospitality"]},
          {word:"lovable",     ipa:"/ˈlʌvəbl/",       pos:"adj.",     zh:"可爱的，讨人喜欢的", forms:["lovable"]},
          {word:"keen",        ipa:"/kiːn/",          pos:"adj.",     zh:"热心的；敏锐的；渴望的", forms:["keen"]},
          {word:"murmur",      ipa:"/ˈmɜːmə/",        pos:"n. / v.",  zh:"低语声，咕哝 v. 低声说；发低沉连续的声音", forms:["murmur"]},
          {word:"glow",        ipa:"/ɡləʊ/",          pos:"vi.",      zh:"发白热光；容光焕发 n. 光辉；热烈", forms:["glow"]}
        ]
      },
      {
        id:"D1-P2", slug:"tem4-D1-P2", title:"榕树下陪伴", shape:"叶形",
        poster:"assets/tem4/posters/D1_P2.png",
        sentence:"In the weeks that followed, Leo would accompany her to the library and escort her home after evening classes, and she came to trust and rely on this quiet friend, whose steady support and firm faith in her never wavered.",
        sentenceCn:"在接下来的几周里，利奥总会陪她去图书馆，晚课后又送她回家；她渐渐学会信赖、依靠这位安静的朋友——他坚定的支持和对她的信任从未动摇。",
        scene:"大榕树下，小叶学姐与戴蓝围巾的猴朋友并肩抱着书走在粉彩小路上，树影斑驳，远处是校园建筑。",
        words:[
          {word:"accompany", ipa:"/əˈkʌmpəni/", pos:"vt.",      zh:"伴随，陪同；为…伴奏", forms:["accompany"]},
          {word:"escort",    ipa:"/ˈeskɔːt/",   pos:"n.",       zh:"护卫队，护送者；陪伴", forms:["escort"]},
          {word:"trust",     ipa:"/trʌst/",     pos:"n. / v.",  zh:"信任，信赖 v. 委托，托付；倚靠", forms:["trust"]},
          {word:"rely",      ipa:"/rɪˈlaɪ/",    pos:"vi.",      zh:"信任，信赖；依赖，依靠", forms:["rely"]},
          {word:"support",   ipa:"/səˈpɔːt/",   pos:"vt.",      zh:"支撑；支持，鼓励；拥护，供养 n. 支撑物；拥护", forms:["support"]},
          {word:"faith",     ipa:"/feɪθ/",      pos:"n.",       zh:"信任，信念；信仰，信条；诚意，忠诚", forms:["faith"]}
        ]
      },
      {
        id:"D1-P3", slug:"tem4-D1-P3", title:"一场误会", shape:"椭圆",
        poster:"assets/tem4/posters/D1_P3.png",
        sentence:"One careless piece of gossip spread through the class, and light discord soon grew worse: a hot word made her temper flare, his upset silence aroused her suspicion, and they began to argue over nothing.",
        sentenceCn:"一句无心的流言在班里传开，小小的不和很快升级：一句气话让她脾气爆发，他难过心烦的沉默又引来她的猜疑，两人开始为琐事争吵起来。",
        scene:"粉彩长椅上小叶学姐抱着书低头难过，头顶飘着一小朵雨云，几步外戴蓝围巾的猴朋友别过脸去，两人之间飘着一颗裂开的小心。",
        words:[
          {word:"gossip",    ipa:"/ˈɡɒsɪp/",    pos:"n. / vi.", zh:"闲谈，聊天；流言蜚语 vi. 说闲话", forms:["gossip"]},
          {word:"discord",   ipa:"/ˈdɪskɔːd/",  pos:"n.",       zh:"（意见）不合，不和，争论；（音乐）不和谐", forms:["discord"]},
          {word:"temper",    ipa:"/ˈtempə/",    pos:"n. / v.",  zh:"心情，脾气，性情 v. 回火；使软化；缓和", forms:["temper"]},
          {word:"upset",     ipa:"/ʌpˈset/",    pos:"v.",       zh:"使人心烦意乱；弄翻，打翻 adj. 难过的，不安的", forms:["upset"]},
          {word:"suspicion", ipa:"/səˈspɪʃən/", pos:"n.",       zh:"怀疑，猜疑，嫌疑，疑心", forms:["suspicion"]},
          {word:"argue",     ipa:"/ˈɑːɡjuː/",   pos:"v.",       zh:"辩论，争论；主张，认为", forms:["argue"]}
        ]
      },
      {
        id:"D1-P4", slug:"tem4-D1-P4", title:"道歉与拥抱", shape:"超圆角",
        poster:"assets/tem4/posters/D1_P4.png",
        sentence:"Early the next morning, Leo came with a small bouquet to apologize and ask her pardon; she showed mercy at once, admitting she could sympathize with his shyness, and they agreed to reconcile with a warm embrace.",
        sentenceCn:"第二天一早，利奥捧着一小束花来道歉，请求她的原谅；她立刻心软宽恕，坦言自己很能体谅他的害羞，两人和好，给了彼此一个温暖的拥抱。",
        scene:"樱花树下，戴蓝围巾的猴朋友捧着一小束粉花向小叶学姐道歉，两人温暖拥抱，头顶飘着一颗贴了创可贴的爱心。",
        words:[
          {word:"apologize",  ipa:"/əˈpɒlədʒaɪz/", pos:"vi.",      zh:"道歉", forms:["apologize"]},
          {word:"pardon",     ipa:"/ˈpɑːdən/",     pos:"n. / vt.", zh:"原谅，宽恕", forms:["pardon"]},
          {word:"mercy",      ipa:"/ˈmɜːsi/",      pos:"n.",       zh:"宽大，仁慈，怜悯", forms:["mercy"]},
          {word:"sympathize", ipa:"/ˈsɪmpəθaɪz/",  pos:"vi.",      zh:"同情，赞同，支持；体谅", forms:["sympathize"]},
          {word:"reconcile",  ipa:"/ˈrekənsaɪl/",  pos:"vt.",      zh:"使和解，使和好；调和，使一致", forms:["reconcile"]},
          {word:"embrace",    ipa:"/ɪmˈbreɪs/",    pos:"v. / n.",  zh:"抱，环绕；包含；接受 n. 拥抱，怀抱", forms:["embrace"]}
        ]
      },
      {
        id:"D1-P5", slug:"tem4-D1-P5", title:"夕阳下告白", shape:"波浪",
        poster:"assets/tem4/posters/D1_P5.png",
        sentence:"Under the sunset, Leo finally confessed the deep affection he had fostered for months, promising that he would yearn for his beloved friend forever and that fidelity and honesty would sustain their love through every season.",
        sentenceCn:"夕阳下，利奥终于表白了他默默培育数月的深深爱慕，承诺会永远思慕这位心爱的人，并以忠诚与坦诚维系这份爱，走过每一个季节。",
        scene:"粉彩山丘上，戴蓝围巾的猴朋友单膝跪地捧出发光的粉色爱心花送给小叶学姐，两人脸颊绯红，橙粉色晚霞中飘着小爱心。",
        words:[
          {word:"affection", ipa:"/əˈfekʃən/",  pos:"n.",       zh:"爱，钟爱；爱慕；慈爱，友爱", forms:["affection"]},
          {word:"beloved",   ipa:"/bɪˈlʌvɪd/",  pos:"adj. / n.", zh:"为…所爱的，被热爱的 n. 心爱的人", forms:["beloved"]},
          {word:"yearn",     ipa:"/jɜːn/",      pos:"vi.",      zh:"想念，思慕，渴望", forms:["yearn"]},
          {word:"foster",    ipa:"/ˈfɒstə/",    pos:"vt.",      zh:"促进，培养；收养；心怀（希望等）", forms:["fostered"]},
          {word:"sustain",   ipa:"/səˈsteɪn/",  pos:"vt.",      zh:"支撑，承受；维持，支持；蒙受", forms:["sustain"]},
          {word:"fidelity",  ipa:"/fɪˈdelɪti/", pos:"n.",       zh:"忠诚，忠实；逼真；精确", forms:["fidelity"]}
        ]
      }
    ]},
  {id:"D2", cat:"D", zh:"情绪表达", name:"Emotions", status:"live",
    date:"2026-10-03", words:30, desc:"情绪的起起落落：喜讯降临、欢笑时刻、惊讶一瞬、低落与悲伤、怒气平息",
    color:"#4A90D9",
    parts:[
      {
        id:"D2-P1", slug:"tem4-D2-P1", title:"喜讯降临", shape:"拱门",
        poster:"assets/tem4/posters/D2_P1.png",
        sentence:"When the long-awaited letter arrived, Xiao Ye felt truly blessed: the thrilling news of her scholarship excited the whole dorm, her roommates were exhilarated by the wonderful result, their warm congratulations flattered her greatly, and their intense curiosity stimulated one question after another.",
        sentenceCn:"当期盼已久的信件终于寄到时，小叶学姐感到无比幸福：她获得奖学金的好消息让整个宿舍兴奋不已，室友们为这一美妙的成果激动万分，她们热情的祝贺让她倍感欣喜，大家强烈的好奇心更是引出了一个又一个的问题。",
        scene:"粉彩宿舍里，小叶学姐站在椅子上双手高举发光的信件，三位猴室友欢呼庆祝，彩纸与星星飞舞。",
        words:[
          {word:"excite",     ipa:"/ɪkˈsaɪt/",     pos:"vt.",  zh:"刺激，使兴奋，使激动；激发，唤起", forms:["excited"]},
          {word:"exhilarate", ipa:"/ɪɡˈzɪləreɪt/", pos:"vt.",  zh:"使高兴，使兴奋", forms:["exhilarated"]},
          {word:"flatter",    ipa:"/ˈflætə/",      pos:"vt.",  zh:"奉承，恭维；使高兴，使满意", forms:["flattered"]},
          {word:"stimulate",  ipa:"/ˈstɪmjuleɪt/", pos:"v.",   zh:"激励，促进；刺激，使兴奋", forms:["stimulated"]},
          {word:"intense",    ipa:"/ɪnˈtens/",     pos:"adj.", zh:"强烈的；热切的，热情的；认真的，紧张的", forms:["intense"]},
          {word:"blessed",    ipa:"/ˈblesɪd/",     pos:"adj.", zh:"神圣的，受上帝恩宠的；带来愉快的", forms:["blessed"]}
        ]
      },
      {
        id:"D2-P2", slug:"tem4-D2-P2", title:"欢笑时刻", shape:"叶形",
        poster:"assets/tem4/posters/D2_P2.png",
        sentence:"That afternoon a fluffy kitten wandered into the dorm and amused everyone: it tickled Xiao Ye's ankle with its tail and teased the ball of yarn until it rolled away, one roommate giggled non-stop, another chuckled quietly behind her book, and even the serious monitor could not help but grin.",
        sentenceCn:"那天下午，一只毛茸茸的小猫溜进宿舍，把大家都逗乐了：它用尾巴挠小叶学姐的脚踝，又逗弄着毛线团直到毛线团滚走；一位室友咯咯笑个不停，另一位在书后轻声偷笑，连严肃的班长也忍不住咧嘴笑了。",
        scene:"宿舍地毯上，小奶猫用尾巴挠小叶学姐的脚踝逗得她咯咯笑，毛线团滚到一旁，室友们有的大笑有的捧书偷笑。",
        words:[
          {word:"amuse",   ipa:"/əˈmjuːz/", pos:"vt.",     zh:"逗…乐，逗…笑；给…娱乐（消遣）", forms:["amused"]},
          {word:"tickle",  ipa:"/ˈtɪkl/",   pos:"vt.",     zh:"胳肢，发痒；使愉悦，满足", forms:["tickled"]},
          {word:"tease",   ipa:"/tiːz/",    pos:"v.",      zh:"取笑，揶揄，嘲弄", forms:["teased"]},
          {word:"giggle",  ipa:"/ˈɡɪɡl/",   pos:"n. / v.", zh:"吃吃地笑，咯咯地笑；傻笑", forms:["giggled"]},
          {word:"chuckle", ipa:"/ˈtʃʌkl/",  pos:"v.",      zh:"轻声地笑，窃笑", forms:["chuckled"]},
          {word:"grin",    ipa:"/ɡrɪn/",    pos:"n. / v.", zh:"露齿笑，咧着嘴笑", forms:["grin"]}
        ]
      },
      {
        id:"D2-P3", slug:"tem4-D2-P3", title:"惊讶一瞬", shape:"椭圆",
        poster:"assets/tem4/posters/D2_P3.png",
        sentence:"Suddenly a loud crash in the corridor startled everyone: Xiao Ye rushed out and was stunned by the sight of a toppled shelf, the amazing number of scattered books astonished her so much that she could only exclaim in surprise, while a freshman nearby began to panic, not knowing what to do.",
        sentenceCn:"走廊里突然传来一声巨响，吓了大家一跳：小叶学姐冲出门去，看到倒下的书架顿时惊呆了；散落一地的书多得令人惊叹，她惊讶得只能连连惊呼，而旁边的一名新生则慌乱起来，完全不知如何是好。",
        scene:"粉彩走廊里书架倒下、书本散落一地，小叶学姐双手捂嘴睁大眼睛，旁边的小新生一脸慌张。",
        words:[
          {word:"amaze",    ipa:"/əˈmeɪz/",    pos:"vt.", zh:"令（人）惊愕，使（人）惊叹", forms:["amazing"]},
          {word:"astonish", ipa:"/əˈstɒnɪʃ/",  pos:"vt.", zh:"使吃惊，使惊愕", forms:["astonished"]},
          {word:"startle",  ipa:"/ˈstɑːtl/",   pos:"v.",  zh:"（使）惊愕，（使）吃惊", forms:["startled"]},
          {word:"stun",     ipa:"/stʌn/",      pos:"vt.", zh:"将（人或动物）打昏；使目瞪口呆，使吃惊；令人喜悦", forms:["stunned"]},
          {word:"exclaim",  ipa:"/ɪkˈskleɪm/", pos:"v.",  zh:"（由于惊讶、痛苦、愤怒、高兴等）呼喊，惊叫，大声说", forms:["exclaim"]},
          {word:"panic",    ipa:"/ˈpænɪk/",    pos:"n.",  zh:"恐慌，惊惶 v.（使）恐慌，（使）惊惶 adj. 恐慌的，惊慌的", forms:["panic"]}
        ]
      },
      {
        id:"D2-P4", slug:"tem4-D2-P4", title:"低落与悲伤", shape:"超圆角",
        poster:"assets/tem4/posters/D2_P4.png",
        sentence:"It turned out that her friend Lily had failed the exam, and the result disappointed her deeply: she wept quietly by the window and sank into gloom for days, and the gray skies only seemed to depress her further; but Xiao Ye stayed beside her, refusing to let her despair, and gently reminded her that it is all right to grieve before starting again.",
        sentenceCn:"原来她的朋友莉莉考试失利，结果让她深感失望：她在窗边悄悄流泪，一连几天闷闷不乐，灰蒙蒙的天空似乎更使她消沉；但小叶学姐一直陪着她，不肯让她陷入绝望，还温柔地提醒她——悲伤一阵子没关系，之后重新出发就好。",
        scene:"雨天窗边，小猴姑娘抱着膝盖低头流泪，小叶学姐跪坐在旁轻拍她的肩膀，递上一杯热茶。",
        words:[
          {word:"disappoint", ipa:"/ˌdɪsəˈpɔɪnt/", pos:"vt.",      zh:"使失望，使扫兴，使（希望等）破灭", forms:["disappointed"]},
          {word:"despair",    ipa:"/dɪˈspeə/",     pos:"n. / vi.", zh:"绝望，失望", forms:["despair"]},
          {word:"grieve",     ipa:"/ɡriːv/",       pos:"v.",       zh:"使悲痛；使苦恼 vi. 悲伤；哀悼", forms:["grieve"]},
          {word:"gloom",      ipa:"/ɡluːm/",       pos:"n.",       zh:"黑暗，幽暗；忧郁，阴沉", forms:["gloom"]},
          {word:"depress",    ipa:"/dɪˈpres/",     pos:"vt.",      zh:"使消沉，使抑郁，使萧条；压下，按下", forms:["depress"]},
          {word:"weep",       ipa:"/wiːp/",        pos:"v.",       zh:"流泪，哭泣", forms:["wept"]}
        ]
      },
      {
        id:"D2-P5", slug:"tem4-D2-P5", title:"怒气平息", shape:"波浪",
        poster:"assets/tem4/posters/D2_P5.png",
        sentence:"That evening, however, the noise of the celebration provoked a small quarrel: a tired roommate, annoyed by the loud music and irritated by the endless jokes, soon grew furious, and her rage flared until Xiao Ye handed her a cup of warm milk tea, and all the anger melted into laughter.",
        sentenceCn:"不过到了晚上，庆祝的喧闹引来了一场小风波：一位疲惫的室友被吵闹的音乐弄得很恼火，又被没完没了的玩笑惹得心烦，很快气得大发雷霆，怒火一触即发——直到小叶学姐递给她一杯温热的奶茶，所有的怒气才化作了笑声。",
        scene:"晚霞映照的宿舍里，气鼓鼓的猴室友抱臂而坐，小叶学姐微笑着递上温热的奶茶，怒气符号化作小爱心。",
        words:[
          {word:"annoy",    ipa:"/əˈnɔɪ/",     pos:"v.",   zh:"使烦恼，使生气；打搅", forms:["annoyed"]},
          {word:"irritate", ipa:"/ˈɪrɪteɪt/",  pos:"v.",   zh:"激怒，使烦躁；使不舒服，刺激", forms:["irritated"]},
          {word:"provoke",  ipa:"/prəˈvəʊk/",  pos:"vt.",  zh:"激怒，煽动，挑起", forms:["provoked"]},
          {word:"furious",  ipa:"/ˈfjʊəriəs/", pos:"adj.", zh:"狂怒的，暴怒的；狂暴的，猛烈的，强烈的", forms:["furious"]},
          {word:"rage",     ipa:"/reɪdʒ/",     pos:"n.",   zh:"盛怒，狂怒 vi. 发怒，动怒；（风、浪、战斗等）猛烈进行", forms:["rage"]},
          {word:"flare",    ipa:"/fleə/",      pos:"v.",   zh:"（火焰）摇曳，闪耀；突然发怒（激动） n. 闪烁，闪现", forms:["flared"]}
        ]
      }
    ]},
  {
    id:"D3", cat:"D", zh:"沟通与对话", name:"Communication", status:"live",
    date:"2026-10-04", words:30, desc:"隔着山海的问候：深夜来电、视频絮语、奋笔疾书、妙笔回信、隔空论战",
    color:"#4A90D9",
    parts:[
      {
        id:"D3-P1", slug:"tem4-D3-P1", title:"深夜来电", shape:"拱门",
        poster:"assets/tem4/posters/D3_P1.png",
        sentence:"Late one evening, Xiao Ye received a surprise collect call from Leo, who lived in a distant mountain village: at first she hesitated, not daring to guess who was calling, and her voice faltered when the familiar greeting came through; Leo rang to enquire after his old friend, and before she could utter a word of complaint about his long silence, both of them were already laughing.",
        sentenceCn:"一天深夜，小叶学姐接到一个意想不到的由对方付费的长途电话，打来的是住在遥远山村的老朋友利奥：起初她犹豫着不敢猜是谁来电，听到熟悉问候声的那一刻，她的声音都有些发颤；利奥打电话来问候老朋友，还没等她抱怨一句“怎么这么久才联系”，两人已经笑作一团。",
        scene:"深夜粉彩宿舍里，小叶学姐坐在床上抱着粉色老式电话听筒，台灯温暖，窗外月亮与星星闪烁。",
        words:[
          {word:"receive",  ipa:"/rɪˈsiːv/",   pos:"v.",         zh:"收到，领到，受到；收听，收看", forms:["received"]},
          {word:"collect",  ipa:"/kəˈlekt/",   pos:"v. / adj.",  zh:"收集，采集；收（账等）；由对方付费的", forms:["collect"]},
          {word:"hesitate", ipa:"/ˈhezɪteɪt/", pos:"v.",         zh:"踌躇，犹豫；不愿意；言语支吾", forms:["hesitated"]},
          {word:"falter",   ipa:"/ˈfɔːltə/",   pos:"v.",         zh:"蹒跚，踉跄；犹豫；结巴地说，支吾而语", forms:["faltered"]},
          {word:"enquire",  ipa:"/ɪnˈkwaɪə/",  pos:"v.",         zh:"调查；询问，打听；问候", forms:["enquire"]},
          {word:"utter",    ipa:"/ˈʌtə/",      pos:"vt. / adj.", zh:"发出（声音等），说；完全的，彻底的", forms:["utter"]}
        ]
      },
      {
        id:"D3-P2", slug:"tem4-D3-P2", title:"视频絮语", shape:"叶形",
        poster:"assets/tem4/posters/D3_P2.png",
        sentence:"At the weekend they met again on a video call: Leo related one funny story after another about village life, the two of them conversed happily for hours, Xiao Ye had to whisper whenever her roommates fell asleep, gestured to show him her new sketchbook, winked at the camera when he teased her, and finally breathed a happy sigh when the call ended.",
        sentenceCn:"周末，两人又在视频通话中重逢：利奥讲了一件又一件山村趣事，他们开心地聊了好几个小时；每当室友睡下，小叶学姐就压低声音说话，还用手势向他展示自己的新速写本；当他打趣她时，她对着镜头眨了眨眼；通话结束时，她满足地舒了一口气。",
        scene:"粉彩书桌前，小叶学姐戴着耳机对笔记本电脑挥手，屏幕里蓝围巾的利奥在山村背景里挥手回应，爱心与对话框漂浮。",
        words:[
          {word:"converse", ipa:"/kənˈvɜːs/",   pos:"v.",        zh:"交谈 adj. 相反的，逆的 n. 相反事物", forms:["conversed"]},
          {word:"whisper",  ipa:"/ˈwɪspə/",     pos:"v.",        zh:"低声说，耳语；暗中传说；发沙沙声", forms:["whisper"]},
          {word:"gesture",  ipa:"/ˈdʒestʃə/",   pos:"n. / v.",   zh:"姿势，手势；用手势表示，用动作示意", forms:["gestured"]},
          {word:"wink",     ipa:"/wɪŋk/",       pos:"v.",        zh:"眨眼，使眼色；（星或光）闪烁", forms:["winked"]},
          {word:"relate",   ipa:"/rɪˈleɪt/",    pos:"v.",        zh:"叙述，讲；使…有关联；与…有关", forms:["related"]},
          {word:"breathe",  ipa:"/briːð/",      pos:"v.",        zh:"呼吸；吐出；低语", forms:["breathed"]}
        ]
      },
      {
        id:"D3-P3", slug:"tem4-D3-P3", title:"奋笔疾书", shape:"椭圆",
        poster:"assets/tem4/posters/D3_P3.png",
        sentence:"After the call, Xiao Ye spread out her letter paper: she described her busy campus life in vivid detail, dictated the dorm address to her roommate for the envelope, specified a date for Leo's winter visit, disclosed a small surprise she was planning but refused to generalize her feelings into plain words, and finally verified the postcode twice before sealing the envelope.",
        sentenceCn:"通话结束后，小叶学姐铺开了信纸：她用生动的细节描写自己忙碌的校园生活，向室友口述宿舍地址以便写在信封上，具体约定了利奥寒假来访的日期，透露了自己正在筹备的一个小惊喜，却拒绝把心事简单概括成几句话；最后她把邮编核对了两遍才封上信封。",
        scene:"暖黄台灯下的书桌，小叶学姐执钢笔在信纸上写信，旁边是书堆、可可杯与贴着爱心邮票的信封。",
        words:[
          {word:"describe",   ipa:"/dɪˈskraɪb/",    pos:"vt.", zh:"叙述，描写，形容；描绘，画", forms:["described"]},
          {word:"dictate",    ipa:"/dɪkˈteɪt/",     pos:"v.",  zh:"口述，（使）听写；命令，强行规定", forms:["dictated"]},
          {word:"specify",    ipa:"/ˈspesɪfaɪ/",    pos:"vt.", zh:"具体指定；详述", forms:["specified"]},
          {word:"disclose",   ipa:"/dɪsˈkləʊz/",    pos:"v.",  zh:"（使）显露，揭露，泄露；公开，说出", forms:["disclosed"]},
          {word:"generalize", ipa:"/ˈdʒenərəlaɪz/", pos:"v.",  zh:"概括，归纳；泛论", forms:["generalize"]},
          {word:"verify",     ipa:"/ˈverɪfaɪ/",     pos:"vt.", zh:"核实，查证", forms:["verified"]}
        ]
      },
      {
        id:"D3-P4", slug:"tem4-D3-P4", title:"妙笔回信", shape:"超圆角",
        poster:"assets/tem4/posters/D3_P4.png",
        sentence:"Days later a reply arrived: Leo's letter was eloquent and full of colloquial jokes, and its playful wit made her laugh out loud in the library; he affirmed that he would surely come at the start of the winter holiday, alleged with a straight face that the stars above his village were far brighter than any city light, and every line between the jokes implied a warm invitation.",
        sentenceCn:"几天后回信到了：利奥的信写得文采斐然，满是口语化的俏皮话，字里行间的机智让小叶学姐在图书馆里笑出了声；他斩钉截铁地表示寒假一开始一定前来，还一本正经地声称他们村口上空的星星比任何城市的灯光都要亮，而那些玩笑之外的每一行字，都在暗示着一份热情的邀请。",
        scene:"粉彩宿舍里，小叶学姐窝在懒人沙发上捧着几页信念出了声，旁边散落着带心形邮票的信封与星星装饰。",
        words:[
          {word:"eloquent",   ipa:"/ˈeləkwənt/",    pos:"adj.", zh:"雄辩的，有说服力的，口才好的；意味深长的", forms:["eloquent"]},
          {word:"colloquial", ipa:"/kəˈləʊkwɪəl/",  pos:"adj.", zh:"口语的，会话的；口语体的", forms:["colloquial"]},
          {word:"wit",        ipa:"/wɪt/",          pos:"n.",   zh:"才智，机智；机智的人，才子", forms:["wit"]},
          {word:"affirm",     ipa:"/əˈfɜːm/",       pos:"v.",   zh:"坚称，断言，肯定地说", forms:["affirmed"]},
          {word:"allege",     ipa:"/əˈledʒ/",       pos:"v.",   zh:"（在提不出证明的情况下）断言，声称", forms:["alleged"]},
          {word:"imply",      ipa:"/ɪmˈplaɪ/",      pos:"vt.",  zh:"暗指，暗示；意味要，必然包含", forms:["implied"]}
        ]
      },
      {
        id:"D3-P5", slug:"tem4-D3-P5", title:"隔空论战", shape:"波浪",
        poster:"assets/tem4/posters/D3_P5.png",
        sentence:"Xiao Ye could not let his claim pass unanswered: in her reply she asserted that city sunsets were just as splendid, retorted to his teasing with a photograph of the glowing skyline, refused to be contradicted on the point, and tried her best to persuade him that the best view was wherever good friends watched it together; the sunset colors in her picture seemed to testify that she was right, and she was sure no one could ever claim otherwise.",
        sentenceCn:"小叶学姐可不肯就这样认输：在回信中她主张城市的晚霞同样绚烂，用一张灯火璀璨的天际线照片回敬他的打趣，在这件事上绝不容许别人反驳，还竭力说服他——最好的风景，是和好朋友一起看到的那一处；照片中绚烂的霞色仿佛在证明她是对的，她也确信没有人能对此提出异议。",
        scene:"晚霞映照的窗边，小叶学姐把城市天际线照片郑重装进信封，窗外粉橙色晚霞与初现的星星交相辉映。",
        words:[
          {word:"claim",      ipa:"/kleɪm/",        pos:"v. / n.", zh:"声称，主张；要求，认领 n. 要求；权利", forms:["claim"]},
          {word:"assert",     ipa:"/əˈsɜːt/",       pos:"vt.",     zh:"宣称，断言；维护，坚持（权利等）", forms:["asserted"]},
          {word:"retort",     ipa:"/rɪˈtɔːt/",      pos:"n. / v.", zh:"反驳，反唇相讥", forms:["retorted"]},
          {word:"contradict", ipa:"/ˌkɒntrəˈdɪkt/", pos:"v.",      zh:"否定；反驳；与…矛盾", forms:["contradicted"]},
          {word:"persuade",   ipa:"/pəˈsweɪd/",     pos:"v.",      zh:"说服，劝服，使…相信", forms:["persuade"]},
          {word:"testify",    ipa:"/ˈtestɪfaɪ/",    pos:"v.",      zh:"作证，证实；表明，证明", forms:["testify"]}
        ]
      }
    ]},
  {
    id:"D4", cat:"D", zh:"社交礼仪", name:"Social Etiquette", status:"live",
    date:"2026-10-05", words:30, desc:"利奥的山村回访：迎客到访、待客之道、晚宴餐桌、赠礼致谢、依依送别",
    color:"#4A90D9",
    parts:[
      {
        id:"D4-P1", slug:"tem4-D4-P1", title:"迎客到访", shape:"拱门",
        poster:"assets/tem4/posters/D4_P1.png",
        sentence:"Everyone had anticipated Leo's winter visit for weeks: Xiao Ye hurried to the station to hail him the moment his train arrived and admitted him into the warm dormitory with a pot of hot tea; when the roommates praised his gentle manners and the hand-woven scarf from his grandmother, the modest village boy blushed and gave each of them a shy smile.",
        sentenceCn:"利奥的寒假来访让全宿舍盼了好几个星期：火车一到站，小叶学姐就赶去月台招呼他，捧着一壶热茶把他迎进温暖的宿舍；当室友们夸他彬彬有礼、还夸奶奶织的围巾好看时，这位谦虚的山村男孩红着脸，朝每个人腼腆地笑了笑。",
        scene:"冬日清晨的宿舍门前雪花轻飘，小叶学姐捧着热茶壶迎接背旅行袋、系蓝围巾的利奥，爱心与星星漂浮。",
        words:[
          {word:"anticipate", ipa:"/ˈæntɪsɪpeɪt/",         pos:"vt.",     zh:"预料；先发制人；先于…做", forms:["anticipated"]},
          {word:"hail",       ipa:"/heɪl/",                pos:"v.",      zh:"向…欢呼；热情赞扬；高呼，招呼；下冰雹 n. 欢呼；打招呼；（冰）雹", forms:["hail"]},
          {word:"gentle",     ipa:"/ˈdʒentl/",             pos:"adj.",    zh:"温柔的，柔和的；有礼貌的，文雅的；出身高贵的", forms:["gentle"]},
          {word:"admit",      ipa:"/ədˈmɪt/",              pos:"v.",      zh:"允许…进入；承认；（指在一范围内）可容纳（某人或某事）", forms:["admitted"]},
          {word:"modest",     ipa:"/ˈmɒdɪst/",             pos:"adj.",    zh:"谦虚的；适度的，不过分的；端庄的；朴素的", forms:["modest"]},
          {word:"blush",      ipa:"/blʌʃ/",                pos:"n. / v.", zh:"脸红；感到羞愧", forms:["blushed"]}
        ]
      },
      {
        id:"D4-P2", slug:"tem4-D4-P2", title:"待客之道", shape:"叶形",
        poster:"assets/tem4/posters/D4_P2.png",
        sentence:"During his stay, the roommates treated Leo like family: they exerted themselves to keep the guest comfortable, considerate Xiao Ye eased his shyness with warm small talk and gave him privacy whenever he wanted to video-call his grandmother, and in return the happy visitor diverted everyone with funny card games and tales of village life.",
        sentenceCn:"做客的日子里，室友们把利奥当家人一样款待：他们竭尽全力让客人住得舒服，体贴的小叶学姐用温暖的闲聊化解他的拘谨，每当他想和奶奶视频通话时，还会贴心地给他留出独处的空间；作为回报，开心的客人用有趣的卡牌游戏和山村故事给所有人解闷。",
        scene:"温暖的粉彩宿舍客厅里，小叶学姐为窝在沙发上的利奥倒茶，桌上摆着桌游与饼干，串灯温馨。",
        words:[
          {word:"treat",       ipa:"/triːt/",               pos:"v. / n.", zh:"对待；处理；治疗；谈判，磋商；款待，招待 n. 难得的乐事；款待", forms:["treated"]},
          {word:"considerate", ipa:"/kənˈsɪdərɪt/",         pos:"adj.",    zh:"关切的，体贴的；替人设想的，考虑周到的", forms:["considerate"]},
          {word:"ease",        ipa:"/iːz/",                 pos:"n. / v.", zh:"舒适，悠闲，自在；容易，不费力 v. 减轻，缓和，使舒适；放松", forms:["eased"]},
          {word:"exert",       ipa:"/ɪɡˈzɜːt/",             pos:"vt.",     zh:"运用，行使，发挥（影响等）；用力，尽力", forms:["exerted"]},
          {word:"privacy",     ipa:"/ˈprɪvəsi; ˈpraɪvəsi/", pos:"n.",      zh:"独处，隐私；秘密，私下", forms:["privacy"]},
          {word:"divert",      ipa:"/daɪˈvɜːt/",            pos:"v.",      zh:"（使）转向；转移…的注意力；使得到消遣", forms:["diverted"]}
        ]
      },
      {
        id:"D4-P3", slug:"tem4-D4-P3", title:"晚宴餐桌", shape:"椭圆",
        poster:"assets/tem4/posters/D4_P3.png",
        sentence:"On the last evening Xiao Ye cooked a grand farewell dinner: compliments on her generous dishes came from every side, Leo interjected between courses with funny stories about village cooking and joked that his own table manners were rather crude, and when he spilt a little tea while asking everyone not to stare at his flying chopsticks, the whole table burst into laughter.",
        sentenceCn:"离校前的最后一晚，小叶学姐做了一大桌丰盛的送别晚餐：大家纷纷称赞她的大方手艺，利奥在席间插科打诨，讲着村里做饭的趣事，还打趣说自己村里的餐桌规矩实在粗野；讲到兴头上他洒了几滴茶水，又忙着让大家别盯着他上下翻飞的筷子看，逗得全桌哈哈大笑。",
        scene:"暖灯下的圆餐桌摆满热气腾腾的菜肴，小叶学姐端菜上桌，利奥笑得前仰后合，打翻的茶杯旁室友掩嘴而笑。",
        words:[
          {word:"compliment", ipa:"/ˈkɒmplɪmənt/",         pos:"n.",      zh:"恭维，称赞", forms:["compliments"]},
          {word:"generous",   ipa:"/ˈdʒenərəs/",           pos:"adj.",    zh:"宽宏大量的，慷慨的；丰富的，丰盛的", forms:["generous"]},
          {word:"interject",  ipa:"/ˌɪntəˈdʒekt/",         pos:"vt.",     zh:"突然插入，插话，打断（别人的话）", forms:["interjected"]},
          {word:"crude",      ipa:"/kruːd/",               pos:"adj. / n.", zh:"天然的，未加工的；粗野的，没有教养的；赤裸裸的 n. 原油", forms:["crude"]},
          {word:"spill",      ipa:"/spɪl/",                pos:"v.",      zh:"（使）溢出，（使）溅出", forms:["spilt"]},
          {word:"stare",      ipa:"/steə/",                pos:"v. / n.", zh:"盯，凝视，目不转睛地看 n. 盯，凝视", forms:["stare"]}
        ]
      },
      {
        id:"D4-P4", slug:"tem4-D4-P4", title:"赠礼致谢", shape:"超圆角",
        poster:"assets/tem4/posters/D4_P4.png",
        sentence:"That night Leo bestowed a gift on each roommate: dried mushrooms from his grandmother's garden, and for Xiao Ye a hand-carved wooden hairpin, a pledge of friendship he hoped would last forever; she stammered her thanks and said she felt much obliged, praised the fine workmanship while the roommates admired every little detail, and promised to wear it when he came again.",
        sentenceCn:"那天晚上，利奥给每位室友都送上一份来自山村的礼物：奶奶菜园里晒干的蘑菇，给小叶学姐的则是一支手工雕刻的木发簪——那是他希望永久保存的友谊信物；她结结巴巴地道谢，直说自己感激不尽，一边夸赞做工精巧，室友们也对每个小细节赞叹不已，她还答应等他再来时一定戴上它。",
        scene:"夜晚的宿舍里暖灯融融，利奥双手递上干蘑菇与木发簪礼盒，小叶学姐红着脸双手接过，室友在身后拍手。",
        words:[
          {word:"bestow",  ipa:"/bɪˈstəʊ/",                pos:"vt.",     zh:"把…赠与，把…给予", forms:["bestowed"]},
          {word:"pledge",  ipa:"/pledʒ/",                  pos:"n. / vt.", zh:"誓言，誓约；保证物，信物 vt. 保证；抵押", forms:["pledge"]},
          {word:"stammer", ipa:"/ˈstæmə/",                 pos:"v. / n.", zh:"结巴，口吃 n. 口吃", forms:["stammered"]},
          {word:"oblige",  ipa:"/əˈblaɪdʒ/",               pos:"v.",      zh:"迫使；对…感激；施恩惠于", forms:["obliged"]},
          {word:"praise",  ipa:"/preɪz/",                  pos:"n. / vt.", zh:"表扬，赞美", forms:["praised"]},
          {word:"admire",  ipa:"/ədˈmaɪə/",                pos:"v.",      zh:"赞赏，钦佩，羡慕", forms:["admired"]}
        ]
      },
      {
        id:"D4-P5", slug:"tem4-D4-P5", title:"依依送别", shape:"波浪",
        poster:"assets/tem4/posters/D4_P5.png",
        sentence:"When Sunday morning came and it was time to say goodbye, Leo lingered at the dormitory gate, unwilling to leave; Xiao Ye blamed herself for the jokes that had gone too far at dinner, full of shame and afraid she might have offended him; she sighed, repented of her sharp tongue and promised to visit his mountain village next summer, while Leo only laughed and said a friend's teasing was the warmest gift of all.",
        sentenceCn:"星期天清早到了说再见的时候，利奥在宿舍门口久久徘徊、不肯离去；小叶学姐却一直在心里责怪自己晚宴上的玩笑开过了头，满心羞愧，生怕冒犯了这位远道而来的朋友；她轻轻叹了口气，为自己的嘴快悔悟不已，还承诺明年夏天一定去他的山村看看——而利奥只是大笑，说朋友的打趣才是最温暖的礼物。",
        scene:"冬日清晨的宿舍门口洒满金色阳光，利奥背着旅行袋挥手告别，小叶学姐含泪微笑挥手，手中小信封攥得紧紧的。",
        words:[
          {word:"linger",  ipa:"/ˈlɪŋɡə/",                 pos:"v.",      zh:"逗留，徘徊", forms:["lingered"]},
          {word:"blame",   ipa:"/bleɪm/",                  pos:"vt. / n.", zh:"责备，找…的差错；把…归咎，推诿 n. 责备，责怪；责任", forms:["blamed"]},
          {word:"shame",   ipa:"/ʃeɪm/",                   pos:"n. / vt.", zh:"惭愧，耻辱；可耻之事物（人）；遗憾，惋惜之事 vt. 使蒙羞；使感羞愧", forms:["shame"]},
          {word:"sigh",    ipa:"/saɪ/",                    pos:"v. / n.", zh:"叹息，叹气 n. 叹息，叹气声", forms:["sighed"]},
          {word:"offend",  ipa:"/əˈfend/",                 pos:"v.",      zh:"冒犯，触怒，给人不愉快的感觉；犯过错，犯罪", forms:["offended"]},
          {word:"repent",  ipa:"/rɪˈpent/",                pos:"v.",      zh:"悔悟，悔改，悔恨", forms:["repented"]}
        ]
      }
    ]},
  /* ===== E 科学与探索 ===== */
  {
    id:"E1", cat:"E", zh:"太空探索", name:"Space Exploration", status:"live",
    date:"2026-10-07", words:30, desc:"从仰望星空到叩问深空：星空初见、火箭发射、太空站生活、月球漫步、星际畅想",
    color:"#4A90D9",
    parts:[
      {
        id:"E1-P1", slug:"tem4-E1-P1", title:"星空初见", shape:"拱门",
        poster:"assets/tem4/posters/E1_P1.png",
        sentence:"On the astronomy night we gazed up in awe: thousands of stars glimmered in the velvet sky, a few bright ones gleamed like silver coins, and every time a star seemed to blink, the whole class marveled at the wonder above.",
        sentenceCn:"天文之夜，我们满怀敬畏地抬头凝望：成千上万的星星在天鹅绒般的夜空中闪烁着微光，几颗亮星像银币般闪闪发亮，每当一颗星星仿佛眨了眨眼，全班同学都为头顶的奇观惊叹不已。",
        scene:"星空下的天文台露台，小叶学姐俯身白色望远镜仰望星空，小熊和小兔指着划过的流星。",
        words:[
          {word:"gaze",       ipa:"/ɡeɪz/",        pos:"vi. / n.", zh:"凝视，注视，盯 n. 凝视，注视", forms:["gazed"]},
          {word:"awe",        ipa:"/ɔː/",          pos:"n. / vt.", zh:"畏惧；敬畏；使敬畏，威吓", forms:["awe"]},
          {word:"glimmer",    ipa:"/ˈɡlɪmə/",      pos:"vi. / n.", zh:"发出闪烁的微光；微光，微弱的闪光", forms:["glimmered"]},
          {word:"gleam",      ipa:"/ɡliːm/",       pos:"n. / v.",  zh:"微光，闪光，一线光明；闪现；闪烁，隐约闪光", forms:["gleamed"]},
          {word:"blink",      ipa:"/blɪŋk/",       pos:"v.",       zh:"（星星）闪烁；（眼睛）眨眼", forms:["blink"]},
          {word:"marvel",     ipa:"/ˈmɑːvəl/",     pos:"n. / v.",  zh:"令人惊奇的事物；惊奇，惊异", forms:["marveled"]}
        ]
      },
      {
        id:"E1-P2", slug:"tem4-E1-P2", title:"火箭发射", shape:"叶形",
        poster:"assets/tem4/posters/E1_P2.png",
        sentence:"At dawn the rocket was ready to launch: it lifted off with a tremendous blast, giant flames roared from its tail, the scream of its engines shook the ground, its mighty thrust pushed it higher and higher, and it kept accelerating until it vanished into the clouds.",
        sentenceCn:"黎明时分，火箭蓄势待发：随着一声巨响它轰然升空，巨大的火焰从尾部喷涌而出，引擎的呼啸震颤着大地，强劲的推进力把它越推越高，它不断加速，直到消失在云层之中。",
        scene:"粉彩晨光的发射场，小叶学姐和伙伴们在观景台上仰望升空的火箭，橘色火焰与粉色烟云翻涌。",
        words:[
          {word:"launch",     ipa:"/lɔːntʃ/",        pos:"n. / v.", zh:"发射；（船）下水；发起，展开，开办", forms:["launch"]},
          {word:"blast",      ipa:"/blɑːst; blæst/", pos:"n. / v.", zh:"一阵（风）；喇叭声，号角声；爆炸；摧毁", forms:["blast"]},
          {word:"flame",      ipa:"/fleɪm/",         pos:"n. / v.", zh:"火焰，火舌；闪光；焚烧；发光；闪耀", forms:["flames"]},
          {word:"scream",     ipa:"/skriːm/",        pos:"v. / n.", zh:"尖声叫喊；（指风、机器等）呼啸，发尖锐声 n. 尖叫声", forms:["scream"]},
          {word:"thrust",     ipa:"/θrʌst/",         pos:"v. / n.", zh:"刺，戳；刺进；用力推，冲 n. 推，刺，戳；推进力", forms:["thrust"]},
          {word:"accelerate", ipa:"/əkˈseləreɪt/",   pos:"v.",      zh:"（使）加速", forms:["accelerating"]}
        ]
      },
      {
        id:"E1-P3", slug:"tem4-E1-P3", title:"太空站生活", shape:"椭圆",
        poster:"assets/tem4/posters/E1_P3.png",
        sentence:"Life on the space station is magical: pens hover in mid-air and water drops glisten like pearls, the station slowly spins around the Earth, instruments emit soft beeps, the astronauts interact with the control centre through video calls, and every visual detail outside the window looks brand new.",
        sentenceCn:"太空站上的生活真奇妙：钢笔悬停在半空，水珠像珍珠般闪闪发光，空间站缓缓绕着地球旋转，仪器发出轻柔的哔哔声，宇航员通过视频通话与地面控制中心互动，窗外每一个看得见的细节都那么新奇。",
        scene:"太空站舱内，穿白色宇航服的小叶学姐漂浮在舷窗前，钢笔与水珠悬浮，窗外是蔚蓝地球。",
        words:[
          {word:"hover",      ipa:"/ˈhɒvə/",      pos:"vi.",      zh:"飞翔，盘旋，徘徊", forms:["hover"]},
          {word:"glisten",    ipa:"/ˈɡlɪsən/",    pos:"n. / vi.", zh:"闪耀", forms:["glisten"]},
          {word:"spin",       ipa:"/spɪn/",       pos:"v. / n.",  zh:"纺纱；（使）快速旋转；杜撰，撰述 n. 旋转", forms:["spins"]},
          {word:"emit",       ipa:"/ɪˈmɪt/",      pos:"vt.",      zh:"发出，射出", forms:["emit"]},
          {word:"interact",   ipa:"/ˌɪntərˈækt/", pos:"vi.",      zh:"相互作用，相互影响", forms:["interact"]},
          {word:"visual",     ipa:"/ˈvɪʒuəl/",    pos:"adj.",     zh:"视觉的，视力的；看得见的", forms:["visual"]}
        ]
      },
      {
        id:"E1-P4", slug:"tem4-E1-P4", title:"月球漫步", shape:"超圆角",
        poster:"assets/tem4/posters/E1_P4.png",
        sentence:"Walking on the Moon feels alien yet exciting: the astronauts heave their equipment across the grey dust, watch tiny meteoroids collide with the surface and disperse clouds of silver dust, learn how a magnetic shield can deflect the dangerous solar wind, and train hard so that even the smallest mistake will never grow into a catastrophe.",
        sentenceCn:"在月球上行走感觉陌生又刺激：宇航员们拖着设备走过灰色的尘土，看着小小的流星体撞上月面、扬起片片银色尘埃，学习磁场护盾如何让危险的太阳风偏转，并刻苦训练，让哪怕最微小的差错也永远不会酿成大祸。",
        scene:"灰色月面上，穿宇航服的小叶学姐蹦跳着留下脚印，银色尘埃飞扬，着陆器与月球车伴其左右，地球悬在星空。",
        words:[
          {word:"alien",      ipa:"/ˈeɪliən/",     pos:"n. / adj.", zh:"外侨，外国人；外星人；外国的，异邦的；敌对的", forms:["alien"]},
          {word:"heave",      ipa:"/hiːv/",        pos:"v.",        zh:"举起，拉，拖；投掷；（有节奏地）起伏", forms:["heave"]},
          {word:"collide",    ipa:"/kəˈlaɪd/",     pos:"v.",        zh:"（车、船等）猛撞；冲突", forms:["collide"]},
          {word:"disperse",   ipa:"/dɪsˈpɜːs/",    pos:"v.",        zh:"（使）分散；驱散，疏散", forms:["disperse"]},
          {word:"deflect",    ipa:"/dɪˈflekt/",    pos:"v.",        zh:"（使）偏斜，转向", forms:["deflect"]},
          {word:"catastrophe",ipa:"/kəˈtæstrəfi/", pos:"n.",        zh:"（突然的）大灾祸，大灾害", forms:["catastrophe"]}
        ]
      },
      {
        id:"E1-P5", slug:"tem4-E1-P5", title:"星际畅想", shape:"波浪",
        poster:"assets/tem4/posters/E1_P5.png",
        sentence:"Back at school, Xiao Ye undertook a project on deep space: she explained how a space probe can encircle a distant planet, how two orbits may intersect, and how the sun radiates light and heat across the infinite universe, and her classmates were amazed that human curiosity could reach so far.",
        sentenceCn:"回到学校后，小叶学姐着手做了一份关于深空的课题：她讲解了空间探测器如何环绕遥远的行星运行、两条轨道如何相交、太阳如何把光和热辐射到无限的宇宙中，同学们惊叹人类的好奇心竟能抵达如此远方。",
        scene:"明亮的教室里，小叶学姐指着星空海报讲解深空探测器模型，同学们听得目不转睛。",
        words:[
          {word:"undertake",  ipa:"/ˌʌndəˈteɪk/", pos:"vt.",     zh:"试图，企图；着手做，从事；承担", forms:["undertook"]},
          {word:"probe",      ipa:"/prəʊb/",      pos:"n. / v.", zh:"探针；探测飞船；探查，彻底调查；探查，查究", forms:["probe"]},
          {word:"encircle",   ipa:"/ɪnˈsɜːkl/",   pos:"vt.",     zh:"环绕，包围；绕行", forms:["encircle"]},
          {word:"intersect",  ipa:"/ˌɪntəˈsekt/", pos:"v.",      zh:"横断，横切，贯穿；相交，交叉", forms:["intersect"]},
          {word:"radiate",    ipa:"/ˈreɪdieɪt/",  pos:"v.",      zh:"发光，放热；辐射，散发", forms:["radiates"]},
          {word:"infinite",   ipa:"/ˈɪnfɪnɪt/",   pos:"adj.",    zh:"无限的，无穷的，无际的；巨大的，无数的", forms:["infinite"]}
        ]
      }
    ]},
  {
    id:"E2", cat:"E", zh:"自然探索", name:"Nature Discovery", status:"live",
    date:"2026-10-08", words:30, desc:"从清晨进山到守护归途：走进林间、松鼠与啄木鸟、溪谷水畔、植物王国的奥秘、守护与归途",
    color:"#4A90D9",
    parts:[
      {
        id:"E2-P1", slug:"tem4-E2-P1", title:"走进林间", shape:"拱门",
        poster:"assets/tem4/posters/E2_P1.png",
        sentence:"Early in the morning we followed the winding trail into the valley: birds chattered in the canopy, Xiao Ye picked up a sturdy stick as her walking staff and warned us not to slip on the mossy stones, she pointed at a lizard creeping across the path, and we all held our breath to watch a shy deer sneak deeper into the ferns.",
        sentenceCn:"清晨，我们沿着蜿蜒的小径走进山谷：鸟儿在树冠间啁啾鸣叫，小叶学姐捡起一根结实的树枝当手杖，提醒大家别在长满青苔的石头上滑倒；她指着一只蜥蜴悄悄爬过小径，我们全都屏住呼吸，看一只羞怯的小鹿悄悄溜进蕨丛深处。",
        scene:"清晨粉彩森林，小叶学姐背着小背包沿蜿蜒苔藓小径走进山谷，手持树枝手杖，小鹿在蕨丛边探头，鸟儿在树冠间鸣叫。",
        words:[
          {word:"trail",   ipa:"/treɪl/",  pos:"n. / v.", zh:"足迹，踪迹；小径，小路 v. 拖，拖拽；跟踪，尾随", forms:["trail"]},
          {word:"chatter", ipa:"/ˈtʃætə/", pos:"v. / n.", zh:"喋喋不休；（鸟）啁啾，（松鼠等）吱吱叫；（溪流）潺潺作声", forms:["chattered"]},
          {word:"stick",   ipa:"/stɪk/",   pos:"n. / v.", zh:"小树枝；棍，棒；棒状物 v. 插入，刺，戳；黏着，粘贴", forms:["stick"]},
          {word:"slip",    ipa:"/slɪp/",   pos:"n. / v.", zh:"滑，溜，失足；小过失 v. 滑倒，溜走，潜行；滑落；犯错误", forms:["slip"]},
          {word:"creep",   ipa:"/kriːp/",  pos:"v.",      zh:"爬行；蹑手蹑脚地走，悄悄地走", forms:["creeping"]},
          {word:"sneak",   ipa:"/sniːk/",  pos:"v. / n.", zh:"潜行，溜走 n. 怯懦鬼祟的人", forms:["sneak"]}
        ]
      },
      {
        id:"E2-P2", slug:"tem4-E2-P2", title:"松鼠与啄木鸟", shape:"叶形",
        poster:"assets/tem4/posters/E2_P2.png",
        sentence:"On a fallen trunk a red squirrel perched and gnawed at a pine cone, a woodpecker flapped from hole to hole hunting for a worm, and the whole group clutched their cameras, waiting for the squirrel to leap back to its nest.",
        sentenceCn:"一根倒木上，红松鼠栖息着啃咬松果，一只啄木鸟振翅从一个树洞飞到另一个树洞捉虫子，全组同学紧握相机，等待松鼠跳回树巢的那一刻。",
        scene:"粉彩森林的倒木旁，红松鼠栖息着啃松果，啄木鸟振翅停在树洞边，小叶学姐和伙伴们蹲在草丛中举着相机观察。",
        words:[
          {word:"perch",  ipa:"/pɜːtʃ/", pos:"n. / v.", zh:"（鸟的）栖木；高的位置 v.（鸟）栖息；位于高处", forms:["perched"]},
          {word:"flap",   ipa:"/flæp/",  pos:"v. / n.", zh:"拍打，摆动；（鸟）振（翅）n. 拍打；（袋）盖，（信封）盖口", forms:["flapped"]},
          {word:"gnaw",   ipa:"/nɔː/",   pos:"v.",      zh:"咬，啮，啃；消耗，侵蚀；折磨，（使）烦恼", forms:["gnawed"]},
          {word:"leap",   ipa:"/liːp/",  pos:"n. / v.", zh:"跳，跳跃；（数字等）激增", forms:["leap"]},
          {word:"worm",   ipa:"/wɜːm/",  pos:"n. / v.", zh:"虫；可怜虫，寄生虫 v. 蠕动；爬行，慢慢进入", forms:["worm"]},
          {word:"clutch", ipa:"/klʌtʃ/", pos:"v. / n.", zh:"紧抓，紧握 n. 把握，紧抓；[pl.] 爪子，手；控制", forms:["clutched"]}
        ]
      },
      {
        id:"E2-P3", slug:"tem4-E2-P3", title:"溪谷水畔", shape:"椭圆",
        poster:"assets/tem4/posters/E2_P3.png",
        sentence:"By the stream, dragonflies glided over the water, the little waterfall threw up cool spray, fish flashed their silver scales as they swam, a green frog squatted motionless on a lotus leaf, and we watched an otter slide down the muddy bank to chase its prey.",
        sentenceCn:"溪边，蜻蜓掠过水面滑翔，小小的瀑布溅起清凉的水花，游动的鱼儿闪着银色的鳞光，一只绿蛙一动不动地蹲在荷叶上，我们看着一只水獭顺着泥岸滑下去追赶猎物。",
        scene:"粉彩溪谷，蜻蜓掠水滑翔，小鱼闪着银鳞，绿蛙蹲在荷叶上，水獭滑下泥岸，小叶学姐蹲在水边惊喜观看。",
        words:[
          {word:"glide", ipa:"/ɡlaɪd/", pos:"n. / v.",  zh:"滑动，滑行；滑翔", forms:["glided"]},
          {word:"spray", ipa:"/spreɪ/", pos:"n. / v.",  zh:"水雾，水花，浪花；喷雾器 v. 喷，喷洒", forms:["spray"]},
          {word:"scale", ipa:"/skeɪl/", pos:"n. / v.",  zh:"尺度，刻度；规模；音阶；[pl.] 天平 v. 爬，攀 n. 鳞，鳞片", forms:["scales"]},
          {word:"squat", ipa:"/skwɒt/", pos:"v.",       zh:"蹲踞，跪坐；（指动物）蜷伏", forms:["squatted"]},
          {word:"prey",  ipa:"/preɪ/",  pos:"n. / vi.", zh:"猎物，牺牲品 vi. 捕食；（疾病等）折磨，困扰", forms:["prey"]},
          {word:"slide", ipa:"/slaɪd/", pos:"v. / n.",  zh:"滑动，滑行；溜进，潜行 n. 滑（行）；滑道，滑梯；幻灯片", forms:["slide"]}
        ]
      },
      {
        id:"E2-P4", slug:"tem4-E2-P4", title:"植物王国的奥秘", shape:"超圆角",
        poster:"assets/tem4/posters/E2_P4.png",
        sentence:"In the botanical corner the old guide showed us round: bright berries grew in clusters along every stem, dwarf pines clung to the rocky cliff, an aboriginal orchid that grows nowhere else bloomed quietly in the shade, he taught us how to transplant seedlings without hurting their roots, and reminded us that wild flowers will soon wither if we pick them.",
        sentenceCn:"在植物园一角，老向导带我们四处参观：鲜亮的浆果沿着每根茎成串簇生，矮小的松树紧贴岩壁生长，一株别处绝无仅有的原生兰花在荫处静静开放；他教我们如何在不伤根的前提下移植幼苗，并提醒我们野花一旦被采摘很快就会枯萎。",
        scene:"森林植物园一角，浆果串沿茎簇生，矮松紧贴岩壁，原生兰花在荫处开放，小叶学姐戴小手套移植幼苗，熊教授在旁讲解。",
        words:[
          {word:"cluster",    ipa:"/ˈklʌstə/",       pos:"n. / v.", zh:"（果实、花等）串，簇；群，组 v. 使成群；群集，丛生", forms:["clusters"]},
          {word:"stem",       ipa:"/stem/",          pos:"n. / v.", zh:"（植物的）茎，干 v. 遏止，阻止（液体流动等）；源自", forms:["stem"]},
          {word:"dwarf",      ipa:"/dwɔːf/",         pos:"n. / v.", zh:"矮子，矮小的人（动物、植物）v. 使矮小，显得渺小", forms:["dwarf"]},
          {word:"aboriginal", ipa:"/ˌæbəˈrɪdʒənəl/", pos:"adj.",    zh:"（指人、动植物）土生的，原产地的；土著的", forms:["aboriginal"]},
          {word:"transplant", ipa:"/trænsˈplɑːnt/",  pos:"v.",      zh:"移植（植物）；移植（器官、皮肤、头发等）", forms:["transplant"]},
          {word:"wither",     ipa:"/ˈwɪðə/",         pos:"v.",      zh:"（使）枯萎，（使）凋谢", forms:["wither"]}
        ]
      },
      {
        id:"E2-P5", slug:"tem4-E2-P5", title:"守护与归途", shape:"波浪",
        poster:"assets/tem4/posters/E2_P5.png",
        sentence:"When a sudden shower caught us on the way down, we took shelter under a tall pine and watched a brown bear fishing quietly on the far bank of the lake; we talked about how the reserve protects even the most savage animals, why domestic rabbits could hardly survive in the wild, and promised to capture every memory in our notebooks and to carry every bit of our waste back down the mountain.",
        sentenceCn:"下山途中骤雨突至，我们躲进一棵高大的松树下避雨，看一头棕熊在湖对岸安静地捕鱼；我们聊起保护区如何守护连最凶猛的动物、家兔为什么几乎难以在野外生存，并约定把每一段记忆都记进笔记本，把自己产生的每一点垃圾都带下山。",
        scene:"骤雨后的松树下，小叶学姐在笔记本上画自然笔记，湖对岸棕熊母子安静捕鱼，天边挂着一道柔和的彩虹。",
        words:[
          {word:"shelter",  ipa:"/ˈʃeltə/",     pos:"n. / v.",   zh:"庇护，保护，遮蔽；避难所 v. 躲避，避难", forms:["shelter"]},
          {word:"bear",     ipa:"/beə/",        pos:"v. / n.",   zh:"承担，负荷；承受，忍受；结（果实）n. 熊；粗鲁的人", forms:["bear"]},
          {word:"savage",   ipa:"/ˈsævɪdʒ/",    pos:"adj. / n.", zh:"野蛮的，未开化的；凶猛的，残酷的 n. 野人", forms:["savage"]},
          {word:"domestic", ipa:"/dəʊˈmestɪk/", pos:"adj.",      zh:"家庭的，家用的；（动物）非野生的，驯养的；国内的", forms:["domestic"]},
          {word:"capture",  ipa:"/ˈkæptʃə/",    pos:"vt. / n.",  zh:"捕获；夺得，占领；赢得；引起（注意）n. 捕获", forms:["capture"]},
          {word:"waste",    ipa:"/weɪst/",      pos:"n. / v.",   zh:"损耗，浪费；废物，废料 v. 浪费，滥用；使荒芜", forms:["waste"]}
        ]
      }
    ]},
  {
    id:"E3", cat:"E", zh:"实验室与科学", name:"Lab & Science", status:"live",
    date:"2026-10-09", words:30, desc:"从清晨进实验室到写下结论：初入实验室、化学反应、显微镜下、力与运动、数据与结论",
    color:"#4A90D9",
    parts:[
      {
        id:"E3-P1", slug:"tem4-E3-P1", title:"初入实验室", shape:"拱门",
        poster:"assets/tem4/posters/E3_P1.png",
        sentence:"This morning we put on the transparent goggles and white coats, gathered the beakers and test tubes, and the teacher gave us an earnest warning: never be reckless near the acid bottles, keep the window open so that nobody is exposed to the fumes, and remember that every good result must rest on empirical evidence, not guesswork.",
        sentenceCn:"今天早上我们戴上透明的护目镜、穿上白大褂，收集好烧杯和试管；老师郑重提醒我们：在酸瓶附近切不可鲁莽行事，要开着窗通风，别让任何人暴露在酸雾里，还要记住一切可靠的结果都必须以实验证据为依据，而不是凭空猜测。",
        scene:"清晨明亮的学校实验室，小叶学姐戴上透明护目镜穿上白大褂，同学们把烧杯试管收集到实验台上，货架上是彩色玻璃器皿。",
        words:[
          {word:"transparent", ipa:"/trænsˈpærənt/", pos:"adj.", zh:"透明的，透光的；易懂的；显而易见的", forms:["transparent"]},
          {word:"gather",      ipa:"/ˈɡæðə/",        pos:"v.",   zh:"聚集，集拢；搜集，采集；渐增，积聚；推测", forms:["gathered"]},
          {word:"earnest",     ipa:"/ˈɜːnɪst/",      pos:"adj.", zh:"认真的，诚挚的，热切的", forms:["earnest"]},
          {word:"reckless",    ipa:"/ˈreklɪs/",      pos:"adj.", zh:"轻率的，鲁莽的，不计后果的", forms:["reckless"]},
          {word:"expose",      ipa:"/ɪkˈspəʊz/",     pos:"vt.",  zh:"揭露，暴露，曝光；使遭受，使处于…作用下；陈列", forms:["exposed"]},
          {word:"empirical",   ipa:"/emˈpɪrɪkəl/",   pos:"adj.", zh:"以实验为根据的，非理论的，经验主义的", forms:["empirical"]}
        ]
      },
      {
        id:"E3-P2", slug:"tem4-E3-P2", title:"化学反应", shape:"叶形",
        poster:"assets/tem4/posters/E3_P2.png",
        sentence:"Then the experiment began: the little burner blazed under the flask, the blue crystals dissolved quickly in the warm water, tiny bubbles were trapped in the tube, a few grains began to glint at the bottom, the fume hood exhausted the strange gas away, and the wire from the negative terminal made the meter needle swing.",
        sentenceCn:"实验开始了：小酒精灯在烧瓶下燃起火焰，蓝色晶体很快在温水里溶解，试管里困住了细小的气泡，管底有几粒晶体闪闪发亮，通风橱把怪味气体抽走，接在负极上的导线让仪表指针摆动起来。",
        scene:"化学实验台前，小酒精灯燃着柔和火焰加热圆底烧瓶，蓝色晶体在温水中溶解，试管里升起细小气泡，小叶学姐俯身专注观察。",
        words:[
          {word:"blaze",    ipa:"/bleɪz/",      pos:"n. / v.",   zh:"火；光辉，灿烂；迸发 v. 燃烧，冒火焰；发光，放光彩", forms:["blazed"]},
          {word:"dissolve", ipa:"/dɪˈzɒlv/",    pos:"v.",        zh:"（使）溶解，（使）液化；解散；中止；（使）衰弱，减退", forms:["dissolved"]},
          {word:"trap",     ipa:"/træp/",       pos:"n. / v.",   zh:"捕捉器，陷阱；诡计，圈套 v. 设陷阱捕捉；使陷入困境", forms:["trapped"]},
          {word:"glint",    ipa:"/ɡlint/",      pos:"n. / vi.",  zh:"闪光；闪闪发亮", forms:["glint"]},
          {word:"exhaust",  ipa:"/ɪɡˈzɔːst/",   pos:"v. / n.",   zh:"排空，抽完；用完，花光；使筋疲力尽 n. 排气；废气，废液", forms:["exhausted"]},
          {word:"negative", ipa:"/ˈneɡətɪv/",   pos:"n. / adj.", zh:"否定词；底片 adj. 否定的；消极的；（电）负极的", forms:["negative"]}
        ]
      },
      {
        id:"E3-P3", slug:"tem4-E3-P3", title:"显微镜下", shape:"椭圆",
        poster:"assets/tem4/posters/E3_P3.png",
        sentence:"After lunch we turned to the microscopes: through the lens we spied a whole hidden world, cells of every feature drifting slowly past, the lamp's harsh glare softened by a filter, a small shadow cast across the slide when our hands waved, and Xiao Ye said that even a quick glance at these tiny creatures shows how life learned to evolve.",
        sentenceCn:"午饭后我们转到显微镜前：透过镜片我们发现了一个隐藏的世界，各种形态的细胞缓缓漂过，滤光片柔化了刺眼的灯光，我们挥手时一小片影子投在载玻片上；小叶学姐说，哪怕匆匆一瞥这些微小的生物，也能看出生命是如何学会演化的。",
        scene:"显微镜前的奇幻微观世界，圆形视野里柔软的细胞缓缓漂过，小叶学姐好奇地凑近目镜，台灯的柔光晕染开来。",
        words:[
          {word:"spy",     ipa:"/spaɪ/",            pos:"n. / v.",  zh:"间谍；窥视者 v. 侦察，秘密监视；观察，发现", forms:["spied"]},
          {word:"feature", ipa:"/ˈfiːtʃə/",         pos:"n. / vt.", zh:"特征，特色；[pl.] 面貌；（电影）正片；特写 vt. 以…为特色", forms:["feature"]},
          {word:"glare",   ipa:"/ɡleə/",            pos:"v. / n.",  zh:"瞪眼，怒视；令人目眩地照射 n. 令人目眩的光，强烈的阳光", forms:["glare"]},
          {word:"cast",    ipa:"/kɑːst; kæst/",     pos:"v. / n.",  zh:"投，掷，抛；投射（光、影等）；投（票）n. 演员阵容；铸型", forms:["cast"]},
          {word:"glance",  ipa:"/ɡlɑːns; ɡlæns/",   pos:"v. / n.",  zh:"一瞥，扫视；闪光，闪耀 n. 一瞥，眼光", forms:["glance"]},
          {word:"evolve",  ipa:"/ɪˈvɒlv/",          pos:"v.",       zh:"（使）发展，进化，演化；设计；使逐步形成；推论", forms:["evolve"]}
        ]
      },
      {
        id:"E3-P4", slug:"tem4-E3-P4", title:"力与运动", shape:"超圆角",
        poster:"assets/tem4/posters/E3_P4.png",
        sentence:"In the physics corner our model car was streamlined to cut through the air, a pulley lifted the small weight smoothly, we used a rope to survey the width of the sandbox, reckoned the speed of the rolling ball, timed its pace lap after lap, and found it surprisingly hard to fathom why friction slowed everything down.",
        sentenceCn:"在物理角，我们把模型小车设计成流线型以减小空气阻力，滑轮平稳地举起了小重物，我们用绳子测量沙箱的宽度，计算滚动小球的速度，一圈又一圈地记录它的节奏，最后发现摩擦力为什么会拖慢一切，竟然出人意料地难以理解。",
        scene:"物理教室一角，流线型小车在斜坡轨道上飞驰，滑轮平稳举起重物，小球留下点状运动轨迹，同学们拿秒表欢呼。",
        words:[
          {word:"streamline", ipa:"/ˈstriːmlaɪn/", pos:"n. / v.",  zh:"把…设计或制成流线型；使精简", forms:["streamlined"]},
          {word:"lift",       ipa:"/lɪft/",        pos:"n. / v.",  zh:"电梯，升降机；免费乘车 v. 提高；举起；（云等）消散", forms:["lifted"]},
          {word:"survey",     ipa:"/sɜːˈveɪ/",     pos:"n. / v.",  zh:"检查，鉴定；测量，查勘", forms:["survey"]},
          {word:"reckon",     ipa:"/ˈrekən/",      pos:"v.",       zh:"计算，算出；考虑，认为；料想，估计", forms:["reckoned"]},
          {word:"pace",       ipa:"/peɪs/",        pos:"n. / v.",  zh:"步伐，速度；一步，步距 v. 踱步；为…定速度", forms:["pace"]},
          {word:"fathom",     ipa:"/ˈfæðəm/",      pos:"n. / vt.", zh:"（测水深的单位）英寻 vt. 测量…的深度；理解，充分了解", forms:["fathom"]}
        ]
      },
      {
        id:"E3-P5", slug:"tem4-E3-P5", title:"数据与结论", shape:"波浪",
        poster:"assets/tem4/posters/E3_P5.png",
        sentence:"Back at our desks we ran a careful analysis of the numbers, tried to infer the rule behind them, supposed a hypothesis first and then tested it, dared to predict the result of the next trial, refused to speculate without data, and at last wrote down the proof that our whole experiment needed.",
        sentenceCn:"回到座位上，我们对数据做了仔细的分析，努力推断其背后的规律，先提出一个假设再加以检验，敢于预测下一次实验的结果，拒绝在没有数据的情况下凭空推测，最后写下了整个实验所需要的证明。",
        scene:"傍晚的实验室木桌前，小叶学姐用羽毛笔在笔记本上写结论，桌上有彩色饼图与柱状图卡片、放大镜和绿植，伙伴们围着讨论。",
        words:[
          {word:"analysis",  ipa:"/əˈnæləsɪs/",    pos:"n.", zh:"分析，分解", forms:["analysis"]},
          {word:"infer",     ipa:"/ɪnˈfɜː/",       pos:"v.", zh:"推断，推论，推测", forms:["infer"]},
          {word:"suppose",   ipa:"/səˈpəʊz/",      pos:"v.", zh:"认定，假定；推测，猜想；认为", forms:["supposed"]},
          {word:"predict",   ipa:"/prɪˈdɪkt/",     pos:"v.", zh:"预言，预测", forms:["predict"]},
          {word:"speculate", ipa:"/ˈspekjuleɪt/",  pos:"v.", zh:"思索，推测；投机，做投机生意", forms:["speculate"]},
          {word:"proof",     ipa:"/pruːf/",        pos:"n.", zh:"证据，证明；校样；检验，考验 adj. 防…的，耐…的", forms:["proof"]}
        ]
      }
    ]},
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
