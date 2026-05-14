"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, Legend, LineChart, Line,
} from "recharts";
import {
  getFullHistory, initHistory, formatMonthLabel,
  currentMonth, prevMonth, getPurchases,
} from "@/lib/store";
import { MonthlyScore, PurchaseRecord } from "@/lib/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type ViewMode = "bar" | "line" | "breakdown";

export default function HistoryPage() {
  const [history, setHistory] = useState<MonthlyScore[]>([]);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [view, setView] = useState<ViewMode>("bar");

  useEffect(() => {
    initHistory();
    setHistory(getFullHistory());
    setPurchases(getPurchases());
  }, []);

  const recent6 = history.slice(-6);

  const chartData = recent6.map((m) => ({
    name: formatMonthLabel(m.month).replace("年", "/").replace("月", ""),
    合計: m.totalScore,
    お金: m.moneyScore,
    ごみ: m.wasteScore,
    エコ: m.ecoScore,
    地域: m.localScore,
    気づき: m.awarenessScore,
  }));

  const cur = history.find((h) => h.month === currentMonth());
  const prev = history.find((h) => h.month === prevMonth(currentMonth()));

  // 今月の購入記録
  const curMonth = currentMonth();
  const monthPurchases = purchases.filter((p) => p.createdAt.startsWith(curMonth));

  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">月別スコア履歴</h1>
          <p className="text-[10px] text-[#8aaa8a]">過去6ヶ月の推移を確認</p>
        </div>
      </header>

      {/* 今月 vs 先月 */}
      <section className="grid grid-cols-2 gap-2">
        <div className="bg-[#1a4731] text-white rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] text-[#b7e4c7] mb-1">今月</p>
          <p className="text-3xl font-black">{cur?.totalScore ?? 0}</p>
          <p className="text-[10px] text-[#b7e4c7] mt-1">pt</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
          <p className="text-[10px] text-[#8aaa8a] mb-1">先月</p>
          <p className="text-3xl font-black text-[#4a5e4a]">{prev?.totalScore ?? 0}</p>
          <p className="text-[10px] text-[#8aaa8a] mt-1">pt</p>
        </div>
      </section>

      {/* タブ */}
      <div className="flex gap-1 bg-[#ede8dc] p-1 rounded-xl">
        {(["bar", "line", "breakdown"] as ViewMode[]).map((v) => {
          const labels: Record<ViewMode, string> = { bar: "月別比較", line: "推移グラフ", breakdown: "分野別" };
          return (
            <button key={v} onClick={() => setView(v)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${view === v ? "bg-white text-[#1a4731] shadow-sm" : "text-[#8aaa8a]"}`}>
              {labels[v]}
            </button>
          );
        })}
      </div>

      {/* グラフ */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
        {view === "bar" && (
          <>
            <p className="text-xs font-semibold text-[#4a5e4a] mb-3">月別総合スコア比較</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <YAxis tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Bar dataKey="合計" fill="#2d6a4f" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
        {view === "line" && (
          <>
            <p className="text-xs font-semibold text-[#4a5e4a] mb-3">スコア推移</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <YAxis tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Line type="monotone" dataKey="合計" stroke="#2d6a4f" strokeWidth={2.5} dot={{ fill: "#2d6a4f", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}
        {view === "breakdown" && (
          <>
            <p className="text-xs font-semibold text-[#4a5e4a] mb-3">分野別スコア比較</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <YAxis tick={{ fontSize: 10, fill: "#8aaa8a" }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Legend iconSize={10} wrapperStyle={{ fontSize: 10 }} />
                <Bar dataKey="お金"  stackId="a" fill="#4a90d9" />
                <Bar dataKey="ごみ"  stackId="a" fill="#2d6a4f" />
                <Bar dataKey="エコ"  stackId="a" fill="#52b788" />
                <Bar dataKey="地域"  stackId="a" fill="#1a7a5e" />
                <Bar dataKey="気づき" stackId="a" fill="#c9a227" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </section>

      {/* 今月の購入記録 */}
      {monthPurchases.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-xs font-semibold text-[#4a5e4a] px-1">今月の買い物記録</h2>
          {monthPurchases.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-[#1a4731]">{p.companyName}</p>
                  <p className="text-xs text-[#8aaa8a]">{p.productName} · {p.category}</p>
                  <p className="text-xs text-[#8aaa8a]">{p.amount.toLocaleString()}円</p>
                </div>
                <span className="text-sm font-bold text-[#4a90d9]">+{p.point}pt</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* 月別一覧 */}
      <section className="space-y-2">
        <h2 className="text-xs font-semibold text-[#4a5e4a] px-1">月別スコア一覧</h2>
        {[...recent6].reverse().map((m) => {
          const isCur = m.month === currentMonth();
          return (
            <div key={m.month}
              className={`bg-white rounded-2xl p-4 border shadow-sm ${isCur ? "border-[#52b788]" : "border-[#ede8dc]"}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#1a4731]">{formatMonthLabel(m.month)}</span>
                  {isCur && (
                    <span className="text-[10px] bg-[#b7e4c7] text-[#1a4731] px-2 py-0.5 rounded-full font-medium">今月</span>
                  )}
                </div>
                <span className="text-lg font-black text-[#2d6a4f]">{m.totalScore}pt</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {[
                  { label: "お金",   value: m.moneyScore,     color: "#4a90d9" },
                  { label: "ごみ",   value: m.wasteScore,     color: "#2d6a4f" },
                  { label: "エコ",   value: m.ecoScore,       color: "#52b788" },
                  { label: "地域",   value: m.localScore,     color: "#1a7a5e" },
                  { label: "気づき", value: m.awarenessScore, color: "#c9a227" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <p style={{ color }} className="text-sm font-bold">{value}</p>
                    <p className="text-[8px] text-[#8aaa8a]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
