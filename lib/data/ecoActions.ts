import { EcoAction } from "@/lib/types";

export const ecoActions: EcoAction[] = [
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
    id: "less-food-waste",
    name: "食べ残しを減らした",
    category: "フードロス削減",
    point: 5,
    description: "料理を食べきる、適量注文するなど食品ロスを削減",
  },
  {
    id: "save-electricity",
    name: "節電した",
    category: "エネルギー",
    point: 4,
    description: "不要な電灯を消す・エアコンを適温にするなど節電",
  },
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
    id: "compost",
    name: "コンポストを使った",
    category: "有機循環",
    point: 8,
    description: "生ごみをコンポストで堆肥化し、土に還元",
  },
  {
    id: "food-loss-product",
    name: "フードロス削減商品を選んだ",
    category: "フードロス削減",
    point: 5,
    description: "賞味期限が近い商品や規格外農産物などを積極的に購入",
  },
];
