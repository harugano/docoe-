/**
 * ごみ種別データ
 *
 * ── スコア設計思想 ──────────────────────────────
 *
 * defaultPoint は「地域社会への経済的インパクト」をそのままスコアに反映。
 *
 *   plus（地域に収益）  : +2〜+5pt（地域利益率に応じて段階設定）
 *     ¥1〜2/単位  → +2pt
 *     ¥3〜6/単位  → +3pt
 *     ¥7〜14/単位 → +4pt
 *     ¥15+/単位   → +5pt
 *
 *   neutral（ほぼ中立）: +1pt
 *
 *   minus（処理コスト負担）: -1〜-3pt（コスト規模に応じて）
 *     -¥1〜9/単位   → -1pt
 *     -¥10〜49/単位 → -2pt
 *     -¥50+/単位    → -3pt
 *
 * このスコアが「正しく分別することの地域への貢献度」を可視化する。
 * マイナスは「この品目は地域コストが高い = だからこそ正しく分別して欲しい」という
 * 教育的メッセージを担う。
 *
 * 参考: 環境省「一般廃棄物処理実態調査」「廃棄物処理技術情報」
 *       各自治体のごみ処理コスト公開データ（参考値）
 */

import { WasteItem } from "@/lib/types";

export const wasteItems: WasteItem[] = [
  // ── プラス（地域に収益）────────────────────────

  {
    id: "small-appliances",
    name: "小型家電（スマートフォン・デジカメ等）",
    category: "小型家電",
    unit: "個",
    defaultPoint: 5,
    estimatedCostPerUnit: 30,
    costType: "plus",
    destination: "認定小型家電リサイクル業者（都市鉱山）",
    process: "回収後、金・銀・銅・レアメタル等を回収する都市鉱山として再資源化。スマートフォン1台に金0.03g程度含有",
    description: "小型家電は金・銀・レアメタルを含む都市鉱山。1kgあたり数十円〜数百円相当の有価金属が回収でき、地域の重要資源です（参考値）",
  },
  {
    id: "cardboard",
    name: "段ボール",
    category: "紙類",
    unit: "kg",
    defaultPoint: 4,
    estimatedCostPerUnit: 12,
    costType: "plus",
    destination: "古紙回収業者・製紙工場",
    process: "パルプに再溶解し、新しい段ボールや紙製品に。回収率は国内最高水準（約95%）",
    description: "段ボール古紙は市場価値が高く、1kgあたり約10〜15円程度の収益になる場合があります（参考値）",
  },
  {
    id: "paper",
    name: "古紙（新聞・雑誌）",
    category: "紙類",
    unit: "kg",
    defaultPoint: 4,
    estimatedCostPerUnit: 8,
    costType: "plus",
    destination: "古紙回収業者",
    process: "パルプに戻し、再生紙・段ボール・ティッシュ等に再資源化",
    description: "新聞紙・雑誌は1kgあたり数円〜10円程度の収益素材。時期・市況で変動します（参考値）",
  },
  {
    id: "milk-carton",
    name: "牛乳パック（紙パック）",
    category: "紙類",
    unit: "kg",
    defaultPoint: 3,
    estimatedCostPerUnit: 5,
    costType: "plus",
    destination: "古紙回収業者・製紙工場",
    process: "洗浄・乾燥後、古紙として製紙工場へ。トイレットペーパー・ティッシュ等に再生される",
    description: "牛乳パックは良質な繊維素材。1kgあたり約5円程度の価値があり、すすいで開いて乾かすことで高品質な古紙になります（参考値）",
  },
  {
    id: "cooking-oil",
    name: "廃食用油",
    category: "有機物",
    unit: "個",
    defaultPoint: 3,
    estimatedCostPerUnit: 5,
    costType: "plus",
    destination: "バイオディーゼル燃料製造業者・石けん製造",
    process: "バイオディーゼル燃料（BDF）や石けんの原料に再利用。廃食油1Lから約0.9LのBDFが製造可能",
    description: "廃食用油は貴重なバイオ燃料原料。適切に回収すれば下水汚染を防ぎ、地域の燃料資源にもなります（参考値）",
  },
  {
    id: "clothes",
    name: "衣類",
    category: "繊維類",
    unit: "個",
    defaultPoint: 3,
    estimatedCostPerUnit: 5,
    costType: "plus",
    destination: "古着業者・NPO・繊維リサイクル",
    process: "状態が良ければ古着として国内外で流通。それ以外は反毛・工業用ウエスに再生",
    description: "まだ着られる衣類は古着経済に貢献。リユースが最も環境負荷が低く、地域経済にもプラスです（参考値）",
  },
  {
    id: "miscellaneous-paper",
    name: "雑がみ（包装紙・紙袋・ティッシュ箱等）",
    category: "紙類",
    unit: "kg",
    defaultPoint: 2,
    estimatedCostPerUnit: 3,
    costType: "plus",
    destination: "古紙回収業者",
    process: "古紙として回収し、再生紙・梱包材等に再資源化。シュレッダー紙・メモ帳類は不可の地域が多い",
    description: "雑がみは1kgあたり数円程度の古紙価値があります。燃やせるごみに混ぜると焼却コスト増に。正しく分別することで資源になります（参考値）",
  },
  {
    id: "aluminum-can",
    name: "アルミ缶",
    category: "金属類",
    unit: "個",
    defaultPoint: 2,
    estimatedCostPerUnit: 2,
    costType: "plus",
    destination: "金属リサイクル業者",
    process: "溶解・精製され、新しいアルミ製品に再生。エネルギー節約効果が非常に高い（地金製造比95%削減）",
    description: "アルミは最も価値の高いリサイクル素材のひとつ。1缶あたり約1〜2円の経済価値があり、地域に収益をもたらします（参考値）",
  },
  {
    id: "steel-can",
    name: "スチール缶",
    category: "金属類",
    unit: "個",
    defaultPoint: 2,
    estimatedCostPerUnit: 1,
    costType: "plus",
    destination: "製鉄所・リサイクル業者",
    process: "磁選で効率的に回収し、電炉や高炉で再溶解。建材や缶に再資源化",
    description: "磁石で分別しやすく回収率が高い。アルミより価値は低めですが安定したリサイクル素材です（参考値）",
  },

  // ── 中立（ほぼコスト中立）─────────────────────

  {
    id: "pet-bottle",
    name: "ペットボトル",
    category: "プラスチック類",
    unit: "個",
    defaultPoint: 1,
    estimatedCostPerUnit: 0,
    costType: "neutral",
    destination: "リサイクル施設",
    process: "回収後、フレーク・ペレットに再資源化。繊維や新しいボトルへ（ボトルtoボトル）",
    description: "正しく分別すれば再生素材に。自治体によって処理コストが発生する場合もあります（参考値）",
  },
  {
    id: "garden-waste",
    name: "剪定枝・刈草（庭木ごみ）",
    category: "有機物",
    unit: "kg",
    defaultPoint: 1,
    estimatedCostPerUnit: 0,
    costType: "neutral",
    destination: "コンポスト施設・チップ化施設",
    process: "チップ化してバイオマス燃料・堆肥として再利用が可能。自治体により分別方法が異なる",
    description: "コンポストに出すと土に還る資源になります。燃やせるごみに混ぜると水分が多く焼却効率を下げるため、分別が重要です（参考値）",
  },

  // ── マイナス（処理コスト地域負担）────────────────

  {
    id: "soft-plastic",
    name: "軟質プラスチック（袋・フィルム・ラップ類）",
    category: "プラスチック類",
    unit: "kg",
    defaultPoint: -1,
    estimatedCostPerUnit: -10,
    costType: "minus",
    destination: "リサイクル施設・焼却施設",
    process: "マテリアルリサイクルが困難な種類が多く、多くはサーマルリサイクル（熱回収焼却）に回る",
    description: "袋・フィルム類は汚れが落ちにくく処理コストが発生しやすい素材。マイレデュース（使用量削減）が最も効果的です（参考値）",
  },
  {
    id: "plastic",
    name: "プラスチック容器（ハードプラ）",
    category: "プラスチック類",
    unit: "kg",
    defaultPoint: -1,
    estimatedCostPerUnit: -8,
    costType: "minus",
    destination: "リサイクル施設・焼却施設",
    process: "マテリアルリサイクルまたはサーマルリサイクル（熱エネルギー回収）。種類が多く処理が複雑",
    description: "リサイクルコストが収益を上回る場合が多い素材。汚れを落として分別することで再資源化率が上がります（参考値）",
  },
  {
    id: "glass-bottle",
    name: "ガラスびん",
    category: "ガラス類",
    unit: "個",
    defaultPoint: -2,
    estimatedCostPerUnit: -15,
    costType: "minus",
    destination: "ガラスリサイクル施設",
    process: "色分別したカレット（砕いたガラス）として再溶融。新しいびんや建材・路盤材に",
    description: "重くて輸送コストが高く、処理コストが発生する場合が多い。色別分別で価値が変わります（参考値）",
  },
  {
    id: "spray-can",
    name: "スプレー缶・カセットボンベ",
    category: "危険物",
    unit: "個",
    defaultPoint: -2,
    estimatedCostPerUnit: -15,
    costType: "minus",
    destination: "専門処理施設（ガス抜き・金属回収）",
    process: "ガスを完全に抜いた後、缶本体をスチール・アルミとして回収。ガスが残ると焼却炉爆発の危険があり特別処理が必要",
    description: "残留ガスによる処理コスト・危険性が高い品目。中身を使い切り、穴を開けず（自治体による）に分別することが重要です（参考値）",
  },
  {
    id: "food-waste",
    name: "生ごみ",
    category: "有機物",
    unit: "kg",
    defaultPoint: -2,
    estimatedCostPerUnit: -40,
    costType: "minus",
    destination: "焼却施設・堆肥化施設",
    process: "約80%が焼却処理。コンポスト施設では堆肥として農地に還元（理想的な循環）",
    description: "焼却コストは約3〜5万円/tと高額。コンポストや生ごみ減量で自治体コストを大幅に削減できます（参考値）",
  },
  {
    id: "futon",
    name: "布団・毛布・寝具類",
    category: "繊維類",
    unit: "個",
    defaultPoint: -2,
    estimatedCostPerUnit: -100,
    costType: "minus",
    destination: "焼却施設・粗大ごみ処理施設",
    process: "多くの自治体で粗大ごみ扱い。一部は反毛処理（綿に戻してリサイクル）されるが大半は焼却",
    description: "かさばって処理コストが高い品目。古布回収ボックスや自治体の繊維回収に出すと焼却コストを削減できます（参考値）",
  },
  {
    id: "battery",
    name: "乾電池",
    category: "有害廃棄物",
    unit: "個",
    defaultPoint: -2,
    estimatedCostPerUnit: -30,
    costType: "minus",
    destination: "専門処理施設（水銀・鉛の安全処理）",
    process: "回収後、有害物質（水銀・鉛等）を安全に分離・処理。一部金属は再資源化",
    description: "処理コストが特に高い有害廃棄物。1個あたり数十円の処理費用が発生します。絶対に燃やせないごみです（参考値）",
  },
  {
    id: "fluorescent-lamp",
    name: "蛍光灯・水銀含有電球",
    category: "有害廃棄物",
    unit: "個",
    defaultPoint: -3,
    estimatedCostPerUnit: -55,
    costType: "minus",
    destination: "水銀回収専門処理施設",
    process: "水銀含有のため専門施設で安全に分解・水銀回収。2023年の水俣条約以降、製造禁止方向だが廃棄物は長期間発生し続ける",
    description: "水銀含有のため処理コストが最も高い家庭廃棄物の一つ。1本あたり数十円の処理費用が発生。絶対に割らないよう注意が必要です（参考値）",
  },
  {
    id: "bulky-waste",
    name: "粗大ごみ（家具・大型家電等）",
    category: "粗大ごみ",
    unit: "個",
    defaultPoint: -3,
    estimatedCostPerUnit: -800,
    costType: "minus",
    destination: "粗大ごみ処理施設・金属リサイクル",
    process: "自治体の粗大ごみ処理施設で破砕・分別後、金属は再資源化、残りは焼却・埋立",
    description: "収集・処理コストが最も高い品目のひとつ。1件あたり数百〜数千円の処理費用が発生します。なるべく長く使い・リユースすることが重要です（参考値）",
  },
];
