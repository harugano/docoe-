import {
  CompanyImpact,
  PurchaseScoreBreakdown,
  ProductEthicalCategory,
  EthicalLabel,
} from "@/lib/types";
import { calcLabelPoints, CUSTOM_LABEL_AWARENESS_POINT } from "@/lib/searchEthicalLabels";

/** 金額ポイントの上限（将来的に変更しやすいよう定数化）。null = 上限なし */
export const AMOUNT_POINT_MAX: number | null = null;
/** 金額ポイントの単位（1000円につき +1） */
export const AMOUNT_POINT_PER_YEN = 1000;

export interface PurchaseScoreResult {
  total: number;
  breakdown: PurchaseScoreBreakdown;
  reasons: string[];
  hasRisk: boolean;
  riskNote: string;
  cautionNotes: string[];
  alternativeSuggestions: string[];
  sourceUrls: string[];
  labelDetails: Array<{ labelName: string; point: number; description: string; greenWashWarning?: boolean }>;
  customLabelCount: number;
}

/**
 * 購入スコア計算（フル版）
 *
 * @param company           企業インパクトデータ（null = 未登録企業）
 * @param amount            購入金額（円）
 * @param productCategory   商品エシカルカテゴリ（null = 未選択）
 * @param selectedLabels    選択済みエシカルラベル
 * @param customLabels      未登録の自由入力ラベル
 */
