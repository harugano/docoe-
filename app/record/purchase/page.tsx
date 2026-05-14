"use client";

import { useState } from "react";
import { findCompany, searchCompanies, popularCompanies } from "@/lib/data/companyData";
import { CompanyImpact, PurchaseRecord } from "@/lib/types";
import { calcPurchaseScore, confidenceLabelJa } from "@/lib/purchaseScore";
import { addPurchase } from "@/lib/store";
import { ChevronLeft, Check, AlertTriangle, Search, ExternalLink } from "lucide-react";
import Link from "next/link";

type Step = "input" | "result";

const CATEGORIES = [
  "食品・飲料",
  "日用品・雑貨",
  "文具・事務用品",
  "衣類・ファッション",
  "家電・電子機器",
  "本・メディア",
  "美容・コスメ",
  "スポーツ・アウトドア",
  "インテリア・家具",
  "サービス・体験",
  "その他",
];

function ConfidenceBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    high:   "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    low:    "bg-gray-100 text-gray-500",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${styles[level] ?? styles.low}`}>
      {confidenceLabelJa(level)}
    </span>
  );
}

export default function PurchasePage() {
  const [step, setStep] = useState<Step>("input");
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [memo, setMemo] = useState("");
  const [suggestions, setSuggestions] = useState<CompanyImpact[]>([]);
  const [matchedCompany, setMatchedCompany] = useState<CompanyImpact | null>(null);
  const [saved, setSaved] = useState<PurchaseRecord | null>(null);

  function handleCompanyInput(val: string) {
    setCompanyName(val);
    setMatchedCompany(null);
    if (val.trim().length >= 1) {
      setSuggestions(searchCompanies(val, 5));
    } else {
      setSuggestions([]);
    }
  }

  function selectSuggestion(c: CompanyImpact) {
    setCompanyName(c.companyName);
    setMatchedCompany(c);
    setSuggestions([]);
  }

  function handleSave() {
    const amt = Number(amount) || 0;
    const company = matchedCompany ?? findCompany(companyName);
    const scoreResult = calcPurchaseScore(company, amt);

    const record: PurchaseRecord = {
      id: crypto.randomUUID(),
      companyId: company?.id ?? null,
      companyName: companyName.trim() || "（企業名未入力）",
      productName: productName.trim() || "（商品名未入力）",
      amount: amt,
      category,
      memo,
      point: scoreResult.total,
      scoreBreakdown: scoreResult.breakdown,
      createdAt: new Date().toISOString(),
    };
    addPurchase(record);
    setSaved(record);
    setStep("result");
  }

  const scoreResult =
    step === "result" && saved
      ? calcPurchaseScore(
          matchedCompany ?? findCompany(companyName),
          Number(amount) || 0
        )
      : null;

  const resolvedCompany = matchedCompany ?? findCompany(companyName);

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">買い物記録</h1>
          <p className="text-[10px] text-[#8aaa8a]">
            {step === "input" ? "お金の行き先を記録しましょう" : "インパクトを確認しました"}
          </p>
        </div>
      </header>

      {/* ---- Step 1: 入力 ---- */}
      {step === "input" && (
        <div className="space-y-3">
          {/* 企業名 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <label className="text-xs font-semibold text-[#4a5e4a] flex items-center gap-1">
              <Search size={12} /> 企業名
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => handleCompanyInput(e.target.value)}
              placeholder="例：グリーンリーフ食品、めぐり商店"
              className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors"
            />
            {/* サジェスト */}
            {suggestions.length > 0 && (
              <div className="border border-[#ede8dc] rounded-xl overflow-hidden">
                {suggestions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => selectSuggestion(c)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-[#f0f7f3] flex items-center justify-between border-b border-[#f0ece4] last:border-0"
                  >
                    <span className="font-medium text-[#1a4731]">{c.companyName}</span>
                    <span className="text-[10px] text-[#8aaa8a]">{c.industry}</span>
                  </button>
                ))}
              </div>
            )}
            {matchedCompany && (
              <div className="flex items-center gap-2 bg-[#f0f7f3] rounded-lg px-3 py-1.5">
                <Check size={13} className="text-[#2d6a4f]" />
                <span className="text-xs text-[#2d6a4f] font-medium">
                  企業データベースで確認できました
                </span>
              </div>
            )}
          </div>

          {/* 商品名 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <label className="text-xs font-semibold text-[#4a5e4a]">商品名</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="例：再生素材のノート"
              className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* 購入金額 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <label className="text-xs font-semibold text-[#4a5e4a]">購入金額（円）</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="flex-1 text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors"
              />
              <span className="text-sm text-[#8aaa8a]">円</span>
            </div>
            <p className="text-[10px] text-[#8aaa8a]">
              ※ 購入金額の大小より、企業の活動情報がスコアに影響します
            </p>
          </div>

          {/* カテゴリ */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <label className="text-xs font-semibold text-[#4a5e4a]">カテゴリ</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-sm text-[#1a4731] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* メモ */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <label className="text-xs font-semibold text-[#4a5e4a]">メモ（任意）</label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="気づいたことを書いてみましょう"
              rows={2}
              className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 resize-none outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm active:bg-[#1a4731] transition-colors"
          >
            記録する
          </button>

          {/* よく使われる企業 */}
          <div className="bg-[#ede8dc] rounded-2xl p-4">
            <p className="text-[10px] font-semibold text-[#4a5e4a] mb-2">
              よく使われる企業（タップで入力）
            </p>
            <div className="flex flex-wrap gap-1.5">
              {popularCompanies.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setCompanyName(c.companyName); setMatchedCompany(c); setSuggestions([]); }}
                  className="text-[11px] bg-white text-[#2d6a4f] border border-[#b7e4c7] px-2.5 py-1 rounded-full font-medium active:bg-[#f0f7f3] transition-colors"
                >
                  {c.companyName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---- Step 2: 結果 ---- */}
      {step === "result" && saved && scoreResult && (
        <div className="space-y-4">
          {/* 成功バナー */}
          <div
            className="rounded-3xl p-5 text-white shadow-md relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1a4731 0%, #4a90d9 100%)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="text-sm font-bold">記録しました！</span>
            </div>
            <p className="text-3xl font-black">
              +{scoreResult.total}
              <span className="text-base text-white/70 ml-1">pt</span>
            </p>
            <p className="text-[10px] text-white/70 mt-1">
              お金のめぐりスコア・エコ・地域循環・気づきに加算
            </p>
          </div>

          {/* 企業インパクト情報 */}
          {resolvedCompany ? (
            <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] text-[#8aaa8a] font-semibold">企業</p>
                  <p className="text-sm font-bold text-[#1a4731]">{resolvedCompany.companyName}</p>
                  <p className="text-[10px] text-[#8aaa8a]">{resolvedCompany.industry}</p>
                </div>
                <ConfidenceBadge level={resolvedCompany.confidenceLevel} />
              </div>

              {/* 環境保全 */}
              {resolvedCompany.environmentalActions.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🌿 環境保全（確認できる範囲）</p>
                  <ul className="space-y-0.5">
                    {resolvedCompany.environmentalActions.map((a, i) => (
                      <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                        <span className="text-[#52b788] flex-shrink-0">●</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 社会貢献 */}
              {resolvedCompany.socialActions.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🤝 社会貢献（確認できる範囲）</p>
                  <ul className="space-y-0.5">
                    {resolvedCompany.socialActions.map((a, i) => (
                      <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                        <span className="text-[#4a90d9] flex-shrink-0">●</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 地域貢献 */}
              {resolvedCompany.localContributionActions.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🏘️ 地域循環・地域貢献</p>
                  <ul className="space-y-0.5">
                    {resolvedCompany.localContributionActions.map((a, i) => (
                      <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                        <span className="text-[#c9a227] flex-shrink-0">●</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 情報透明性 */}
              {resolvedCompany.transparencyActions.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">📊 情報透明性の取り組み</p>
                  <ul className="space-y-0.5">
                    {resolvedCompany.transparencyActions.map((a, i) => (
                      <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                        <span className="text-[#8b5cf6] flex-shrink-0">●</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 情報源 */}
              {resolvedCompany.otherSourceUrls.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">📄 参考情報源</p>
                  {resolvedCompany.otherSourceUrls.map((url, i) => (
                    <p key={i} className="text-[10px] text-[#4a90d9] flex items-center gap-1 break-all">
                      <ExternalLink size={10} className="flex-shrink-0" />{url}
                    </p>
                  ))}
                </div>
              )}

              {/* データ根拠 */}
              {resolvedCompany.dataBasis && (
                <p className="text-[10px] text-[#8aaa8a]">
                  📝 {resolvedCompany.dataBasis}
                </p>
              )}

              {/* 注意情報 */}
              {scoreResult.hasRisk && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2">
                  <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-amber-700">注意情報あり</p>
                    <p className="text-[10px] text-amber-600 mt-0.5">{scoreResult.riskNote}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
              <p className="text-xs text-[#8aaa8a]">
                「{saved.companyName}」はデータベースに未登録の企業です。
                企業が登録されると詳細なインパクト情報が表示されます。
              </p>
              <button
                onClick={() => {
                  alert(`「${saved.companyName}」の調査リクエストを送りました！\nデータが揃い次第、登録されます。`);
                }}
                className="w-full py-2 rounded-xl border border-[#52b788] text-[#2d6a4f] text-xs font-semibold active:bg-[#f0f7f3] transition-colors"
              >
                📋 企業情報の調査をリクエストする
              </button>
            </div>
          )}

          {/* スコア内訳 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <p className="text-xs font-semibold text-[#4a5e4a]">スコア加算内訳</p>
            {scoreResult.reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#4a5e4a]">
                <Check size={11} className="text-[#52b788] flex-shrink-0" />
                {r}
              </div>
            ))}
            <div className="pt-2 border-t border-[#f0ece4]">
              <div className="grid grid-cols-4 gap-1 text-center">
                {[
                  { label: "お金", value: scoreResult.breakdown.moneyScore, color: "#4a90d9" },
                  { label: "エコ",   value: scoreResult.breakdown.ecoScore,   color: "#52b788" },
                  { label: "地域",  value: scoreResult.breakdown.localScore,  color: "#2d6a4f" },
                  { label: "気づき", value: scoreResult.breakdown.awarenessScore, color: "#c9a227" },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <p style={{ color }} className="text-sm font-bold">+{value}</p>
                    <p className="text-[9px] text-[#8aaa8a]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 注記 */}
          <div className="bg-[#ede8dc] rounded-2xl p-3 border border-[#d4cfc5]">
            <p className="text-[10px] text-[#6a7a6a] leading-relaxed">
              📌 このスコアは、公開情報や登録データに基づく<strong>参考値</strong>です。
              実際の社会的インパクトを完全に測定するものではありません。
              企業を一方的に評価・断定するものでもありません。
            </p>
          </div>

          {/* アクション */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setStep("input");
                setCompanyName(""); setProductName(""); setAmount(""); setMemo("");
                setMatchedCompany(null); setSaved(null); setSuggestions([]);
              }}
              className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm"
            >
              続けて記録
            </button>
            <Link
              href="/"
              className="flex-grow text-center py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm"
            >
              ホームへ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
