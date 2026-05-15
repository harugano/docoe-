"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  PieChart, Pie, Cell, LineChart, Line,
} from "recharts";
import {
  getMonthlyIncome, getMonthlyExpense, getMonthlyBalance,
  getCategoryExpenseBreakdown, getMonthlyExpenseTrend,
  getRecentTransactions, getMonthlyDocoeScoreSummary,
  getLocalSpendingAmount, getLocalCirculationRate,
  getMonthlyLocalCirculationTrend,
  getSupportSpendingAmount, getSupportSpendingRatio,
  getMonthlySupportSpendingTrend, getSupportTagBreakdown,
  getDisposableSpendingAmount, getDisposableSpendingRatio,
  getMonthlyDisposableSpendingTrend, getDisposableTagBreakdown,
  getDocoeCategoryBreakdown,
  getBudgetProgress, getBudgetAlerts,
  type BudgetAlert,
} from "@/lib/budgetStore";
import { Transaction, DOCOE_CATEGORY_LABELS, type DocoeCategory } from "@/lib/types";
import Link from "next/link";
import {
  ChevronLeft, Plus, TrendingUp, TrendingDown, Wallet,
  Leaf, Settings, ChevronDown, ChevronUp, AlertCircle, CheckCircle,
} from "lucide-react";
import { getMonthlyScore } from "@/lib/store";

const PIE_COLORS = ["#2d6a4f","#52b788","#74c69d","#4a90d9","#c9a227","#e07b39","#8aaa8a","#e05252","#6a7a2a"];

const DOCOE_CAT_COLORS: Record<DocoeCategory, string> = {
  local_money:      "#2d6a4f",
  outside_money:    "#6a7a2a",
  eco_money:        "#52b788",
  disposable_money: "#e07b39",
  support_money:    "#4a90d9",
  awareness_money:  "#c9a227",
  other:            "#8aaa8a",
};

function fmtYen(n: number): string { return n.toLocaleString("ja-JP") + "円"; }
function fmtM(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return `${y}/${m}`;
}

