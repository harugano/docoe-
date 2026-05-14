/**
 * ごみ種別データ
 *
 * estimatedCostPerUnit: 地域社会視点での1単位あたりの推定経済効果（円）
 *   正値 → 地域にとって収益（リサイクル素材価値等）
 *   負値 → 地域・自治体の処理コスト負担
 *
 * スコア設計根拠:
 *   - 実際の廃棄物処理コスト・リサイクル市況データを参考に算定
 *   - 正しく分別・排出することの社会的意義を点数に反映
 *   - 処理コストが高いほど「知ること」の重要度が増す → 高スコア
 *
 * 参考: 環境省「一般廃棄物処理実態調査」「廃棄物処理技術情報」
 *       各自治体のごみ処理コスト公開データ（参考値）
 */

import { WasteItem } from "@/lib/types";

export const wasteItems: WasteItem[] = [
  {
    id: "aluminum-can",
    name: "アルミ缶",
    category: "金属類",
    unit: "個",
    defaultPoint: 5,
    estimatedCostPerUnit: 2,
    costType: "plus",
    destination: "金属リサイクル業者",
    process: "溶解・精製され、新しいアルミ製品に再生。エネルギー節約効果が非常に高い（地金製造比95%削減）",
    description: "アルミは最も価値の高いリサイクル素材のひとつ。1缶あたり約1〜2円の経済価値があり、地域に収益をもたらします（参考値）",
  },
  {
    id: "cardboard",
    name: "段ボール",
    category: "紙類",
    unit: "kg",
    defaultPoint: 5,
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
    description: "新聞紙・雑誌は1kgあたり数円程度の収益素材。ただし種類や時期によって市況が変化します（参考値）",
  },
  {
    id: "steel-can",
    name: "スチール缶",
    category: "金属類",
    unit: "個",
    defaultPoint: 3,
    estimatedCostPerUnit: 1,
    costType: "plus",
    destination: "製鉄所・リサイクル業者",
    process: "磁選で効率的に回収し、電炉や高炉で再溶解。建材や缶に再資源化",
    description: "磁石で分別しやすく回収率が高い。アルミより価値は低めですが安定したリサイクル素材です（参考値）",
  },
  {
    id: "clothes",
    name: "衣類",
    category: "繊維類",
    unit: "個",
    defaultPoint: 5,
    estimatedCostPerUnit: 5,
    costType: "plus",
    destination: "古着業者・NPO・繊維リサイクル",
    process: "状態が良ければ古着として国内外で流通。それ以外は反毛・工業用ウエスに再生",
    description: "まだ着られる衣類は古着経済に貢献。リユースが最も環境負荷が低く、地域経済にもプラスです（参考値）",
  },
  {
    id: "pet-bottle",
    name: "ペットボトル",
    category: "プラスチック類",
    unit: "個",
    defaultPoint: 3,
    estimatedCostPerUnit: 0,
    costType: "neutral",
    destination: "リサイクル施設",
    process: "回収後、フレーク・ペレットに再資源化。繊維や新しいボトルへ（ボトルtoボトル）",
    description: "正しく分別すれば再生素材に。自治体によって処理コストが発生する場合もあります（参考値）",
  },
  {
    id: "plastic",
    name: "プラスチック容器",
    category: "プラスチック類",
    unit: "kg",
    defaultPoint: 3,
    estimatedCostPerUnit: -8,
    costType: "minus",
    destination: "リサイクル施設・焼却施設",
    process: "マテリアルリサイクルまたはサーマルリサイクル（熱エネルギー回収）。種類が多く処理が複雑",
    description: "リサイクルコストが収益を上回る場合が多い素材。汚れを落として分別することが重要です（参考値）",
  },
  {
    id: "glass-bottle",
    name: "ガラスびん",
    category: "ガラス類",
    unit: "個",
    defaultPoint: 2,
    estimatedCostPerUnit: -15,
    costType: "minus",
    destination: "ガラスリサイクル施設",
    process: "色分別したカレット（砕いたガラス）として再溶融。新しいびんや建材・路盤材に",
    description: "重くて輸送コストが高く、処理コストが発生する場合が多い。色別分別で価値が変わります（参考値）",
  },
  {
    id: "food-waste",
    name: "生ごみ",
    category: "有機物",
    unit: "kg",
    defaultPoint: 2,
    estimatedCostPerUnit: -40,
    costType: "minus",
    destination: "焼却施設・堆肥化施設",
    process: "約80%が焼却処理。コンポスト施設では堆肥として農地に還元（理想的な循環）",
    description: "焼却コストは約3〜5万円/tと高額。コンポストや生ごみ減量で自治体コストを大幅に削減できます（参考値）",
  },
  {
    id: "battery",
    name: "乾電池",
    category: "有害廃棄物",
    unit: "個",
    defaultPoint: 6,
    estimatedCostPerUnit: -30,
    costType: "minus",
    destination: "専門処理施設（水銀・鉛の安全処理）",
    process: "回収後、有害物質（水銀・鉛等）を安全に分離・処理。一部金属は再資源化",
    description: "処理コストが特に高い有害廃棄物。1個あたり数十円の処理費用が発生します。絶対に燃やせないごみです（参考値）",
  },
];
