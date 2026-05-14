export type CostType = "plus" | "minus" | "neutral";

export type ScoreCategory = "waste" | "eco" | "local" | "awareness" | "money";

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

export interface EcoAction {
  id: string;
  name: string;
  category: string;
  point: number;
  description: string;
}

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

export interface MonthlyScore {
  month: string; // "YYYY-MM"
  totalScore: number;
  moneyScore: number;
  wasteScore: number;
  ecoScore: number;
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

export interface PurchaseScoreBreakdown {
  moneyScore: number;
  ecoScore: number;
  localScore: number;
  awarenessScore: number;
}

export interface PurchaseRecord {
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