function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function prevMonth(m: string): string {
  const [y, mo] = m.split("-").map(Number);
  const d = new Date(y, mo - 2, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function nextMonth(m: string): string {
  const [y, mo] = m.split("-").map(Number);
  const d = new Date(y, mo, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function formatMonthLabel(m: string): string {
  const [y, mo] = m.split("-").map(Number);
  return `${y}年${mo}月`;
}
function formatDateLabel(date: string): string {
  const [, mo, d] = date.split("-").map(Number);
  return `${mo}/${d}`;
}

function ProgressBar({ ratio, color, alert }: { ratio: number; color?: string; alert?: boolean }) {
  const clamp = Math.min(ratio, 100);
  const bg = alert ? "#e05252" : (color ?? "#2d6a4f");
  return (
    <div className="h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all" style={{ width: `${clamp}%`, background: bg }} />
    </div>
  );
}

function AlertBanner({ alert }: { alert: BudgetAlert }) {
  const icons = { good: <CheckCircle size={13} className="text-[#2d6a4f] flex-shrink-0 mt-0.5" />, info: <AlertCircle size={13} className="text-[#4a90d9] flex-shrink-0 mt-0.5" />, caution: <AlertCircle size={13} className="text-[#e07b39] flex-shrink-0 mt-0.5" /> };
  const bg = { good: "bg-[#f0f7f3] border-[#b7e4c7]", info: "bg-[#f0f5ff] border-[#b7d4f0]", caution: "bg-[#fff5ef] border-[#f5d0b5]" };
  return (
    <div className={`flex gap-2 rounded-xl border px-3 py-2.5 ${bg[alert.severity]}`}>
      {icons[alert.severity]}
      <p className="text-[11px] text-[#4a5e4a] leading-relaxed">{alert.message}</p>
    </div>
  );
}

function getCategoryEmoji(category: string): string {
  const m: Record<string, string> = {
    "食費":"🍱","日用品・雑貨":"🧴","外食・カフェ":"☕","交通費":"🚃",
    "衣類・ファッション":"👕","医療・健康":"💊","娯楽・趣味":"🎮","通信費":"📱",
    "水道光熱費":"💡","住居費":"🏠","教育・学習":"📚","保険":"🛡️","貯蓄・投資":"💰",
    "買い物（記録連携）":"🛍️","寄付":"🤝",
  };
  return m[category] ?? "💳";
}

export default function BudgetPage() {
  const [month, setMonth] = useState(currentMonth());

  // 基本収支
  const [income,  setIncome]  = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  // カテゴリ別
  const [breakdown, setBreakdown] = useState<{ category: string; amount: number }[]>([]);

  // docoe? 独自分類別
  const [docoeBrk, setDocoeBrk] = useState<{ category: DocoeCategory; amount: number }[]>([]);

  // 地域内循環
  const [localAmt,  setLocalAmt]  = useState(0);
  const [localRate, setLocalRate] = useState(0);
  const [localTrend, setLocalTrend] = useState<{ month: string; rate: number; amount: number }[]>([]);

  // 応援支出
  const [supportAmt,   setSupportAmt]   = useState(0);
  const [supportRatio, setSupportRatio] = useState(0);
  const [supportTrend, setSupportTrend] = useState<{ month: string; amount: number }[]>([]);
  const [supportTags,  setSupportTags]  = useState<{ tag: string; amount: number }[]>([]);

  // 使い捨て支出
  const [disposableAmt,   setDisposableAmt]   = useState(0);
  const [disposableRatio, setDisposableRatio] = useState(0);
  const [disposableTrend, setDisposableTrend] = useState<{ month: string; amount: number }[]>([]);
  const [disposableTags,  setDisposableTags]  = useState<{ tag: string; amount: number }[]>([]);

  // 収支トレンド
  const [trend, setTrend] = useState<{ month: string; income: number; expense: number }[]>([]);

  // 最近の取引
  const [recent, setRecent] = useState<Transaction[]>([]);

  // docoe? スコア
  const [docoeScore, setDocoeScore] = useState<{ totalDocoeScore: number; totalDocoeAmount: number }>({ totalDocoeScore: 0, totalDocoeAmount: 0 });

  // 予算進捗
  const [budgetProgress, setBudgetProgress] = useState<ReturnType<typeof getBudgetProgress> | null>(null);
  const [budgetAlerts, setBudgetAlerts] = useState<BudgetAlert[]>([]);

  // セクション展開
  const [showDocoe,       setShowDocoe]       = useState(false);
  const [showSupport,     setShowSupport]      = useState(false);
  const [showDisposable,  setShowDisposable]   = useState(false);
  const [showBudget,      setShowBudget]       = useState(false);

  useEffect(() => {
    const load = () => {
      setIncome(getMonthlyIncome(month));
      setExpense(getMonthlyExpense(month));
      setBalance(getMonthlyBalance(month));
      setBreakdown(getCategoryExpenseBreakdown(month));
      setDocoeBrk(getDocoeCategoryBreakdown(month));
      setLocalAmt(getLocalSpendingAmount(month));
      setLocalRate(getLocalCirculationRate(month));
      setLocalTrend(getMonthlyLocalCirculationTrend(6));
      setSupportAmt(getSupportSpendingAmount(month));
      setSupportRatio(getSupportSpendingRatio(month));
      setSupportTrend(getMonthlySupportSpendingTrend(6));
      setSupportTags(getSupportTagBreakdown(month));
      setDisposableAmt(getDisposableSpendingAmount(month));
      setDisposableRatio(getDisposableSpendingRatio(month));
      setDisposableTrend(getMonthlyDisposableSpendingTrend(6));
      setDisposableTags(getDisposableTagBreakdown(month));
      setTrend(getMonthlyExpenseTrend(6));
      setRecent(getRecentTransactions(10));
      const ds = getMonthlyDocoeScoreSummary(month);
      setDocoeScore(ds);
      const totalDocoeScore = getMonthlyScore(month).totalScore;
      const progress = getBudgetProgress(month, totalDocoeScore);
      setBudgetProgress(progress);
      setBudgetAlerts(getBudgetAlerts(month, totalDocoeScore));
    };
    load();
    window.addEventListener("docoe:budget:updated", load);
    window.addEventListener("docoe:updated", load);
    return () => {
      window.removeEventListener("docoe:budget:updated", load);
      window.removeEventListener("docoe:updated", load);
    };
  }, [month]);

  const isCurrentMonth = month === currentMonth();
  const trendData = trend.map((t) => ({ name: fmtM(t.month), 収入: t.income, 支出: t.expense }));

  const recentForMonth = recent.filter((t) => t.date.startsWith(month));

  const prevMonthStr = prevMonth(month);
  const prevLocalRate = getMonthlyLocalCirculationTrend(2)[0]?.rate ?? 0;
  const localDiff = localRate - prevLocalRate;

  return (
    <div className="px-4 pt-6 pb-24 space-y-5">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-[#1a4731]">家計簿</h1>
          <p className="text-[10px] text-[#8aaa8a]">お金の行き先を見える化する</p>
        </div>
        <Link href="/budget/settings"
          className="p-2 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <Settings size={16} className="text-[#4a5e4a]" />
        </Link>
        <Link href="/budget/new"
          className="flex items-center gap-1.5 bg-[#2d6a4f] text-white text-xs font-bold px-3 py-2 rounded-full shadow-sm">
          <Plus size={14} />記録
        </Link>
      </header>

      {/* 月選択 */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => setMonth(prevMonth(month))}
          className="px-3 py-1.5 rounded-full bg-white border border-[#ede8dc] text-[#4a5e4a] text-xs font-bold shadow-sm">
          ‹ 前月
        </button>
        <span className="text-sm font-bold text-[#1a4731]">{formatMonthLabel(month)}</span>
        <button onClick={() => { if (!isCurrentMonth) setMonth(nextMonth(month)); }}
          disabled={isCurrentMonth}
          className={`px-3 py-1.5 rounded-full border text-xs font-bold shadow-sm ${
            isCurrentMonth ? "bg-[#f5f5f5] border-[#e8e8e8] text-[#c0c0c0]" : "bg-white border-[#ede8dc] text-[#4a5e4a]"
          }`}>
          翌月 ›
        </button>
      </div>

      {/* 収支サマリー */}
      <section
        className="rounded-3xl p-5 text-white shadow-md relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />
        <p className="text-[11px] text-[#b7e4c7] mb-3">{formatMonthLabel(month)}の収支</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp size={12} className="text-[#74c69d]" />
              <p className="text-[10px] text-[#b7e4c7]">収入</p>
            </div>
            <p className="text-xl font-black text-[#74c69d]">
              {income > 0 ? `${(income / 10000).toFixed(1)}万` : "—"}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <TrendingDown size={12} className="text-red-300" />
              <p className="text-[10px] text-[#b7e4c7]">支出</p>
            </div>
            <p className="text-xl font-black text-red-300">
              {expense > 0 ? `${(expense / 10000).toFixed(1)}万` : "—"}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Wallet size={12} className="text-white/80" />
              <p className="text-[10px] text-[#b7e4c7]">残高</p>
            </div>
            <p className={`text-xl font-black ${income === 0 && expense === 0 ? "text-white/40" : balance >= 0 ? "text-white" : "text-red-300"}`}>
              {income === 0 && expense === 0 ? "—" : (balance >= 0 ? "+" : "") + (balance / 10000).toFixed(1) + "万"}
            </p>
          </div>
        </div>
      </section>

      {/* 予算アラート */}
      {budgetAlerts.length > 0 && (
        <section className="space-y-2">
          {budgetAlerts.slice(0, 3).map((a, i) => <AlertBanner key={i} alert={a} />)}
          {budgetAlerts.length > 3 && (
            <p className="text-[10px] text-[#8aaa8a] text-center">他 {budgetAlerts.length - 3} 件のアラートあり</p>
          )}
        </section>
      )}

      {/* ══ 地域内循環率 ══ */}
      <section className={`rounded-2xl border shadow-sm overflow-hidden ${localAmt > 0 ? "bg-[#f0f7f3] border-[#b7e4c7]" : "bg-white border-[#ede8dc]"}`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs font-bold text-[#1a4731]">🏘️ 今月の地域内循環率</p>
              <p className="text-[10px] text-[#8aaa8a]">あなたのお金が地域に残った割合</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-[#2d6a4f]">{localRate.toFixed(1)}%</p>
              {localDiff !== 0 && (
                <p className={`text-[10px] font-medium ${localDiff > 0 ? "text-[#2d6a4f]" : "text-[#8aaa8a]"}`}>
                  {localDiff > 0 ? "▲" : "▼"} 前月比 {Math.abs(localDiff).toFixed(1)}%
                </p>
              )}
            </div>
          </div>
          {expense > 0 && (
            <div className="space-y-1">
              <ProgressBar ratio={localRate} />
              <div className="flex items-center justify-between text-[10px] text-[#8aaa8a]">
                <span>地域消費：{fmtYen(localAmt)}</span>
                <span>支出合計：{fmtYen(expense)}</span>
              </div>
            </div>
          )}
          <p className="text-[10px] text-[#4a5e4a] mt-2 leading-relaxed">
            {localRate >= 20
              ? "今月はお金のうち、多くが地域に残る支出でした。地域の循環に貢献しています。"
              : localRate > 0
              ? `今月のお金のうち、${localRate.toFixed(1)}%が地域に残る支出でした。`
              : "「地域に残るお金」の分類を付けると、地域内循環率が表示されます。"}
            {localDiff > 0 && " 先月より地域循環が少し増えています。"}
          </p>
        </div>

        {localTrend.some((t) => t.amount > 0) && (
          <div className="px-4 pb-4">
            <p className="text-[10px] text-[#8aaa8a] mb-2">月別地域内循環率（%）</p>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={localTrend.map((t) => ({ name: fmtM(t.month), 循環率: t.rate }))}>
                <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#8aaa8a" }} />
                <YAxis tick={{ fontSize: 9, fill: "#8aaa8a" }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} width={35} />
                <Tooltip formatter={(v: unknown) => `${Number(v).toFixed(1)}%`} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                <Line type="monotone" dataKey="循環率" stroke="#2d6a4f" strokeWidth={2} dot={{ r: 3, fill: "#2d6a4f" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      {/* ══ 応援支出 ══ */}
      <section className={`rounded-2xl border shadow-sm overflow-hidden transition-all ${supportAmt > 0 ? "bg-[#f0f5ff] border-[#b7d4f0]" : "bg-white border-[#ede8dc]"}`}>
        <button onClick={() => setShowSupport((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3">
          <div className="flex-1 text-left">
            <p className="text-xs font-bold text-[#1a4731]">🤝 今月の応援支出</p>
            <p className="text-[10px] text-[#8aaa8a]">
              {supportAmt > 0
                ? `${fmtYen(supportAmt)}（支出全体の${supportRatio.toFixed(1)}%）`
                : "応援のお金の分類を付けると集計されます"}
            </p>
          </div>
          {showSupport ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
        </button>
        {showSupport && (
          <div className="px-4 pb-4 space-y-3 border-t border-[#f0f0f0]">
            <p className="text-[11px] text-[#4a5e4a] leading-relaxed pt-2">
              今月は{fmtYen(supportAmt)}が「誰かや地域を応援するお金」として記録されています。<br />
              応援支出は、あなたのお金が誰かの活動や地域の未来につながる支出です。
            </p>
            {supportAmt > 0 && expense > 0 && (
              <div>
                <ProgressBar ratio={supportRatio} color="#4a90d9" />
                <p className="text-[10px] text-[#8aaa8a] mt-1">支出全体の {supportRatio.toFixed(1)}%</p>
              </div>
            )}
            {supportTags.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[10px] font-semibold text-[#4a5e4a]">応援支出の内訳</p>
                {supportTags.map((t) => (
                  <div key={t.tag} className="flex items-center justify-between">
                    <span className="text-[11px] text-[#4a5e4a]">{t.tag}</span>
                    <span className="text-[11px] font-bold text-[#4a90d9]">{fmtYen(t.amount)}</span>
                  </div>
                ))}
              </div>
            )}
            {supportTrend.some((t) => t.amount > 0) && (
              <ResponsiveContainer width="100%" height={90}>
                <BarChart data={supportTrend.map((t) => ({ name: fmtM(t.month), 応援: t.amount }))}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#8aaa8a" }} />
                  <YAxis tick={{ fontSize: 9, fill: "#8aaa8a" }} tickFormatter={(v: number) => `${(v / 10000).toFixed(0)}万`} />
                  <Tooltip formatter={(v: unknown) => fmtYen(Number(v))} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <Bar dataKey="応援" fill="#4a90d9" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        )}
      </section>

      {/* ══ 使い捨て支出 ══ */}
      <section className={`rounded-2xl border shadow-sm overflow-hidden ${disposableAmt > 0 ? "bg-[#fff5ef] border-[#f5d0b5]" : "bg-white border-[#ede8dc]"}`}>
        <button onClick={() => setShowDisposable((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3">
          <div className="flex-1 text-left">
            <p className="text-xs font-bold text-[#1a4731]">♻️ 今月の使い捨て支出</p>
            <p className="text-[10px] text-[#8aaa8a]">
              {disposableAmt > 0
                ? `${fmtYen(disposableAmt)}（支出全体の${disposableRatio.toFixed(1)}%）`
                : "使い捨てにつながるお金の分類を付けると集計されます"}
            </p>
          </div>
          {showDisposable ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
        </button>
        {showDisposable && (
          <div className="px-4 pb-4 space-y-3 border-t border-[#f0f0f0]">
            <p className="text-[11px] text-[#4a5e4a] leading-relaxed pt-2">
              {disposableAmt > 0
                ? "今月は使い捨てにつながる支出が少し多めでした。来月はマイボトルや詰め替え商品を試すと、エコスコアが伸びやすくなります。"
                : "この表示は、日々の選択に気づくための参考情報です。責めるためではありません。"}
            </p>
            {disposableAmt > 0 && expense > 0 && (
              <div>
                <ProgressBar ratio={disposableRatio} color="#e07b39" />
                <p className="text-[10px] text-[#8aaa8a] mt-1">支出全体の {disposableRatio.toFixed(1)}%</p>
              </div>
            )}
            {disposableTags.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[10px] font-semibold text-[#4a5e4a]">使い捨て支出の内訳</p>
                {disposableTags.map((t) => (
                  <div key={t.tag} className="flex items-center justify-between">
                    <span className="text-[11px] text-[#4a5e4a]">{t.tag}</span>
                    <span className="text-[11px] font-bold text-[#e07b39]">{fmtYen(t.amount)}</span>
                  </div>
                ))}
              </div>
            )}
            {disposableTrend.some((t) => t.amount > 0) && (
              <ResponsiveContainer width="100%" height={90}>
                <BarChart data={disposableTrend.map((t) => ({ name: fmtM(t.month), 使い捨て: t.amount }))}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#8aaa8a" }} />
                  <YAxis tick={{ fontSize: 9, fill: "#8aaa8a" }} tickFormatter={(v: number) => `${(v / 10000).toFixed(0)}万`} />
                  <Tooltip formatter={(v: unknown) => fmtYen(Number(v))} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <Bar dataKey="使い捨て" fill="#e07b39" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        )}
      </section>

      {/* ══ docoe? 独自分類グラフ ══ */}
      {docoeBrk.length > 0 && (
        <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
          <button onClick={() => setShowDocoe((v) => !v)}
            className="w-full flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#1a4731]">🌐 docoe? 分類別支出</p>
              <p className="text-[10px] text-[#8aaa8a]">お金の行き先の内訳</p>
            </div>
            {showDocoe ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
          </button>
          {showDocoe && (
            <div className="mt-3 space-y-2">
              {docoeBrk.map((item) => {
                const pct = expense > 0 ? Math.round((item.amount / expense) * 100) : 0;
                return (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] text-[#4a5e4a]">{DOCOE_CATEGORY_LABELS[item.category]}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#8aaa8a]">{pct}%</span>
                        <span className="text-[11px] font-bold text-[#1a4731]">{fmtYen(item.amount)}</span>
                      </div>
                    </div>
                    <ProgressBar ratio={pct} color={DOCOE_CAT_COLORS[item.category]} />
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ══ 予算進捗 ══ */}
      <section className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
        <button onClick={() => setShowBudget((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1a4731]">📊 予算進捗</p>
            <p className="text-[10px] text-[#8aaa8a]">
              {budgetProgress && budgetProgress.totalBudget > 0
                ? `総支出 ${fmtYen(budgetProgress.totalSpent)} / ${fmtYen(budgetProgress.totalBudget)}`
                : "予算を設定すると進捗が表示されます"}
            </p>
          </div>
          {showBudget ? <ChevronUp size={16} className="text-[#8aaa8a]" /> : <ChevronDown size={16} className="text-[#8aaa8a]" />}
        </button>

        {showBudget && budgetProgress && (
          <div className="px-4 pb-4 space-y-4 border-t border-[#f0f0f0]">
            {/* カテゴリ別 */}
            {budgetProgress.categoryProgress.length > 0 ? (
              <div className="pt-3 space-y-3">
                {budgetProgress.categoryProgress.map((cp) => (
                  <div key={cp.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#4a5e4a]">{getCategoryEmoji(cp.category)} {cp.category}</span>
                      <span className="text-[11px] font-bold text-[#1a4731]">
                        {fmtYen(cp.spent)} / {fmtYen(cp.budget)}
                      </span>
                    </div>
                    <ProgressBar ratio={cp.ratio} alert={cp.ratio >= 100} />
                    <p className="text-[10px] text-[#8aaa8a] mt-0.5">{cp.ratio}%使用</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pt-3 text-center">
                <p className="text-xs text-[#8aaa8a]">カテゴリ別予算が設定されていません</p>
                <Link href="/budget/settings"
                  className="mt-2 inline-block text-xs text-[#2d6a4f] font-bold bg-[#f0f7f3] px-4 py-2 rounded-full">
                  予算を設定する
                </Link>
              </div>
            )}

            {/* docoe? 目標 */}
            {(budgetProgress.localTarget > 0 || budgetProgress.supportTarget > 0 || budgetProgress.ecoTarget > 0 || budgetProgress.disposableLimit > 0 || budgetProgress.docoeScoreTarget > 0) && (
              <div className="space-y-3 border-t border-[#f0f0f0] pt-3">
                <p className="text-[10px] font-semibold text-[#4a5e4a]">docoe? 独自目標</p>

                {budgetProgress.localTarget > 0 && (
                  <GoalBar label="🏘️ 地域消費" current={budgetProgress.localAmount} target={budgetProgress.localTarget} unit="円" color="#2d6a4f" />
                )}
                {budgetProgress.supportTarget > 0 && (
                  <GoalBar label="🤝 応援支出" current={budgetProgress.supportAmount} target={budgetProgress.supportTarget} unit="円" color="#4a90d9" />
                )}
                {budgetProgress.ecoTarget > 0 && (
                  <GoalBar label="🌿 エコ支出" current={budgetProgress.ecoAmount} target={budgetProgress.ecoTarget} unit="円" color="#52b788" />
                )}
                {budgetProgress.disposableLimit > 0 && (
                  <GoalBar label="♻️ 使い捨て上限" current={budgetProgress.disposableAmount} target={budgetProgress.disposableLimit} unit="円" color="#e07b39" reverse />
                )}
                {budgetProgress.docoeScoreTarget > 0 && (
                  <GoalBar label="⭐ docoe?スコア" current={budgetProgress.docoeScore} target={budgetProgress.docoeScoreTarget} unit="pt" color="#c9a227" />
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ══ カテゴリ別支出グラフ ══ */}
      {breakdown.length > 0 && (
        <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
          <h2 className="text-xs font-semibold text-[#4a5e4a] mb-3">カテゴリ別支出</h2>
          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0">
              <PieChart width={130} height={130}>
                <Pie data={breakdown} dataKey="amount" nameKey="category" cx={65} cy={65} innerRadius={38} outerRadius={60} paddingAngle={2}>
                  {breakdown.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: unknown) => fmtYen(Number(v))} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
              </PieChart>
            </div>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              {breakdown.slice(0, 6).map((item, i) => {
                const pct = expense > 0 ? Math.round((item.amount / expense) * 100) : 0;
                return (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                        <span className="text-[11px] text-[#4a5e4a] truncate">{item.category}</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#1a4731] flex-shrink-0 ml-1">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: PIE_COLORS[i % PIE_COLORS.length] }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══ docoe? スコア ══ */}
      {docoeScore.totalDocoeAmount > 0 && (
        <section className="bg-[#f0f7f3] border border-[#b7e4c7] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={14} className="text-[#2d6a4f]" />
            <p className="text-xs font-bold text-[#1a4731]">docoe? スコアのある支出</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] text-[#8aaa8a]">対象金額</p>
              <p className="text-sm font-black text-[#2d6a4f]">{fmtYen(docoeScore.totalDocoeAmount)}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8aaa8a]">獲得スコア</p>
              <p className="text-sm font-black text-[#2d6a4f]">+{docoeScore.totalDocoeScore}pt</p>
            </div>
          </div>
        </section>
      )}

      {/* ══ 月別収支トレンド ══ */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-1">月別収支推移（直近6ヶ月）</h2>
        {trendData.some((d) => d.収入 > 0 || d.支出 > 0) ? (
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={trendData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#8aaa8a" }} />
              <YAxis tick={{ fontSize: 9, fill: "#8aaa8a" }} tickFormatter={(v: number) => `${(v / 10000).toFixed(0)}万`} />
              <Tooltip formatter={(v: unknown) => fmtYen(Number(v))} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: 10 }} />
              <Bar dataKey="収入" fill="#52b788" radius={[3, 3, 0, 0]} />
              <Bar dataKey="支出" fill="#e07b39" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-xs text-[#8aaa8a] text-center py-8">記録を追加するとグラフが表示されます</p>
        )}
      </section>

      {/* ══ 最近の取引 ══ */}
      <section className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#ede8dc]">
          <h2 className="text-xs font-semibold text-[#4a5e4a]">{formatMonthLabel(month)}の取引</h2>
          <Link href="/budget/history" className="text-[11px] text-[#4a90d9] font-medium">すべて見る ›</Link>
        </div>
        {recentForMonth.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-xs text-[#8aaa8a]">この月の取引記録はありません</p>
            <Link href="/budget/new"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#2d6a4f] font-bold bg-[#f0f7f3] px-4 py-2 rounded-full">
              <Plus size={13} />最初の記録を追加
            </Link>
          </div>
        ) : (
          <ul>
            {recentForMonth.slice(0, 6).map((t, i) => (
              <li key={t.id}
                className={`flex items-start gap-3 px-4 py-3 ${i < Math.min(recentForMonth.length, 6) - 1 ? "border-b border-[#f5f5f5]" : ""}`}>
                <span className="text-lg mt-0.5 flex-shrink-0">
                  {t.type === "income" ? "💴" : getCategoryEmoji(t.category)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#1a4731] truncate">
                    {t.storeName || t.productName || t.category}
                  </p>
                  <p className="text-[10px] text-[#8aaa8a] mt-0.5">
                    {formatDateLabel(t.date)} · {t.category}
                    {t.includeInDocoeScore && t.docoeScoreBreakdown && (
                      <span className="ml-1 text-[#52b788] font-medium">+{t.docoeScoreBreakdown.totalPoint}pt</span>
                    )}
                  </p>
                  {t.docoeCategories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {t.docoeCategories.slice(0, 2).map((c) => (
                        <span key={c} className="text-[9px] bg-[#f0f7f3] text-[#2d6a4f] px-1.5 py-0.5 rounded-full">
                          {DOCOE_CATEGORY_LABELS[c]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className={`text-sm font-black flex-shrink-0 ${t.type === "income" ? "text-[#2d6a4f]" : "text-[#e07b39]"}`}>
                  {t.type === "income" ? "+" : "-"}{t.amount.toLocaleString()}円
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ナビゲーション */}
      <div className="grid grid-cols-3 gap-2">
        <Link href="/budget/new"
          className="flex flex-col items-center gap-1.5 bg-[#2d6a4f] text-white rounded-2xl p-3 shadow-sm active:scale-95">
          <Plus size={18} />
          <span className="text-[11px] font-bold">新しく記録</span>
        </Link>
        <Link href="/budget/history"
          className="flex flex-col items-center gap-1.5 bg-white border border-[#ede8dc] text-[#4a5e4a] rounded-2xl p-3 shadow-sm">
          <span className="text-base">📋</span>
          <span className="text-[11px] font-bold">履歴</span>
        </Link>
        <Link href="/budget/settings"
          className="flex flex-col items-center gap-1.5 bg-white border border-[#ede8dc] text-[#4a5e4a] rounded-2xl p-3 shadow-sm">
          <Settings size={18} />
          <span className="text-[11px] font-bold">予算設定</span>
        </Link>
      </div>
    </div>
  );
}

function GoalBar({
  label, current, target, unit, color, reverse,
}: {
  label: string;
  current: number;
  target: number;
  unit: string;
  color?: string;
  reverse?: boolean; // trueの場合、超過がカーション
}) {
  const ratio = target > 0 ? Math.round((current / target) * 100) : 0;
  const isOver = ratio >= 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] text-[#4a5e4a]">{label}</span>
        <span className="text-[11px] font-bold" style={{ color: isOver ? (reverse ? "#e07b39" : "#2d6a4f") : "#1a4731" }}>
          {current.toLocaleString()}{unit} / {target.toLocaleString()}{unit}
        </span>
      </div>
      <ProgressBar ratio={ratio} color={color} alert={reverse && isOver} />
      <p className="text-[10px] text-[#8aaa8a] mt-0.5">
        {isOver
          ? (reverse ? "上限に達しました" : "目標達成！")
          : `目標まであと${(target - current).toLocaleString()}${unit}`}
      </p>
    </div>
  );
}
