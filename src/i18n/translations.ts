export type Locale = "en" | "zh" | "ja";

export interface TranslationDictionary {
  nav: {
    directory: string;
    forSale: string;
    priceGuide: string;
    compare: string;
    lerobotDIY: string;
    blog: string;
    requestQuote: string;
    tagline: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    statRobots: string;
    statMassPrice: string;
    statOpenSource: string;
    statB2B: string;
  };
  filters: {
    title: string;
    subtitle: string;
    all: string;
    humanoid: string;
    quadruped: string;
    openSource: string;
    searchPlaceholder: string;
    statusLabel: string;
    statusAll: string;
    inStock: string;
    preOrders: string;
    enterprisePilot: string;
    openSourceDiy: string;
  };
  card: {
    joints: string;
    payload: string;
    weight: string;
    dofMeter: string;
    basePrice: string;
    quoteBtn: string;
    specsBtn: string;
    verified: string;
  };
  specs: {
    title: string;
    actuators: string;
    sensors: string;
    compute: string;
    aiModel: string;
    speed: string;
    connectivity: string;
    battery: string;
    highlights: string;
    editorial: string;
    related: string;
    officialStore: string;
    inquiry: string;
  };
  compare: {
    title: string;
    subtitle: string;
    selectLabel: string;
    specColumn: string;
  };
  forSalePage: {
    badge: string;
    title: string;
    subtitle: string;
    buyOnline: string;
    procurementTitle: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    org: string;
    useCase: string;
    budget: string;
    submit: string;
    submitting: string;
    success: string;
    close: string;
  };
  videoShowcase: {
    badge: string;
    title: string;
    subtitle: string;
    tabLocal: string;
    tabYoutube: string;
    specsHighlight: string;
    viewSpecs: string;
    getPricing: string;
    telemetryStatus: string;
    telemetryBalance: string;
    telemetrySpeed: string;
    telemetryTorque: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      directory: "Robots Directory",
      forSale: "For Sale Now",
      priceGuide: "Price Guide",
      compare: "Compare (VS)",
      lerobotDIY: "LeRobot DIY",
      blog: "Deep Reviews & Blog",
      requestQuote: "Request B2B Quote",
      tagline: "Humanoid & Embodied Hardware",
    },
    hero: {
      badge: "The Next Wave of AI: Tracking Verified Physical Robots & Kits",
      titleMain: "Physical AI & Humanoid Robots",
      titleHighlight: "Directory 2026",
      subtitle: "The definitive specs and selection database. Compare real degrees of freedom (DoF), payload, manufacturer pricing, and Vision-Language-Action (VLA) models across leading commercial bipedal humanoids and open-source robotics.",
      statRobots: "8+ Verified Robot Platforms",
      statMassPrice: "From $16,000 Mass Production",
      statOpenSource: "Sub-$400 Open Source LeRobot",
      statB2B: "Direct B2B Dealer Quotes",
    },
    filters: {
      title: "Commercial & Prototype Humanoids Directory",
      subtitle: "Filtered by degrees of freedom, market availability status, and onboard foundation models.",
      all: "All",
      humanoid: "Humanoid",
      quadruped: "Quadruped",
      openSource: "Open Source Kit",
      searchPlaceholder: "Search Unitree, Optimus, DoF...",
      statusLabel: "Status",
      statusAll: "All Status",
      inStock: "In Stock & For Sale",
      preOrders: "Accepting Pre-Orders",
      enterprisePilot: "Enterprise Pilot",
      openSourceDiy: "Open Source / DIY",
    },
    card: {
      joints: "Joints",
      payload: "Payload",
      weight: "Weight",
      dofMeter: "Kinematic Dexterity",
      basePrice: "Estimated Price",
      quoteBtn: "Quote",
      specsBtn: "Specs",
      verified: "VERIFIED HARDWARE",
    },
    specs: {
      title: "Full Technical Specifications",
      actuators: "Actuators & Drive",
      sensors: "Perception & Sensors",
      compute: "Onboard AI & Compute",
      aiModel: "Foundation Model",
      speed: "Maximum Speed",
      connectivity: "Connectivity",
      battery: "Battery Runtime",
      highlights: "Engineering Highlights",
      editorial: "Editorial Review & Market Position",
      related: "Explore Related Physical AI Platforms",
      officialStore: "Official Store / Order",
      inquiry: "Dealer Inquiry",
    },
    compare: {
      title: "Compare Humanoid Robots Side-by-Side",
      subtitle: "Evaluate kinematic capabilities, degrees of freedom (DoF), payload limits, onboard Vision-Language-Action (VLA) AI models, and real-world manufacturer pricing.",
      selectLabel: "Select 2 to 4 Robots to Compare Side-by-Side:",
      specColumn: "Robot Model",
    },
    forSalePage: {
      badge: "Live 2026 Commercial Inventory & Dealer Pricing",
      title: "Humanoid Robots for Sale Now",
      subtitle: "Looking to purchase a humanoid robot for AI research, industrial inspection, or enterprise automation? Here is the verified list of robots accepting commercial purchase orders and global pre-orders today.",
      buyOnline: "Buy Directly Online",
      procurementTitle: "Enterprise Procurement & Logistics Guide",
    },
    quoteModal: {
      title: "Request Official Quotation",
      subtitle: "Connect directly with certified dealers & distributors for institutional purchase discounts, delivery schedules, and customs clearance.",
      name: "Full Name",
      email: "Work / Corporate Email",
      org: "Organization / University",
      useCase: "Planned Application & Project Scope",
      budget: "Estimated Budget Tier",
      submit: "Submit RFQ & Get Pricing Sheet",
      submitting: "Broadcasting Request...",
      success: "Inquiry Dispatched Successfully!",
      close: "Close",
    },
    videoShowcase: {
      badge: "Real Hardware in Action: 4K Field Test",
      title: "Unitree G1 Humanoid Dynamic Live Demo",
      subtitle: "Witness genuine mass-produced bipedal robotics handling high-speed locomotion, multi-terrain stabilization, and force-controlled imitation learning.",
      tabLocal: "Direct High-Speed MP4",
      tabYoutube: "Official 4K Launch Video",
      specsHighlight: "23-43 DoF Dexterity • 120 N.m Peak Torque • $16,000 Mass Production",
      viewSpecs: "View G1 Full Technical Specs",
      getPricing: "Inquire $16K Institutional Tier",
      telemetryStatus: "REAL HARDWARE TELEMETRY ACTIVE",
      telemetryBalance: "Dynamic Kip-Up & Impact Recovery",
      telemetrySpeed: "2.0 m/s Top Stride",
      telemetryTorque: "120 N.m Joint Actuation",
    },
  },
  zh: {
    nav: {
      directory: "机器人名录",
      forSale: "现货与预订",
      priceGuide: "价格指南",
      compare: "多机对比(VS)",
      lerobotDIY: "LeRobot开源自建",
      blog: "深度评测博客",
      requestQuote: "获取大客户底价",
      tagline: "具身智能与人形机器人硬件",
    },
    hero: {
      badge: "物理AI浪潮：收录全球已验证具身智能硬件与开发套件",
      titleMain: "全球具身智能与人形机器人",
      titleHighlight: "技术选型全景 2026",
      subtitle: "业内权威的机器人核心规格与采购选型知识库。横向对比关节自由度 (DoF)、额定负载、厂商官方售价及视觉-语言-动作 (VLA) 端到端物理大模型。",
      statRobots: "8+ 已验证机甲平台",
      statMassPrice: "$16,000 量产起步价",
      statOpenSource: "$400 LeRobot开源套件",
      statB2B: "官方直连渠道商底价",
    },
    filters: {
      title: "商业化量产与前瞻原型机全景库",
      subtitle: "按关节自由度、商业发售交付状态及端侧具身模型快速筛选。",
      all: "全部类别",
      humanoid: "双足人形",
      quadruped: "四足机器狗",
      openSource: "开源机械臂套件",
      searchPlaceholder: "输入 宇树、Optimus、自由度...",
      statusLabel: "交付状态",
      statusAll: "全部状态",
      inStock: "现货在售",
      preOrders: "开放预定",
      enterprisePilot: "企业级试用/租赁",
      openSourceDiy: "开源自建 (DIY)",
    },
    card: {
      joints: "关节自由度",
      payload: "手部负载",
      weight: "整机重量",
      dofMeter: "动力学灵巧度",
      basePrice: "参考售价",
      quoteBtn: "询价",
      specsBtn: "详情",
      verified: "硬件已认证",
    },
    specs: {
      title: "完整工程技术规格表",
      actuators: "关节电机与驱动单元",
      sensors: "环境感知与深度传感器",
      compute: "板载 AI 算力底座",
      aiModel: "具身大模型 / 策略算法",
      speed: "最大移动速度",
      connectivity: "通信接口与网络",
      battery: "续航作业时长",
      highlights: "核心硬件架构与亮点",
      editorial: "行业评测与市场竞争定位",
      related: "探索关联具身智能机型",
      officialStore: "官方商城直购",
      inquiry: "申请渠道企业报价",
    },
    compare: {
      title: "人形机器人多维参数横向评测矩阵",
      subtitle: "一目了然对比关节灵活性、负载能力极限、端侧视觉动作模型算力以及海内外真实采购落地成本。",
      selectLabel: "勾选 2 到 4 款机器人进行并排深度对比：",
      specColumn: "对比机型",
    },
    forSalePage: {
      badge: "2026 实时商业现货库存与官方渠道底价",
      title: "商业人形机器人现货选购中心",
      subtitle: "需要采购人形机器人用于具身大模型训练、高校教学实验室或工业产线搬运？以下为目前接受商业直购与海外直邮的现役机型清单。",
      buyOnline: "前往官方商城直购",
      procurementTitle: "企业采购交付流程与外贸报关须知",
    },
    quoteModal: {
      title: "申请官方设备报价与配置单",
      subtitle: "直连经过认证的厂家大客户代表与外贸代理，获取批量采购阶梯折扣、交货排期表与技术开发支持。",
      name: "联系人姓名",
      email: "工作 / 机构电子邮箱",
      org: "所属公司 / 科研院校",
      useCase: "拟用场景与项目需求简述",
      budget: "预计采购预算区间",
      submit: "立即提交询价需求",
      submitting: "正在分发需求...",
      success: "询价需求已成功分发！大客户代表将尽快与您联系。",
      close: "关闭",
    },
    videoShowcase: {
      badge: "实机动态演示：4K 原厂实测录像",
      title: "宇树 Unitree G1 人形智能体实操演示",
      subtitle: "实景见证全球首款 $16,000 量产人形机器人的动态越障、高抗冲击跌倒自愈恢复与力控灵巧手模仿学习能力。",
      tabLocal: "超清极速原生直连",
      tabYoutube: "官方 4K 全球发布片",
      specsHighlight: "23-43 关节自由度 • 120 N.m 峰值关节扭矩 • $16,000 量产起步价",
      viewSpecs: "查看 G1 完整技术规格",
      getPricing: "申请大客户直采底价",
      telemetryStatus: "硬件真实遥测监控中",
      telemetryBalance: "动态踢击抗扰与自愈起立",
      telemetrySpeed: "2.0 米/秒 极限奔跑",
      telemetryTorque: "120 N.m 峰值关节驱动",
    },
  },
  ja: {
    nav: {
      directory: "ロボット名鑑",
      forSale: "販売中・予約",
      priceGuide: "価格ガイド",
      compare: "性能比較 (VS)",
      lerobotDIY: "LeRobot自作",
      blog: "リサーチ＆ブログ",
      requestQuote: "法人見積もり",
      tagline: "フィジカルAI＆ヒューマノイド",
    },
    hero: {
      badge: "フィジカルAIの夜明け：実機検証済みのロボット＆キットを網羅",
      titleMain: "フィジカルAI＆ヒューマノイドロボット",
      titleHighlight: "完全名鑑 2026",
      subtitle: "世界をリードする二足歩行ヒューマノイドとオープンソースロボティクス。自由度 (DoF)、可搬重量、メーカー価格、視覚-言語-行動 (VLA) AIモデルを徹底比較。",
      statRobots: "8以上の検証済み実機",
      statMassPrice: "$16,000〜量産開始",
      statOpenSource: "$400 LeRobot自作キット",
      statB2B: "正規ディーラー直接見積",
    },
    filters: {
      title: "商用量産モデル＆次世代プロトタイプ名鑑",
      subtitle: "自由度、販売ステータス、搭載AIモデルで瞬時に絞り込み可能。",
      all: "すべて",
      humanoid: "人型 (ヒューマノイド)",
      quadruped: "四足歩行ロボット",
      openSource: "オープンソース自作",
      searchPlaceholder: "Unitree、Optimus、自由度を検索...",
      statusLabel: "ステータス",
      statusAll: "すべての状態",
      inStock: "販売中・在庫あり",
      preOrders: "予約受付中",
      enterprisePilot: "企業向け試験導入",
      openSourceDiy: "DIY / 自作",
    },
    card: {
      joints: "関節自由度",
      payload: "可搬重量",
      weight: "本体重量",
      dofMeter: "運動学的器用さ",
      basePrice: "参考価格",
      quoteBtn: "見積もり",
      specsBtn: "詳細",
      verified: "実機検証済み",
    },
    specs: {
      title: "詳細な技術スペック一覧",
      actuators: "アクチュエータ・駆動系",
      sensors: "センシング・知覚",
      compute: "搭載AI・計算基盤",
      aiModel: "基盤モデル・制御アルゴリズム",
      speed: "最高移動速度",
      connectivity: "通信・インターフェース",
      battery: "連続稼働時間",
      highlights: "主要な工学的ハイライト",
      editorial: "市場ポジショニングと技術評価",
      related: "関連するフィジカルAIロボット",
      officialStore: "公式ストアで購入",
      inquiry: "ディーラーへ問い合わせ",
    },
    compare: {
      title: "ヒューマノイドロボット徹底性能比較",
      subtitle: "自由度、アーム可搬重量、搭載VLAモデル、実際の導入コストを並べて直感的に比較評価できます。",
      selectLabel: "比較したいロボットを2〜4台選択してください：",
      specColumn: "対象モデル",
    },
    forSalePage: {
      badge: "2026年最新 在庫状況と販売価格",
      title: "今すぐ購入可能なヒューマノイドロボット",
      subtitle: "AI研究、産業用自動化、大学実験室向け。現在正式に注文および世界予約を受け付けている検証済みロボット一覧です。",
      buyOnline: "公式ストアで注文",
      procurementTitle: "法人導入・国際輸送ガイドライン",
    },
    quoteModal: {
      title: "法人向け公式見積もり申請",
      subtitle: "正規ディストリビューターと直接連携し、アカデミック割引、納期、通関手続きのサポートを提供します。",
      name: "お名前",
      email: "企業 / 大学メールアドレス",
      org: "所属組織 / 企業名",
      useCase: "導入用途・プロジェクト概要",
      budget: "想定予算レンジ",
      submit: "見積もりをリクエストする",
      submitting: "送信中...",
      success: "リクエストを送信しました！担当者より速やかにご連絡いたします。",
      close: "閉じる",
    },
    videoShowcase: {
      badge: "実機動作デモ：4K フィールド実測映像",
      title: "Unitree G1 ヒューマノイド実動デモンストレーション",
      subtitle: "量産型ヒューマノイドの実機ダイナミクス。高速不整地歩行、転倒からの自律復帰（キップアップ）、力制御バイオハンドによる動作模倣を直接確認。",
      tabLocal: "超高速ダイレクト再生",
      tabYoutube: "公式 4K ローンチ映像",
      specsHighlight: "23〜43自由度 • 120 N.m ピークトルク • $16,000 量産モデル",
      viewSpecs: "G1 の詳細スペックを見る",
      getPricing: "法人特別見積もりを申請",
      telemetryStatus: "実機テレメトリ稼働中",
      telemetryBalance: "動的キップアップ＆衝撃復帰",
      telemetrySpeed: "2.0 m/s 最大速度",
      telemetryTorque: "120 N.m ピークトルク",
    },
  },
};
