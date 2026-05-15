"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, Check, Leaf, ChevronDown, ChevronUp, Layers, X, Plus } from "lucide-react";
import {
  Transaction, INCOME_CATEGORIES, EXPENSE_CATEGORIES, PaymentMethod,
  DocoeCategory, DOCOE_CATEGORIES, DOCOE_CATEGORY_LABELS,
  DEFAULT_SUPPORT_TAGS, DEFAULT_DISPOSABLE_TAGS,
} from "@/lib/types";
import { addTransaction } from "@/lib/budgetStore";
import { localISOString } from "@/lib/store";
import { findCompany } from "@/lib/data/companyData";
import { matchProductEthicalCategory } from "@/lib/matchProductEthicalCategory";
import { calcPurchaseScore } from "@/lib/purchaseScore";
import { getTemplates } from "@/lib/budgetTemplates";
import type { BudgetTemplate } from "@/lib/types";

const PAYMENT_METHODS: { value: PaymentMethod; label: string; emoji: string }[] = [
  { value: "cash",          label: "現金",         emoji: "💴" },
  { value: "credit_card",   label: "クレカ",        emoji: "💳" },
  { value: "debit_card",    label: "デビット",      emoji: "🏦" },
  { value: "qr_payment",    label: "QR決済",        emoji: "📲" },
  { value: "bank_transfer", label: "銀行振込",      emoji: "🏧" },
  { value: "transport_ic",  label: "交通系IC",      emoji: "🚃" },
  { value: "other",         label: "その他",        emoji: "💫" },
];

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const DOCOE_CAT_COLORS: Record<DocoeCategory, string> = {
  local_money:      "bg-[#2d6a4f] text-white",
  outside_money:    "bg-[#6a7a2a] text-white",
  eco_money:        "bg-[#52b788] text-white",
  disposable_money: "bg-[#e07b39] text-white",
  support_money:    "bg-[#4a90d9] text-white",
  awareness_money:  "bg-[#c9a227] text-white",
  other:            "bg-[#8aaa8a] text-white",
};

