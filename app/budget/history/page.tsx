"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Trash2, Filter } from "lucide-react";
import {
  Transaction, EXPENSE_CATEGORIES, INCOME_CATEGORIES,
  PaymentMethod, DOCOE_CATEGORY_LABELS, DOCOE_CATEGORIES,
} from "@/lib/types";
import { getTransactions, deleteTransaction } from "@/lib/budgetStore";

function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function formatMonthLabel(m: string): string {
  const [y, mo] = m.split("-").map(Number);
  return `${y}年${mo}月`;
}
function formatDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}/${m}/${d}`;
}

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  cash: "現金", credit_card: "クレカ", debit_card: "デビット",
  qr_payment: "QR決済", bank_transfer: "銀行振込",
  transport_ic: "交通系IC", other: "その他",
};

function getCategoryEmoji(c: string): string {
  const m: Record<string, string> = {
    "食費":"🍱","日用品・雑貨":"🧴","外食・カフェ":"☕","交通費":"🚃",
    "衣類・ファッション":"👕","医療・健康":"💊","娯楽・趣味":"🎮","通信費":"📱",
    "水道光熱費":"💡","住居費":"🏠","教育・学習":"📚","保険":"🛡️","貯蓄・投資":"💰",
    "買い物（記録連携）":"🛍️","寄付":"🤝",
    "給与・賞与":"💴","副業・フリーランス":"💻","投資・配当":"📈","贈与・臨時収入":"🎁","その他収入":"💵",
  };
  return m[c] ?? "💳";
}

const ALL_CATEGORIES = ["すべて", ...EXPENSE_CATEGORIES, ...INCOME_CATEGORIES];

export default function BudgetHistoryPage() {
  const [all,           setAll]           = useState<Transaction[]>([]);
  const [filterMonth,   setFilterMonth]   = useState(currentMonth());
  const [filterType,    setFilterType]    = useState<"all" | "income" | "expense">("all");
  const [filterCat,     setFilterCat]     = useState("すべて");
  const [filterDocoe,   setFilterDocoe]   = useState(false);
  const [filterDocoeCAT, setFilterDocoeCAT] = useState<string>("すべて");
  const [showFilter,    setShowFilter]    = useState(false);
  const [deleteTarget,  setDeleteTarget]  = useState<string | null>(null);

  useEffect(() => {
    const load = () => setAll(getTransactions());
    load();
    window.addEventListener("docoe:budget:updated", load);
    return () => window.removeEventListener("docoe:budget:updated", load);
  }, []);

  function executeDelete() {
    if (!deleteTarget) return;
    deleteTransaction(deleteTarget);
    setAll(getTransactions());
    setDeleteTarget(null);
  }

  const filtered = all
    .filter((t) => t.date.startsWith(filterMonth))
    .filter((t) => filterType === "all" || t.type === filterType)
    .filter((t) => filterCat === "すべて" || t.category === filterCat)
    .filter((t) => !filterDocoe || (t.includeInDocoeScore && !!t.docoeScoreBreakdown))
    .filter((t) => filterDocoeCAT === "すべて" || t.docoeCategories.includes(filterDocoeCAT as never))
    .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));

  const totalIncome  = filtered.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = filtered.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);

  const months = [...new Set(all.map((t) => t.date.slice(0, 7)))]
    .sort((a, b) => b.localeCompare(a));
  if (!months.includes(currentMonth())) months.unshift(currentMonth());

  return (
    <div className="px-4 pt-6 pb-24 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/budget" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-[#1a4731]">収支履歴</h1>
          <p className="text-[10px] text-[#8aaa8a]">今月の選択を振り返る</p>
        </div>
        <button onClick={() => setShowFilter((v) => !v)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition-colors ${
            showFilter ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
          }`}>
          <Filter size={13} />絞り込み
        </button>
      </header>

      {/* フィルターパネル */}
      {showFilter && (
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
          {/* 月 */}
          <div>
            <p className="text-[11px] font-semibold text-[#4a5e4a] mb-1.5">月</p>
            <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)}
              className="w-full text-sm text-[#1a4731] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none">
              {months.map((m) => <option key={m} value={m}>{formatMonthLabel(m)}</option>)}
            </select>
          </div>
          {/* 種別 */}
          <div>
            <p className="text-[11px] font-semibold text-[#4a5e4a] mb-1.5">種別</p>
            <div className="flex gap-2">
              {(["all", "expense", "income"] as const).map((t) => (
                <button key={t} onClick={() => setFilterType(t)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border font-medium ${
                    filterType === t ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                  }`}>
                  {t === "all" ? "すべて" : t === "income" ? "収入" : "支出"}
                </button>
              ))}
            </div>
          </div>
          {/* カテゴリ */}
          <div>
            <p className="text-[11px] font-semibold text-[#4a5e4a] mb-1.5">カテゴリ</p>
            <div className="flex flex-wrap gap-1.5">
              {ALL_CATEGORIES.slice(0, 10).map((c) => (
                <button key={c} onClick={() => setFilterCat(c)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                    filterCat === c ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* docoe? 分類 */}
          <div>
            <p className="text-[11px] font-semibold text-[#4a5e4a] mb-1.5">docoe? 分類</p>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setFilterDocoeCAT("すべて")}
                className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                  filterDocoeCAT === "すべて" ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                }`}>
                すべて
              </button>
              {DOCOE_CATEGORIES.map((c) => (
                <button key={c} onClick={() => setFilterDocoeCAT(c)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                    filterDocoeCAT === c ? "bg-[#2d6a4f] text-white border-[#2d6a4f]" : "bg-white text-[#4a5e4a] border-[#ede8dc]"
                  }`}>
                  {DOCOE_CATEGORY_LABELS[c]}
                </button>
              ))}
            </div>
          </div>
          {/* docoe? スコアフィルター */}
          <button onClick={() => setFilterDocoe((v) => !v)}
            className={`flex items-center gap-2 text-[11px] font-semibold px-3 py-2 rounded-full border transition-colors ${
              filterDocoe ? "bg-[#f0f7f3] text-[#2d6a4f] border-[#b7e4c7]" : "bg-white text-[#8aaa8a] border-[#ede8dc]"
            }`}>
            <span>🌿</span> docoe? スコアあり のみ表示
          </button>
        </div>
      )}

      {/* 集計サマリー */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#f0f7f3] border border-[#b7e4c7] rounded-2xl p-3">
          <p className="text-[10px] text-[#8aaa8a]">収入合計</p>
          <p className="text-base font-black text-[#2d6a4f]">+{totalIncome.toLocaleString()}円</p>
        </div>
        <div className="bg-[#fff5ef] border border-[#f5d0b5] rounded-2xl p-3">
          <p className="text-[10px] text-[#8aaa8a]">支出合計</p>
          <p className="text-base font-black text-[#e07b39]">-{totalExpense.toLocaleString()}円</p>
        </div>
      </div>

      {/* 取引リスト */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 border border-[#ede8dc] text-center">
          <p className="text-sm text-[#8aaa8a]">条件に一致する記録がありません</p>
          <Link href="/budget/new"
            className="mt-3 inline-block text-xs text-[#2d6a4f] font-bold bg-[#f0f7f3] px-4 py-2 rounded-full">
            新しく記録する
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
          <p className="px-4 py-2.5 text-[10px] text-[#8aaa8a] border-b border-[#f5f5f5]">{filtered.length}件</p>
          <ul>
            {filtered.map((t, i) => (
              <li key={t.id}
                className={`flex items-start gap-3 px-4 py-3 ${i < filtered.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}>
                <span className="text-lg flex-shrink-0 mt-0.5">{getCategoryEmoji(t.category)}</span>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold text-[#1a4731] truncate">
                      {t.storeName || t.productName || t.category}
                    </p>
                    {t.linkedPurchaseRecordId && (
                      <span className="text-[9px] bg-[#f0f7f3] text-[#2d6a4f] px-1.5 py-0.5 rounded-full flex-shrink-0">
                        買い物連携
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-[#8aaa8a]">
                    {formatDate(t.date)} · {t.category}
                    {t.paymentMethod && t.paymentMethod !== "other" && (
                      <> · {PAYMENT_LABELS[t.paymentMethod]}</>
                    )}
                  </p>
                  {/* docoe? 分類 */}
                  {t.docoeCategories.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {t.docoeCategories.map((c) => (
                        <span key={c} className="text-[9px] bg-[#f0f7f3] text-[#2d6a4f] border border-[#b7e4c7] px-1.5 py-0.5 rounded-full">
                          {DOCOE_CATEGORY_LABELS[c]}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* 応援タグ */}
                  {t.supportTags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {t.supportTags.map((tag) => (
                        <span key={tag} className="text-[9px] bg-[#f0f5ff] text-[#4a90d9] border border-[#b7d4f0] px-1.5 py-0.5 rounded-full">
                          🤝 {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* 使い捨てタグ */}
                  {t.disposableTags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {t.disposableTags.map((tag) => (
                        <span key={tag} className="text-[9px] bg-[#fff5ef] text-[#e07b39] border border-[#f5d0b5] px-1.5 py-0.5 rounded-full">
                          ♻️ {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* docoe? スコア */}
                  {t.includeInDocoeScore && t.docoeScoreBreakdown && (
                    <p className="text-[10px] text-[#52b788] font-medium">
                      🌿 docoe? +{t.docoeScoreBreakdown.totalPoint}pt
                    </p>
                  )}
                  {t.memo && <p className="text-[10px] text-[#8aaa8a] truncate">📝 {t.memo}</p>}
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`text-sm font-black ${t.type === "income" ? "text-[#2d6a4f]" : "text-[#e07b39]"}`}>
                    {t.type === "income" ? "+" : "-"}{t.amount.toLocaleString()}円
                  </span>
                  <button onClick={() => setDeleteTarget(t.id)}
                    className="p-1 rounded-full text-[#c0c0c0] hover:text-red-400 hover:bg-red-50">
                    <Trash2 size={13} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 削除確認モーダル */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 pb-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 space-y-4 shadow-xl">
            <p className="text-sm font-bold text-[#1a4731] text-center">この記録を削除しますか？</p>
            <p className="text-[11px] text-[#8aaa8a] text-center">削除した記録は元に戻せません。</p>
            <div className="flex gap-2">
              <button onClick={() => setDeleteTarget(null)}
                className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm">
                キャンセル
              </button>
              <button onClick={executeDelete}
                className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-bold text-sm">
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
