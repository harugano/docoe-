import { EcoAction } from "@/lib/types";

export const ecoActions: EcoAction[] = [
  // ── プラ削減 ──────────────────────────────────────────────
  {
    id: "my-bottle",
    name: "マイボトルを使った",
    category: "プラ削減",
    point: 3,
    description: "使い捨てペットボトルの代わりにマイボトルを使用",
  },
  {
    id: "my-bag",
    name: "マイバッグを使った",
    category: "プラ削減",
    point: 2,
    description: "レジ袋の代わりにマイバッグを持参",
  },
  {
    id: "my-cutlery",
    name: "マイ箸・スプーンを持参した",
    category: "プラ削減",
    point: 3,
    description: "使い捨てカトラリーの代わりに自分の箸・スプーンを持参",
  },
  {
    id: "my-cup",
    name: "マイカップ・マイ容器を使った",
    category: "プラ削減",
    point: 3,
    description: "テイクアウト時にマイカップやマイ容器を持参して利用",
  },
  {
    id: "refill-product",
    name: "詰め替え商品を買った",
    category: "プラ削減",
    point: 4,
    description: "シャンプー・洗剤などの詰め替え用を選び容器ごみを削減",
  },
  {
    id: "refuse-packaging",
    name: "過剰包装を断った",
    category: "プラ削減",
    point: 2,
    description: "袋不要・包装なし・ラッピング辞退などを積極的に選択",
  },

  // ── フードロス削減 ────────────────────────────────────────
  {
    id: "less-food-waste",
    name: "食べ残しを減らした",
    category: "フードロス削減",
    point: 5,
    description: "料理を食べきる、適量注文するなど食品ロスを削減",
  },
  {
    id: "food-loss-product",
    name: "フードロス削減商品を選んだ",
    category: "フードロス削減",
    point: 5,
    description: "賞味期限が近い商品や規格外農産物などを積極的に購入",
  },
  {
    id: "use-leftovers",
    name: "残り物・余り食材で料理した",
    category: "フードロス削減",
    point: 5,
    description: "余った食材や残り物を使い切る料理をして廃棄ゼロを実践",
  },
  {
    id: "fridge-check",
    name: "冷蔵庫の中を整理した",
    category: "フードロス削減",
    point: 3,
    description: "冷蔵庫を定期的に確認・整理し、食材の使い忘れを防止",
  },
  {
    id: "use-all-ingredients",
    name: "食材をすべて使い切った",
    category: "フードロス削減",
    point: 4,
    description: "皮・葉・茎なども含めて食材を余すところなく使い切った",
  },

  // ── エネルギー ────────────────────────────────────────────
  {
    id: "save-electricity",
    name: "節電した",
    category: "エネルギー",
    point: 4,
    description: "不要な電灯を消す・エアコンを適温にするなど節電",
  },
  {
    id: "unplug-appliances",
    name: "使わない家電のプラグを抜いた",
    category: "エネルギー",
    point: 3,
    description: "待機電力を減らすためにコンセントを抜いたり主電源を切った",
  },
  {
    id: "natural-light-ventilation",
    name: "自然光・自然の風を活用した",
    category: "エネルギー",
    point: 3,
    description: "照明を消して採光・開窓して冷房代わりに風を通す生活",
  },

  // ── 水・省資源 ────────────────────────────────────────────
  {
    id: "short-shower",
    name: "シャワー時間を短くした",
    category: "水・省資源",
    point: 3,
    description: "シャワーの時間を1〜2分短縮するだけで約12〜24Lの節水に",
  },
  {
    id: "reuse-bath-water",
    name: "お風呂の残り湯を再利用した",
    category: "水・省資源",
    point: 2,
    description: "残り湯を洗濯・掃除・植水などに再利用して水を有効活用",
  },
  {
    id: "eco-wash",
    name: "まとめ洗い・節水モードで洗濯した",
    category: "水・省資源",
    point: 2,
    description: "洗濯物をまとめて洗ったり節水コースを使って水と電力を節約",
  },

  // ── 移動 ──────────────────────────────────────────────────
  {
    id: "public-transport",
    name: "公共交通を使った",
    category: "移動",
    point: 5,
    description: "自動車の代わりに電車・バスを利用",
  },
  {
    id: "walk-cycle",
    name: "徒歩・自転車で移動した",
    category: "移動",
    point: 4,
    description: "近距離移動に徒歩や自転車を選択",
  },
  {
    id: "online-instead",
    name: "オンラインで代替した（会議・手続き等）",
    category: "移動",
    point: 4,
    description: "移動を伴う用事をオンライン会議・ネット手続きで代替してCO2削減",
  },
  {
    id: "carpool",
    name: "カーシェア・相乗りをした",
    category: "移動",
    point: 6,
    description: "1台の車を複数人でシェアすることで1人あたりの排出量を削減",
  },

  // ── 循環 ──────────────────────────────────────────────────
  {
    id: "reuse",
    name: "リユースした",
    category: "循環",
    point: 6,
    description: "不要になったものを別の用途に活用、または譲渡",
  },
  {
    id: "repair",
    name: "修理して使った",
    category: "循環",
    point: 8,
    description: "壊れたものを捨てず、修理して使い続けた",
  },
  {
    id: "secondhand-buy",
    name: "フリマ・リサイクルショップで買った",
    category: "循環",
    point: 5,
    description: "新品でなく中古品・リサイクル品を選ぶことで製造エネルギーを節約",
  },
  {
    id: "secondhand-sell",
    name: "不用品をフリマ・寄付で手放した",
    category: "循環",
    point: 5,
    description: "使わなくなったものを捨てずフリマや寄付でリユースの循環に乗せた",
  },
  {
    id: "library-rental",
    name: "図書館・レンタルを活用した",
    category: "循環",
    point: 3,
    description: "本・道具・衣装などを購入せず借りることで物の消費を抑えた",
  },

  // ── 有機循環 ──────────────────────────────────────────────
  {
    id: "compost",
    name: "コンポストを使った",
    category: "有機循環",
    point: 8,
    description: "生ごみをコンポストで堆肥化し、土に還元",
  },

  // ── 食・農 ────────────────────────────────────────────────
  {
    id: "local-seasonal-food",
    name: "地元・国産・旬の食材を選んだ",
    category: "食・農",
    point: 4,
    description: "輸送距離の短い地元・国産品や旬の食材を選んでフードマイレージを削減",
  },
  {
    id: "less-meat",
    name: "肉・乳製品を減らした食事をした",
    category: "食・農",
    point: 6,
    description: "畜産由来のCO2を減らす植物性中心の食事を1食以上実践（週1でも◎）",
  },

  // ── 学習・啓発 ───────────────────────────────────────────
  {
    id: "learn-share-eco",
    name: "環境テーマを学んだ・人に伝えた",
    category: "学習・啓発",
    point: 3,
    description: "気候変動・サステナビリティに関する記事・動画を読んだり、話題にした",
  },
];