export function calcPurchaseScore(
  company: CompanyImpact | null,
  amount: number,
  productCategory: ProductEthicalCategory | null = null,
  selectedLabels: EthicalLabel[] = [],
  customLabels: string[] = []
): PurchaseScoreResult {
  const breakdown: PurchaseScoreBreakdown = {
    moneyScore: 0,
    ecoScore: 0,
    localScore: 0,
    awarenessScore: 0,
    ethicalScore: 0,
    labelScore: 0,
  };
  const reasons: string[] = [];
  const cautionNotes: string[] = [];
  const alternativeSuggestions: string[] = [];
  const sourceUrls: string[] = [];
  const labelDetails: PurchaseScoreResult["labelDetails"] = [];

  // ── 1. 購入記録そのもの ──
  breakdown.moneyScore += 1;
  reasons.push("購入を記録した (+1)");

  // ── 2. 金額ポイント（1000円につき +1） ──
  const rawAmountPoint = Math.floor(amount / AMOUNT_POINT_PER_YEN);
  const amountPoint =
    AMOUNT_POINT_MAX !== null
      ? Math.min(rawAmountPoint, AMOUNT_POINT_MAX)
      : rawAmountPoint;
  if (amountPoint > 0) {
    breakdown.moneyScore += amountPoint;
    reasons.push(`購入金額 ${amount.toLocaleString()}円（1000円ごとに +1）= +${amountPoint}pt`);
  }

  // ── 3. 企業スコア ──
  if (!company) {
    breakdown.awarenessScore += 2;
    reasons.push("お金の行き先に関心を持った (+2)");
  } else {
    // 企業データを確認した
    breakdown.awarenessScore += 2;
    reasons.push("企業情報を確認した (+2)");

    // 環境保全活動（企業ごとの評価スコアを反映、×2 で高低差を拡大）
    if (company.environmentalActions.length > 0) {
      const ecoAdd = company.ecoScore * 2;
      breakdown.ecoScore += ecoAdd;
      reasons.push(`企業の環境保全活動（評価スコア +${ecoAdd}）`);
    }

    // 社会貢献活動
    if (company.socialActions.length > 0) {
      breakdown.moneyScore += 3;
      reasons.push("企業の社会貢献活動が確認できる (+3)");
    }

    // 地域循環・地域貢献
    if (company.localContributionActions.length > 0) {
      breakdown.localScore += 2;
      reasons.push("企業の地域循環・地域貢献活動が確認できる (+2)");
    }

    // 情報透明性
    if (company.transparencyActions.length > 0) {
      breakdown.awarenessScore += 2;
      reasons.push("企業の情報透明性の取り組みが確認できる (+2)");
    }

    // サステナビリティページ
    if (company.sustainabilityUrl) {
      breakdown.awarenessScore += 2;
      reasons.push("企業のサステナビリティ情報が公開されている (+2)");
      sourceUrls.push(company.sustainabilityUrl);
    }

    // TNFDレポート
    if (company.tnfdReportUrl) {
      breakdown.ecoScore += 3;
      reasons.push("企業がTNFD等の自然関連情報開示をしている (+3)");
      sourceUrls.push(company.tnfdReportUrl);
    }

    // 統合報告書
    if (company.integratedReportUrl) {
      breakdown.awarenessScore += 1;
      reasons.push("企業の統合報告書が公開されている (+1)");
    }

    // 追加情報源
    if (company.otherSourceUrls.length > 0) {
      breakdown.awarenessScore += 1;
      reasons.push("企業の情報源URLが登録されている (+1)");
      company.otherSourceUrls.forEach((u) => sourceUrls.push(u));
    }

    // リスク注記
    if (company.negativeRisks.length > 0) {
      cautionNotes.push(company.cautionNote || company.negativeRisks.join("／"));
    }
  }

  // ── 4. 商品エシカルポイント（商品カテゴリ） ──
  if (productCategory) {
    breakdown.ethicalScore += productCategory.point;
    const sign = productCategory.point >= 0 ? "+" : "";
    reasons.push(
      `商品カテゴリ「${productCategory.categoryName}」（${sign}${productCategory.point}pt）`
    );
    productCategory.sourceUrls.forEach((u) => sourceUrls.push(u));
    productCategory.alternativeSuggestions.forEach((s) => alternativeSuggestions.push(s));

    // マイナスカテゴリの場合は注意文
    if (productCategory.point < 0) {
      cautionNotes.push(
        `このカテゴリ（${productCategory.categoryName}）については、${productCategory.impactSummary}。` +
        "この評価は公開情報に基づく参考値であり、個別の商品・メーカーを断定するものではありません。"
      );
    }
  }

  // ── 5. ラベルポイント ──
  const usedLabelIds = new Set<string>();
  for (const label of selectedLabels) {
    if (usedLabelIds.has(label.id)) continue;
    usedLabelIds.add(label.id);

    breakdown.labelScore += label.point;
    labelDetails.push({
      labelName: label.labelName,
      point: label.point,
      description: label.description,
      greenWashWarning: label.greenWashWarning,
    });
    reasons.push(`ラベル「${label.labelName}」(+${label.point}pt)`);
    label.sourceUrls.forEach((u) => sourceUrls.push(u));

    if (label.greenWashWarning) {
      cautionNotes.push(
        `「${label.labelName}」は環境配慮を示す可能性がありますが、` +
        "第三者認証や具体的な根拠が確認できない場合があります。参考情報として扱ってください。"
      );
    }
  }

  // ── 6. 未登録ラベル（気づきスコア +1 each） ──
  if (customLabels.length > 0) {
    const awarenessAdd = customLabels.length * CUSTOM_LABEL_AWARENESS_POINT;
    breakdown.awarenessScore += awarenessAdd;
    reasons.push(
      `未登録ラベル ${customLabels.length}件を確認した行動として気づきスコア +${awarenessAdd}pt`
    );
  }

  // ── ラベルポイントの一部をエコスコア・気づきスコアにも配分 ──
  // （spec: ラベルポイント → エシカルポイント、エコスコア、気づきスコア）
  // labelScore はホーム画面で独立表示するため、エコと気づきへの追加配分は行わない。
  // spec の「反映先」は主にホーム画面の内訳表示の概念として解釈する。

  // ── 気づきスコア 一律 -3 調整（最小 0）──
  breakdown.awarenessScore = Math.max(0, breakdown.awarenessScore - 3);

  const hasRisk = cautionNotes.length > 0;
  const riskNote = cautionNotes[0] ?? "";

  const total =
    breakdown.moneyScore +
    breakdown.ecoScore +
    breakdown.localScore +
    breakdown.awarenessScore +
    breakdown.ethicalScore +
    breakdown.labelScore;

  return {
    total,
    breakdown,
    reasons,
    hasRisk,
    riskNote,
    cautionNotes,
    alternativeSuggestions,
    sourceUrls: [...new Set(sourceUrls)],
    labelDetails,
    customLabelCount: customLabels.length,
  };
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

export function verificationLevelJa(level: string): string {
  switch (level) {
    case "third_party_certification":
      return "第三者認証";
    case "public_standard":
      return "公的制度・標準";
    case "industry_standard":
      return "業界制度・標準";
    case "company_self_claim":
      return "企業自己申告";
    default:
      return "不明";
  }
}
