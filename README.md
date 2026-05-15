# docoe?（どこへ？）

> **なくなった先に、社会が見える。**

手元を離れたごみ・モノ・お金が「どこへ？」行くかを可視化し、社会・地域・自然への影響をスコア化するライフスタイルアプリ。

---

## 起動方法

```bash
cd docoe
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

---

## 実装内容

### 画面構成

| パス | 説明 |
|------|------|
| `/` | ホーム画面（月別スコア・グラフ・クイックアクション・家計簿サマリー） |
| `/record/waste` | ごみの行き先記録（種類選択→数量入力→結果表示） |
| `/record/eco` | エコ行動記録（複数選択→一括保存） |
| `/record/purchase` | 買い物記録（企業名検索→商品・金額入力→企業インパクト表示） |
| `/budget` | 家計簿トップ（収支サマリー・地域内循環率・応援支出・使い捨て・予算進捗） |
| `/budget/new` | 収支登録（docoe?分類・応援/使い捨てタグ・テンプレート入力） |
| `/budget/history` | 収支履歴（月・カテゴリ・docoe?分類でフィルタ） |
| `/budget/settings` | 予算・目標設定（カテゴリ別予算・docoe?独自目標） |
| `/history` | 月別スコア履歴（棒グラフ・折れ線・分野別） |
| `/about` | docoe? のコンセプト説明・ロードマップ |

---

## 家計簿機能（Phase 2）

docoe? の家計簿は「いくら使ったか」だけでなく  
**「そのお金がどこへ行ったか」** を記録・集計します。

### docoe? 独自分類

通常のカテゴリ（食費・交通費など）に加えて、お金の性質で分類できます。

| 分類 | キー | 説明 |
|------|------|------|
| 🏘️ 地域に残るお金 | `local_money` | 地元店舗・地域活動など |
| 🌐 地域外に出るお金 | `outside_money` | 大手チェーン・EC等 |
| 🌿 エコにつながるお金 | `eco_money` | 公共交通・マイボトル等 |
| ♻️ 使い捨てにつながるお金 | `disposable_money` | ペットボトル・コンビニ弁当等 |
| 🤝 応援のお金 | `support_money` | NPO寄付・クラファン等 |
| 💡 気づきのお金 | `awareness_money` | 意識的な選択として記録 |

複数選択可。集計・グラフに反映されます。

### 地域内循環率

```
地域内循環率 = 地域に残るお金の合計 ÷ 今月の支出合計 × 100
```

例）支出52,000円 / 地域消費8,500円 → 循環率16.3%

月別推移グラフで継続的に確認できます。

### 応援支出タグ・使い捨て支出タグ

docoe? 分類をさらに細分化するタグ機能。初期タグ＋自由入力で管理します。

**応援支出初期タグ:** NPO・寄付 / 地元店舗応援 / クラファン支援 / フードロス削減 / 障害者就労支援 / フェアトレード / 寄付付き商品 / 地域イベント / 環境保全

**使い捨て支出初期タグ:** ペットボトル / コンビニ弁当 / 使い捨て容器 / 個包装 / 紙コップ / プラスチックカトラリー / 使い捨てマスク / 使い捨て日用品 / 過剰包装

使い捨て支出の表示は責める表現を避け、「気づきの参考情報」として提示します。

### 支出テンプレート

コンビニ昼食・地元スーパー・公共交通・寄付など8種類の初期テンプレートを用意。  
選ぶだけでカテゴリ・docoe?分類・タグが自動入力されます（金額・日付は手入力）。  
将来的にユーザー定義テンプレートの追加・編集・削除に対応予定。

### 予算管理

カテゴリ別月予算＋地域消費・応援支出・エコ支出・使い捨て上限・スコア目標を設定できます。  
予算アラートはすべて前向きな表現で表示し、「使いすぎ」「節約」のような断定表現は使いません。

### 買い物記録との連携

`/record/purchase` で保存した買い物は、自動で家計簿「買い物（記録連携）」として保存されます。  
`linkedPurchaseRecordId` で紐付けられ、重複保存はありません。

### localStorage キー

| キー | 内容 |
|------|------|
| `docoe_transactions` | 家計簿取引（Transaction） |
| `docoe_budgets` | 月次予算設定（MonthlyBudget） |
| `docoe_budget_templates` | ユーザー定義テンプレート（BudgetTemplate） |

### スコア設計

- **加点方式のみ**（減点なし）
- **月単位管理**：今月の行動にフォーカス
- 5カテゴリ：お金のめぐり / ごみのめぐり / エコ / 地域循環 / 気づき

### データ永続化

- `localStorage` でレコードと履歴を管理
- 初回起動時にサンプル履歴データ（2025年12月〜2026年4月）を自動投入

---

## データ構造

### `WasteItem`（ごみ種類マスタ）

```ts
{
  id: string;
  name: string;
  category: string;
  unit: "kg" | "個";
  defaultPoint: number;
  estimatedCostPerUnit: number;   // 円/unit（正=収益、負=費用）
  costType: "plus" | "minus" | "neutral";
  destination: string;
  process: string;
  description: string;
}
```

### `EcoAction`（エコ行動マスタ）

```ts
{
  id: string;
  name: string;
  category: string;
  point: number;
  description: string;
}
```

### `UserRecord`（ユーザー記録）

```ts
{
  id: string;
  type: "waste" | "eco" | "purchase";
  itemId: string;
  quantity: number;
  point: number;
  scoreCategory: "waste" | "eco" | "local" | "awareness" | "money";
  memo: string;
  createdAt: string;  // ISO 8601
}
```

### `MonthlyScore`（月別スコア）

```ts
{
  month: string;         // "YYYY-MM"
  totalScore: number;
  moneyScore: number;    // お金のめぐりスコア（Phase 2 追加）
  wasteScore: number;
  ecoScore: number;
  localScore: number;
  awarenessScore: number;
}
```

### `CompanyImpact`（企業インパクトデータ）

```ts
{
  id: string;
  companyName: string;
  aliases: string[];
  websiteUrl: string;
  sustainabilityUrl: string;    // 空文字 = 未確認
  tnfdReportUrl: string;        // TNFD レポート URL
  integratedReportUrl: string;
  industry: string;
  environmentalActions: string[];
  socialActions: string[];
  localContributionActions: string[];
  negativeRisks: string[];      // リスク情報（スコア減点なし・警告のみ）
  dataSources: string[];
  lastUpdated: string;
  confidenceLevel: "high" | "medium" | "low";
}
```

### `PurchaseRecord`（買い物記録）

```ts
{
  id: string;
  companyId: string | null;
  companyName: string;
  productName: string;
  amount: number;
  category: string;
  memo: string;
  point: number;
  scoreBreakdown: PurchaseScoreBreakdown;
  createdAt: string;
}
```

---

## 技術構成

| 項目 | 採用技術 |
|------|---------|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS v4 |
| グラフ | Recharts |
| アイコン | lucide-react |
| データ永続化 | localStorage |
| 将来移行先 | Supabase（予定） |

---

## 買い物スコアの計算ロジック（`lib/purchaseScore.ts`）

加点のみ、マイナスなし。

| 条件 | 加点 | カテゴリ |
|------|------|----------|
| 記録するだけ | +1 | 気づき |
| 金額 〜9,999円 | +1 | 気づき |
| 金額 1万〜4万9千円 | +2 | 気づき |
| 金額 5万円以上 | +3 | 気づき |
| 企業データあり | +2 | 気づき |
| 環境取り組みあり | +3 | エコ |
| 社会的取り組みあり | +3 | お金 |
| 地域貢献あり | +2 | 地域 |
| サステナビリティURL確認済み | +2 | 気づき |
| TNFDレポートあり | +3 | エコ |
| 統合報告書あり | +1 | 気づき |
| データソース記載あり | +1 | 気づき |

リスク情報（`negativeRisks`）はスコアを下げず、警告として表示のみ。

## サンプル企業データ

`lib/data/companyData.ts` には**架空企業5社**が含まれています（実在企業のデータを避けるため）。

| 企業名 | 業種 |
|--------|------|
| グリーンリーフ食品株式会社 | 食品 |
| めぐり商店 | 小売 |
| リペアライフ株式会社 | 修理・サービス |
| ナチュラル文具株式会社 | 文具 |
| さとやま醸造所 | 酒造 |

実在企業を追加する際は公式情報（サステナビリティレポート・TNFDレポート等）を確認し、`confidenceLevel` を適切に設定してください。

## ロードマップ

- **Phase 1（現在）**: ごみ・エコ・買い物記録、月別スコア管理
- **Phase 2**: 実在企業データ追加、バーコード・レシート読み取り、自治体データ連携
- **Phase 3**: 思い出チャット（AI）、自治体向けダッシュボード、Supabase クラウド同期

## 今後の拡張案

- 自治体オープンデータとの連携（処理費用・リサイクル率の実値化）
- 思い出チャット機能（AI による再活用提案）
- 自治体向けダッシュボード
- ユーザー認証・クラウド同期（Supabase）

---

*スコアに表示される処理費用・リサイクル収益等の数値は公開データや推計値をもとにした参考値です。*
