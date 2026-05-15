"use client";

import { useState, useMemo } from "react";
import { findCompany, searchCompanies, popularCompanies } from "@/lib/data/companyData";
import { ethicalLabels, labelCategoryLabels } from "@/lib/data/ethicalLabels";
import { searchEthicalLabels } from "@/lib/searchEthicalLabels";
import { matchProductEthicalCategory, MatchResult } from "@/lib/matchProductEthicalCategory";
import { CompanyImpact, PurchaseRecord, EthicalLabel } from "@/lib/types";
import { calcPurchaseScore, confidenceLabelJa, verificationLevelJa } from "@/lib/purchaseScore";
import { addPurchase, localISOString } from "@/lib/store";
import { addTransaction } from "@/lib/budgetStore";
import { Transaction } from "@/lib/types";
import {
  ChevronLeft, Check, AlertTriangle, Search,
  ExternalLink, ChevronDown, ChevronUp, Tag, X, HelpCircle,
} from "lucide-react";
import Link from "next/link";

// ===== 購入カテゴリ =====
const BUY_CATEGORIES = [
  "食品・飲料", "日用品・雑貨", "文具・事務用品", "衣類・ファッション",
  "家電・電子機器", "本・メディア", "美容・コスメ", "スポーツ・アウトドア",
  "インテリア・家具", "サービス・体験", "その他",
];

// ===== 信頼度バッジ =====
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

// ===== ポイント符号付き表示 =====
function pts(n: number) {
  return n >= 0 ? `+${n}` : `${n}`;
}

type Step = "input" | "result";

