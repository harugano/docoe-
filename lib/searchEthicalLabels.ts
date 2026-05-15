import { EthicalLabel } from "@/lib/types";
import { ethicalLabels } from "@/lib/data/ethicalLabels";

/** IDでラベルを取得 */
export function findEthicalLabel(id: string): EthicalLabel | null {
  return ethicalLabels.find((l) => l.id === id) ?? null;
}

/** 複数IDからラベルを取得 */
export function findEthicalLabels(ids: string[]): EthicalLabel[] {
  return ids.map((id) => findEthicalLabel(id)).filter(Boolean) as EthicalLabel[];
}

/**
 * クエリ文字列からラベルを検索（labelName・aliases を対象）
 * 完全一致 > 前方一致 > 部分一致 の順に優先してソート
 */
export function searchEthicalLabels(query: string, limit = 10): EthicalLabel[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const scored = ethicalLabels.map((label) => {
    const texts = [label.labelName, ...label.aliases].map((s) => s.toLowerCase());
    const exact    = texts.some((t) => t === q);
    const starts   = texts.some((t) => t.startsWith(q));
    const contains = texts.some((t) => t.includes(q));
    const score = exact ? 3 : starts ? 2 : contains ? 1 : 0;
    return { label, score };
  });

  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.label);
}

/** カテゴリでフィルタ */
export function getLabelsByCategory(category: string): EthicalLabel[] {
  return ethicalLabels.filter((l) => l.category === category);
}

/**
 * ラベルIDリストの合計ポイントを計算
 * （未登録ラベルはスコア加算しない）
 */
export function calcLabelPoints(labelIds: string[]): number {
  return labelIds.reduce((sum, id) => {
    const label = findEthicalLabel(id);
    return sum + (label?.point ?? 0);
  }, 0);
}

/** 未登録ラベルの気づきスコア加算値（customLabels 1件あたり） */
export const CUSTOM_LABEL_AWARENESS_POINT = 1;
