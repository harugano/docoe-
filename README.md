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
| `/` | ホーム画面（月別スコア・グラフ・クイックアクション） |
| `/record/waste` | ごみの行き先記録（種類選択→数量入力→結果表示） |
| `/record/eco` | エコ行動記録（複数選択→一括保存） |
| `/record/purchase` | 買い物記録（企業名検索→商品・金額入力→企業インパクト表示） |
| `/history` | 月別スコア履歴（棒グラフ・折れ線・分野別） |
| `/about` | docoe? のコンセプト説明・ロードマップ |

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
