export type CostType = "plus" | "minus" | "neutral";

export type ScoreCategory =
  | "waste"
  | "eco"
  | "local"
  | "awareness"
  | "money"
  | "ethical"   // 商品エシカルポイント（product ethical）
  | "label";    // ラベルポイント

// ---- ごみ記録 ----

export interface WasteItem {
  id: string;
  name: string;
  category: string;
  unit: "kg" | "個";
  defaultPoint: number;
  estimatedCostPerUnit: number;
  costType: CostType;
  destination: string;
  process: string;
  description: string;
}

// ---- エコアクション ----

export interface EcoAction {
  id: string;
  name: string;
  category: string;
  point: number;
  description: string;
}

// ---- 記録（汎用） ----

export type RecordType = "waste" | "eco" | "purchase";

export interface UserRecord {
  id: string;
  type: RecordType;
  itemId: string;
  quantity: number;
  point: number;
  scoreCategory: ScoreCategory;
  memo: string;
  createdAt: string;
}

// ---- 月次スコア（7カテゴリ） ----

export interface MonthlyScore {
  month: string;        // "YYYY-MM" または "YYYY-MM-DD"（日次集計用）
  totalScore: number;
  moneyScore: number;
  wasteScore: number;
  ecoScore: number;
  ethicalScore: number; // 商品エシカルポイント
  labelScore: number;   // 確認できるラベルポイント
  localScore: number;
  awarenessScore: number;
}

// ---- 企業インパクト ----

export type ConfidenceLevel = "high" | "medium" | "low";

export interface CompanyImpact {
  id: string;
  companyName: string;
  aliases: string[];
  industry: string;

  websiteUrl: string;
  sustainabilityUrl: string;
  integratedReportUrl: string;
  tnfdReportUrl: string;
  otherSourceUrls: string[];

  environmentalActions: string[];
  socialActions: string[];
  localContributionActions: string[];
  transparencyActions: string[];

  negativeRisks: string[];
  cautionNote: string;

  /** 環境保全取り組みの独自評価スコア（0〜10）。purchaseScore の eco 加算に使用 */
  ecoScore: number;

  dataBasis: string;
  confidenceLevel: ConfidenceLevel;
  lastUpdated: string;
}

// ---- 購入スコア内訳 ----

export interface PurchaseScoreBreakdown {
  moneyScore: number;
  ecoScore: number;
  localScore: number;
  awarenessScore: number;
  ethicalScore: number; // 商品カテゴリ別エシカルポイント
  labelScore: number;   // 確認できるラベルポイント
}

// ---- 購入記録 ----

export interface PurchaseRecord {
  id: string;
  companyId: string | null;
  companyName: string;
  productName: string;
  amount: number;
  category: string;              // 購入カテゴリ（食品・飲料 など）
  productEthicalCategoryId: string | null;  // 商品エシカルカテゴリID
  selectedLabelIds: string[];    // 選択したラベルID一覧
  customLabels: string[];        // 未登録の自由入力ラベル
  memo: string;
  point: number;
  scoreBreakdown: PurchaseScoreBreakdown;
  createdAt: string;
}

// ---- 商品カテゴリ別エシカルポイント ----

export type ImpactArea =
  | "climate"
  | "biodiversity"
  | "deforestation"
  | "water"
  | "waste"
  | "animal_welfare"
  | "human_rights"
  | "labor"
  | "local_economy"
  | "resource_extraction"
  | "circularity"
  | "plastic_pollution"
  | "food_loss"
  | "chemical_pollution"
  | "overconsumption"
  | "e_waste";

/**
 * 商品エシカルカテゴリ（マイナスまたは 0 のみ）
 * 加点カテゴリは設けない。
 */
export type ProductEthicalCategory = {
  id: string;
  categoryName: string;
  /** キーワードマッチ用（商品名の部分一致に使用） */
  keywords: string[];
  /** 読み替え・別名（検索補助） */
  aliases: string[];
  /** 0 または -1〜-10 */
  point: number;
  severity: "low" | "medium" | "high" | "very_high";
  impactSummary: string;
  explanation: string;
  impactAreas: ImpactArea[];
  sourceUrls: string[];
  sourceMemo: string;
  confidenceLevel: ConfidenceLevel;
  lastUpdated: string;
  alternativeSuggestions: string[];
};

// ---- 家計簿：取引記録 ----

export type TransactionType = "income" | "expense";

export type PaymentMethod =
  | "cash"
  | "credit_card"
  | "debit_card"
  | "qr_payment"
  | "bank_transfer"
  | "transport_ic"
  | "other";

/** docoe? 独自分類 */
export type DocoeCategory =
  | "local_money"      // 地域に残るお金
  | "outside_money"    // 地域外に出るお金
  | "eco_money"        // エコにつながるお金
  | "disposable_money" // 使い捨てにつながるお金
  | "support_money"    // 応援のお金
  | "awareness_money"  // 気づきのお金
  | "other";

