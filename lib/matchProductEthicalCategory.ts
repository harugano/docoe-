import { ProductEthicalCategory } from "@/lib/types";
import { productEthicalCategories } from "@/lib/data/productEthicalCategories";

/** カタカナ → ひらがな変換 */
function kanaToHira(str: string): string {
  return str.replace(/[ァ-ヶ]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
}

/** 全角英数字・記号 → 半角変換 */
function fullToHalf(str: string): string {
  return str.replace(/[！-～]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
  );
}

/** テキスト正規化：全角→半角 → カタカナ→ひらがな → 小文字化 */
function normalize(text: string): string {
  return kanaToHira(fullToHalf(text)).toLowerCase();
}

export interface MatchResult {
  /** 最もマイナスポイントが大きいカテゴリ（マッチなし = null） */
  primaryCategory: ProductEthicalCategory | null;
  /** マッチしたすべてのカテゴリ */
  matchedCategories: ProductEthicalCategory[];
  /** マッチしたキーワード一覧（重複除去済み） */
  matchedKeywords: string[];
}

/**
 * 商品名からエシカルカテゴリを自動判定する。
 *
 * - テキスト正規化（全角→半角、カタカナ→ひらがな、小文字化）後、
 *   各カテゴリの `keywords` および `aliases` に部分一致検索を行う。
 * - 複数マッチした場合は `point` が最小（最もマイナス）のカテゴリを
 *   `primaryCategory` とする。
 * - API 不使用・完全ルールベース。
 */
export function matchProductEthicalCategory(productName: string): MatchResult {
  if (!productName.trim()) {
    return { primaryCategory: null, matchedCategories: [], matchedKeywords: [] };
  }

  const normalized = normalize(productName);
  const matchedCategories: ProductEthicalCategory[] = [];
  const matchedKeywords: string[] = [];

  for (const cat of productEthicalCategories) {
    const allWords = [...cat.keywords, ...cat.aliases];
    const hits = allWords.filter((kw) => normalized.includes(normalize(kw)));
    if (hits.length > 0) {
      matchedCategories.push(cat);
      for (const kw of hits) {
        if (!matchedKeywords.includes(kw)) matchedKeywords.push(kw);
      }
    }
  }

  if (matchedCategories.length === 0) {
    return { primaryCategory: null, matchedCategories: [], matchedKeywords: [] };
  }

  // point が最小（最もマイナス）のカテゴリを優先選択
  const primaryCategory = matchedCategories.reduce((best, cur) =>
    cur.point < best.point ? cur : best
  );

  return { primaryCategory, matchedCategories, matchedKeywords };
}
