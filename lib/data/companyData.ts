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
    dataBasis: "NEC公式サイト・サステナビリティページ（https://www.nec.com/ja/sustainability/）より参照",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-14",
  },
];

// ─────────────────────────────────────────────
// 全データをエクスポート（計50社）
// ─────────────────────────────────────────────
export const companyData: CompanyImpact[] = [
  ...convenienceAndRetail,   // 8社
  ...foodAndBeverage,        // 10社
  ...restaurant,             // 6社
  ...apparel,                // 7社
  ...itAndTelecom,           // 6社
  ...transportAndLogistics,  // 6社
  ...financial,              // 5社
  ...other,                  // 9社 (includes yoshinoya, kobayashi, pg, nec, jccu, toyota, panasonic, tepco, tokyogas)
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
