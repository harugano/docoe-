/**
 * docoe? 企業インパクトデータ（実在企業 50 社）
 *
 * ⚠️ 重要ルール
 * - 公式HP・サステナビリティページ・統合報告書など公開情報のみを根拠とする
 * - 捏造した活動内容・URLは絶対に記載しない
 * - 不確かな情報は空欄または「要確認」とする
 * - negativeRisks は減点ではなく注意表示のみ
 * - lastUpdated を記録し、定期的に見直すこと
 *
 * 更新方法: このファイルの末尾にある "企業データ追加ガイド" を参照
 */

import { CompanyImpact } from "@/lib/types";

// ─────────────────────────────────────────────
// 1. コンビニ・小売（8社）
// ─────────────────────────────────────────────
const convenienceAndRetail: CompanyImpact[] = [
  {
    id: "seven-and-i",
    companyName: "セブン＆アイ・ホールディングス",
    aliases: ["セブン", "セブンイレブン", "7&i", "7eleven", "セブンアイ", "イトーヨーカドー"],
    industry: "コンビニ・小売",
    websiteUrl: "https://www.7andi.com",
    sustainabilityUrl: "https://www.7andi.com/csr/",
    integratedReportUrl: "https://www.7andi.com/ir/library/ar/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.7andi.com/csr/"],
    environmentalActions: [
      "食品廃棄量削減に向けた賞味期限延長・値引き販売を推進（公式サイトより）",
      "省エネ型店舗の展開・LED照明導入を推進（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "セブン-イレブン記念財団による環境市民活動への助成（公式サイトより）",
      "高齢者・障がい者への配慮サービスの提供",
    ],
    localContributionActions: [
      "全国のコンビニATMネットワークによる地域金融インフラの提供",
      "地域限定商品の開発・地域産品の取り扱い",
    ],
    transparencyActions: [
      "TCFDへの対応を表明し、関連情報を開示している（公式サイトより）",
      "サステナビリティレポートを年次で公開している",
      "統合報告書（アニュアルレポート）を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "セブン＆アイ・ホールディングス公式サイト・CSRページ（https://www.7andi.com/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "lawson",
    companyName: "ローソン",
    aliases: ["ローソン", "Lawson", "lawson"],
    industry: "コンビニ",
    websiteUrl: "https://www.lawson.co.jp",
    sustainabilityUrl: "https://www.lawson.co.jp/company/activity/social/",
    integratedReportUrl: "https://www.lawson.co.jp/company/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.lawson.co.jp/company/activity/"],
    environmentalActions: [
      "フードロス削減のための食品値引き販売・廃棄削減に取り組んでいる（公式サイトより）",
      "省エネ型冷蔵設備・LED照明への切り替えを推進している",
    ],
    socialActions: [
      "地域コミュニティへの貢献（まちのほっとステーションコンセプト）",
      "高齢者・障がい者への配慮サービス",
    ],
    localContributionActions: [
      "地域特産品・地域限定商品の取り扱い",
      "地域密着型サービスの提供",
    ],
    transparencyActions: [
      "サステナビリティ・CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を年次で公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ローソン公式サイト・サステナビリティページ（https://www.lawson.co.jp/company/activity/social/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "familymart",
    companyName: "ファミリーマート",
    aliases: ["ファミマ", "FamilyMart", "familymart"],
    industry: "コンビニ",
    websiteUrl: "https://www.family.co.jp",
    sustainabilityUrl: "https://www.family.co.jp/sustainability.html",
    integratedReportUrl: "https://www.family.co.jp/sustainability.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.family.co.jp/sustainability.html"],
    environmentalActions: [
      "FamilyMart Challenge 2050（CO2排出量削減・食品廃棄削減目標を公表）",
      "プラスチック削減・容器包材の環境配慮を推進",
    ],
    socialActions: [
      "ファミリーマート財団による社会貢献活動の支援",
      "障がい者雇用・女性活躍推進に取り組んでいる",
    ],
    localContributionActions: [
      "全国2万店以上のコンビニネットワークによる地域生活支援",
      "地域限定商品の開発・地域農産品の取り扱い",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・CSRレポートを年次で発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ファミリーマート公式サイト・サステナビリティページ（https://www.family.co.jp/sustainability.html）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "aeon",
    companyName: "イオン",
    aliases: ["イオン", "AEON", "aeon", "イオングループ", "イオンモール"],
    industry: "小売・スーパー",
    websiteUrl: "https://www.aeon.info",
    sustainabilityUrl: "https://www.aeon.info/responsibility/",
    integratedReportUrl: "https://www.aeon.info/ir/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.aeon.info/responsibility/"],
    environmentalActions: [
      "AEON Forest（植林活動・生物多様性保全）を展開している（公式サイトより）",
      "2040年までに自社排出のカーボンニュートラル目標を公表",
      "再生可能エネルギー導入・省エネ型店舗の展開を推進",
    ],
    socialActions: [
      "1%クラブ（営業利益の1%を社会に還元）による地域社会への貢献（公式サイトより）",
      "地域防災・災害対応への積極的な参画",
    ],
    localContributionActions: [
      "地域農産品の調達推進・地産地消の取り組み",
      "地域コミュニティスペースとしてのモール活用",
    ],
    transparencyActions: [
      "TCFDへの対応・関連情報の開示（公式サイトより）",
      "統合報告書を年次で発行している",
      "GRI基準に基づくサステナビリティ情報を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "イオン株式会社公式サイト・責任ある事業活動ページ（https://www.aeon.info/responsibility/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ryohin-keikaku",
    companyName: "良品計画",
    aliases: ["無印良品", "MUJI", "muji", "良品計画", "むじるし"],
    industry: "小売・雑貨",
    websiteUrl: "https://www.ryohin-keikaku.jp",
    sustainabilityUrl: "https://www.ryohin-keikaku.jp/sustainability/",
    integratedReportUrl: "https://www.ryohin-keikaku.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ryohin-keikaku.jp/sustainability/"],
    environmentalActions: [
      "持続可能な素材・原材料の調達基準を設けている（公式サイトより）",
      "プラスチック削減・包材の環境配慮を推進している",
      "再生素材・オーガニック素材の製品展開を行っている",
    ],
    socialActions: [
      "「感じ良いくらし」のコンセプトのもと、適正品質・適正価格での社会貢献",
      "地域コミュニティとの協働・地域課題への取り組み",
    ],
    localContributionActions: [
      "地域素材を活用した商品開発・地域のものづくり支援（公式サイトより）",
      "地方への出店・地域コミュニティの活性化への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書（アニュアルレポート）を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "良品計画公式サイト・サステナビリティページ（https://www.ryohin-keikaku.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "nitori",
    companyName: "ニトリホールディングス",
    aliases: ["ニトリ", "Nitori", "nitori"],
    industry: "小売・家具",
    websiteUrl: "https://www.nitori-holdings.co.jp",
    sustainabilityUrl: "https://www.nitori-holdings.co.jp/sustainability/",
    integratedReportUrl: "https://www.nitori-holdings.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.nitori-holdings.co.jp/sustainability/"],
    environmentalActions: [
      "環境目標を策定し公表している（公式サイトより）",
      "物流効率化によるCO2削減に取り組んでいる",
    ],
    socialActions: [
      "「住まいの豊かさを世界の人々に提供する」使命のもとでの社会貢献",
      "従業員の多様性推進・働き方改革への取り組み",
    ],
    localContributionActions: [
      "全国店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ニトリホールディングス公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "yamada-hd",
    companyName: "ヤマダホールディングス",
    aliases: ["ヤマダ電機", "ヤマダ", "Yamada", "ヤマダホールディングス"],
    industry: "家電量販店",
    websiteUrl: "https://www.yamada-hd.co.jp",
    sustainabilityUrl: "https://www.yamada-hd.co.jp/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.yamada-hd.co.jp/csr/"],
    environmentalActions: [
      "家電リサイクル法に基づく不要家電の適正処理を推進している",
      "太陽光パネルや省エネ設備の販売・設置を通じた社会の省エネ化に貢献",
    ],
    socialActions: [
      "住まいと暮らしの提供を通じた社会貢献",
    ],
    localContributionActions: [
      "全国の店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ヤマダホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ppih",
    companyName: "パン・パシフィック・インターナショナルホールディングス",
    aliases: ["ドン・キホーテ", "ドンキ", "donki", "PPIH", "ppih", "majica"],
    industry: "ディスカウントストア・小売",
    websiteUrl: "https://www.ppih.co.jp",
    sustainabilityUrl: "https://www.ppih.co.jp/csr.html",
    integratedReportUrl: "https://www.ppih.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ppih.co.jp/csr.html"],
    environmentalActions: [
      "食品廃棄削減に向けた値引き販売・タイムセールを積極的に実施している",
      "省エネ型設備の導入を推進している",
    ],
    socialActions: [
      "深夜営業・24時間営業による生活利便性の提供",
      "多様な商品・雇用による社会貢献",
    ],
    localContributionActions: [
      "地域に根ざした店舗展開・地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 1,
    dataBasis: "パン・パシフィック・インターナショナルホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 2. 食品・飲料（10社）
// ─────────────────────────────────────────────
const foodAndBeverage: CompanyImpact[] = [
  {
    id: "suntory",
    companyName: "サントリーホールディングス",
    aliases: ["サントリー", "Suntory", "suntory", "サントリーホールディングス"],
    industry: "食品・飲料",
    websiteUrl: "https://www.suntory.co.jp",
    sustainabilityUrl: "https://www.suntory.co.jp/eco/",
    integratedReportUrl: "https://www.suntory.co.jp/company/vision/report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.suntory.co.jp/eco/"],
    environmentalActions: [
      "「水と生きる」水源保全活動（全国17箇所以上の水源地保全）（公式サイトより）",
      "環境ビジョン2050（CO2排出量の大幅削減目標）を策定・公表",
      "容器包材の削減・再生材活用を推進している",
    ],
    socialActions: [
      "サントリー文化財団による芸術・文化への支援（公式サイトより）",
      "地域コミュニティとの共存・共生を方針として掲げている",
    ],
    localContributionActions: [
      "国内水源保全活動の実施・地域農業との連携",
      "地域の水環境保全に関する調査・啓発活動",
    ],
    transparencyActions: [
      "サステナビリティレポート・CSR情報を年次で公開している",
      "TCFDへの対応を表明している",
      "統合報告書を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 5,
    dataBasis: "サントリーホールディングス公式サイト・サステナビリティページ（https://www.suntory.co.jp/eco/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kirin",
    companyName: "キリンホールディングス",
    aliases: ["キリン", "Kirin", "kirin", "キリンビール", "キリンホールディングス"],
    industry: "食品・飲料",
    websiteUrl: "https://www.kirinholdings.com",
    sustainabilityUrl: "https://www.kirinholdings.com/jp/impact/",
    integratedReportUrl: "https://www.kirinholdings.com/jp/investors/library/kirin_report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kirinholdings.com/jp/impact/"],
    environmentalActions: [
      "CSV（Creating Shared Value）戦略に基づく生物多様性保全活動（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
      "水資源の持続可能な利用に取り組んでいる",
    ],
    socialActions: [
      "アルコール飲料の適正飲酒推進活動を実施している（公式サイトより）",
      "健康事業の展開による社会課題への取り組み",
    ],
    localContributionActions: [
      "地域産農産物を活用した製品開発・地域農業との連携",
    ],
    transparencyActions: [
      "キリンレポート（統合報告書）を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "GRI基準に基づくデータ開示を行っている",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "キリンホールディングス公式サイト・CSVページ（https://www.kirinholdings.com/jp/impact/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "asahi-group",
    companyName: "アサヒグループホールディングス",
    aliases: ["アサヒ", "Asahi", "asahi", "アサヒビール", "アサヒグループ"],
    industry: "食品・飲料",
    websiteUrl: "https://www.asahigroup-holdings.com",
    sustainabilityUrl: "https://www.asahigroup-holdings.com/sustainability/",
    integratedReportUrl: "https://www.asahigroup-holdings.com/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.asahigroup-holdings.com/sustainability/"],
    environmentalActions: [
      "アサヒグループ環境ビジョン2050（CO2排出量削減・水資源保全）を策定・公表（公式サイトより）",
      "再生可能エネルギーの導入推進",
      "容器包材の削減・再生材活用を推進している",
    ],
    socialActions: [
      "アルコールの適正飲酒推進活動を実施している",
      "社会課題解決型のヘルスサイエンス事業を展開している",
    ],
    localContributionActions: [
      "地域農業との連携・地域産原材料の活用",
    ],
    transparencyActions: [
      "アサヒグループ統合報告書を年次で発行している",
      "TCFDへの対応・情報開示を行っている",
      "サステナビリティデータブックを公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "アサヒグループホールディングス公式サイト・サステナビリティページ（https://www.asahigroup-holdings.com/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ito-en",
    companyName: "伊藤園",
    aliases: ["伊藤園", "ITO EN", "itoen", "おーいお茶"],
    industry: "食品・飲料",
    websiteUrl: "https://www.itoen.co.jp",
    sustainabilityUrl: "https://www.itoen.co.jp/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.itoen.co.jp/csr/"],
    environmentalActions: [
      "茶ガラの有効活用（肥料・飼料・建材等へのリサイクル）を推進している（公式サイトより）",
      "環境配慮型容器・パッケージの採用を推進",
    ],
    socialActions: [
      "国内茶農家支援・茶産地振興活動を実施している（公式サイトより）",
      "食育・お茶文化の普及活動",
    ],
    localContributionActions: [
      "国産茶葉の調達推進による産地振興への貢献",
      "茶産地コミュニティとの連携",
    ],
    transparencyActions: [
      "CSR情報をWebサイトで公開している",
      "サステナビリティレポートを発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "伊藤園公式サイト・CSRページ（https://www.itoen.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ajinomoto",
    companyName: "味の素",
    aliases: ["味の素", "Ajinomoto", "ajinomoto", "あじのもと"],
    industry: "食品・飲料",
    websiteUrl: "https://www.ajinomoto.co.jp",
    sustainabilityUrl: "https://www.ajinomoto.co.jp/company/jp/activity/csr/",
    integratedReportUrl: "https://www.ajinomoto.co.jp/company/jp/ir/library/annual.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ajinomoto.co.jp/company/jp/activity/csr/"],
    environmentalActions: [
      "ASV（味の素グループ共有価値の創造）に基づく環境取り組みを実施（公式サイトより）",
      "食品製造副産物の有効活用・廃棄物削減を推進",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "世界の食と健康課題への取り組み（栄養改善活動等）（公式サイトより）",
      "サプライチェーン全体での人権への配慮を方針として掲げている",
    ],
    localContributionActions: [
      "国内農産物の調達・農業支援",
    ],
    transparencyActions: [
      "ASV統合報告書を年次で発行している",
      "GRI基準に基づくサステナビリティデータを公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "味の素株式会社公式サイト・サステナビリティページ（https://www.ajinomoto.co.jp/company/jp/activity/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "meiji-hd",
    companyName: "明治ホールディングス",
    aliases: ["明治", "meiji", "Meiji", "明治ホールディングス", "明治チョコレート", "明治牛乳"],
    industry: "食品・飲料",
    websiteUrl: "https://www.meiji.com",
    sustainabilityUrl: "https://www.meiji.com/sustainability/",
    integratedReportUrl: "https://www.meiji.com/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.meiji.com/sustainability/"],
    environmentalActions: [
      "カカオサプライチェーンの持続可能性向上（農家支援・森林保護）に取り組んでいる（公式サイトより）",
      "包材削減・再生素材の活用を推進している",
    ],
    socialActions: [
      "食育活動・栄養改善への社会貢献（公式サイトより）",
      "国内酪農農家との連携・支援",
    ],
    localContributionActions: [
      "国内酪農農家・農業との連携による地域貢献",
    ],
    transparencyActions: [
      "統合報告書（明治レポート）を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "明治ホールディングス公式サイト・サステナビリティページ（https://www.meiji.com/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "nissin-food",
    companyName: "日清食品ホールディングス",
    aliases: ["日清食品", "nissin", "Nissin", "カップヌードル", "チキンラーメン"],
    industry: "食品・飲料",
    websiteUrl: "https://www.nissin.com",
    sustainabilityUrl: "https://www.nissin.com/jp/sustainability/",
    integratedReportUrl: "https://www.nissin.com/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.nissin.com/jp/sustainability/"],
    environmentalActions: [
      "持続可能な容器包装への移行を推進している（公式サイトより）",
      "食品廃棄削減・フードロス低減の取り組み",
    ],
    socialActions: [
      "HUNGER ZERO（食料安全保障への貢献）を掲げて活動している（公式サイトより）",
      "食育活動の実施",
    ],
    localContributionActions: [
      "国内製造・雇用の維持",
    ],
    transparencyActions: [
      "統合報告書（日清食品グループレポート）を発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "日清食品ホールディングス公式サイト・サステナビリティページ（https://www.nissin.com/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "calbee",
    companyName: "カルビー",
    aliases: ["カルビー", "Calbee", "calbee", "ポテトチップス"],
    industry: "食品",
    websiteUrl: "https://www.calbee.co.jp",
    sustainabilityUrl: "https://www.calbee.co.jp/sustainability/",
    integratedReportUrl: "https://www.calbee.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.calbee.co.jp/sustainability/"],
    environmentalActions: [
      "食品製造工程でのフードロス低減に取り組んでいる（公式サイトより）",
      "包材の削減・環境配慮型包材への切り替えを推進",
    ],
    socialActions: [
      "じゃがいも農家との直接取引・農業振興への貢献（公式サイトより）",
      "食育活動の実施",
    ],
    localContributionActions: [
      "国内農家（特にじゃがいも産地）との直接取引による地域農業支援",
    ],
    transparencyActions: [
      "サステナビリティレポートを発行している",
      "統合報告書を年次で公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "カルビー株式会社公式サイト・サステナビリティページ（https://www.calbee.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kikkoman",
    companyName: "キッコーマン",
    aliases: ["キッコーマン", "Kikkoman", "kikkoman", "醤油"],
    industry: "食品・調味料",
    websiteUrl: "https://www.kikkoman.com",
    sustainabilityUrl: "https://www.kikkoman.com/jp/csr/",
    integratedReportUrl: "https://www.kikkoman.com/jp/ir/report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kikkoman.com/jp/csr/"],
    environmentalActions: [
      "水資源の保全・醤油製造における水使用量削減に取り組んでいる（公式サイトより）",
      "醤油製造副産物（脱脂大豆等）の有効活用を推進",
    ],
    socialActions: [
      "日本の食文化（醤油・和食）の普及・発展への貢献",
      "国内農業との連携",
    ],
    localContributionActions: [
      "国内農産物（大豆・小麦等）の調達・農業支援",
      "野田市（本社所在地）など地域コミュニティへの貢献",
    ],
    transparencyActions: [
      "CSR・サステナビリティレポートを年次で公開している",
      "統合報告書を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "キッコーマン株式会社公式サイト・CSRページ（https://www.kikkoman.com/jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "morinaga-milk",
    companyName: "森永乳業",
    aliases: ["森永乳業", "morinagamilk", "Morinaga", "森永", "森永牛乳"],
    industry: "食品・乳製品",
    websiteUrl: "https://www.morinagamilk.co.jp",
    sustainabilityUrl: "https://www.morinagamilk.co.jp/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.morinagamilk.co.jp/sustainability/"],
    environmentalActions: [
      "乳製品製造における食品廃棄削減・副産物有効活用に取り組んでいる（公式サイトより）",
      "プラスチック包装削減・環境配慮型包材への移行を推進",
    ],
    socialActions: [
      "国内酪農農家の支援・酪農振興への貢献（公式サイトより）",
      "食育活動・乳製品の栄養価値の普及啓発",
    ],
    localContributionActions: [
      "国内酪農農家との連携による地域農業の支援",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "CSRレポートを発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "森永乳業株式会社公式サイト・サステナビリティページ（https://www.morinagamilk.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 3. 外食・カフェ（6社）
// ─────────────────────────────────────────────
const restaurant: CompanyImpact[] = [
  {
    id: "mcdonalds-japan",
    companyName: "日本マクドナルドホールディングス",
    aliases: ["マクドナルド", "McDonald's", "mcdonalds", "マック", "マクド"],
    industry: "外食・ファストフード",
    websiteUrl: "https://www.mcdonalds.co.jp",
    sustainabilityUrl: "https://www.mcdonalds.co.jp/quality/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.mcdonalds.co.jp/quality/sustainability/"],
    environmentalActions: [
      "プラスチックストローの廃止・紙製ストローへの移行（2020年）（公式サイトより）",
      "包材の環境配慮・紙製容器への移行を推進している",
    ],
    socialActions: [
      "ロナルド・マクドナルド・ハウス（子ども医療支援活動）の運営（公式サイトより）",
      "フードバンクへの食品寄付を実施している",
    ],
    localContributionActions: [
      "全国での雇用創出・地域コミュニティへの貢献",
    ],
    transparencyActions: [
      "サステナビリティ・品質情報を公式サイトで公開している",
    ],
    negativeRisks: [
      "ファストフード業界全体として食品廃棄・大量消費モデルへの課題が指摘されている（業界課題）",
    ],
    cautionNote: "ファストフード業界全体の課題（食品廃棄等）について、個社での対応情報は公式サイトでご確認ください。",
    ecoScore: 2,
    dataBasis: "日本マクドナルド公式サイト・品質・サステナビリティページ（https://www.mcdonalds.co.jp/quality/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "starbucks-japan",
    companyName: "スターバックスコーヒージャパン",
    aliases: ["スターバックス", "スタバ", "Starbucks", "starbucks"],
    industry: "カフェ・コーヒー",
    websiteUrl: "https://www.starbucks.co.jp",
    sustainabilityUrl: "https://www.starbucks.co.jp/responsibility/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.starbucks.co.jp/responsibility/"],
    environmentalActions: [
      "プラスチックストローの廃止・リユーザブルカップの普及推進（公式サイトより）",
      "コーヒーかすの農業利用（肥料・飼料）を推進している",
    ],
    socialActions: [
      "C.A.F.E. Practices（コーヒー農家の労働・環境基準の認証）による調達（公式サイトより）",
      "従業員（パートナー）の多様性・インクルージョン推進",
    ],
    localContributionActions: [
      "地域コミュニティとの連携・地域限定商品の開発",
    ],
    transparencyActions: [
      "環境・社会貢献（責任ある事業活動）情報を公式サイトで公開している",
      "親会社スターバックス社のグローバルサステナビリティ目標に基づく情報開示",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "スターバックスコーヒージャパン公式サイト・責任ある事業活動ページ（https://www.starbucks.co.jp/responsibility/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "skylark",
    companyName: "すかいらーくホールディングス",
    aliases: ["すかいらーく", "ガスト", "Skylark", "skylark", "バーミヤン", "ジョナサン"],
    industry: "外食・ファミリーレストラン",
    websiteUrl: "https://www.skylark.co.jp",
    sustainabilityUrl: "https://www.skylark.co.jp/company/csr.html",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.skylark.co.jp/company/csr.html"],
    environmentalActions: [
      "食品廃棄削減・フードロス低減への取り組みを推進している（公式サイトより）",
      "省エネ設備の導入・CO2削減に取り組んでいる",
    ],
    socialActions: [
      "バリアフリー対応店舗の推進・障がい者雇用",
      "地域コミュニティへの貢献",
    ],
    localContributionActions: [
      "国内食材の調達推進・産地情報の開示",
    ],
    transparencyActions: [
      "CSR・サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "すかいらーくホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "zensho",
    companyName: "ゼンショーホールディングス",
    aliases: ["ゼンショー", "すき家", "sukiya", "Zensho", "はま寿司", "ジョリーパスタ"],
    industry: "外食・ファストフード",
    websiteUrl: "https://www.zensho.co.jp",
    sustainabilityUrl: "https://www.zensho.co.jp/jp/csr.html",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.zensho.co.jp/jp/csr.html"],
    environmentalActions: [
      "食材廃棄削減への取り組みを推進している（公式サイトより）",
    ],
    socialActions: [
      "「世界から飢餓と貧困を撲滅する」ミッションのもとでの社会貢献",
      "低価格での食事提供による生活支援",
    ],
    localContributionActions: [
      "全国展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [
      "過去に長時間労働等に関する労働環境問題が報道されたことがあり、改善対策が講じられている（公式サイト等に記載）",
    ],
    cautionNote: "労働環境の改善対応については公式サイトをご確認ください。",
    ecoScore: 1,
    dataBasis: "ゼンショーホールディングス公式サイト・CSRページ（https://www.zensho.co.jp/jp/csr.html）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "mos-food",
    companyName: "モスフードサービス",
    aliases: ["モスバーガー", "モス", "MOS", "mosburger"],
    industry: "外食・ファストフード",
    websiteUrl: "https://www.mos.co.jp",
    sustainabilityUrl: "https://www.mos.co.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.mos.co.jp/company/csr/"],
    environmentalActions: [
      "農薬・化学肥料の使用削減を目指した産地との連携を推進している（公式サイトより）",
      "食品廃棄削減への取り組み",
    ],
    socialActions: [
      "「産直」コンセプトによる地域農家との直接取引・支援（公式サイトより）",
      "モスの日本農業応援プロジェクトの展開",
    ],
    localContributionActions: [
      "地域農家との直接取引・産地直送野菜の使用による農業支援",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "食の安全・品質・環境への取り組みを開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "モスフードサービス株式会社公式サイト・CSRページ（https://www.mos.co.jp/company/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "doutor",
    companyName: "ドトール・日レスホールディングス",
    aliases: ["ドトール", "Doutor", "doutor", "エクセルシオール"],
    industry: "カフェ・外食",
    websiteUrl: "https://www.doutor-nichires.co.jp",
    sustainabilityUrl: "",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.doutor-nichires.co.jp"],
    environmentalActions: [
      "コーヒーかすの有効活用（バイオマス燃料化等）を推進している",
    ],
    socialActions: [
      "コーヒー農家・産地への支援・公正な調達への取り組み",
    ],
    localContributionActions: [
      "全国の店舗網による地域雇用への貢献",
    ],
    transparencyActions: [
      "会社情報・IR情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 1,
    dataBasis: "ドトール・日レスホールディングス公式サイトより参照（詳細なサステナビリティページは要確認）",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 4. 衣類・生活用品（7社）
// ─────────────────────────────────────────────
const apparel: CompanyImpact[] = [
  {
    id: "fast-retailing",
    companyName: "ファーストリテイリング",
    aliases: ["ユニクロ", "UNIQLO", "uniqlo", "ファーストリテイリング", "GU", "ジーユー"],
    industry: "衣類・アパレル",
    websiteUrl: "https://www.fastretailing.com",
    sustainabilityUrl: "https://www.fastretailing.com/jp/sustainability/",
    integratedReportUrl: "https://www.fastretailing.com/jp/ir/library/annual.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.fastretailing.com/jp/sustainability/"],
    environmentalActions: [
      "全商品リサイクル活動（店頭回収ボックス設置）を全国で展開している（公式サイトより）",
      "LifeWear素材の持続可能性向上・サステナブル素材の採用を推進",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "UNHCR（国連難民高等弁務官事務所）との連携による難民支援を実施している（公式サイトより）",
      "障がい者雇用・インクルーシブな職場環境の推進",
    ],
    localContributionActions: [
      "日本国内での雇用・製造パートナーとの連携",
    ],
    transparencyActions: [
      "サステナビリティレポートを年次で発行している",
      "統合報告書（アニュアルレポート）を発行している",
      "人権方針・サプライチェーンの透明性に関する情報を開示している",
    ],
    negativeRisks: [
      "原材料調達に関する人権デューデリジェンスの取り組みが継続中（公式サイトに対応方針を掲載）",
    ],
    cautionNote: "原材料調達における人権対応については、公式サイトの最新情報をご確認ください。",
    ecoScore: 2,
    dataBasis: "ファーストリテイリング公式サイト・サステナビリティページ（https://www.fastretailing.com/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kao",
    companyName: "花王",
    aliases: ["花王", "Kao", "kao", "ビオレ", "アタック", "メリット"],
    industry: "生活用品・化粧品",
    websiteUrl: "https://www.kao.com",
    sustainabilityUrl: "https://www.kao.com/jp/sustainability/",
    integratedReportUrl: "https://www.kao.com/jp/sustainability/kirei-report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kao.com/jp/sustainability/"],
    environmentalActions: [
      "Kirei Lifestyle Plan 2030（製品環境負荷低減・詰め替え容器推進・廃棄物削減）を策定・推進（公式サイトより）",
      "製品のライフサイクル全体でのCO2削減に取り組んでいる",
      "詰め替え・つめかえ製品の普及によるプラスチック削減を推進",
    ],
    socialActions: [
      "「清潔・衛生」を通じた社会課題（感染症・衛生問題）への取り組み（公式サイトより）",
      "従業員のウェルビーイング・働き方改革を積極的に推進",
    ],
    localContributionActions: [
      "国内製造拠点の維持・雇用の確保",
    ],
    transparencyActions: [
      "花王統合報告書（Kirei Lifestyle Plan Report）を年次で発行している",
      "TCFDへの対応を表明し、関連情報を開示している",
      "GRI基準に基づく詳細なデータ開示を行っている",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 5,
    dataBasis: "花王株式会社公式サイト・サステナビリティページ（https://www.kao.com/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "lion",
    companyName: "ライオン",
    aliases: ["ライオン", "Lion", "lion", "バファリン", "トップ洗剤"],
    industry: "生活用品・日用品",
    websiteUrl: "https://www.lion.co.jp",
    sustainabilityUrl: "https://www.lion.co.jp/ja/csr/",
    integratedReportUrl: "https://www.lion.co.jp/ja/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.lion.co.jp/ja/csr/"],
    environmentalActions: [
      "詰め替え・つめかえ製品の普及によるプラスチック削減を推進している（公式サイトより）",
      "製品ライフサイクル評価（LCA）を実施し、環境負荷低減に取り組んでいる",
    ],
    socialActions: [
      "口腔・身体の清潔・健康への貢献（健康寿命延伸への取り組み）（公式サイトより）",
    ],
    localContributionActions: [
      "国内工場での雇用維持・地域貢献活動の実施",
    ],
    transparencyActions: [
      "ライオンサステナビリティレポートを年次で発行している",
      "統合報告書を発行している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ライオン株式会社公式サイト・CSRページ（https://www.lion.co.jp/ja/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "unicharm",
    companyName: "ユニ・チャーム",
    aliases: ["ユニチャーム", "ユニ・チャーム", "Unicharm", "unicharm", "ムーニー", "ソフィ"],
    industry: "生活用品・衛生用品",
    websiteUrl: "https://www.unicharm.co.jp",
    sustainabilityUrl: "https://www.unicharm.co.jp/ja/csr-eco.html",
    integratedReportUrl: "https://www.unicharm.co.jp/ja/ir/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.unicharm.co.jp/ja/csr-eco.html"],
    environmentalActions: [
      "NOLA & DOLA（使い捨て製品の環境課題への対応・素材改善）ビジョンを推進している（公式サイトより）",
      "製品の軽量化・省資源化による環境負荷低減",
    ],
    socialActions: [
      "衛生用品を通じた社会課題解決・新興国での衛生環境改善への貢献（公式サイトより）",
      "サプライチェーン全体での人権への配慮を推進している",
    ],
    localContributionActions: [
      "国内製造・雇用の維持",
    ],
    transparencyActions: [
      "ユニ・チャームサステナビリティレポートを年次で発行している",
      "統合報告書を発行している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ユニ・チャーム公式サイト・サステナビリティページ（https://www.unicharm.co.jp/ja/csr-eco.html）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "shiseido",
    companyName: "資生堂",
    aliases: ["資生堂", "Shiseido", "shiseido", "SHISEIDO", "ワタシプラス"],
    industry: "化粧品・美容",
    websiteUrl: "https://corp.shiseido.com",
    sustainabilityUrl: "https://corp.shiseido.com/jp/sustainability/",
    integratedReportUrl: "https://corp.shiseido.com/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://corp.shiseido.com/jp/sustainability/"],
    environmentalActions: [
      "容器の軽量化・再利用可能設計の推進（公式サイトより）",
      "持続可能な原材料調達基準の策定・運用",
    ],
    socialActions: [
      "Society by Beauty（女性エンパワーメント・美容を通じた社会課題解決）を推進（公式サイトより）",
      "女性活躍推進・職場のダイバーシティ推進",
    ],
    localContributionActions: [
      "日本の美・文化の国際発信",
      "国内製造・雇用の維持",
    ],
    transparencyActions: [
      "資生堂統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "株式会社資生堂公式サイト・サステナビリティページ（https://corp.shiseido.com/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "asics",
    companyName: "アシックス",
    aliases: ["アシックス", "ASICS", "asics"],
    industry: "スポーツ用品・衣類",
    websiteUrl: "https://corp.asics.com",
    sustainabilityUrl: "https://corp.asics.com/jp/csr/",
    integratedReportUrl: "https://corp.asics.com/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://corp.asics.com/jp/csr/"],
    environmentalActions: [
      "サステナブル素材（リサイクル素材等）の採用・製品環境負荷の低減に取り組んでいる（公式サイトより）",
      "製品製造における廃棄物削減・水資源保全",
    ],
    socialActions: [
      "スポーツを通じた健康・社会貢献（'A Sound Mind in a Sound Body'）（公式サイトより）",
      "スポーツ参加機会の拡大への取り組み",
    ],
    localContributionActions: [
      "スポーツ振興・地域コミュニティへの貢献",
      "神戸（本社所在地）を中心とした地域社会への貢献活動",
    ],
    transparencyActions: [
      "アシックスグループ統合報告書を発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "アシックス公式サイト・CSRページ（https://corp.asics.com/jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "shimamura",
    companyName: "しまむら",
    aliases: ["しまむら", "Shimamura", "shimamura", "アベイル", "バースデイ"],
    industry: "衣類・小売",
    websiteUrl: "https://www.shimamura.gr.jp",
    sustainabilityUrl: "",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.shimamura.gr.jp"],
    environmentalActions: [
      "省エネ設備の導入・環境負荷低減への取り組み",
    ],
    socialActions: [
      "低価格衣料の提供による生活費の節約支援・生活水準の向上",
    ],
    localContributionActions: [
      "全国各地への出店による地域雇用への貢献",
    ],
    transparencyActions: [
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 1,
    dataBasis: "しまむらグループ公式サイト（https://www.shimamura.gr.jp）より参照（詳細なサステナビリティ情報は要確認）",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 5. 通販・IT・通信（6社）
// ─────────────────────────────────────────────
const itAndTelecom: CompanyImpact[] = [
  {
    id: "rakuten",
    companyName: "楽天グループ",
    aliases: ["楽天", "Rakuten", "rakuten", "楽天市場", "楽天モバイル"],
    industry: "IT・通販・通信",
    websiteUrl: "https://corp.rakuten.co.jp",
    sustainabilityUrl: "https://corp.rakuten.co.jp/sustainability/",
    integratedReportUrl: "https://corp.rakuten.co.jp/ir/reports/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://corp.rakuten.co.jp/sustainability/"],
    environmentalActions: [
      "データセンターの省エネ化・再生可能エネルギー利用促進に取り組んでいる（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "楽天生態系（楽天市場等）を通じた中小事業者・農家支援（公式サイトより）",
      "デジタルインクルージョン推進・地域格差解消への取り組み",
    ],
    localContributionActions: [
      "楽天農業等を通じた地域産品の流通促進",
      "地域中小企業のデジタル化支援",
    ],
    transparencyActions: [
      "楽天グループ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "楽天グループ株式会社公式サイト・サステナビリティページ（https://corp.rakuten.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ntt",
    companyName: "日本電信電話",
    aliases: ["NTT", "ntt", "日本電信電話", "NTTドコモ", "ドコモ", "フレッツ"],
    industry: "通信・IT",
    websiteUrl: "https://group.ntt",
    sustainabilityUrl: "https://group.ntt/jp/sustainability/",
    integratedReportUrl: "https://group.ntt/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://group.ntt/jp/sustainability/"],
    environmentalActions: [
      "NTTグリーンイノベーション戦略（2040年カーボンニュートラル目標）を策定・推進（公式サイトより）",
      "省エネ通信技術（IOWN：革新的光ネットワーク）の研究開発",
      "再生可能エネルギーの積極的な活用を推進している",
    ],
    socialActions: [
      "ICTを活用した社会課題解決・デジタル格差解消への取り組み（公式サイトより）",
      "全国通信インフラの整備・維持による社会貢献",
    ],
    localContributionActions: [
      "全国の通信インフラ整備・地域ICT活用支援",
    ],
    transparencyActions: [
      "NTTグループサステナビリティレポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "統合報告書（アニュアルレポート）を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 5,
    dataBasis: "日本電信電話株式会社公式サイト・サステナビリティページ（https://group.ntt/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kddi",
    companyName: "KDDI",
    aliases: ["KDDI", "kddi", "au", "UQモバイル", "auひかり"],
    industry: "通信・IT",
    websiteUrl: "https://www.kddi.com",
    sustainabilityUrl: "https://www.kddi.com/corporate/kddi/csr/",
    integratedReportUrl: "https://www.kddi.com/corporate/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kddi.com/corporate/kddi/csr/"],
    environmentalActions: [
      "CO2排出量削減目標を策定・公表している（公式サイトより）",
      "再生可能エネルギーの積極的な活用を推進している",
      "使用済みスマートフォン回収・リサイクルを推進している",
    ],
    socialActions: [
      "デジタルインフラ整備による社会課題解決（公式サイトより）",
      "au PAYを通じた地域経済支援・キャッシュレス化推進",
    ],
    localContributionActions: [
      "地域DX推進（地方自治体との連携・農業ICT化等）",
    ],
    transparencyActions: [
      "KDDIサステナビリティレポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "統合報告書を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "KDDI株式会社公式サイト・サステナビリティページ（https://www.kddi.com/corporate/kddi/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "softbank-group",
    companyName: "ソフトバンクグループ",
    aliases: ["ソフトバンク", "SoftBank", "softbank", "Y!mobile", "ワイモバイル"],
    industry: "通信・IT・投資",
    websiteUrl: "https://group.softbank",
    sustainabilityUrl: "https://group.softbank/csr/",
    integratedReportUrl: "https://group.softbank/ir/reports/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://group.softbank/csr/"],
    environmentalActions: [
      "再生可能エネルギー事業への投資・省エネへの取り組み（公式サイトより）",
    ],
    socialActions: [
      "テクノロジー（AI・IoT）による社会課題解決への投資（公式サイトより）",
      "デジタルトランスフォーメーション推進による生産性向上への貢献",
    ],
    localContributionActions: [
      "日本のデジタルインフラへの投資・スタートアップ支援",
    ],
    transparencyActions: [
      "アニュアルレポートを年次で発行している",
      "CSR情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ソフトバンクグループ株式会社公式サイト・CSRページ（https://group.softbank/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "mercari",
    companyName: "メルカリ",
    aliases: ["メルカリ", "Mercari", "mercari", "メルペイ"],
    industry: "IT・フリマアプリ",
    websiteUrl: "https://about.mercari.com",
    sustainabilityUrl: "https://sustainability.mercari.com/",
    integratedReportUrl: "https://about.mercari.com/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://sustainability.mercari.com/"],
    environmentalActions: [
      "フリマアプリによる物品の循環利用促進（サーキュラーエコノミーへの貢献）（公式サイトより）",
      "Go Green by mercari（温室効果ガス排出量削減目標）を策定・推進している",
    ],
    socialActions: [
      "個人間取引プラットフォームによる経済機会の拡大（公式サイトより）",
      "使用済み品の再流通による廃棄物削減への社会的貢献",
    ],
    localContributionActions: [
      "国内の不用品流通促進・廃棄物削減への貢献",
    ],
    transparencyActions: [
      "メルカリサステナビリティレポートを発行している",
      "統合報告書・IR資料を公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 5,
    dataBasis: "株式会社メルカリ公式サイト・サステナビリティページ（https://sustainability.mercari.com/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "fujitsu",
    companyName: "富士通",
    aliases: ["富士通", "Fujitsu", "fujitsu"],
    industry: "IT・情報通信",
    websiteUrl: "https://www.fujitsu.com",
    sustainabilityUrl: "https://www.fujitsu.com/jp/about/csr/",
    integratedReportUrl: "https://www.fujitsu.com/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.fujitsu.com/jp/about/csr/"],
    environmentalActions: [
      "サステナブルDX推進・省エネデータセンターの開発・運用（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "デジタル社会の基盤整備・社会課題解決型ICTサービスの提供（公式サイトより）",
      "サプライチェーン全体での人権・環境への配慮を推進",
    ],
    localContributionActions: [
      "国内IT産業の中核としての雇用・技術育成への貢献",
    ],
    transparencyActions: [
      "富士通統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティデータブックを公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "富士通株式会社公式サイト・サステナビリティページ（https://www.fujitsu.com/jp/about/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 6. 交通・物流（6社）
// ─────────────────────────────────────────────
const transportAndLogistics: CompanyImpact[] = [
  {
    id: "jr-east",
    companyName: "東日本旅客鉄道",
    aliases: ["JR東日本", "JR", "jr東日本", "JREast"],
    industry: "鉄道・交通",
    websiteUrl: "https://www.jreast.co.jp",
    sustainabilityUrl: "https://www.jreast.co.jp/environment/",
    integratedReportUrl: "https://www.jreast.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.jreast.co.jp/environment/"],
    environmentalActions: [
      "駅への太陽光発電設備設置・省エネ型車両への更新を推進（公式サイトより）",
      "エコステ（環境モデル駅）の取り組みを展開している",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "鉄道による大量輸送での自動車代替CO2削減・バリアフリー推進（公式サイトより）",
      "地域社会・観光振興への貢献",
    ],
    localContributionActions: [
      "地方路線の維持・地域活性化（地域創生ビジネス）の推進",
      "沿線地域の観光・農業振興への貢献",
    ],
    transparencyActions: [
      "JR東日本統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティレポートを公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "東日本旅客鉄道株式会社公式サイト・サステナビリティページ（https://www.jreast.co.jp/environment/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "yamato-hd",
    companyName: "ヤマトホールディングス",
    aliases: ["ヤマト運輸", "クロネコヤマト", "ヤマト", "yamato", "Yamato"],
    industry: "物流・宅配",
    websiteUrl: "https://www.yamato-hd.co.jp",
    sustainabilityUrl: "https://www.yamato-hd.co.jp/csr/",
    integratedReportUrl: "https://www.yamato-hd.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.yamato-hd.co.jp/csr/"],
    environmentalActions: [
      "EVトラック・電動バイクの導入推進（EARTH KURONEKO PROJECT）（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
      "配送の効率化による燃料消費削減に取り組んでいる",
    ],
    socialActions: [
      "全国配送ネットワークによる生活インフラ提供（公式サイトより）",
    ],
    localContributionActions: [
      "地域コミュニティ物流・見守りサービスへの貢献",
      "全国均一の配送サービスによる地域格差解消",
    ],
    transparencyActions: [
      "ヤマトグループサステナビリティレポートを年次で発行している",
      "統合報告書を発行している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "ヤマトホールディングス株式会社公式サイト・CSRページ（https://www.yamato-hd.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "sg-hd",
    companyName: "SGホールディングス",
    aliases: ["佐川急便", "佐川", "SG", "sagawa", "Sagawa"],
    industry: "物流・宅配",
    websiteUrl: "https://www.sg-hd.co.jp",
    sustainabilityUrl: "https://www.sg-hd.co.jp/csr/",
    integratedReportUrl: "https://www.sg-hd.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.sg-hd.co.jp/csr/"],
    environmentalActions: [
      "EV配送トラック・電動バイクの導入・脱炭素化に向けた取り組み（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "高品質な物流サービスによる社会インフラの提供（公式サイトより）",
    ],
    localContributionActions: [
      "全国配送ネットワークによる地域生活支援",
    ],
    transparencyActions: [
      "CSR・サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "SGホールディングス株式会社公式サイト・CSRページ（https://www.sg-hd.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "japan-post",
    companyName: "日本郵政",
    aliases: ["郵便局", "日本郵便", "ゆうちょ", "日本郵政", "Japan Post", "ゆうパック"],
    industry: "郵便・物流・金融",
    websiteUrl: "https://www.japanpost.jp",
    sustainabilityUrl: "https://www.japanpost.jp/sustainability/",
    integratedReportUrl: "https://www.japanpost.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.japanpost.jp/sustainability/"],
    environmentalActions: [
      "電動配達車両の導入・事業所の省エネ推進（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "全国約2.4万局の郵便局ネットワークによる地域生活支援（公式サイトより）",
      "過疎地・離島への郵便サービスの継続的な提供",
    ],
    localContributionActions: [
      "地域密着型サービス（住民の見守り活動等）の提供",
      "全国均一の郵便・金融サービスによる地域格差解消",
    ],
    transparencyActions: [
      "日本郵政グループ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "日本郵政株式会社公式サイト・サステナビリティページ（https://www.japanpost.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "ana-hd",
    companyName: "ANAホールディングス",
    aliases: ["ANA", "ana", "全日本空輸", "全日空", "ANAホールディングス"],
    industry: "航空・交通",
    websiteUrl: "https://www.anahd.co.jp",
    sustainabilityUrl: "https://www.anahd.co.jp/group/csr/",
    integratedReportUrl: "https://www.anahd.co.jp/group/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.anahd.co.jp/group/csr/"],
    environmentalActions: [
      "SAF（持続可能な航空燃料）の使用推進・導入目標の公表（公式サイトより）",
      "機体の軽量化・燃費改善・CO2排出量削減目標の策定",
    ],
    socialActions: [
      "国際・国内の人流促進・インバウンド誘致による地域経済への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "地方路線の維持による地域活性化への貢献",
      "ANAを通じた地域観光振興・産品のPR",
    ],
    transparencyActions: [
      "ANAグループCSRレポート・統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ANAホールディングス株式会社公式サイト・CSRページ（https://www.anahd.co.jp/group/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "jal",
    companyName: "日本航空",
    aliases: ["JAL", "jal", "日本航空", "ジャル"],
    industry: "航空・交通",
    websiteUrl: "https://www.jal.com",
    sustainabilityUrl: "https://www.jal.com/ja/sustainability/",
    integratedReportUrl: "https://www.jal.com/ja/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.jal.com/ja/sustainability/"],
    environmentalActions: [
      "JALグループ環境取り組み（機体軽量化・SAFの導入推進）（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "国内外の人流促進・地域活性化への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "地域活性化プログラムの展開（地方観光促進等）",
      "離島・地方路線の維持による地域生活支援",
    ],
    transparencyActions: [
      "JALグループ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "日本航空株式会社公式サイト・サステナビリティページ（https://www.jal.com/ja/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 7. 金融・保険（5社）
// ─────────────────────────────────────────────
const financial: CompanyImpact[] = [
  {
    id: "mufg",
    companyName: "三菱UFJフィナンシャル・グループ",
    aliases: ["三菱UFJ", "MUFG", "mufg", "三菱UFJ銀行", "UFJ"],
    industry: "金融・銀行",
    websiteUrl: "https://www.mufg.jp",
    sustainabilityUrl: "https://www.mufg.jp/csr/",
    integratedReportUrl: "https://www.mufg.jp/ir/report/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.mufg.jp/csr/"],
    environmentalActions: [
      "MUFG環境方針・脱炭素社会実現に向けたサステナブルファイナンス（35兆円目標）を推進（公式サイトより）",
      "自社オペレーションのカーボンニュートラル目標を策定",
    ],
    socialActions: [
      "社会的課題解決に向けた金融サービスの提供（公式サイトより）",
      "地域金融・中小企業支援の強化",
    ],
    localContributionActions: [
      "地域金融機能の提供・地域中小企業への融資・支援",
    ],
    transparencyActions: [
      "MUFGサステナビリティレポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "統合報告書（アニュアルレポート）を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "三菱UFJフィナンシャル・グループ公式サイト・サステナビリティページ（https://www.mufg.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "smfg",
    companyName: "三井住友フィナンシャルグループ",
    aliases: ["三井住友", "SMFG", "smfg", "三井住友銀行", "SMBC"],
    industry: "金融・銀行",
    websiteUrl: "https://www.smfg.co.jp",
    sustainabilityUrl: "https://www.smfg.co.jp/sustainability/",
    integratedReportUrl: "https://www.smfg.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.smfg.co.jp/sustainability/"],
    environmentalActions: [
      "グリーンファイナンス・ESG投融資の推進（公式サイトより）",
      "自社のカーボンニュートラル目標を策定・公表",
    ],
    socialActions: [
      "社会的課題解決型の金融サービスの提供（公式サイトより）",
      "グリーン・ソーシャル・サステナビリティボンドの発行",
    ],
    localContributionActions: [
      "地域産業・中小企業への金融支援・地域活性化への貢献",
    ],
    transparencyActions: [
      "SMBCグループサステナビリティレポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "統合報告書を発行している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "三井住友フィナンシャルグループ公式サイト・サステナビリティページ（https://www.smfg.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "mizuho-fg",
    companyName: "みずほフィナンシャルグループ",
    aliases: ["みずほ", "Mizuho", "mizuho", "みずほ銀行", "みずほFG"],
    industry: "金融・銀行",
    websiteUrl: "https://www.mizuho-fg.co.jp",
    sustainabilityUrl: "https://www.mizuho-fg.co.jp/csr/",
    integratedReportUrl: "https://www.mizuho-fg.co.jp/ir/report/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.mizuho-fg.co.jp/csr/"],
    environmentalActions: [
      "サステナブルファイナンスの推進・脱炭素社会への移行支援（公式サイトより）",
      "自社のカーボンニュートラル目標を策定・公表",
    ],
    socialActions: [
      "社会課題解決に向けた金融サービスの提供（公式サイトより）",
    ],
    localContributionActions: [
      "地域金融・地域活性化支援への取り組み",
    ],
    transparencyActions: [
      "みずほフィナンシャルグループ統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "みずほフィナンシャルグループ公式サイト・CSRページ（https://www.mizuho-fg.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "resona-hd",
    companyName: "りそなホールディングス",
    aliases: ["りそな", "Resona", "resona", "りそな銀行"],
    industry: "金融・銀行",
    websiteUrl: "https://www.resona-hd.co.jp",
    sustainabilityUrl: "https://www.resona-hd.co.jp/sustainability/",
    integratedReportUrl: "https://www.resona-hd.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.resona-hd.co.jp/sustainability/"],
    environmentalActions: [
      "脱炭素社会実現に向けたファイナンスの推進（公式サイトより）",
    ],
    socialActions: [
      "地域密着型のリテールバンキングサービスによる生活支援（公式サイトより）",
      "相続・資産形成など地域個人へのサービス提供",
    ],
    localContributionActions: [
      "地域経済の活性化・中小企業への金融支援を重点領域としている",
    ],
    transparencyActions: [
      "りそなグループ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "りそなホールディングス公式サイト・サステナビリティページ（https://www.resona-hd.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "nippon-life",
    companyName: "日本生命保険",
    aliases: ["日本生命", "ニッセイ", "nissay", "Nippon Life"],
    industry: "保険・金融",
    websiteUrl: "https://www.nissay.co.jp",
    sustainabilityUrl: "https://www.nissay.co.jp/kaisha/csr/",
    integratedReportUrl: "https://www.nissay.co.jp/kaisha/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.nissay.co.jp/kaisha/csr/"],
    environmentalActions: [
      "ESG投資・環境債への投資・省エネ推進を実施している（公式サイトより）",
      "自社の省エネ・CO2削減目標を策定している",
    ],
    socialActions: [
      "健康寿命延伸・生活保障への貢献（公式サイトより）",
      "地域コミュニティへの貢献活動の実施",
    ],
    localContributionActions: [
      "全国の営業職員ネットワークを通じた地域コミュニティへの貢献",
    ],
    transparencyActions: [
      "日本生命CSR・統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "日本生命保険相互会社公式サイト・CSRページ（https://www.nissay.co.jp/kaisha/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 8. 地域・生活・その他（9社）
// ─────────────────────────────────────────────
const other: CompanyImpact[] = [
  {
    id: "jccu",
    companyName: "日本生活協同組合連合会",
    aliases: ["コープ", "生協", "coop", "COOP", "コープこうべ", "日生協", "JCCU"],
    industry: "協同組合・小売",
    websiteUrl: "https://jccu.coop",
    sustainabilityUrl: "https://jccu.coop/activity/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://jccu.coop/activity/"],
    environmentalActions: [
      "コープ商品における環境配慮基準（グリーン購入）の設定・運用（公式サイトより）",
      "食品廃棄削減・フードロス低減への取り組み",
      "生産から消費までのサプライチェーン全体での環境負荷低減",
    ],
    socialActions: [
      "組合員参加型の民主的運営による社会貢献（公式サイトより）",
      "生活に密着した協同組合活動",
    ],
    localContributionActions: [
      "地域コープの高齢者見守り・宅配サービス等による地域社会への貢献（公式サイトより）",
      "地域の農産物・食品の取り扱い推進",
    ],
    transparencyActions: [
      "事業報告書・情報公開を実施している",
      "コープ商品の品質・環境情報を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "日本生活協同組合連合会（JCCU）公式サイト（https://jccu.coop/activity/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "toyota",
    companyName: "トヨタ自動車",
    aliases: ["トヨタ", "Toyota", "toyota", "TOYOTA", "レクサス", "Lexus"],
    industry: "自動車・製造",
    websiteUrl: "https://global.toyota",
    sustainabilityUrl: "https://global.toyota/jp/sustainability/",
    integratedReportUrl: "https://global.toyota/jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://global.toyota/jp/sustainability/"],
    environmentalActions: [
      "Toyota Environmental Challenge 2050（製品・工場・社会での脱炭素化目標）を策定・推進（公式サイトより）",
      "電気自動車（EV）・燃料電池車（FCV）の開発・普及を推進している",
      "工場における水資源保全・廃棄物削減の取り組み",
    ],
    socialActions: [
      "モビリティの提供による社会課題（移動困難・交通事故等）への取り組み（公式サイトより）",
      "自動車産業全体のサプライチェーンを通じた社会貢献",
    ],
    localContributionActions: [
      "愛知県豊田市を中心とした地域産業・雇用への貢献",
      "トヨタ財団による社会課題解決支援活動",
    ],
    transparencyActions: [
      "トヨタ統合報告書・サステナビリティデータブックを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "GRI基準に基づく詳細なデータ開示を行っている",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "トヨタ自動車株式会社公式サイト・サステナビリティページ（https://global.toyota/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "panasonic",
    companyName: "パナソニックホールディングス",
    aliases: ["パナソニック", "Panasonic", "panasonic", "ナショナル"],
    industry: "家電・電機・製造",
    websiteUrl: "https://holdings.panasonic",
    sustainabilityUrl: "https://holdings.panasonic/jp/corporate/sustainability.html",
    integratedReportUrl: "https://holdings.panasonic/jp/corporate/ir/annual-reports.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://holdings.panasonic/jp/corporate/sustainability.html"],
    environmentalActions: [
      "GREEN IMPACT（CO2削減・循環型社会・自然との共生）を掲げて活動（公式サイトより）",
      "家電製品のエネルギー効率改善・省エネ製品の開発・普及",
      "工場の再生可能エネルギー導入・廃棄物削減の取り組み",
    ],
    socialActions: [
      "くらしのアップデート（社会課題の解決）を事業の柱としている（公式サイトより）",
      "障がい者雇用・多様性推進への取り組み",
    ],
    localContributionActions: [
      "国内製造・雇用の維持（大阪・滋賀等の地域に製造拠点）",
    ],
    transparencyActions: [
      "パナソニックグループ統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティデータブックを公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "パナソニックホールディングス公式サイト・サステナビリティページ（https://holdings.panasonic/jp/corporate/sustainability.html）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "tepco",
    companyName: "東京電力ホールディングス",
    aliases: ["東京電力", "東電", "TEPCO", "tepco", "東電HD"],
    industry: "電力・エネルギー",
    websiteUrl: "https://www.tepco.co.jp",
    sustainabilityUrl: "https://www.tepco.co.jp/csr/",
    integratedReportUrl: "https://www.tepco.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.tepco.co.jp/csr/"],
    environmentalActions: [
      "再生可能エネルギー（洋上風力等）の開発・導入推進（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "安定した電力供給による社会インフラ提供（公式サイトより）",
      "東日本大震災・原発事故の復興支援活動を継続している",
    ],
    localContributionActions: [
      "被災地域の復興支援・地域社会への貢献",
    ],
    transparencyActions: [
      "統合報告書を年次で発行している",
      "原発事故に関連する情報を含む詳細な情報開示を行っている",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [
      "2011年東日本大震災による福島第一原子力発電所事故の対応・廃炉作業が継続中（公式サイトで情報開示中）",
    ],
    cautionNote: "福島第一原発事故の廃炉・賠償対応については、東京電力公式サイトで詳細な情報が公開されています。",
    ecoScore: 1,
    dataBasis: "東京電力ホールディングス公式サイト・CSRページ（https://www.tepco.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "tokyo-gas",
    companyName: "東京ガス",
    aliases: ["東京ガス", "Tokyo Gas", "tokyogas"],
    industry: "ガス・エネルギー",
    websiteUrl: "https://www.tokyo-gas.co.jp",
    sustainabilityUrl: "https://www.tokyo-gas.co.jp/csr/",
    integratedReportUrl: "https://www.tokyo-gas.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.tokyo-gas.co.jp/csr/"],
    environmentalActions: [
      "Transition2030（2030年の脱炭素化目標）を策定・推進（公式サイトより）",
      "省エネ機器・サービスの提供による社会全体の省エネ化への貢献",
    ],
    socialActions: [
      "生活に不可欠なエネルギーの安定供給による社会基盤の維持（公式サイトより）",
      "地域コミュニティ活動への参加",
    ],
    localContributionActions: [
      "東京都・首都圏への安定したエネルギー供給を通じた地域社会への貢献",
    ],
    transparencyActions: [
      "東京ガス統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "東京ガス株式会社公式サイト・CSRページ（https://www.tokyo-gas.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "yoshinoya",
    companyName: "吉野家ホールディングス",
    aliases: ["吉野家", "yoshinoya", "Yoshinoya"],
    industry: "外食・牛丼",
    websiteUrl: "https://www.yoshinoya.com",
    sustainabilityUrl: "",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.yoshinoya.com"],
    environmentalActions: [
      "食材廃棄削減・フードロス低減への取り組みを推進している",
    ],
    socialActions: [
      "低価格・高品質な食事の提供による生活支援",
    ],
    localContributionActions: [
      "全国展開による地域雇用・地域産品の取り扱い",
    ],
    transparencyActions: [
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 1,
    dataBasis: "吉野家ホールディングス公式サイト（https://www.yoshinoya.com）より参照（詳細なサステナビリティ情報は要確認）",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kobayashi-pharma",
    companyName: "小林製薬",
    aliases: ["小林製薬", "Kobayashi", "kobayashi"],
    industry: "製薬・日用品",
    websiteUrl: "https://www.kobayashi.co.jp",
    sustainabilityUrl: "https://www.kobayashi.co.jp/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kobayashi.co.jp/csr/"],
    environmentalActions: [
      "製品製造における省資源・廃棄削減への取り組み（公式サイトより）",
    ],
    socialActions: [
      "ニッチな生活課題を解決する独自製品の開発・提供（公式サイトより）",
    ],
    localContributionActions: [
      "地域社会への貢献活動",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
    ],
    negativeRisks: [
      "2024年に発生した機能性食品（紅麹関連製品）による健康被害問題の対応・情報開示が進められている（公式サイト参照）",
    ],
    cautionNote: "2024年の紅麹サプリメント問題については、公式サイトで詳細な情報と対応策が公開されています。",
    ecoScore: 1,
    dataBasis: "小林製薬株式会社公式サイト・CSRページ（https://www.kobayashi.co.jp/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "pg-japan",
    companyName: "P&Gジャパン",
    aliases: ["P&G", "P&Gジャパン", "プロクター", "パンパース", "ジレット", "アリエール"],
    industry: "生活用品・日用品",
    websiteUrl: "https://jp.pg.com",
    sustainabilityUrl: "https://jp.pg.com/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://jp.pg.com/sustainability/"],
    environmentalActions: [
      "Ambition 2030（製品・設備の持続可能性目標）に基づく環境取り組み（公式サイトより）",
      "植物由来原料・再生可能資源への移行を推進している",
      "包材削減・再生材活用を推進している",
    ],
    socialActions: [
      "多様性・インクルージョン推進（公式サイトより）",
      "生活衛生・健康への貢献",
    ],
    localContributionActions: [
      "日本国内での雇用・事業活動",
    ],
    transparencyActions: [
      "P&G Sustainability Reportを年次で発行している（グローバル）",
      "サステナビリティ情報を日本公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "P&Gジャパン公式サイト・サステナビリティページ（https://jp.pg.com/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "nec",
    companyName: "NEC",
    aliases: ["NEC", "nec", "日本電気"],
    industry: "IT・情報通信",
    websiteUrl: "https://www.nec.com",
    sustainabilityUrl: "https://www.nec.com/ja/sustainability/",
    integratedReportUrl: "https://www.nec.com/ja/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.nec.com/ja/sustainability/"],
    environmentalActions: [
      "サステナビリティ経営・CO2排出量削減目標を策定・推進（公式サイトより）",
      "省エネソリューションの開発・社会提供",
    ],
    socialActions: [
      "NEC Way（「安全で安心できる社会」の実現）に基づく社会貢献（公式サイトより）",
      "社会価値創造（3C & 3I）の推進",
    ],
    localContributionActions: [
      "国内IT産業の中核としての雇用・技術人材育成",
    ],
    transparencyActions: [
      "NEC統合レポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "NEC公式サイト・サステナビリティページ（https://www.nec.com/ja/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 9. ドラッグストア（4社）
// ─────────────────────────────────────────────
const drugstore: CompanyImpact[] = [
  {
    id: "welcia-hd",
    companyName: "ウエルシアホールディングス",
    aliases: ["ウエルシア", "Welcia", "welcia", "ウエルシア薬局"],
    industry: "ドラッグストア・小売",
    websiteUrl: "https://www.welcia.co.jp",
    sustainabilityUrl: "https://www.welcia.co.jp/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.welcia.co.jp/csr/"],
    environmentalActions: [
      "調剤薬局における医薬品廃棄削減への取り組みを推進している（公式サイトより）",
      "省エネ設備の導入・CO2排出量削減に取り組んでいる",
    ],
    socialActions: [
      "調剤・健康相談を通じた地域住民の健康増進への貢献（公式サイトより）",
      "介護・育児サポートサービスの提供による生活支援",
    ],
    localContributionActions: [
      "全国展開による地域雇用・地域医療・健康サービスの提供",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ウエルシアホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "tsuruha-hd",
    companyName: "ツルハホールディングス",
    aliases: ["ツルハ", "ツルハドラッグ", "Tsuruha", "tsuruha"],
    industry: "ドラッグストア・小売",
    websiteUrl: "https://www.tsuruha.co.jp",
    sustainabilityUrl: "https://www.tsuruha.co.jp/company/csr.html",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.tsuruha.co.jp/company/csr.html"],
    environmentalActions: [
      "省エネ設備の導入・廃棄物削減に取り組んでいる（公式サイトより）",
      "プラスチック削減・エコバッグ推進への取り組み",
    ],
    socialActions: [
      "調剤・健康サービスを通じた地域住民の健康支援（公式サイトより）",
    ],
    localContributionActions: [
      "北海道を中心とした地域密着型ドラッグストアの展開・地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ツルハホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "matsukiyokokkmin",
    companyName: "マツキヨココカラ＆カンパニー",
    aliases: ["マツキヨ", "マツモトキヨシ", "cocokara", "コクミン", "matsukiyo"],
    industry: "ドラッグストア・小売",
    websiteUrl: "https://www.matsukiyococokara.com",
    sustainabilityUrl: "https://www.matsukiyococokara.com/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.matsukiyococokara.com/sustainability/"],
    environmentalActions: [
      "プラスチック削減・環境配慮型包材への移行を推進している（公式サイトより）",
      "省エネ設備の導入・CO2排出量削減への取り組み",
    ],
    socialActions: [
      "健康・美容サービスを通じた生活の質向上への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "全国展開による地域雇用・地域住民の健康支援への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "マツキヨココカラ＆カンパニー公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "sugi-hd",
    companyName: "スギホールディングス",
    aliases: ["スギ薬局", "スギドラッグ", "Sugi", "sugi"],
    industry: "ドラッグストア・小売",
    websiteUrl: "https://www.sugi-hd.co.jp",
    sustainabilityUrl: "https://www.sugi-hd.co.jp/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.sugi-hd.co.jp/sustainability/"],
    environmentalActions: [
      "省エネ設備・LED照明の導入を推進している（公式サイトより）",
      "医薬品・日用品の廃棄削減への取り組み",
    ],
    socialActions: [
      "調剤・健康相談を通じた地域医療への貢献（公式サイトより）",
      "障がい者雇用・多様な働き方の推進",
    ],
    localContributionActions: [
      "中部・関東を中心とした地域密着型サービスの提供・地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "スギホールディングス公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 10. 住宅・建設（2社）
// ─────────────────────────────────────────────
const construction: CompanyImpact[] = [
  {
    id: "sekisui-house",
    companyName: "積水ハウス",
    aliases: ["積水ハウス", "Sekisui House", "sekisui"],
    industry: "住宅・建設",
    websiteUrl: "https://www.sekisuihouse.co.jp",
    sustainabilityUrl: "https://www.sekisuihouse.co.jp/company/csr/",
    integratedReportUrl: "https://www.sekisuihouse.co.jp/company/ir/library/annual/",
    tnfdReportUrl: "https://www.sekisuihouse.co.jp/company/csr/environment/tnfd/",
    otherSourceUrls: ["https://www.sekisuihouse.co.jp/company/csr/environment/"],
    environmentalActions: [
      "ZEH（ネット・ゼロ・エネルギー・ハウス）の普及推進・2030年全住宅ZEH化目標を策定（公式サイトより）",
      "SBTi（科学的根拠に基づく目標）に基づくCO2排出量削減目標を策定・認定取得",
      "TNFD（自然関連財務情報開示）フレームワークに基づく情報開示を実施",
      "生物多様性保全に向けた5本の樹計画（在来種植栽）を推進している",
    ],
    socialActions: [
      "住まいを通じた健康・環境・安全への貢献（公式サイトより）",
      "女性活躍推進・ダイバーシティ経営を積極的に推進している",
    ],
    localContributionActions: [
      "地域コミュニティと連携した街づくり・まちなみ保全への貢献",
    ],
    transparencyActions: [
      "積水ハウス統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "TNFDに基づく自然関連情報を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 5,
    dataBasis: "積水ハウス株式会社公式サイト・CSRページ（https://www.sekisuihouse.co.jp/company/csr/）より参照",
    confidenceLevel: "high",
    lastUpdated: "2026-05-14",
  },
  {
    id: "daiwa-house",
    companyName: "大和ハウス工業",
    aliases: ["大和ハウス", "ダイワハウス", "Daiwa House", "daiwahouse"],
    industry: "住宅・建設",
    websiteUrl: "https://www.daiwahouse.co.jp",
    sustainabilityUrl: "https://www.daiwahouse.co.jp/sustainable/",
    integratedReportUrl: "https://www.daiwahouse.co.jp/sustainable/report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.daiwahouse.co.jp/sustainable/"],
    environmentalActions: [
      "環境ビジョン2055（カーボンニュートラル・循環型社会への貢献目標）を策定・推進（公式サイトより）",
      "ZEH・ZEB（ネット・ゼロ・エネルギービル）の開発・普及を推進している",
      "再生可能エネルギー事業への投資・太陽光発電の普及促進",
    ],
    socialActions: [
      "住まいと暮らしの向上を通じた社会課題解決への貢献（公式サイトより）",
      "多様な人々が暮らしやすい住環境の提供",
    ],
    localContributionActions: [
      "全国の建設・不動産事業を通じた地域雇用・地域経済への貢献",
    ],
    transparencyActions: [
      "大和ハウスグループ統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "大和ハウス工業株式会社公式サイト・サステナビリティページ（https://www.daiwahouse.co.jp/sustainable/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 11. 製薬・ヘルスケア（2社）
// ─────────────────────────────────────────────
const pharma: CompanyImpact[] = [
  {
    id: "takeda-pharma",
    companyName: "武田薬品工業",
    aliases: ["武田薬品", "タケダ", "Takeda", "takeda"],
    industry: "製薬",
    websiteUrl: "https://www.takeda.com",
    sustainabilityUrl: "https://www.takeda.com/ja-jp/who-we-are/our-purpose-and-values/corporate-responsibility/",
    integratedReportUrl: "https://www.takeda.com/ja-jp/investors/annual-report/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.takeda.com/ja-jp/who-we-are/our-purpose-and-values/corporate-responsibility/"],
    environmentalActions: [
      "Environment 2040 Ambitions（カーボンニュートラル・水資源保全・廃棄物削減目標）を策定・推進（公式サイトより）",
      "再生可能エネルギーへの切り替えを積極的に推進している",
      "製薬製造工程での廃棄物削減・水使用量削減に取り組んでいる",
    ],
    socialActions: [
      "患者さん中心のヘルスケア・アクセス向上への取り組み（公式サイトより）",
      "途上国における医薬品アクセス改善への貢献",
    ],
    localContributionActions: [
      "日本を含むグローバル拠点での地域雇用・社会貢献活動",
    ],
    transparencyActions: [
      "武田薬品統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "グローバルサステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "武田薬品工業株式会社公式サイト・コーポレートレスポンシビリティページより参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "otsuka-hd",
    companyName: "大塚ホールディングス",
    aliases: ["大塚HD", "大塚ホールディングス", "Otsuka", "otsuka", "ポカリスエット", "オロナミンC"],
    industry: "製薬・食品・飲料",
    websiteUrl: "https://www.otsuka.com",
    sustainabilityUrl: "https://www.otsuka.com/jp/sustainability/",
    integratedReportUrl: "https://www.otsuka.com/jp/ir/library/annual.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.otsuka.com/jp/sustainability/"],
    environmentalActions: [
      "製品製造における環境負荷低減・包材削減に取り組んでいる（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "「Otsuka – people creating new products for better health worldwide」のビジョンのもとでの社会貢献（公式サイトより）",
      "アンメット・メディカル・ニーズへの医薬品開発",
    ],
    localContributionActions: [
      "国内製造・雇用の維持・地域コミュニティへの貢献",
    ],
    transparencyActions: [
      "大塚グループ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "大塚ホールディングス公式サイト・サステナビリティページ（https://www.otsuka.com/jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 12. 電機・精密機器（2社）
// ─────────────────────────────────────────────
const electronics: CompanyImpact[] = [
  {
    id: "canon",
    companyName: "キヤノン",
    aliases: ["キヤノン", "Canon", "canon", "EOS", "PIXUS"],
    industry: "電機・精密機器",
    websiteUrl: "https://canon.jp",
    sustainabilityUrl: "https://canon.jp/corporate/csr/",
    integratedReportUrl: "https://canon.jp/corporate/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://canon.jp/corporate/csr/"],
    environmentalActions: [
      "キヤノングリーン戦略（製品・事業所の環境負荷低減）を推進している（公式サイトより）",
      "使用済みカートリッジのリサイクル活動（キヤノンカートリッジ回収リサイクルプログラム）を展開",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "キヤノン芸術文化財団による文化・芸術支援（公式サイトより）",
      "教育支援・科学技術振興への取り組み",
    ],
    localContributionActions: [
      "国内製造拠点での雇用維持・地域社会への貢献",
    ],
    transparencyActions: [
      "キヤノン統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "キヤノン株式会社公式サイト・CSRページ（https://canon.jp/corporate/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "sony-group",
    companyName: "ソニーグループ",
    aliases: ["ソニー", "Sony", "sony", "SONY", "PlayStation", "プレイステーション"],
    industry: "電機・エンターテインメント",
    websiteUrl: "https://www.sony.com/ja",
    sustainabilityUrl: "https://www.sony.com/ja/SonyInfo/sustainability/",
    integratedReportUrl: "https://www.sony.com/ja/SonyInfo/IR/library/presen/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.sony.com/ja/SonyInfo/sustainability/"],
    environmentalActions: [
      "Road to Zero（2050年まで環境負荷ゼロ目標）を策定・推進（公式サイトより）",
      "再生可能エネルギーへの切り替えを積極的に推進している",
      "製品省エネ化・リサイクルの推進（TAKE BACK PROGRAMの展開）",
    ],
    socialActions: [
      "クリエイティビティと技術の力で世界を感動で満たす（公式サイトより）",
      "多様性・インクルージョン推進・障がい者雇用",
    ],
    localContributionActions: [
      "国内製造・研究開発拠点での雇用・技術人材育成への貢献",
    ],
    transparencyActions: [
      "ソニーグループ統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティレポートを年次で公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "ソニーグループ株式会社公式サイト・サステナビリティページ（https://www.sony.com/ja/SonyInfo/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 13. ホームセンター・文具（3社）
// ─────────────────────────────────────────────
const homecenter: CompanyImpact[] = [
  {
    id: "dcm-hd",
    companyName: "DCMホールディングス",
    aliases: ["DCM", "dcm", "カーマ", "ホーマック", "ダイキ"],
    industry: "ホームセンター・小売",
    websiteUrl: "https://www.dcm-hd.co.jp",
    sustainabilityUrl: "https://www.dcm-hd.co.jp/sustainability/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.dcm-hd.co.jp/sustainability/"],
    environmentalActions: [
      "プラスチック削減・エコ商品の品揃え強化に取り組んでいる（公式サイトより）",
      "省エネ設備の導入・CO2排出量削減への取り組み",
    ],
    socialActions: [
      "DIY・暮らしに関する情報提供・地域住民の生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国のホームセンター展開による地域雇用・生活インフラの提供",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "DCMホールディングス公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "komeri",
    companyName: "コメリ",
    aliases: ["コメリ", "Komeri", "komeri"],
    industry: "ホームセンター・農業資材",
    websiteUrl: "https://www.komeri.com",
    sustainabilityUrl: "https://www.komeri.com/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.komeri.com/csr/"],
    environmentalActions: [
      "農業・ガーデニング用品の提供を通じた自給自足・環境保全への間接貢献（公式サイトより）",
      "省エネ設備の導入・廃棄物削減への取り組み",
    ],
    socialActions: [
      "地方・農村部を中心としたホームセンターの展開による生活支援（公式サイトより）",
      "農業支援・地域農業への貢献",
    ],
    localContributionActions: [
      "農村・地方を中心とした展開による地域雇用・地域農業支援への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "コメリ公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "kokuyo",
    companyName: "コクヨ",
    aliases: ["コクヨ", "Kokuyo", "kokuyo", "キャンパスノート"],
    industry: "文具・オフィス家具・小売",
    websiteUrl: "https://www.kokuyo.co.jp",
    sustainabilityUrl: "https://www.kokuyo.co.jp/sustainability/",
    integratedReportUrl: "https://www.kokuyo.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kokuyo.co.jp/sustainability/"],
    environmentalActions: [
      "再生紙・FSC認証紙の採用・製品環境負荷低減に取り組んでいる（公式サイトより）",
      "製品廃棄物の削減・リサイクル素材の活用を推進",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "学習・仕事をする人々への製品・サービス提供による知的生産性向上への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "国内製造・雇用の維持・大阪（本社）を中心とした地域貢献",
    ],
    transparencyActions: [
      "コクヨ統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "コクヨ株式会社公式サイト・サステナビリティページ（https://www.kokuyo.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 14. 電力・飲料・教育・スーパー（5社）
// ─────────────────────────────────────────────
const miscNew: CompanyImpact[] = [
  {
    id: "kansai-electric",
    companyName: "関西電力",
    aliases: ["関西電力", "関電", "Kansai Electric", "kansaielectric"],
    industry: "電力・エネルギー",
    websiteUrl: "https://www.kepco.co.jp",
    sustainabilityUrl: "https://www.kepco.co.jp/sustainability/",
    integratedReportUrl: "https://www.kepco.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kepco.co.jp/sustainability/"],
    environmentalActions: [
      "2050年カーボンニュートラル目標を策定・再生可能エネルギーの積極導入を推進（公式サイトより）",
      "原子力発電の活用による低炭素電力供給に取り組んでいる",
    ],
    socialActions: [
      "関西・近畿圏への安定した電力供給による社会基盤の維持（公式サイトより）",
      "地域コミュニティへの貢献活動の実施",
    ],
    localContributionActions: [
      "関西地域の産業・生活を支えるエネルギーインフラの提供・地域雇用への貢献",
    ],
    transparencyActions: [
      "関西電力統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "関西電力株式会社公式サイト・サステナビリティページ（https://www.kepco.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "yakult",
    companyName: "ヤクルト本社",
    aliases: ["ヤクルト", "Yakult", "yakult"],
    industry: "飲料・ヘルスケア",
    websiteUrl: "https://www.yakult.co.jp",
    sustainabilityUrl: "https://www.yakult.co.jp/company/csr/",
    integratedReportUrl: "https://www.yakult.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.yakult.co.jp/company/csr/"],
    environmentalActions: [
      "ヤクルトボトルの再利用・環境配慮型容器の採用を推進している（公式サイトより）",
      "製造工程でのCO2削減・廃棄物削減に取り組んでいる",
    ],
    socialActions: [
      "腸内フローラ研究・健康増進を通じた社会貢献（公式サイトより）",
      "ヤクルトレディによる地域見守り・健康啓発活動",
    ],
    localContributionActions: [
      "ヤクルトレディを通じた地域密着型サービスによる雇用創出・地域貢献",
    ],
    transparencyActions: [
      "CSR・統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ヤクルト本社公式サイト・CSRページ（https://www.yakult.co.jp/company/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "benesse-hd",
    companyName: "ベネッセホールディングス",
    aliases: ["ベネッセ", "Benesse", "benesse", "進研ゼミ", "チャレンジ"],
    industry: "教育・介護サービス",
    websiteUrl: "https://www.benesse-hd.co.jp",
    sustainabilityUrl: "https://www.benesse-hd.co.jp/ja/sustainability/",
    integratedReportUrl: "https://www.benesse-hd.co.jp/ja/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.benesse-hd.co.jp/ja/sustainability/"],
    environmentalActions: [
      "教材等の印刷物削減・デジタル化推進によるペーパーレス化を推進している（公式サイトより）",
      "省エネ設備の導入・CO2排出量削減への取り組み",
    ],
    socialActions: [
      "教育・介護・生活サービスを通じた社会課題解決（公式サイトより）",
      "子どもの学力向上・教育格差解消への取り組み",
    ],
    localContributionActions: [
      "全国の教育・介護サービス展開による地域雇用・生活支援への貢献",
    ],
    transparencyActions: [
      "ベネッセホールディングス統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ベネッセホールディングス公式サイト・サステナビリティページ（https://www.benesse-hd.co.jp/ja/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
  {
    id: "yaoko",
    companyName: "ヤオコー",
    aliases: ["ヤオコー", "Yaoko", "yaoko"],
    industry: "スーパーマーケット・小売",
    websiteUrl: "https://www.yaoko-net.com",
    sustainabilityUrl: "https://www.yaoko-net.com/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.yaoko-net.com/company/csr/"],
    environmentalActions: [
      "食品廃棄削減・フードロス低減への取り組みを推進している（公式サイトより）",
      "省エネ設備の導入・プラスチック削減への取り組み",
    ],
    socialActions: [
      "地域住民の食生活向上・「食」を通じた生活提案（公式サイトより）",
    ],
    localContributionActions: [
      "埼玉・関東を中心とした地域密着型スーパーの展開・地域農産品の取り扱い推進",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ヤオコー公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
  {
    id: "bic-camera",
    companyName: "ビックカメラ",
    aliases: ["ビックカメラ", "BicCamera", "biccamera", "コジマ", "ソフマップ"],
    industry: "家電量販店・小売",
    websiteUrl: "https://www.biccamera.com",
    sustainabilityUrl: "https://www.biccamera.co.jp/ir/sustainability/",
    integratedReportUrl: "https://www.biccamera.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.biccamera.co.jp/ir/sustainability/"],
    environmentalActions: [
      "家電リサイクル法に基づく不要家電の適正回収・処理を推進している（公式サイトより）",
      "省エネ家電の販売・普及を通じた社会全体の省エネ化への貢献",
    ],
    socialActions: [
      "家電・IT製品の提供を通じた生活の利便性・豊かさへの貢献（公式サイトより）",
    ],
    localContributionActions: [
      "都市部・地方への出店による地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ビックカメラ公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 15. 飲料・スーパー・外食・リユース・その他（30社）
// ─────────────────────────────────────────────
const newBatch: CompanyImpact[] = [
  // ── 飲料（4社）────────────────────────────────
  {
    id: "cherio",
    companyName: "チェリオコーポレーション",
    aliases: ["チェリオ", "Cherio", "cherio", "チェリオジャパン"],
    industry: "飲料",
    websiteUrl: "https://www.cheerio.co.jp",
    sustainabilityUrl: "",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.cheerio.co.jp"],
    environmentalActions: [
      "飲料製造における廃棄物削減・省エネへの取り組みを推進している",
    ],
    socialActions: [
      "多様な自動販売機ネットワークを通じた生活利便性の提供",
    ],
    localContributionActions: [
      "全国の自動販売機展開による地域生活インフラへの貢献",
    ],
    transparencyActions: [
      "会社情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 1,
    dataBasis: "チェリオコーポレーション公式サイト（https://www.cheerio.co.jp）より参照（詳細なサステナビリティ情報は要確認）",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "dydo-group",
    companyName: "ダイドーグループホールディングス",
    aliases: ["ダイドー", "DyDo", "dydo", "ダイドードリンコ", "ダイドードリンク"],
    industry: "飲料",
    websiteUrl: "https://www.dydo-ghd.co.jp",
    sustainabilityUrl: "https://www.dydo-ghd.co.jp/csr/",
    integratedReportUrl: "https://www.dydo-ghd.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.dydo-ghd.co.jp/csr/"],
    environmentalActions: [
      "自動販売機の省エネ化（ヒートポンプ型・LED照明）を推進している（公式サイトより）",
      "容器包材の環境配慮・軽量化に取り組んでいる",
    ],
    socialActions: [
      "自動販売機を活用した地域見守りサービスを提供している（公式サイトより）",
      "医療・ヘルスケア事業による社会貢献",
    ],
    localContributionActions: [
      "自動販売機ネットワークを活用した地域防災・見守りへの貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ダイドーグループホールディングス公式サイト・CSRページ（https://www.dydo-ghd.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "ccbji",
    companyName: "コカ・コーラボトラーズジャパンホールディングス",
    aliases: ["コカコーラ", "コカ・コーラ", "CocaCola", "cocacola", "コークボトラーズ", "CCBJI"],
    industry: "飲料",
    websiteUrl: "https://www.ccbji.co.jp",
    sustainabilityUrl: "https://www.ccbji.co.jp/sustainability/",
    integratedReportUrl: "https://www.ccbji.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ccbji.co.jp/sustainability/"],
    environmentalActions: [
      "2030年までに再生可能エネルギー100%切り替え目標を公表（公式サイトより）",
      "軽量ボトル・リサイクルPET素材の使用拡大を推進している",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "「コカ・コーラ」ブランドを通じた地域コミュニティイベント・社会貢献活動（公式サイトより）",
    ],
    localContributionActions: [
      "全国の製造・物流拠点での地域雇用・地域産業への貢献",
    ],
    transparencyActions: [
      "サステナビリティレポートを年次で発行している",
      "統合報告書・IR資料を公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "コカ・コーラボトラーズジャパンホールディングス公式サイト・サステナビリティページ（https://www.ccbji.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "pokka-sapporo",
    companyName: "ポッカサッポロフード＆ビバレッジ",
    aliases: ["ポッカサッポロ", "ポッカ", "POKKA", "pokka", "サッポロポテト", "じゃがポックル"],
    industry: "飲料・食品",
    websiteUrl: "https://www.pokkasapporo-fb.jp",
    sustainabilityUrl: "https://www.pokkasapporo-fb.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.pokkasapporo-fb.jp/company/csr/"],
    environmentalActions: [
      "容器包材の削減・環境配慮型素材への移行に取り組んでいる（公式サイトより）",
      "製造工程での廃棄物削減・省エネに取り組んでいる",
    ],
    socialActions: [
      "食と健康への貢献（レモン・スープ等の機能性食品開発）（公式サイトより）",
    ],
    localContributionActions: [
      "国内製造拠点での地域雇用・地域貢献への取り組み",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ポッカサッポロフード＆ビバレッジ公式サイト・CSRページ（https://www.pokkasapporo-fb.jp/company/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  // ── スーパー（4社）────────────────────────────
  {
    id: "arcs",
    companyName: "アークス",
    aliases: ["アークス", "Arcs", "arcs", "フレッシュバザール", "ラルズ", "ユニバース"],
    industry: "スーパーマーケット・小売",
    websiteUrl: "https://www.arcs-g.co.jp",
    sustainabilityUrl: "https://www.arcs-g.co.jp/csr/",
    integratedReportUrl: "https://www.arcs-g.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.arcs-g.co.jp/csr/"],
    environmentalActions: [
      "食品廃棄削減・フードロス低減への取り組みを推進している（公式サイトより）",
      "省エネ設備・LED照明の導入を推進している",
    ],
    socialActions: [
      "北海道・東北を中心とした地域住民の食生活を支える（公式サイトより）",
      "地域農家との連携・地域産品の取り扱い推進",
    ],
    localContributionActions: [
      "北海道・東北の地域密着型スーパー展開（フレッシュバザール等）による地域雇用・農産品流通への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "アークス公式サイト・CSRページ（https://www.arcs-g.co.jp/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "life-corp",
    companyName: "ライフコーポレーション",
    aliases: ["ライフ", "Life", "life", "ライフスーパー"],
    industry: "スーパーマーケット・小売",
    websiteUrl: "https://www.lifecorp.jp",
    sustainabilityUrl: "https://www.lifecorp.jp/corporate/csr/",
    integratedReportUrl: "https://www.lifecorp.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.lifecorp.jp/corporate/csr/"],
    environmentalActions: [
      "食品廃棄削減・値引き販売・フードバンク寄付に取り組んでいる（公式サイトより）",
      "プラスチック削減・エコバッグ推進への取り組み",
    ],
    socialActions: [
      "首都圏・近畿圏の地域住民の食生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "地域農産物・国産品の優先取り扱いによる農業支援への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ライフコーポレーション公式サイト・CSRページ（https://www.lifecorp.jp/corporate/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "maruetsu",
    companyName: "マルエツ",
    aliases: ["マルエツ", "Maruetsu", "maruetsu"],
    industry: "スーパーマーケット・小売",
    websiteUrl: "https://www.maruetsu.co.jp",
    sustainabilityUrl: "https://www.maruetsu.co.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.maruetsu.co.jp/company/csr/"],
    environmentalActions: [
      "食品廃棄削減・省エネ設備導入に取り組んでいる（公式サイトより）",
    ],
    socialActions: [
      "首都圏を中心とした地域住民の食生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "地域密着型スーパーの展開による地域雇用・生活インフラの提供",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "マルエツ公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "san-a",
    companyName: "サンエー",
    aliases: ["サンエー", "San-A", "san-a", "サンエースーパー"],
    industry: "スーパーマーケット・小売",
    websiteUrl: "https://www.san-a.co.jp",
    sustainabilityUrl: "https://www.san-a.co.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.san-a.co.jp/company/csr/"],
    environmentalActions: [
      "食品廃棄削減・省エネへの取り組みを推進している（公式サイトより）",
    ],
    socialActions: [
      "沖縄の地域住民の食生活・生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "沖縄全域に展開する地域密着型スーパーとして地域雇用・地域農産物の取り扱いに貢献",
    ],
    transparencyActions: [
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "サンエー公式サイトより参照（詳細なサステナビリティ情報は要確認）",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  // ── 外食（5社）────────────────────────────────
  {
    id: "osho-food",
    companyName: "王将フードサービス",
    aliases: ["王将", "餃子の王将", "Osho", "osho", "王将フードサービス"],
    industry: "外食・中華",
    websiteUrl: "https://www.ohsho.co.jp",
    sustainabilityUrl: "https://www.ohsho.co.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ohsho.co.jp/company/csr/"],
    environmentalActions: [
      "食材廃棄削減・省エネ設備の導入を推進している（公式サイトより）",
      "揚げ油の再利用・廃食用油のリサイクルに取り組んでいる",
    ],
    socialActions: [
      "手頃な価格で提供する中華料理を通じた生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国展開による地域雇用・地域密着型サービスの提供",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "王将フードサービス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "saizeriya",
    companyName: "サイゼリヤ",
    aliases: ["サイゼリヤ", "Saizeriya", "saizeriya", "サイゼ"],
    industry: "外食・ファミリーレストラン",
    websiteUrl: "https://www.saizeriya.co.jp",
    sustainabilityUrl: "https://www.saizeriya.co.jp/csr/",
    integratedReportUrl: "https://www.saizeriya.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.saizeriya.co.jp/csr/"],
    environmentalActions: [
      "食品廃棄削減・省エネ設備導入に取り組んでいる（公式サイトより）",
      "農場直営による食材安全性確保と廃棄削減",
    ],
    socialActions: [
      "低価格・高品質なイタリア料理提供による生活費節約支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "サイゼリヤ公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "matsuya-foods",
    companyName: "松屋フーズホールディングス",
    aliases: ["松屋", "まつや", "Matsuya", "matsuya", "松屋フーズ"],
    industry: "外食・牛丼",
    websiteUrl: "https://www.matsuyafoods.co.jp",
    sustainabilityUrl: "https://www.matsuyafoods.co.jp/company/csr.html",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.matsuyafoods.co.jp/company/csr.html"],
    environmentalActions: [
      "食材廃棄削減・省エネへの取り組みを推進している（公式サイトより）",
    ],
    socialActions: [
      "低価格・24時間営業による生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "松屋フーズホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "ringer-hut",
    companyName: "リンガーハット",
    aliases: ["リンガーハット", "Ringer Hut", "ringerhut", "長崎ちゃんぽん", "浜勝"],
    industry: "外食・ファストフード",
    websiteUrl: "https://www.ringerhut.co.jp",
    sustainabilityUrl: "https://www.ringerhut.co.jp/company/csr/",
    integratedReportUrl: "https://www.ringerhut.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.ringerhut.co.jp/company/csr/"],
    environmentalActions: [
      "国産野菜100%使用へのこだわり・農薬使用量削減への取り組み（公式サイトより）",
      "食品廃棄削減・食材の有効活用に取り組んでいる",
    ],
    socialActions: [
      "国産農業支援・農家との直接取引による産地振興（公式サイトより）",
    ],
    localContributionActions: [
      "国産野菜の積極的な調達による国内農業振興・地域農家への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "リンガーハット公式サイト・CSRページ（https://www.ringerhut.co.jp/company/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "komeda-hd",
    companyName: "コメダホールディングス",
    aliases: ["コメダ", "コメダ珈琲", "Komeda", "komeda", "珈琲所コメダ"],
    industry: "カフェ・外食",
    websiteUrl: "https://www.komeda.co.jp",
    sustainabilityUrl: "https://www.komeda.co.jp/company/ir/sustainability.html",
    integratedReportUrl: "https://www.komeda.co.jp/company/ir/library.html",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.komeda.co.jp/company/ir/sustainability.html"],
    environmentalActions: [
      "食品廃棄削減・省エネへの取り組みを推進している（公式サイトより）",
      "フランチャイズ店舗の省エネ支援",
    ],
    socialActions: [
      "くつろぎの空間提供・地域コミュニティの場として機能（公式サイトより）",
    ],
    localContributionActions: [
      "名古屋発・全国展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "コメダホールディングス公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  // ── 生活用品・製薬（3社）──────────────────────
  {
    id: "unilever-japan",
    companyName: "ユニリーバ・ジャパン",
    aliases: ["ユニリーバ", "Unilever", "unilever", "ダヴ", "Dove", "リプトン", "ラックス"],
    industry: "生活用品・食品",
    websiteUrl: "https://www.unilever.co.jp",
    sustainabilityUrl: "https://www.unilever.co.jp/planet-and-society/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.unilever.co.jp/planet-and-society/"],
    environmentalActions: [
      "Unilever Sustainable Living Plan（製品環境負荷半減・再生可能原材料調達目標）を推進（公式サイトより）",
      "プラスチック使用削減・詰め替え容器の普及推進",
      "2039年までにカーボンニュートラルな製品ポートフォリオへの移行目標を策定",
    ],
    socialActions: [
      "Dove Self-Esteem Project（自己肯定感向上の教育活動）を実施している（公式サイトより）",
      "女性エンパワーメント・ダイバーシティ推進",
    ],
    localContributionActions: [
      "日本国内の事業・雇用を通じた地域貢献",
    ],
    transparencyActions: [
      "ユニリーバグローバルのサステナビリティレポートを年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を日本公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "ユニリーバ・ジャパン公式サイト・サステナビリティページ（https://www.unilever.co.jp/planet-and-society/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "st-corp",
    companyName: "エステー",
    aliases: ["エステー", "ST", "st", "消臭力", "ムシューダ", "エアエック"],
    industry: "生活用品・消臭・芳香剤",
    websiteUrl: "https://www.st-c.co.jp",
    sustainabilityUrl: "https://www.st-c.co.jp/csr/",
    integratedReportUrl: "https://www.st-c.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.st-c.co.jp/csr/"],
    environmentalActions: [
      "製品の環境負荷低減・詰め替え製品の普及推進（公式サイトより）",
      "パッケージの削減・再生材使用を推進している",
    ],
    socialActions: [
      "生活環境改善製品の提供を通じた社会貢献（公式サイトより）",
    ],
    localContributionActions: [
      "国内製造・雇用の維持",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "エステー株式会社公式サイト・CSRページ（https://www.st-c.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "rohto-pharma",
    companyName: "ロート製薬",
    aliases: ["ロート製薬", "Rohto", "rohto", "ロートV", "肌研", "メンソレータム"],
    industry: "製薬・スキンケア",
    websiteUrl: "https://www.rohto.co.jp",
    sustainabilityUrl: "https://www.rohto.co.jp/sustainability/",
    integratedReportUrl: "https://www.rohto.co.jp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.rohto.co.jp/sustainability/"],
    environmentalActions: [
      "製造における環境負荷低減・廃棄物削減に取り組んでいる（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "目・肌・体の健康を守る製品開発・健康寿命延伸への貢献（公式サイトより）",
      "農業×ヘルスケアの複合事業展開",
    ],
    localContributionActions: [
      "国内製造・農業事業を通じた地域産業への貢献",
    ],
    transparencyActions: [
      "ロート製薬統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ロート製薬株式会社公式サイト・サステナビリティページ（https://www.rohto.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ── リユース・循環経済（2社）──────────────────
  {
    id: "geo-hd",
    companyName: "ゲオホールディングス",
    aliases: ["ゲオ", "GEO", "geo", "ゲオ宅配買取", "セカンドストリート"],
    industry: "リユース・エンターテインメント",
    websiteUrl: "https://corp.geo-hd.co.jp",
    sustainabilityUrl: "https://corp.geo-hd.co.jp/sustainability/",
    integratedReportUrl: "https://corp.geo-hd.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://corp.geo-hd.co.jp/sustainability/"],
    environmentalActions: [
      "リユース・リサイクル事業（セカンドストリート）によるサーキュラーエコノミーへの貢献（公式サイトより）",
      "使用済み製品の再流通促進による廃棄物削減",
    ],
    socialActions: [
      "手頃な価格での衣料・家電・おもちゃ等の再流通による生活費節約支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国のリユース店舗を通じた地域の不用品循環への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ゲオホールディングス公式サイト・サステナビリティページ（https://corp.geo-hd.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "bookoff-group",
    companyName: "ブックオフグループホールディングス",
    aliases: ["ブックオフ", "BookOff", "bookoff", "BOOKOFF"],
    industry: "リユース・書籍・エンターテインメント",
    websiteUrl: "https://bookoffgroup.co.jp",
    sustainabilityUrl: "https://bookoffgroup.co.jp/sustainability/",
    integratedReportUrl: "https://bookoffgroup.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://bookoffgroup.co.jp/sustainability/"],
    environmentalActions: [
      "中古本・中古品の再流通によるサーキュラーエコノミーへの貢献（公式サイトより）",
      "廃棄物削減・再資源化の取り組みを推進している",
    ],
    socialActions: [
      "誰もが手軽に本・エンタメにアクセスできる環境の提供（公式サイトより）",
    ],
    localContributionActions: [
      "全国のリユース店舗を通じた地域の不用品・本の循環への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "ブックオフグループホールディングス公式サイト・サステナビリティページ（https://bookoffgroup.co.jp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ── ファッション（3社）───────────────────────
  {
    id: "aoki-hd",
    companyName: "AOKIホールディングス",
    aliases: ["AOKI", "aoki", "アオキ", "AOKIスーツ", "ORiHiCA"],
    industry: "衣類・ファッション",
    websiteUrl: "https://www.aoki-hd.co.jp",
    sustainabilityUrl: "https://www.aoki-hd.co.jp/sustainability/",
    integratedReportUrl: "https://www.aoki-hd.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.aoki-hd.co.jp/sustainability/"],
    environmentalActions: [
      "使用済みスーツの回収・リサイクルプログラムを展開している（公式サイトより）",
      "環境配慮素材の採用・製品の長寿命化への取り組み",
    ],
    socialActions: [
      "スーツ・フォーマルウェアを通じた就労・社会参加支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国の店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "AOKIホールディングス公式サイト・サステナビリティページ（https://www.aoki-hd.co.jp/sustainability/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "aoyama-shoji",
    companyName: "青山商事",
    aliases: ["青山商事", "洋服の青山", "Aoyama", "aoyama"],
    industry: "衣類・ファッション",
    websiteUrl: "https://www.aoyama-syouji.co.jp",
    sustainabilityUrl: "https://www.aoyama-syouji.co.jp/csr/",
    integratedReportUrl: "https://www.aoyama-syouji.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.aoyama-syouji.co.jp/csr/"],
    environmentalActions: [
      "スーツ・衣類の回収・リサイクル活動を実施している（公式サイトより）",
      "環境配慮型素材の採用・廃棄物削減への取り組み",
    ],
    socialActions: [
      "手頃な価格でのスーツ提供・就職活動支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国の店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "青山商事株式会社公式サイト・CSRページ（https://www.aoyama-syouji.co.jp/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "abc-mart",
    companyName: "エービーシー・マート",
    aliases: ["ABCマート", "ABC-MART", "abc-mart", "エービーシーマート"],
    industry: "靴・スポーツ用品",
    websiteUrl: "https://www.abc-mart.co.jp",
    sustainabilityUrl: "https://www.abc-mart.co.jp/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.abc-mart.co.jp/company/csr/"],
    environmentalActions: [
      "シューズリサイクルプログラムの展開・廃棄削減に取り組んでいる（公式サイトより）",
    ],
    socialActions: [
      "手頃な価格での靴・スポーツ用品提供による生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "全国の店舗展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "エービーシー・マート公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  // ── 子ども・家電・交通（5社）─────────────────
  {
    id: "nishimatsuya",
    companyName: "西松屋チェーン",
    aliases: ["西松屋", "Nishimatsuya", "nishimatsuya"],
    industry: "子ども用品・小売",
    websiteUrl: "https://www.24028.jp",
    sustainabilityUrl: "https://www.24028.jp/company/csr/",
    integratedReportUrl: "https://www.24028.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.24028.jp/company/csr/"],
    environmentalActions: [
      "省エネ設備・LED照明の導入を推進している（公式サイトより）",
      "子ども用品の長期使用・リユースを促進する取り組み",
    ],
    socialActions: [
      "育児・子育て世帯への手頃な価格での商品提供による生活支援（公式サイトより）",
      "少子化対策・子育て支援への間接貢献",
    ],
    localContributionActions: [
      "全国・郊外への店舗展開による地域雇用・子育て支援インフラへの貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "西松屋チェーン公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "nojima",
    companyName: "ノジマ",
    aliases: ["ノジマ", "Nojima", "nojima"],
    industry: "家電量販店・IT",
    websiteUrl: "https://www.nojima.co.jp",
    sustainabilityUrl: "https://www.nojima.co.jp/ir/sustainability/",
    integratedReportUrl: "https://www.nojima.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.nojima.co.jp/ir/sustainability/"],
    environmentalActions: [
      "家電リサイクル法に基づく不要家電の適正回収・処理を推進している（公式サイトより）",
      "省エネ家電の販売・普及を通じた社会全体の省エネ化への貢献",
    ],
    socialActions: [
      "デジタルサービス・通信サービスの提供による生活利便性向上（公式サイトより）",
    ],
    localContributionActions: [
      "関東・全国への展開による地域雇用への貢献",
    ],
    transparencyActions: [
      "サステナビリティ情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ノジマ公式サイト・サステナビリティページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "joshin",
    companyName: "上新電機",
    aliases: ["ジョーシン", "上新電機", "Joshin", "joshin"],
    industry: "家電量販店",
    websiteUrl: "https://www.joshin.co.jp",
    sustainabilityUrl: "https://www.joshin.co.jp/csr/",
    integratedReportUrl: "https://www.joshin.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.joshin.co.jp/csr/"],
    environmentalActions: [
      "使用済み家電の回収・リサイクルを推進している（公式サイトより）",
      "省エネ家電の販売推進",
    ],
    socialActions: [
      "関西・全国への家電・デジタル製品の提供による生活支援（公式サイトより）",
    ],
    localContributionActions: [
      "大阪（本社）を中心とした関西地域への雇用・地域貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "有価証券報告書等の法定書類を開示している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "上新電機公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "kintetsu-group",
    companyName: "近鉄グループホールディングス",
    aliases: ["近鉄", "近畿日本鉄道", "Kintetsu", "kintetsu", "近鉄グループ"],
    industry: "鉄道・交通・不動産",
    websiteUrl: "https://www.kintetsu-g-hd.co.jp",
    sustainabilityUrl: "https://www.kintetsu-g-hd.co.jp/csr/",
    integratedReportUrl: "https://www.kintetsu-g-hd.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kintetsu-g-hd.co.jp/csr/"],
    environmentalActions: [
      "省エネ型車両への更新・再生可能エネルギーの導入を推進している（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "近畿・東海圏の鉄道・交通インフラによる地域生活支援（公式サイトより）",
      "観光事業（奈良・伊勢方面等）による地域活性化",
    ],
    localContributionActions: [
      "近畿・東海圏の鉄道・バス・不動産事業を通じた地域社会への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "近鉄グループホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "hankyu-hanshin",
    companyName: "阪急阪神ホールディングス",
    aliases: ["阪急", "阪神", "阪急阪神", "Hankyu", "hankyu", "Hanshin"],
    industry: "鉄道・交通・不動産",
    websiteUrl: "https://www.hankyu-hanshin.co.jp",
    sustainabilityUrl: "https://www.hankyu-hanshin.co.jp/csr/",
    integratedReportUrl: "https://www.hankyu-hanshin.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.hankyu-hanshin.co.jp/csr/"],
    environmentalActions: [
      "省エネ型車両への更新・駅の省エネ化を推進している（公式サイトより）",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "関西圏の鉄道・交通・都市開発による地域生活・経済への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "阪急・阪神沿線の地域活性化・観光振興への貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
      "統合報告書・IR資料を公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "阪急阪神ホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ── 金融・サービス・食品（5社）─────────────────
  {
    id: "orix",
    companyName: "オリックス",
    aliases: ["オリックス", "ORIX", "orix"],
    industry: "金融・投資・再生可能エネルギー",
    websiteUrl: "https://www.orix.co.jp",
    sustainabilityUrl: "https://www.orix.co.jp/grp/sustainability/",
    integratedReportUrl: "https://www.orix.co.jp/grp/ir/library/annual/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.orix.co.jp/grp/sustainability/"],
    environmentalActions: [
      "再生可能エネルギー事業（太陽光・風力・バイオマス）への積極投資・運営（公式サイトより）",
      "環境関連融資・グリーンファイナンスの推進",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "多様な金融・サービス・インフラ事業を通じた社会課題解決（公式サイトより）",
    ],
    localContributionActions: [
      "国内再生可能エネルギー事業を通じた地域の脱炭素化への貢献",
    ],
    transparencyActions: [
      "オリックス統合報告書を年次で発行している",
      "TCFDへの対応を表明・開示している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 4,
    dataBasis: "オリックス株式会社公式サイト・サステナビリティページ（https://www.orix.co.jp/grp/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "takara-hd",
    companyName: "宝ホールディングス",
    aliases: ["宝HD", "タカラ", "Takara", "takara", "タカラ酒類", "松竹梅", "TAKARA"],
    industry: "酒類・食品・調味料",
    websiteUrl: "https://www.takara.co.jp",
    sustainabilityUrl: "https://www.takara.co.jp/csr/",
    integratedReportUrl: "https://www.takara.co.jp/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.takara.co.jp/csr/"],
    environmentalActions: [
      "酒造副産物（酒粕等）の有効活用・廃棄物削減に取り組んでいる（公式サイトより）",
      "水資源の保全・省水型製造プロセスへの取り組み",
      "CO2排出量削減目標を策定・公表している",
    ],
    socialActions: [
      "日本の食文化・酒文化の継承・発展への貢献（公式サイトより）",
      "アルコールの適正飲酒啓発活動を実施している",
    ],
    localContributionActions: [
      "京都（本社）をはじめとする地域農産物（米・麦等）の調達・農業支援",
    ],
    transparencyActions: [
      "宝ホールディングスCSRレポートを年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
      "TCFDへの対応を表明している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "宝ホールディングス公式サイト・CSRページ（https://www.takara.co.jp/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "house-foods",
    companyName: "ハウス食品グループ本社",
    aliases: ["ハウス食品", "House", "house", "カレー", "ハウスカレー", "バーモントカレー"],
    industry: "食品・調味料",
    websiteUrl: "https://housefoods-group.com",
    sustainabilityUrl: "https://housefoods-group.com/activities/csr/",
    integratedReportUrl: "https://housefoods-group.com/ir/library/",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://housefoods-group.com/activities/csr/"],
    environmentalActions: [
      "製品の環境負荷低減・食品廃棄削減に取り組んでいる（公式サイトより）",
      "包材削減・再生素材の活用を推進している",
    ],
    socialActions: [
      "日本の食文化・カレーの普及を通じた食への貢献（公式サイトより）",
      "食育活動・健康情報の提供",
    ],
    localContributionActions: [
      "国内農産物（玉ねぎ・スパイス等）の調達・農業支援",
    ],
    transparencyActions: [
      "ハウス食品グループCSR・統合報告書を年次で発行している",
      "サステナビリティ情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 3,
    dataBasis: "ハウス食品グループ本社公式サイト・CSRページ（https://housefoods-group.com/activities/csr/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },
  {
    id: "kracie-hd",
    companyName: "クラシエホールディングス",
    aliases: ["クラシエ", "Kracie", "kracie", "カネボウ", "肌美精", "のど黒飴"],
    industry: "生活用品・食品・製薬",
    websiteUrl: "https://www.kracie.co.jp",
    sustainabilityUrl: "https://www.kracie.co.jp/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.kracie.co.jp/csr/"],
    environmentalActions: [
      "製品製造における廃棄物削減・環境負荷低減に取り組んでいる（公式サイトより）",
      "容器包材の削減・環境配慮型素材への移行を推進",
    ],
    socialActions: [
      "漢方・健康・スキンケアを通じた健康増進への貢献（公式サイトより）",
    ],
    localContributionActions: [
      "国内製造拠点での雇用維持・地域貢献",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "クラシエホールディングス公式サイト・CSRページ（https://www.kracie.co.jp/csr/）より参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
  {
    id: "japanet-hd",
    companyName: "ジャパネットホールディングス",
    aliases: ["ジャパネット", "ジャパネットたかた", "Japanet", "japanet"],
    industry: "通販・IT・スポーツ",
    websiteUrl: "https://www.japanet.co.jp",
    sustainabilityUrl: "https://www.japanet.co.jp/shopping/company/csr/",
    integratedReportUrl: "",
    tnfdReportUrl: "",
    otherSourceUrls: ["https://www.japanet.co.jp/shopping/company/csr/"],
    environmentalActions: [
      "製品の下取り・リサイクル支援サービスを提供している（公式サイトより）",
      "省エネ製品の普及を通じた社会全体の省エネ化への貢献",
    ],
    socialActions: [
      "テレビ・通販を通じた生活利便性の向上・高齢者向けサービス提供（公式サイトより）",
      "スポーツ事業（V・ファーレン長崎等）を通じた地域活性化",
    ],
    localContributionActions: [
      "長崎（本社）を中心とした地域経済への貢献・地域スポーツ振興",
    ],
    transparencyActions: [
      "CSR情報を公式サイトで公開している",
    ],
    negativeRisks: [],
    cautionNote: "",
    ecoScore: 2,
    dataBasis: "ジャパネットホールディングス公式サイト・CSRページより参照",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },
];

// ─────────────────────────────────────────────
// 全データをエクスポート（計107社）
// ─────────────────────────────────────────────
export const companyData: CompanyImpact[] = [
  ...convenienceAndRetail,   // 8社
  ...foodAndBeverage,        // 10社
  ...restaurant,             // 6社
  ...apparel,                // 7社
  ...itAndTelecom,           // 6社
  ...transportAndLogistics,  // 6社
  ...financial,              // 5社
  ...other,                  // 9社
  ...drugstore,              // 4社
  ...construction,           // 2社
  ...pharma,                 // 2社
  ...electronics,            // 2社
  ...homecenter,             // 3社
  ...miscNew,                // 5社
  ...newBatch,               // 30社
];

// ─────────────────────────────────────────────
// 企業検索
// ─────────────────────────────────────────────

/**
 * 企業名・別名の部分一致で企業データを検索する
 */
export function findCompany(name: string): CompanyImpact | null {
  if (!name.trim()) return null;
  const q = name.trim().toLowerCase();
  return (
    companyData.find(
      (c) =>
        c.companyName.toLowerCase().includes(q) ||
        c.aliases.some((a) => a.toLowerCase().includes(q))
    ) ?? null
  );
}

/**
 * 複数件のサジェスト用：部分一致する企業を最大 n 件返す
 */
export function searchCompanies(name: string, limit = 5): CompanyImpact[] {
  if (!name.trim()) return [];
  const q = name.trim().toLowerCase();
  return companyData
    .filter(
      (c) =>
        c.companyName.toLowerCase().includes(q) ||
        c.aliases.some((a) => a.toLowerCase().includes(q))
    )
    .slice(0, limit);
}

/**
 * ホーム画面などで表示するよく使われる企業（カテゴリ代表）
 */
export const popularCompanies: CompanyImpact[] = [
  companyData.find((c) => c.id === "seven-and-i")!,
  companyData.find((c) => c.id === "aeon")!,
  companyData.find((c) => c.id === "ryohin-keikaku")!,
  companyData.find((c) => c.id === "suntory")!,
  companyData.find((c) => c.id === "kao")!,
  companyData.find((c) => c.id === "fast-retailing")!,
  companyData.find((c) => c.id === "mercari")!,
  companyData.find((c) => c.id === "yamato-hd")!,
  companyData.find((c) => c.id === "jccu")!,
  companyData.find((c) => c.id === "toyota")!,
].filter(Boolean) as CompanyImpact[];

/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 企業データ追加・更新ガイド
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 1. 追加する前に必ず確認すること
 *    - 公式HPのURLが実在することを確認する
 *    - サステナビリティページのURLをブラウザで開いて確認する
 *    - 活動内容は公式サイトや公開レポートに記載されている事実のみ記載する
 *    - 推測・憶測は一切記載しない
 *
 * 2. id の命名規則
 *    - ハイフン区切りの英小文字（例: "seven-and-i", "fast-retailing"）
 *    - 既存IDと重複しないこと
 *
 * 3. aliases に含めるもの
 *    - 正式名称の略称
 *    - 子会社・ブランド名（ユーザーが検索しそうなもの）
 *    - 英語名・ひらがな読み
 *
 * 4. confidenceLevel の目安
 *    - "high": 公式レポート・開示書類で詳細に確認できる
 *    - "medium": 公式HP・サステナビリティページで確認できる
 *    - "low": 公式HPのみ確認・詳細情報が限定的
 *
 * 5. negativeRisks の記載方針
 *    - 報道・公式情報で確認できる事実のみ記載する
 *    - スコアは減点しない（注意情報として表示するのみ）
 *    - 企業を断定的に批判する表現は避ける
 *
 * 6. lastUpdated を必ず記入する（YYYY-MM-DD 形式）
 *
 * 7. 更新後は tsc --noEmit でTypeScriptエラーがないことを確認する
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