export default function PurchasePage() {
  const [step, setStep] = useState<Step>("input");

  // 企業
  const [companyName, setCompanyName]       = useState("");
  const [companyQuery, setCompanyQuery]     = useState("");
  const [matchedCompany, setMatchedCompany] = useState<CompanyImpact | null>(null);
  const [suggestions, setSuggestions]       = useState<CompanyImpact[]>([]);

  // 商品
  const [productName, setProductName] = useState("");
  const [amount, setAmount]           = useState("");
  const [buyCategory, setBuyCategory] = useState(BUY_CATEGORIES[0]);
  const [memo, setMemo]               = useState("");

  // ラベル
  const [labelQuery, setLabelQuery]             = useState("");
  const [selectedLabels, setSelectedLabels]     = useState<EthicalLabel[]>([]);
  const [customLabelInput, setCustomLabelInput] = useState("");
  const [customLabels, setCustomLabels]         = useState<string[]>([]);
  const [showLabelPanel, setShowLabelPanel]     = useState(false);
  const [activeLabelCat, setActiveLabelCat]     = useState<string>("all");

  // 自動判定結果（保存後）
  const [matchResult, setMatchResult]   = useState<MatchResult | null>(null);
  const [corrected, setCorrected]       = useState(false);

  // 結果
  const [saved, setSaved] = useState<PurchaseRecord | null>(null);

  // ===== 企業検索 =====
  function handleCompanyInput(val: string) {
    setCompanyQuery(val);
    setCompanyName(val);
    setMatchedCompany(null);
    setSuggestions(val.trim().length >= 1 ? searchCompanies(val, 5) : []);
  }
  function selectSuggestion(c: CompanyImpact) {
    setCompanyName(c.companyName);
    setCompanyQuery(c.companyName);
    setMatchedCompany(c);
    setSuggestions([]);
  }

  // ===== ラベル検索 =====
  const labelResults = useMemo(() => {
    if (labelQuery.trim()) return searchEthicalLabels(labelQuery, 20);
    if (activeLabelCat === "all") return ethicalLabels;
    return ethicalLabels.filter((l) => l.category === activeLabelCat);
  }, [labelQuery, activeLabelCat]);

  function toggleLabel(label: EthicalLabel) {
    setSelectedLabels((prev) =>
      prev.some((l) => l.id === label.id)
        ? prev.filter((l) => l.id !== label.id)
        : [...prev, label]
    );
  }

  function addCustomLabel() {
    const v = customLabelInput.trim();
    if (!v || customLabels.includes(v)) return;
    const matched = searchEthicalLabels(v, 1)[0];
    if (matched) {
      toggleLabel(matched);
      setCustomLabelInput("");
      return;
    }
    setCustomLabels((prev) => [...prev, v]);
    setCustomLabelInput("");
  }

  // ===== 保存 =====
  function handleSave() {
    const amt     = Number(amount) || 0;
    const company = matchedCompany ?? findCompany(companyName);

    // 商品名からカテゴリ自動判定
    const match = matchProductEthicalCategory(productName.trim());
    setMatchResult(match);
    setCorrected(false);

    const result = calcPurchaseScore(
      company,
      amt,
      match.primaryCategory,
      selectedLabels,
      customLabels,
    );

    const record: PurchaseRecord = {
      id: crypto.randomUUID(),
      companyId:                company?.id ?? null,
      companyName:              companyName.trim() || "（企業名未入力）",
      productName:              productName.trim() || "（商品名未入力）",
      amount:                   amt,
      category:                 buyCategory,
      productEthicalCategoryId: match.primaryCategory?.id ?? null,
      selectedLabelIds:         selectedLabels.map((l) => l.id),
      customLabels,
      memo,
      point:          result.total,
      scoreBreakdown: result.breakdown,
      createdAt:      localISOString(),
    };
    addPurchase(record);

    // 家計簿へ自動連携（買い物記録は支出として保存）
    const nowStr   = localISOString();
    const dateOnly = nowStr.slice(0, 10); // "YYYY-MM-DD"
    const budgetTx: Transaction = {
      id:                  crypto.randomUUID(),
      type:                "expense",
      amount:              amt,
      date:                dateOnly,
      category:            "買い物（記録連携）",
      storeName:           companyName.trim() || undefined,
      companyName:         companyName.trim() || undefined,
      productName:         productName.trim() || undefined,
      paymentMethod:       "other",
      memo:                memo || undefined,
      docoeCategories:     [],
      supportTags:         [],
      disposableTags:      [],
      linkedPurchaseRecordId: record.id,
      includeInDocoeScore: true,
      docoeScoreBreakdown: {
        companyPoint:        result.breakdown.moneyScore + result.breakdown.ecoScore +
                             result.breakdown.localScore + result.breakdown.awarenessScore -
                             Math.floor(amt / 1000) - 1,
        productEthicalPoint: result.breakdown.ethicalScore,
        amountPoint:         Math.floor(amt / 1000) + 1,
        labelPoint:          result.breakdown.labelScore,
        totalPoint:          result.total,
      },
      createdAt:           nowStr,
      updatedAt:           nowStr,
    };
    addTransaction(budgetTx);

    setSaved(record);
    setStep("result");
  }

  // ===== 結果用スコア再計算 =====
  const scoreResult = useMemo(() => {
    if (step !== "result" || !saved || !matchResult) return null;
    const company = matchedCompany ?? findCompany(companyName);
    return calcPurchaseScore(
      company,
      Number(amount) || 0,
      matchResult.primaryCategory,
      selectedLabels,
      customLabels,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, saved]);

  const resolvedCompany = matchedCompany ?? findCompany(companyName);

  // ===== リセット =====
  function handleReset() {
    setStep("input");
    setCompanyName(""); setCompanyQuery(""); setMatchedCompany(null); setSuggestions([]);
    setProductName(""); setAmount(""); setMemo("");
    setSelectedLabels([]); setCustomLabels([]); setCustomLabelInput("");
    setMatchResult(null); setCorrected(false);
    setSaved(null);
  }

  // ===== 入力ステップ =====
  if (step === "input") {
    return (
      <div className="px-4 pt-6 pb-4 space-y-4">
        {/* ヘッダー */}
        <header className="flex items-center gap-3">
          <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
            <ChevronLeft size={18} className="text-[#4a5e4a]" />
          </Link>
          <div>
            <h1 className="text-lg font-black text-[#1a4731]">買い物記録</h1>
            <p className="text-[10px] text-[#8aaa8a]">お金の行き先と商品の背景を記録しましょう</p>
          </div>
        </header>

        {/* 企業名 */}
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
          <label className="text-xs font-semibold text-[#4a5e4a] flex items-center gap-1">
            <Search size={12} /> 企業名
          </label>
          <input
            type="text"
            value={companyQuery}
            onChange={(e) => handleCompanyInput(e.target.value)}
            placeholder="例：サントリー、ユニクロ"
            className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors"
          />
          {suggestions.length > 0 && (
            <div className="border border-[#ede8dc] rounded-xl overflow-hidden">
              {suggestions.map((c) => (
                <button key={c.id} onClick={() => selectSuggestion(c)}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-[#f0f7f3] flex items-center justify-between border-b border-[#f0ece4] last:border-0">
                  <span className="font-medium text-[#1a4731]">{c.companyName}</span>
                  <span className="text-[10px] text-[#8aaa8a]">{c.industry}</span>
                </button>
              ))}
            </div>
          )}
          {matchedCompany && (
            <div className="flex items-center gap-2 bg-[#f0f7f3] rounded-lg px-3 py-1.5">
              <Check size={13} className="text-[#2d6a4f]" />
              <span className="text-xs text-[#2d6a4f] font-medium">企業データベースで確認できました</span>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {popularCompanies.slice(0, 8).map((c) => (
              <button key={c.id}
                onClick={() => { setCompanyName(c.companyName); setCompanyQuery(c.companyName); setMatchedCompany(c); setSuggestions([]); }}
                className="text-[11px] bg-[#f0f7f3] text-[#2d6a4f] border border-[#b7e4c7] px-2.5 py-1 rounded-full font-medium active:bg-[#d8f3e4] transition-colors">
                {c.companyName}
              </button>
            ))}
          </div>
        </div>

        {/* 商品名・金額 */}
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#4a5e4a]">商品名</label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}
              placeholder="例：有機緑茶 500ml、国産牛ステーキ"
              className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors" />
            <p className="text-[10px] text-[#8aaa8a]">商品名から環境・社会インパクトを自動判定します</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#4a5e4a]">購入金額（円）</label>
            <div className="flex items-center gap-2">
              <input type="number" min={0} value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="flex-1 text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors" />
              <span className="text-sm text-[#8aaa8a]">円</span>
            </div>
            <p className="text-[10px] text-[#8aaa8a]">1,000円ごとに +1pt</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#4a5e4a]">購入カテゴリ</label>
            <select value={buyCategory} onChange={(e) => setBuyCategory(e.target.value)}
              className="w-full text-sm text-[#1a4731] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors">
              {BUY_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* 確認できるラベル */}
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
          <button
            onClick={() => setShowLabelPanel((v) => !v)}
            className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-[#52b788]" />
              <div className="text-left">
                <p className="text-xs font-semibold text-[#4a5e4a]">確認できるラベル</p>
                <p className="text-[10px] text-[#8aaa8a]">
                  {selectedLabels.length > 0 || customLabels.length > 0
                    ? `${selectedLabels.length + customLabels.length}件選択`
                    : "パッケージや商品ページのラベルを選択（複数可）"}
                </p>
              </div>
            </div>
            {showLabelPanel ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
          </button>

          {/* 選択済みラベル */}
          {(selectedLabels.length > 0 || customLabels.length > 0) && (
            <div className="flex flex-wrap gap-1.5">
              {selectedLabels.map((l) => (
                <span key={l.id}
                  className="inline-flex items-center gap-1 text-[11px] bg-[#f0f7f3] text-[#2d6a4f] border border-[#b7e4c7] px-2 py-0.5 rounded-full font-medium">
                  {l.labelName}
                  <button onClick={() => toggleLabel(l)}><X size={11} /></button>
                </span>
              ))}
              {customLabels.map((cl) => (
                <span key={cl}
                  className="inline-flex items-center gap-1 text-[11px] bg-[#fdf8f0] text-[#c9a227] border border-[#f0dea0] px-2 py-0.5 rounded-full font-medium">
                  {cl}
                  <span className="text-[9px]">未登録</span>
                  <button onClick={() => setCustomLabels((p) => p.filter((x) => x !== cl))}><X size={11} /></button>
                </span>
              ))}
            </div>
          )}

          {showLabelPanel && (
            <div className="space-y-2">
              <input type="text" value={labelQuery}
                onChange={(e) => setLabelQuery(e.target.value)}
                placeholder="ラベル名で検索（例：FSC、フェアトレード）"
                className="w-full text-sm bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors" />

              {!labelQuery && (
                <div className="flex gap-1.5 overflow-x-auto pb-1 hide-scrollbar">
                  <button onClick={() => setActiveLabelCat("all")}
                    className={`flex-shrink-0 text-[11px] px-2.5 py-1 rounded-full font-medium border transition-colors ${
                      activeLabelCat === "all"
                        ? "bg-[#2d6a4f] text-white border-[#2d6a4f]"
                        : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                    }`}>
                    すべて
                  </button>
                  {Object.entries(labelCategoryLabels).map(([key, label]) => (
                    <button key={key} onClick={() => setActiveLabelCat(key)}
                      className={`flex-shrink-0 text-[11px] px-2.5 py-1 rounded-full font-medium border transition-colors ${
                        activeLabelCat === key
                          ? "bg-[#2d6a4f] text-white border-[#2d6a4f]"
                          : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                      }`}>
                      {label as string}
                    </button>
                  ))}
                </div>
              )}

              <div className="max-h-52 overflow-y-auto space-y-1">
                {labelResults.map((label) => {
                  const isSelected = selectedLabels.some((l) => l.id === label.id);
                  return (
                    <button key={label.id} onClick={() => toggleLabel(label)}
                      className={`w-full text-left rounded-xl px-3 py-2 border transition-colors ${
                        isSelected
                          ? "border-[#52b788] bg-[#f0f7f3]"
                          : "border-[#ede8dc] hover:bg-[#faf8f4]"
                      }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-semibold text-[#1a4731] truncate">{label.labelName}</p>
                            {label.greenWashWarning && (
                              <span className="flex-shrink-0 text-[9px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full">要確認</span>
                            )}
                          </div>
                          <p className="text-[10px] text-[#8aaa8a] mt-0.5 line-clamp-1">{label.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
                          <span className="text-xs font-black text-[#2d6a4f]">{pts(label.point)}</span>
                          {isSelected && <Check size={13} className="text-[#52b788]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[#ede8dc] pt-2">
                <p className="text-[10px] text-[#8aaa8a] mb-1">登録されていないラベルを入力</p>
                <div className="flex gap-2">
                  <input type="text" value={customLabelInput}
                    onChange={(e) => setCustomLabelInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomLabel()}
                    placeholder="例：エシカルコットン使用"
                    className="flex-1 text-sm bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788] transition-colors" />
                  <button onClick={addCustomLabel}
                    className="px-3 py-2 rounded-xl bg-[#ede8dc] text-[#4a5e4a] text-xs font-bold">
                    追加
                  </button>
                </div>
                <p className="text-[10px] text-[#8aaa8a] mt-1">
                  ※ 未登録ラベルはスコア加算なし。ラベルを確認した行動として気づきスコア +1
                </p>
              </div>
            </div>
          )}
        </div>

        {/* メモ */}
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
          <label className="text-xs font-semibold text-[#4a5e4a]">メモ（任意）</label>
          <textarea value={memo} onChange={(e) => setMemo(e.target.value)}
            placeholder="気づいたことを書いてみましょう" rows={2}
            className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 resize-none outline-none focus:border-[#52b788] transition-colors" />
        </div>

        <button onClick={handleSave}
          className="w-full py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm active:bg-[#1a4731] transition-colors">
          記録する
        </button>
      </div>
    );
  }

  // ===== 結果ステップ =====
  if (!scoreResult || !saved) return null;

  const { breakdown } = scoreResult;
  const detectedCat = matchResult?.primaryCategory ?? null;

  const amountPt = Math.floor((Number(amount) || 0) / 1000);
  const brkItems = [
    {
      label: "企業スコア",
      value: breakdown.moneyScore + breakdown.ecoScore + breakdown.localScore + breakdown.awarenessScore
        - amountPt - 1,
      color: "#4a90d9",
    },
    { label: "商品インパクト", value: breakdown.ethicalScore, color: "#1a7a5e" },
    { label: "記録＋金額ポイント", value: amountPt + 1, color: "#2d6a4f" },
    { label: "確認できるラベル", value: breakdown.labelScore, color: "#52b788" },
  ];

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">買い物記録</h1>
          <p className="text-[10px] text-[#8aaa8a]">インパクトを確認しました</p>
        </div>
      </header>

      {/* 合計スコアバナー */}
      <div className="rounded-3xl p-5 text-white shadow-md relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #4a90d9 100%)" }}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Check size={16} strokeWidth={3} />
          </div>
          <span className="text-sm font-bold">記録しました！</span>
        </div>
        <p className="text-4xl font-black">
          {pts(scoreResult.total)}
          <span className="text-base text-white/70 ml-1">pt</span>
        </p>
        <p className="text-[10px] text-white/70 mt-1">全カテゴリへ加算されました</p>
      </div>

      {/* スコア内訳カード */}
      <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <p className="text-xs font-semibold text-[#4a5e4a]">スコア加算内訳</p>
        <div className="grid grid-cols-2 gap-2">
          {brkItems.map(({ label, value, color }) => (
            <div key={label} className="rounded-xl border border-[#ede8dc] p-2.5">
              <p className="text-[10px] text-[#8aaa8a]">{label}</p>
              <p className="text-lg font-black" style={{ color }}>{pts(value)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-[#ede8dc] pt-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#4a5e4a]">合計</span>
          <span className="text-xl font-black text-[#1a4731]">{pts(scoreResult.total)}pt</span>
        </div>
        <div className="space-y-1 pt-1">
          {scoreResult.reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#4a5e4a]">
              <Check size={11} className="text-[#52b788] flex-shrink-0 mt-0.5" />
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* 自動判定：商品インパクト */}
      {detectedCat ? (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-3">
          {/* ヘッダー行 */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-amber-600 font-semibold mb-0.5">🌱 商品インパクト自動判定</p>
              <p className="text-sm font-bold text-[#1a4731]">{detectedCat.categoryName}</p>
              {matchResult && matchResult.matchedKeywords.length > 0 && (
                <p className="text-[10px] text-amber-700 mt-0.5">
                  キーワード：{matchResult.matchedKeywords.slice(0, 3).join("、")}
                  {matchResult.matchedKeywords.length > 3 && ` 他${matchResult.matchedKeywords.length - 3}件`}
                </p>
              )}
            </div>
            <span className="text-xl font-black text-amber-700 flex-shrink-0">
              {pts(detectedCat.point)}pt
            </span>
          </div>

          {/* 説明 */}
          <p className="text-[11px] text-[#4a5e4a] leading-relaxed">{detectedCat.explanation}</p>

          <p className="text-[10px] text-amber-700 leading-relaxed">
            ⚠ この評価は公開情報に基づく参考値です。個別の商品・メーカーを断定するものではありません。
          </p>

          {/* 代替提案 */}
          {detectedCat.alternativeSuggestions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">次回の選択肢として</p>
              <ul className="space-y-0.5">
                {detectedCat.alternativeSuggestions.map((s, i) => (
                  <li key={i} className="text-[11px] text-[#4a5e4a] flex gap-1.5">
                    <span className="text-[#52b788] flex-shrink-0">›</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ソース */}
          {detectedCat.sourceUrls.length > 0 && (
            <div className="flex flex-col gap-0.5">
              {detectedCat.sourceUrls.map((u, i) => (
                <p key={i} className="text-[10px] text-[#4a90d9] flex items-center gap-1 break-all">
                  <ExternalLink size={10} className="flex-shrink-0" />{u}
                </p>
              ))}
            </div>
          )}

          {/* 複数マッチ表示 */}
          {matchResult && matchResult.matchedCategories.length > 1 && (
            <p className="text-[10px] text-amber-600">
              ※ 他に {matchResult.matchedCategories.length - 1} カテゴリが一致しました（最も影響度の高いものを表示）
            </p>
          )}

          {/* 判定修正ボタン */}
          {!corrected ? (
            <button
              onClick={() => setCorrected(true)}
              className="flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-100 hover:bg-amber-200 border border-amber-300 px-3 py-1.5 rounded-full font-medium transition-colors">
              <HelpCircle size={12} />
              この判定は違います
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-white border border-amber-200 rounded-xl px-3 py-2">
              <Check size={13} className="text-[#2d6a4f]" />
              <p className="text-[11px] text-[#4a5e4a]">
                フィードバックありがとうございます。判定の改善に役立てます。
              </p>
            </div>
          )}
        </div>
      ) : (
        /* 判定なし */
        <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-2xl p-4">
          <p className="text-xs font-semibold text-[#4a5e4a] mb-1">🌱 商品インパクト自動判定</p>
          <p className="text-[11px] text-[#8aaa8a]">
            商品名から環境・社会インパクトが指摘されるカテゴリは見つかりませんでした。
          </p>
        </div>
      )}

      {/* 確認できたラベル */}
      {scoreResult.labelDetails.length > 0 && (
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
          <p className="text-xs font-semibold text-[#4a5e4a]">
            <Tag size={12} className="inline mr-1" />確認できたラベル
          </p>
          {scoreResult.labelDetails.map((ld, i) => (
            <div key={i} className="border border-[#ede8dc] rounded-xl p-3 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-[#1a4731]">{ld.labelName}</p>
                <span className="text-sm font-black text-[#52b788]">{pts(ld.point)}pt</span>
              </div>
              <p className="text-[11px] text-[#4a5e4a] leading-relaxed">{ld.description}</p>
              {ld.greenWashWarning && (
                <p className="text-[10px] text-amber-600 bg-amber-50 rounded-lg p-2 leading-relaxed">
                  この表示は環境配慮を示す可能性がありますが、第三者認証や具体的な根拠が確認できない場合があります。参考情報として扱ってください。
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 未登録ラベル */}
      {customLabels.length > 0 && (
        <div className="bg-[#fdf8f0] rounded-2xl p-4 border border-[#f0dea0]">
          <p className="text-xs font-semibold text-[#c9a227] mb-1">未登録ラベル</p>
          <p className="text-[11px] text-[#4a5e4a] leading-relaxed mb-2">
            このラベルはまだdocoe?に登録されていません。今回は、ラベルを確認した行動として気づきスコアを加算します。
          </p>
          <div className="flex flex-wrap gap-1.5">
            {customLabels.map((cl) => (
              <span key={cl} className="text-[11px] bg-white text-[#c9a227] border border-[#f0dea0] px-2 py-0.5 rounded-full">
                {cl}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 企業インパクト情報 */}
      {resolvedCompany && (
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-[#8aaa8a] font-semibold">企業</p>
              <p className="text-sm font-bold text-[#1a4731]">{resolvedCompany.companyName}</p>
              <p className="text-[10px] text-[#8aaa8a]">{resolvedCompany.industry}</p>
            </div>
            <ConfidenceBadge level={resolvedCompany.confidenceLevel} />
          </div>
          {resolvedCompany.environmentalActions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🌿 環境保全</p>
              <ul className="space-y-0.5">
                {resolvedCompany.environmentalActions.map((a, i) => (
                  <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                    <span className="text-[#52b788] flex-shrink-0">●</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resolvedCompany.socialActions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🤝 社会貢献</p>
              <ul className="space-y-0.5">
                {resolvedCompany.socialActions.map((a, i) => (
                  <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                    <span className="text-[#4a90d9] flex-shrink-0">●</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resolvedCompany.localContributionActions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">🏘️ 地域循環</p>
              <ul className="space-y-0.5">
                {resolvedCompany.localContributionActions.map((a, i) => (
                  <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                    <span className="text-[#6a7a2a] flex-shrink-0">●</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resolvedCompany.transparencyActions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-[#4a5e4a] mb-1">📊 情報開示</p>
              <ul className="space-y-0.5">
                {resolvedCompany.transparencyActions.map((a, i) => (
                  <li key={i} className="text-xs text-[#4a5e4a] flex gap-1.5">
                    <span className="text-[#c9a227] flex-shrink-0">●</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 注意情報 */}
      {scoreResult.hasRisk && scoreResult.cautionNotes.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
          <div className="flex gap-2">
            <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-[10px] font-bold text-amber-700">参考情報</p>
          </div>
          {scoreResult.cautionNotes.map((n, i) => (
            <p key={i} className="text-[11px] text-amber-700 leading-relaxed">{n}</p>
          ))}
        </div>
      )}

      {/* 注記 */}
      <div className="bg-[#ede8dc] rounded-2xl p-3 border border-[#d4cfc5]">
        <p className="text-[10px] text-[#6a7a6a] leading-relaxed">
          📌 このスコアは、公開情報や登録データに基づく<strong>参考値</strong>です。
          個別の商品・企業を断定的に評価するものではありません。
        </p>
      </div>

      {/* アクション */}
      <div className="flex gap-2">
        <button onClick={handleReset}
          className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm">
          続けて記録
        </button>
        <Link href="/"
          className="flex-grow text-center py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm">
          ホームへ
        </Link>
      </div>
    </div>
  );
}