export default function BudgetNewPage() {
  const [type,          setType]          = useState<"income" | "expense">("expense");
  const [amount,        setAmount]        = useState("");
  const [date,          setDate]          = useState(todayStr());
  const [category,      setCategory]      = useState("");
  const [storeName,     setStoreName]     = useState("");
  const [companyName,   setCompanyName]   = useState("");
  const [productName,   setProductName]   = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [memo,          setMemo]          = useState("");
  const [includeDocoe,  setIncludeDocoe]  = useState(false);
  const [saved,         setSaved]         = useState(false);

  // docoe? 独自分類
  const [docoeCategories, setDocoeCategories] = useState<DocoeCategory[]>([]);

  // 応援支出タグ
  const [supportTags,      setSupportTags]      = useState<string[]>([]);
  const [customSupportInput, setCustomSupportInput] = useState("");

  // 使い捨て支出タグ
  const [disposableTags,      setDisposableTags]      = useState<string[]>([]);
  const [customDisposableInput, setCustomDisposableInput] = useState("");

  // 展開状態
  const [showDocoeClassify, setShowDocoeClassify] = useState(false);
  const [showDetails,       setShowDetails]       = useState(false);
  const [showTemplate,      setShowTemplate]      = useState(false);

  const categories = type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  function handleTypeChange(t: "income" | "expense") {
    setType(t);
    setCategory("");
    setDocoeCategories([]);
    setSupportTags([]);
    setDisposableTags([]);
  }

  function toggleDocoeCategory(cat: DocoeCategory) {
    setDocoeCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function toggleSupportTag(tag: string) {
    setSupportTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function addCustomSupportTag() {
    const v = customSupportInput.trim();
    if (!v || supportTags.includes(v)) return;
    setSupportTags((prev) => [...prev, v]);
    setCustomSupportInput("");
  }

  function toggleDisposableTag(tag: string) {
    setDisposableTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function addCustomDisposableTag() {
    const v = customDisposableInput.trim();
    if (!v || disposableTags.includes(v)) return;
    setDisposableTags((prev) => [...prev, v]);
    setCustomDisposableInput("");
  }

  // テンプレート適用
  function applyTemplate(tpl: BudgetTemplate) {
    setType(tpl.type);
    setCategory(tpl.category);
    setDocoeCategories(tpl.docoeCategories);
    setSupportTags(tpl.supportTags);
    setDisposableTags(tpl.disposableTags);
    if (tpl.paymentMethod) setPaymentMethod(tpl.paymentMethod);
    if (tpl.memo) setMemo(tpl.memo);
    setShowTemplate(false);
    setShowDocoeClassify(true);
  }

  // docoe? スコア試算
  const docoePreview = useMemo(() => {
    if (type !== "expense" || !includeDocoe) return null;
    const amt = Number(amount) || 0;
    if (amt === 0 && !companyName && !productName) return null;
    const company = findCompany(companyName);
    const match   = matchProductEthicalCategory(productName);
    return calcPurchaseScore(company, amt, match.primaryCategory, [], []);
  }, [type, includeDocoe, amount, companyName, productName]);

  function handleSave() {
    const amt = Number(amount);
    if (!amt || amt <= 0 || !category) return;

    let docoeBreakdown: Transaction["docoeScoreBreakdown"] | undefined;
    if (includeDocoe && type === "expense" && docoePreview) {
      const company = findCompany(companyName);
      const match   = matchProductEthicalCategory(productName);
      const result  = calcPurchaseScore(company, amt, match.primaryCategory, [], []);
      const { breakdown } = result;
      docoeBreakdown = {
        companyPoint:        breakdown.moneyScore + breakdown.ecoScore + breakdown.localScore +
                             breakdown.awarenessScore - Math.floor(amt / 1000) - 1,
        productEthicalPoint: breakdown.ethicalScore,
        amountPoint:         Math.floor(amt / 1000) + 1,
        labelPoint:          breakdown.labelScore,
        totalPoint:          result.total,
      };
    }

    const now = localISOString();
    const tx: Transaction = {
      id:                  crypto.randomUUID(),
      type,
      amount:              amt,
      date,
      category,
      storeName:           storeName.trim() || undefined,
      companyName:         companyName.trim() || undefined,
      productName:         productName.trim() || undefined,
      paymentMethod,
      memo:                memo.trim() || undefined,
      docoeCategories,
      supportTags,
      disposableTags,
      includeInDocoeScore: includeDocoe && type === "expense",
      docoeScoreBreakdown: docoeBreakdown,
      createdAt:           now,
      updatedAt:           now,
    };
    addTransaction(tx);
    setSaved(true);
  }

  function handleReset() {
    setType("expense"); setAmount(""); setDate(todayStr()); setCategory("");
    setStoreName(""); setCompanyName(""); setProductName("");
    setPaymentMethod("cash"); setMemo(""); setIncludeDocoe(false);
    setDocoeCategories([]); setSupportTags([]); setDisposableTags([]);
    setSaved(false);
  }

  const templates = getTemplates();

  // ---- 完了画面 ----
  if (saved) {
    return (
      <div className="px-4 pt-6 pb-4 space-y-4">
        <header className="flex items-center gap-3">
          <Link href="/budget" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
            <ChevronLeft size={18} className="text-[#4a5e4a]" />
          </Link>
          <h1 className="text-lg font-black text-[#1a4731]">記録完了</h1>
        </header>

        <div
          className="rounded-3xl p-6 text-white shadow-md text-center"
          style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Check size={24} strokeWidth={3} />
          </div>
          <p className="text-lg font-black">記録しました！</p>
          <p className="text-3xl font-black mt-2">
            {type === "income" ? "+" : "-"}{Number(amount).toLocaleString()}円
          </p>
          <p className="text-[11px] text-white/70 mt-1">{category}</p>
          {docoeCategories.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
              {docoeCategories.map((c) => (
                <span key={c} className="text-[10px] bg-white/20 rounded-full px-2.5 py-0.5">
                  {DOCOE_CATEGORY_LABELS[c]}
                </span>
              ))}
            </div>
          )}
          {docoePreview && (
            <div className="mt-4 bg-white/10 rounded-2xl p-3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Leaf size={13} />
                <p className="text-xs font-bold">docoe? スコア</p>
              </div>
              <p className="text-2xl font-black">+{docoePreview.total}pt</p>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button onClick={handleReset}
            className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm">
            続けて記録
          </button>
          <Link href="/budget"
            className="flex-grow text-center py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm">
            家計簿へ
          </Link>
        </div>
      </div>
    );
  }

  // ---- 入力画面 ----
  return (
    <div className="px-4 pt-6 pb-24 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/budget" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-[#1a4731]">収支を記録</h1>
          <p className="text-[10px] text-[#8aaa8a]">お金の流れと行き先を記録しましょう</p>
        </div>
      </header>

      {/* テンプレートボタン */}
      <button
        onClick={() => setShowTemplate((v) => !v)}
        className="w-full flex items-center justify-between bg-[#f0f7f3] border border-[#b7e4c7] rounded-2xl px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <Layers size={16} className="text-[#2d6a4f]" />
          <div className="text-left">
            <p className="text-xs font-bold text-[#1a4731]">テンプレートから入力</p>
            <p className="text-[10px] text-[#8aaa8a]">よく使う支出パターンを選ぶ</p>
          </div>
        </div>
        {showTemplate ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
      </button>

      {showTemplate && (
        <div className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 gap-0">
            {templates.map((tpl, i) => (
              <button
                key={tpl.id}
                onClick={() => applyTemplate(tpl)}
                className={`text-left px-3 py-2.5 hover:bg-[#f0f7f3] transition-colors border-[#f5f5f5] ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < templates.length - 2 ? "border-b" : ""}`}
              >
                <p className="text-xs font-bold text-[#1a4731]">{tpl.name}</p>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {tpl.docoeCategories.slice(0, 2).map((c) => (
                    <span key={c} className="text-[9px] bg-[#f0f7f3] text-[#2d6a4f] px-1.5 py-0.5 rounded-full">
                      {DOCOE_CATEGORY_LABELS[c]}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 収入/支出 切替 */}
      <div className="flex rounded-2xl bg-[#f0f0f0] p-1">
        {(["expense", "income"] as const).map((t) => (
          <button key={t} onClick={() => handleTypeChange(t)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              type === t
                ? t === "income" ? "bg-[#2d6a4f] text-white shadow-sm" : "bg-[#e07b39] text-white shadow-sm"
                : "text-[#8aaa8a]"
            }`}>
            {t === "income" ? "💴 収入" : "🛒 支出"}
          </button>
        ))}
      </div>

      {/* 金額・日付 */}
      <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#4a5e4a]">金額（円）</label>
          <div className="flex items-center gap-2">
            <input type="number" min={1} value={amount}
              onChange={(e) => setAmount(e.target.value)} placeholder="0"
              className="flex-1 text-2xl font-black text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-4 py-3 outline-none focus:border-[#52b788]" />
            <span className="text-lg text-[#8aaa8a] font-bold">円</span>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#4a5e4a]">日付</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full text-sm text-[#1a4731] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788]" />
        </div>
      </div>

      {/* カテゴリ */}
      <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
        <label className="text-xs font-semibold text-[#4a5e4a]">カテゴリ</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
              className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-colors ${
                category === c ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc] hover:bg-[#f0f7f3]"
              }`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── docoe? 独自分類 ── */}
      <div className={`rounded-2xl border shadow-sm transition-colors ${
        showDocoeClassify ? "bg-[#f0f7f3] border-[#b7e4c7]" : "bg-white border-[#ede8dc]"
      }`}>
        <button
          onClick={() => setShowDocoeClassify((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">🌐</span>
            <div className="text-left">
              <p className="text-xs font-bold text-[#1a4731]">docoe? 分類</p>
              <p className="text-[10px] text-[#8aaa8a]">
                {docoeCategories.length > 0
                  ? docoeCategories.map((c) => DOCOE_CATEGORY_LABELS[c]).join("・")
                  : "このお金の行き先を分類する（複数選択可）"}
              </p>
            </div>
          </div>
          {showDocoeClassify ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
        </button>

        {showDocoeClassify && (
          <div className="px-4 pb-4 space-y-4">
            <div className="flex flex-wrap gap-2">
              {DOCOE_CATEGORIES.map((cat) => {
                const selected = docoeCategories.includes(cat);
                return (
                  <button key={cat} onClick={() => toggleDocoeCategory(cat)}
                    className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all ${
                      selected
                        ? DOCOE_CAT_COLORS[cat]
                        : "bg-white text-[#4a5e4a] border-[#ede8dc] hover:bg-[#f0f7f3]"
                    }`}>
                    {DOCOE_CATEGORY_LABELS[cat]}
                    {selected && <Check size={11} className="inline ml-1" />}
                  </button>
                );
              })}
            </div>

            {/* 応援支出タグ（support_money 選択時に展開） */}
            {docoeCategories.includes("support_money") && (
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#4a90d9]">🤝 応援支出タグ</p>
                <div className="flex flex-wrap gap-1.5">
                  {DEFAULT_SUPPORT_TAGS.map((tag) => (
                    <button key={tag} onClick={() => toggleSupportTag(tag)}
                      className={`text-[10px] px-2.5 py-1 rounded-full border font-medium transition-colors ${
                        supportTags.includes(tag)
                          ? "bg-[#4a90d9] text-white border-[#4a90d9]"
                          : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                      }`}>
                      {tag}
                    </button>
                  ))}
                  {supportTags.filter((t) => !DEFAULT_SUPPORT_TAGS.includes(t)).map((tag) => (
                    <span key={tag}
                      className="inline-flex items-center gap-1 text-[10px] bg-[#4a90d9] text-white px-2.5 py-1 rounded-full font-medium">
                      {tag}
                      <button onClick={() => setSupportTags((p) => p.filter((t) => t !== tag))}>
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={customSupportInput}
                    onChange={(e) => setCustomSupportInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomSupportTag()}
                    placeholder="自由入力タグを追加"
                    className="flex-1 text-xs bg-white border border-[#ede8dc] rounded-xl px-3 py-1.5 outline-none focus:border-[#4a90d9]" />
                  <button onClick={addCustomSupportTag}
                    className="px-3 py-1.5 rounded-xl bg-[#4a90d9] text-white text-xs font-bold">
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            )}

            {/* 使い捨て支出タグ（disposable_money 選択時に展開） */}
            {docoeCategories.includes("disposable_money") && (
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#e07b39]">♻️ 使い捨てタグ</p>
                <div className="flex flex-wrap gap-1.5">
                  {DEFAULT_DISPOSABLE_TAGS.map((tag) => (
                    <button key={tag} onClick={() => toggleDisposableTag(tag)}
                      className={`text-[10px] px-2.5 py-1 rounded-full border font-medium transition-colors ${
                        disposableTags.includes(tag)
                          ? "bg-[#e07b39] text-white border-[#e07b39]"
                          : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                      }`}>
                      {tag}
                    </button>
                  ))}
                  {disposableTags.filter((t) => !DEFAULT_DISPOSABLE_TAGS.includes(t)).map((tag) => (
                    <span key={tag}
                      className="inline-flex items-center gap-1 text-[10px] bg-[#e07b39] text-white px-2.5 py-1 rounded-full font-medium">
                      {tag}
                      <button onClick={() => setDisposableTags((p) => p.filter((t) => t !== tag))}>
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={customDisposableInput}
                    onChange={(e) => setCustomDisposableInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomDisposableTag()}
                    placeholder="自由入力タグを追加"
                    className="flex-1 text-xs bg-white border border-[#ede8dc] rounded-xl px-3 py-1.5 outline-none focus:border-[#e07b39]" />
                  <button onClick={addCustomDisposableTag}
                    className="px-3 py-1.5 rounded-xl bg-[#e07b39] text-white text-xs font-bold">
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 支払い方法 */}
      <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
        <label className="text-xs font-semibold text-[#4a5e4a]">支払い方法</label>
        <div className="flex flex-wrap gap-2">
          {PAYMENT_METHODS.map(({ value, label, emoji }) => (
            <button key={value} onClick={() => setPaymentMethod(value)}
              className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-colors ${
                paymentMethod === value ? "bg-[#4a90d9] text-white border-[#4a90d9]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
              }`}>
              {emoji} {label}
            </button>
          ))}
        </div>
      </div>

      {/* 詳細（折りたたみ） */}
      {type === "expense" && (
        <div className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm">
          <button onClick={() => setShowDetails((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-3">
            <p className="text-xs font-semibold text-[#4a5e4a]">詳細情報（店舗・企業・商品）</p>
            {showDetails ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
          </button>
          {showDetails && (
            <div className="px-4 pb-4 space-y-3 border-t border-[#f0f0f0]">
              <div className="space-y-1 pt-3">
                <label className="text-[11px] text-[#8aaa8a]">店舗・サービス名</label>
                <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)}
                  placeholder="例：スーパー山田"
                  className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788]" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-[#8aaa8a]">企業名（docoe? スコア連携）</label>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="例：サントリー"
                  className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788]" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-[#8aaa8a]">商品名（docoe? スコア連携）</label>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}
                  placeholder="例：有機緑茶"
                  className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788]" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* docoe? スコア連携 */}
      {type === "expense" && (
        <div className={`rounded-2xl p-4 border shadow-sm ${includeDocoe ? "bg-[#f0f7f3] border-[#b7e4c7]" : "bg-white border-[#ede8dc]"}`}>
          <button onClick={() => setIncludeDocoe((v) => !v)} className="w-full flex items-center gap-3">
            <div className={`w-11 h-6 rounded-full relative transition-colors ${includeDocoe ? "bg-[#2d6a4f]" : "bg-[#ccc]"}`}>
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${includeDocoe ? "translate-x-5" : "translate-x-0.5"}`} />
            </div>
            <div className="text-left flex-1">
              <p className="text-xs font-bold text-[#1a4731] flex items-center gap-1">
                <Leaf size={13} className="text-[#2d6a4f]" /> docoe? スコアに反映する
              </p>
              <p className="text-[10px] text-[#8aaa8a]">企業名・商品名からインパクトスコアを計算</p>
            </div>
          </button>
          {includeDocoe && docoePreview && (
            <div className="mt-3 bg-white rounded-xl p-3 border border-[#b7e4c7]">
              <p className="text-[10px] text-[#4a5e4a] font-semibold mb-1">スコア試算</p>
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#8aaa8a]">推定 docoe? スコア</p>
                <p className="text-base font-black text-[#2d6a4f]">+{docoePreview.total}pt</p>
              </div>
              <div className="mt-1 space-y-0.5">
                {docoePreview.reasons.slice(0, 3).map((r, i) => (
                  <p key={i} className="text-[10px] text-[#8aaa8a] flex gap-1">
                    <span className="text-[#52b788] flex-shrink-0">·</span>{r}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* メモ */}
      <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
        <label className="text-xs font-semibold text-[#4a5e4a]">メモ（任意）</label>
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)}
          placeholder="気づいたことを書いてみましょう" rows={2}
          className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 resize-none outline-none focus:border-[#52b788]" />
      </div>

      {/* 保存ボタン */}
      <button onClick={handleSave}
        disabled={!amount || Number(amount) <= 0 || !category}
        className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-colors ${
          !amount || Number(amount) <= 0 || !category ? "bg-[#c0c0c0] text-white" : "bg-[#2d6a4f] text-white active:bg-[#1a4731]"
        }`}>
        記録する
      </button>
    </div>
  );
}
