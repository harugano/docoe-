import { ProductEthicalCategory } from "@/lib/types";

/**
 * 商品カテゴリ別エシカルポイント
 *
 * 【重要】このデータは公開情報に基づく参考値です。
 * 個別の商品・企業を断定的に評価するものではありません。
 * 表示時は必ず「指摘されることがある」「可能性がある」等の表現を使用してください。
 */
export const productEthicalCategories: ProductEthicalCategory[] = [
  // ===== マイナス対象カテゴリ =====

  {
    id: "beef",
    categoryName: "牛肉・ビーフ製品",
    aliases: ["牛肉", "ビーフ", "和牛", "牛丼", "ステーキ", "ハンバーグ", "牛", "beef"],
    point: -7,
    pointType: "negative",
    impactSummary: "温室効果ガス排出量・土地利用・水使用量が大きい傾向があると指摘されることがあります",
    explanation:
      "牛肉の生産には、他の食品と比較して温室効果ガス（特にメタン）の排出量が大きい傾向があるとされています。また、飼料生産のための農地・水の使用、森林転換のリスクなども指摘されることがあります。これらは生産地域や飼育方法によって大きく異なります。",
    impactAreas: ["climate", "deforestation", "water", "biodiversity"],
    sourceUrls: [
      "https://www.fao.org/news/story/en/item/197623/icode/",
      "https://ourworldindata.org/food-choice-vs-eating-local",
    ],
    sourceMemo: "FAO・Our World in Data等の公開情報に基づく参考値",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "植物性たんぱく質（豆腐・豆類・大豆ミート）の選択",
      "鶏肉・魚などへの切り替え（環境負荷が比較的少ないとされる場合がある）",
      "国産・認証牧場の牛肉を選ぶ",
      "食べる量や頻度を意識する",
    ],
  },

  {
    id: "potato-chips",
    categoryName: "ポテトチップス",
    aliases: ["ポテトチップス", "ポテチ", "チップス", "chips"],
    point: -3,
    pointType: "negative",
    impactSummary: "包装廃棄物・加工食品に関する環境負荷が指摘されることがあります",
    explanation:
      "ポテトチップスなどの加工スナック食品では、包装廃棄物（アルミ・プラスチック複合素材等）、揚げ油の使用、パーム油等の原料調達課題などが指摘されることがあります。ただし製品・メーカーにより状況は異なります。",
    impactAreas: ["waste", "climate"],
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "量り売りや大袋サイズでゴミの削減を意識する",
      "リサイクル可能な包装の商品を選ぶ",
      "カットフルーツや野菜スティックなど包装が少ない間食を試す",
    ],
  },

  {
    id: "french-fries",
    categoryName: "フライドポテト",
    aliases: ["フライドポテト", "フライポテト", "フライ", "ポテトフライ"],
    point: -3,
    pointType: "negative",
    impactSummary: "揚げ油・外食チェーンのサプライチェーン等に関する環境負荷が指摘されることがあります",
    explanation:
      "外食チェーンのフライドポテトについては、使用する揚げ油（パーム油等）のサプライチェーン、廃油処理、使い捨て容器・包装に関する環境負荷が指摘されることがあります。ただし店舗・地域によって状況は異なります。",
    impactAreas: ["waste", "deforestation"],
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "持参容器対応の飲食店を選ぶ",
      "揚げ油を植物油（非パーム）に限定している店舗を選ぶ",
    ],
  },

  {
    id: "sweet-bread",
    categoryName: "菓子パン",
    aliases: ["菓子パン", "パン", "メロンパン", "クリームパン", "あんぱん", "デニッシュ"],
    point: -3,
    pointType: "negative",
    impactSummary: "包装廃棄物・パーム油・小麦サプライチェーン等に関する課題が指摘されることがあります",
    explanation:
      "菓子パンの製造には、パーム油・砂糖・小麦等のサプライチェーン課題、個包装による廃棄物の増加、食品ロスなどの課題が指摘されることがあります。個別商品によって状況は大きく異なります。",
    impactAreas: ["waste", "deforestation"],
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "地元ベーカリーや包装が少ないパンを選ぶ",
      "食べ切れる分だけ購入して食品ロスを減らす",
      "RSPO認証パーム油使用の商品を探す",
    ],
  },

  {
    id: "fast-fashion",
    categoryName: "ファストファッション",
    aliases: ["ファストファッション", "安価な衣類", "低価格ファッション", "量販アパレル"],
    point: -6,
    pointType: "negative",
    impactSummary: "大量生産・廃棄、労働環境・水使用等の課題が指摘されることがあります",
    explanation:
      "ファストファッションと呼ばれる低価格・短サイクル型の衣料品については、大量生産・大量廃棄、製造工程での水使用・化学物質排出、生産国での労働環境（低賃金・長時間労働）などが指摘されることがあります。ただし企業・ブランドによって取り組みには大きな差があります。",
    impactAreas: ["water", "labor", "human_rights", "waste"],
    sourceUrls: [
      "https://www.un.org/sustainabledevelopment/blog/2019/04/fashion-industry-zoom-in-on-the-sustainability-challenges/",
    ],
    sourceMemo: "国連サステナブル開発ページ等の公開情報に基づく",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "古着・リユース品を選ぶ",
      "修理・リペアして長く使う",
      "GOTS・オーガニックコットン認証の衣類を選ぶ",
      "レンタル・シェアリングサービスを利用する",
    ],
  },

  {
    id: "electronics-rare-metals",
    categoryName: "希少金属を多く使う電子機器",
    aliases: ["スマートフォン", "スマホ", "タブレット", "ノートPC", "電子機器", "ガジェット", "electronics"],
    point: -5,
    pointType: "negative",
    impactSummary: "鉱物採掘・紛争鉱物・廃電子機器（e-waste）等の課題が指摘されることがあります",
    explanation:
      "スマートフォン等の電子機器には、コバルト・タンタルなどの希少金属が使われており、採掘地域での人権・環境問題（紛争鉱物リスク含む）が指摘されることがあります。また廃電子機器（e-waste）の不適切処理による環境汚染も課題として挙げられます。メーカーによる対応状況は異なります。",
    impactAreas: ["resource_extraction", "human_rights", "waste"],
    sourceUrls: [
      "https://www.oecd.org/daf/inv/mne/mining.htm",
    ],
    sourceMemo: "OECD等の公開情報に基づく参考値",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "長期使用を前提とした機器を選ぶ",
      "中古・リファービッシュ品を選ぶ",
      "使用済み機器を適切にリサイクルする",
      "修理対応が充実したメーカーを選ぶ",
    ],
  },

  {
    id: "single-use-plastic",
    categoryName: "使い捨てプラスチック製品",
    aliases: [
      "使い捨てプラ", "ストロー", "ビニール袋", "レジ袋", "プラスチックカトラリー",
      "使い捨てカップ", "使い捨て", "ディスポーザブル",
    ],
    point: -4,
    pointType: "negative",
    impactSummary: "廃棄物・海洋プラスチック・化石資源消費等の課題が指摘されることがあります",
    explanation:
      "使い捨てプラスチック製品については、廃棄後の海洋流出・マイクロプラスチック問題、化石資源の消費、リサイクルの困難さなどが指摘されることがあります。日本でも「プラスチック資源循環促進法」等で規制強化が進んでいます。",
    impactAreas: ["waste", "climate", "biodiversity"],
    sourceUrls: [
      "https://www.env.go.jp/recycle/plastic/",
    ],
    sourceMemo: "環境省プラスチック資源循環ページ等に基づく",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "マイバッグ・マイボトル・マイカトラリーを持参する",
      "繰り返し使えるアイテムに切り替える",
      "バイオマスプラスチックや紙素材の代替品を選ぶ",
    ],
  },

  {
    id: "over-packaging",
    categoryName: "過剰包装の商品",
    aliases: ["過剰包装", "過包装", "二重包装", "個別包装", "プレゼント包装"],
    point: -3,
    pointType: "negative",
    impactSummary: "包装資源の過剰消費・廃棄物増加が指摘されることがあります",
    explanation:
      "必要以上の包装材を使用している商品については、包装に使われる資源（紙・プラスチック等）の過剰消費や廃棄物の増加が指摘されることがあります。簡易包装・ノーパッケージ商品への切り替えが環境負荷削減につながる可能性があります。",
    impactAreas: ["waste", "climate"],
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "簡易包装・エコ包装の商品を選ぶ",
      "ギフトの場合は風呂敷などの再利用できる包みを使う",
      "量り売りや包装なしの商品を探す",
    ],
  },

  {
    id: "palm-oil-products",
    categoryName: "パーム油含有加工食品",
    aliases: ["パーム油", "マーガリン", "ショートニング", "スナック菓子", "インスタント麺", "カップ麺"],
    point: -4,
    pointType: "negative",
    impactSummary: "パーム油のサプライチェーンに関する森林減少・生物多様性・労働課題が指摘されることがあります",
    explanation:
      "パーム油は多くの加工食品に含まれていますが、産地によっては熱帯雨林の伐採・生物多様性への影響・現地労働者の人権課題などが指摘されることがあります。RSPO認証など持続可能なパーム油の調達に取り組む商品・企業もあります。",
    impactAreas: ["deforestation", "biodiversity", "labor"],
    sourceUrls: [
      "https://www.rspo.org/",
    ],
    sourceMemo: "RSPO公式サイト等の公開情報に基づく",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "RSPO認証パーム油使用の商品を選ぶ",
      "パーム油を使用していない商品を探す",
      "原材料表示を確認する習慣をつける",
    ],
  },

  {
    id: "cheap-mass-goods",
    categoryName: "低価格大量生産型雑貨",
    aliases: [
      "百均", "100均", "100円ショップ", "格安雑貨", "使い捨て雑貨",
      "プチプラ雑貨", "量産雑貨",
    ],
    point: -3,
    pointType: "negative",
    impactSummary: "短期使用・大量廃棄・製造時の資源消費等の課題が指摘されることがあります",
    explanation:
      "低価格・大量生産型の雑貨については、短期間での廃棄による資源の無駄遣い、製造工程での資源消費・廃棄物、生産国での労働環境などが指摘されることがあります。ただし100円ショップ各社も環境取り組みを進めており、商品によって状況は異なります。",
    impactAreas: ["waste", "resource_extraction", "labor"],
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [
      "長期使用できる品質のものを選ぶ",
      "本当に必要なものだけ購入する",
      "リペアや代替品の活用を検討する",
    ],
  },

  // ===== プラス対象カテゴリ =====

  {
    id: "fair-trade-goods",
    categoryName: "フェアトレード商品",
    aliases: ["フェアトレード", "公正貿易", "fairtrade", "fair trade"],
    point: 6,
    pointType: "positive",
    impactSummary: "生産者への公正な対価と、社会・環境基準の遵守を目指した商品です",
    explanation:
      "フェアトレード認証を受けた商品は、生産者への公正な対価の支払い、労働・環境基準の遵守などが求められています。ただし認証の種類によって基準の厳格さは異なります。",
    impactAreas: ["human_rights", "labor", "local_economy"],
    sourceUrls: [
      "https://www.fairtrade-jp.org/",
    ],
    sourceMemo: "フェアトレード・ラベル・ジャパン公式サイト等",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "organic-goods",
    categoryName: "オーガニック商品",
    aliases: [
      "オーガニック", "有機", "有機農産物", "有機食品", "無農薬",
      "自然農法", "organic",
    ],
    point: 4,
    pointType: "positive",
    impactSummary: "化学農薬・化学肥料の使用を控えた農法で生産されたことが認証されている商品です",
    explanation:
      "有機JASなどの認証を受けたオーガニック商品は、化学農薬・化学肥料の使用を控えた農法で生産されています。ただし「オーガニック」表示でも認証の有無・基準は商品により異なります。",
    impactAreas: ["biodiversity", "water", "climate"],
    sourceUrls: [
      "https://www.maff.go.jp/j/jas/jas_kikaku/organic.html",
    ],
    sourceMemo: "農林水産省JAS規格等に基づく",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "fsc-paper-products",
    categoryName: "FSC認証紙・木材製品",
    aliases: ["FSC認証", "FSC紙", "FSC木材", "FSC", "森林認証"],
    point: 4,
    pointType: "positive",
    impactSummary: "適切に管理された森林由来の木材・紙製品であることを認証されています",
    explanation:
      "FSC（Forest Stewardship Council）認証は、適切に管理された森林から供給された木材・紙製品であることを示す国際的な森林認証制度です。森林の生物多様性・環境・地域社会への配慮が基準に含まれています。",
    impactAreas: ["deforestation", "biodiversity", "local_economy"],
    sourceUrls: [
      "https://jp.fsc.org/",
    ],
    sourceMemo: "FSCジャパン公式サイト等",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "msc-asc-seafood",
    categoryName: "MSC/ASC認証水産物",
    aliases: ["MSC認証", "ASC認証", "MSC", "ASC", "持続可能な漁業", "認証水産物"],
    point: 4,
    pointType: "positive",
    impactSummary: "持続可能な漁業・養殖業を認証された水産物です",
    explanation:
      "MSC（海洋管理協議会）認証は持続可能な漁業を、ASC（水産養殖管理協議会）認証は責任ある養殖業を認証しています。水産資源の持続可能な利用と海洋環境保全に貢献することが認証の基準に含まれています。",
    impactAreas: ["biodiversity", "water"],
    sourceUrls: [
      "https://www.msc.org/ja-jp",
      "https://www.asc-aqua.org/ja/",
    ],
    sourceMemo: "MSC・ASC公式サイト等",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "reuse-secondhand",
    categoryName: "リユース品・中古品",
    aliases: [
      "中古", "リユース", "古着", "フリマ", "リサイクルショップ",
      "セカンドハンド", "secondhand", "used",
    ],
    point: 7,
    pointType: "positive",
    impactSummary: "新品製造に伴う資源・エネルギー消費を抑えることができます",
    explanation:
      "リユース品・中古品を購入することで、新品の製造に必要な資源やエネルギーの消費を抑えることができます。サーキュラーエコノミー（循環型経済）の観点から、高く評価される選択です。",
    impactAreas: ["circularity", "waste", "climate"],
    sourceUrls: [],
    sourceMemo: "サーキュラーエコノミーの一般的な考え方に基づく",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "repair-service",
    categoryName: "修理品・リペアサービス",
    aliases: ["修理", "リペア", "修繕", "補修", "repair"],
    point: 6,
    pointType: "positive",
    impactSummary: "ものを長く使うことで廃棄物・資源消費の削減に貢献します",
    explanation:
      "修理・リペアサービスを利用することで、既存のものを長く使い続けることができます。廃棄物の削減、新品製造に必要な資源・エネルギーの節約につながります。「修理する権利（Right to Repair）」運動とも関連するテーマです。",
    impactAreas: ["circularity", "waste"],
    sourceUrls: [],
    sourceMemo: "サーキュラーエコノミーの一般的な考え方に基づく",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "local-product",
    categoryName: "地元産品・地産地消",
    aliases: [
      "地産地消", "地元産", "国産", "ご当地", "地域産品",
      "地元農家", "直売所", "産地直送",
    ],
    point: 4,
    pointType: "positive",
    impactSummary: "輸送距離の短縮・地域経済への貢献が期待できます",
    explanation:
      "地元や国内産の農産物・食品を選ぶことで、輸送に伴うCO₂排出の削減（フードマイレージの低減）や地域農業・経済への貢献が期待できます。ただし地産地消が必ずしもすべての観点で最善とは限らず、生産方法等も重要です。",
    impactAreas: ["climate", "local_economy"],
    sourceUrls: [],
    sourceMemo: "農林水産省等の公開情報に基づく参考値",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "bulk-reduced-packaging",
    categoryName: "量り売り・包装削減商品",
    aliases: ["量り売り", "バラ売り", "包装なし", "ノーパッケージ", "包装削減"],
    point: 5,
    pointType: "positive",
    impactSummary: "包装廃棄物の削減に直接貢献します",
    explanation:
      "量り売りや包装を削減した商品は、購入時の包装廃棄物を大幅に削減できます。欧州を中心に広がっているパッケージフリー・ゼロウェイストのムーブメントとも関連しています。",
    impactAreas: ["waste", "circularity"],
    sourceUrls: [],
    sourceMemo: "公開情報に基づく参考値",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "refill-product",
    categoryName: "詰め替え商品",
    aliases: ["詰め替え", "詰替", "リフィル", "refill"],
    point: 3,
    pointType: "positive",
    impactSummary: "容器の廃棄量を減らせる商品です",
    explanation:
      "シャンプー・洗剤等の詰め替え商品を選ぶことで、容器（ボトル等）の廃棄量を減らすことができます。プラスチック削減の取り組みとして多くの企業で採用されています。",
    impactAreas: ["waste", "circularity"],
    sourceUrls: [],
    sourceMemo: "公開情報に基づく参考値",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },

  {
    id: "food-loss-reduction",
    categoryName: "フードロス削減商品",
    aliases: [
      "フードロス", "食品ロス", "てまえどり", "見切り品", "賞味期限間近",
      "アウトレット食品", "food loss",
    ],
    point: 5,
    pointType: "positive",
    impactSummary: "食品廃棄の削減と食品の有効活用に貢献します",
    explanation:
      "賞味期限間近の商品や食品ロス削減を目的とした商品を選ぶことは、廃棄される食品を減らし、食品製造に使われた資源・エネルギーを無駄にしないことにつながります。日本の食品ロスは年間約600万トン（農林水産省等推計）とされています。",
    impactAreas: ["waste", "climate"],
    sourceUrls: [
      "https://www.maff.go.jp/j/shokusan/recycle/syoku_loss/index.html",
    ],
    sourceMemo: "農林水産省食品ロスページ等に基づく",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
    alternativeSuggestions: [],
  },
];

/** IDでカテゴリを検索 */
export function findProductEthicalCategory(id: string): ProductEthicalCategory | null {
  return productEthicalCategories.find((c) => c.id === id) ?? null;
}

/** 商品名・カテゴリ名から類似カテゴリを検索 */
export function searchProductEthicalCategory(query: string): ProductEthicalCategory[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return productEthicalCategories.filter(
    (c) =>
      c.categoryName.toLowerCase().includes(q) ||
      c.aliases.some((a) => a.toLowerCase().includes(q))
  );
}
