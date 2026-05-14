import { CompanyImpact, PurchaseScoreBreakdown } from "@/lib/types";

export interface PurchaseScoreResult {
  total: number;
  breakdown: PurchaseScoreBreakdown;
  reasons: string[];
  hasRisk: boolean;
  riskNote: string;
}

export function calcPurchaseScore(
  company: CompanyImpact | null,
  amount: number
): PurchaseScoreResult {
  const breakdown: PurchaseScoreBreakdown = {
    moneyScore: 0,
    ecoScore: 0,
    localScore: 0,
    awarenessScore: 0,
  };
  const reasons: string[] = [];

  // 購入記録そのもの
  breakdown.moneyScore += 1;
  reasons.push("購入を記録した (+1)");

  // 金額による補助加点（最大+3）
  const amountBonus = amount >= 50000 ? 3 : amount >= 10000 ? 2 : amount >= 1000 ? 1 : 0;
  if (amountBonus > 0) {
    breakdown.awarenessScore += amountBonus;
    reasons.push(`購入金額 ${amount.toLocaleString()}円による加点 (+${amountBonus})`);
  }

  if (!company) {
    breakdown.awarenessScore += 2;
    reasons.push("お金の行き先に関心を持った (+2)");
    return buildResult(breakdown, reasons, false, "");
  }

  // 企業データを確認した
  breakdown.awarenessScore += 2;
  reasons.push("企業情報を確認した (+2)");

  // 環境保全活動
  if (company.environmentalActions.length > 0) {
    breakdown.ecoScore += 3;
    reasons.push("環境保全活動が確認できる (+3)");
  }

  // 社会貢献活動
  if (company.socialActions.length > 0) {
    breakdown.moneyScore += 3;
    reasons.push("社会貢献活動が確認できる (+3)");
  }

  // 地域循環・地域貢献
  if (company.localContributionActions.length > 0) {
    breakdown.localScore += 2;
    reasons.push("地域循環・地域貢献活動が確認できる (+2)");
  }

  // 情報透明性の取り組み
  if (company.transparencyActions.length > 0) {
    breakdown.awarenessScore += 2;
    reasons.push("情報透明性の取り組みが確認できる (+2)");
  }

  // サステナビリティページ
  if (company.sustainabilityUrl) {
    breakdown.awarenessScore += 2;
    reasons.push("サステナビリティ情報が公開されている (+2)");
  }

  // TNFDレポート / 自然関連開示
  if (company.tnfdReportUrl) {
    breakdown.ecoScore += 3;
    reasons.push("TNFD等の自然関連情報開示がある (+3)");
  }

  // 統合報告書
  if (company.integratedReportUrl) {
    breakdown.awarenessScore += 1;
    reasons.push("統合報告書が公開されている (+1)");
  }

  // 追加情報源
  if (company.otherSourceUrls.length > 0) {
    breakdown.awarenessScore += 1;
    reasons.push("情報源URLが登録されている (+1)");
  }

  const hasRisk = company.negativeRisks.length > 0;
  const riskNote = hasRisk
    ? company.cautionNote || company.negativeRisks.join("／")
    : "";

  return buildResult(breakdown, reasons, hasRisk, riskNote);
}

function buildResult(
  breakdown: PurchaseScoreBreakdown,
  reasons: string[],
  hasRisk: boolean,
  riskNote: string
): PurchaseScoreResult {
  const total =
    breakdown.moneyScore +
    breakdown.ecoScore +
    breakdown.localScore +
    breakdown.awarenessScore;
  return { total, breakdown, reasons, hasRisk, riskNote };
}

export function confidenceLabelJa(level: string): string {
  switch (level) {
    case "high":
      return "高（公式レポート・開示書類で確認）";
    case "medium":
      return "中（公式HP・サステナビリティページで確認）";
    default:
      return "低（情報限定・要確認）";
  }
}