export const DOCOE_CATEGORY_LABELS: Record<DocoeCategory, string> = {
  local_money:      "地域に残るお金",
  outside_money:    "地域外に出るお金",
  eco_money:        "エコにつながるお金",
  disposable_money: "使い捨てにつながるお金",
  support_money:    "応援のお金",
  awareness_money:  "気づきのお金",
  other:            "その他",
};

export const DOCOE_CATEGORIES: DocoeCategory[] = [
  "local_money", "outside_money", "eco_money",
  "disposable_money", "support_money", "awareness_money", "other",
];

export const INCOME_CATEGORIES = [
  "給与・賞与",
  "副業・フリーランス",
  "投資・配当",
  "贈与・臨時収入",
  "その他収入",
] as const;

export const EXPENSE_CATEGORIES = [
  "食費",
  "日用品・雑貨",
  "外食・カフェ",
  "交通費",
  "衣類・ファッション",
  "医療・健康",
  "娯楽・趣味",
  "通信費",
  "水道光熱費",
  "住居費",
  "教育・学習",
  "保険",
  "貯蓄・投資",
  "寄付",
  "買い物（記録連携）",
  "その他支出",
] as const;

/** 予算設定用カテゴリ（ユーザーが月予算を設定する対象） */
export const BUDGET_CATEGORIES = [
  "食費", "日用品・雑貨", "外食・カフェ", "交通費", "衣類・ファッション",
  "医療・健康", "娯楽・趣味", "通信費", "水道光熱費", "住居費",
  "教育・学習", "保険", "寄付", "地域消費", "その他支出",
] as const;

export type IncomeCategory  = (typeof INCOME_CATEGORIES)[number];
export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

/** 応援支出の初期タグ */
export const DEFAULT_SUPPORT_TAGS = [
  "NPO・寄付", "地元店舗応援", "クラファン支援", "フードロス削減",
  "障害者就労支援", "フェアトレード", "寄付付き商品", "地域イベント", "環境保全",
];

/** 使い捨て支出の初期タグ */
export const DEFAULT_DISPOSABLE_TAGS = [
  "ペットボトル", "コンビニ弁当", "使い捨て容器", "個包装",
  "紙コップ", "プラスチックカトラリー", "使い捨てマスク", "使い捨て日用品", "過剰包装",
];

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;                    // "YYYY-MM-DD"
  category: string;
  storeName?: string;
  companyName?: string;
  productName?: string;
  paymentMethod?: PaymentMethod;
  memo?: string;
  /** docoe? 独自分類（複数選択可） */
  docoeCategories: DocoeCategory[];
  /** 応援支出タグ */
  supportTags: string[];
  /** 使い捨て支出タグ */
  disposableTags: string[];
  /** 買い物記録と連携した場合の PurchaseRecord.id */
  linkedPurchaseRecordId?: string;
  /** docoe? スコアを反映するか */
  includeInDocoeScore: boolean;
  docoeScoreBreakdown?: {
    companyPoint:         number;
    productEthicalPoint:  number;
    amountPoint:          number;
    labelPoint:           number;
    totalPoint:           number;
  };
  createdAt: string;
  updatedAt: string;
}

/** 支出テンプレート */
export interface BudgetTemplate {
  id: string;
  name: string;
  type: TransactionType;
  category: string;
  docoeCategories: DocoeCategory[];
  supportTags: string[];
  disposableTags: string[];
  paymentMethod?: PaymentMethod;
  storeName?: string;
  memo?: string;
  /** true = 初期テンプレート（削除不可） */
  isDefault: boolean;
  createdAt: string;
}

/** 月次予算 */
export interface MonthlyBudget {
  id: string;
  month: string;   // "YYYY-MM"
  categoryBudgets: {
    category: string;
    budgetAmount: number;
  }[];
  docoeGoals: {
    localSpendingTarget?:      number;
    supportSpendingTarget?:    number;
    ecoSpendingTarget?:        number;
    disposableSpendingLimit?:  number;
    docoeScoreTarget?:         number;
  };
  createdAt: string;
  updatedAt: string;
}

// ---- エシカルラベル ----

export type LabelCategory =
  | "fair_trade"
  | "organic"
  | "forest"
  | "marine"
  | "animal_welfare"
  | "climate"
  | "recycle"
  | "plastic_reduction"
  | "energy"
  | "local"
  | "labor_human_rights"
  | "food_loss"
  | "biodiversity"
  | "certified_b_corp"
  | "welfare"
  | "other";

export type VerificationLevel =
  | "third_party_certification"
  | "public_standard"
  | "industry_standard"
  | "company_self_claim"
  | "unknown";

export type EthicalLabel = {
  id: string;
  labelName: string;
  aliases: string[];
  point: number;
  category: LabelCategory;
  description: string;
  sourceUrls: string[];
  sourceMemo: string;
  verificationLevel: VerificationLevel;
  confidenceLevel: ConfidenceLevel;
  lastUpdated: string;
  greenWashWarning?: boolean; // 曖昧表示の注意フラグ
};
