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

  /** 環境保全取り組みの独自評価スコア（1〜5）。purchaseScore の eco 加算に使用 */
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
  | "circularity";

export type ProductEthicalCategory = {
  id: string;
  categoryName: string;
  aliases: string[];
  point: number;
  pointType: "positive" | "negative" | "neutral";
  impactSummary: string;
  explanation: string;
  impactAreas: ImpactArea[];
  sourceUrls: string[];
  sourceMemo: string;
  confidenceLevel: ConfidenceLevel;
  lastUpdated: string;
  alternativeSuggestions: string[];
};

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
