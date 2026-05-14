"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import {
  getMonthlyScore, getRecentMonths, initHistory,
  currentMonth, prevMonth, formatMonthLabel,
} from "@/lib/store";
import { MonthlyScore } from "@/lib/types";
import ScoreCard from "@/components/ScoreCard";
import Link from "next/link";

function diffLabel(cur: number, prev: number) {
  if (prev === 0) return null;
  const diff = cur - prev;
  if (diff === 0) return { text: "先月と同じ", positive: false };
  return { text: diff > 0 ? `先月比 +${diff}pt` : `先月比 ${diff}pt`, positive: diff > 0 };
}

function highlightComment(score: MonthlyScore, prevScore: MonthlyScore | null): string {
  if (!prevScore || prevScore.totalScore === 0)
    return "今月の記録を積み重ねましょう。小さな気づきが社会とつながります。";
  const diff = score.totalScore - prevScore.totalScore;
  if (diff > 20) return `先月より${diff}pt増！大きな気づきの月になりました。`;
  if (diff > 0)  return "着実にスコアが上がっています。この調子で続けましょう！";
  if (diff === 0) return "先月と同じペース。新しいエコ行動や買い物記録を試してみませんか？";
  if (score.ecoScore > score.wasteScore)
    return "エコ行動が積み上がっています。ごみの分別も意識してみましょう。";
  return "ごみの行き先を記録して、循環を可視化しましょう。";
}

export default function HomePage() {
  const [cur, setCur] = useState<MonthlyScore | null>(null);
  const [prev, setPrev] = useState<MonthlyScore | null>(null);
  const [chart, setChart] = useState<MonthlyScore[]>([]);

  useEffect(() => {
    initHistory();
    const now = currentMonth();
    const last = prevMonth(now);
    setCur(getMonthlyScore(now));
    setPrev(getMonthlyScore(last));
    setChart(getRecentMonths(6));
  }, []);

  if (!cur) return null;

  const diff = prev ? diffLabel(cur.totalScore, prev.totalScore) : null;
  const comment = highlightComment(cur, prev);

  const chartData = chart.map((m) => ({
    name: formatMonthLabel(m.month).replace("年", "/").replace("月", ""),
    合計: m.totalScore,
    お金: m.moneyScore,
    ごみ: m.wasteScore,
    エコ: m.ecoScore,
    地域: m.localScore,
  }));

  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      {/* ヘッダー */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1a4731] tracking-tight">
            docoe<span className="text-[#52b788]">?</span>
          </h1>
          <p className="text-[11px] text-[#4a5e4a] mt-0.5">なくなった先に、社会が見える。</p>
        </div>
        <div className="text-[11px] text-[#8aaa8a]">{formatMonthLabel(currentMonth())}</div>
      </header>

      {/* メインスコアカード */}
      <section
        className="rounded-3xl p-5 text-white shadow-md relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />
        <p className="text-xs text-[#b7e4c7] mb-1">今月のdocoe?スコア</p>
        <div className="flex items-end gap-2">
          <span className="text-6xl font-black leading-none">{cur.totalScore}</span>
          <span className="text-xl text-[#b7e4c7] mb-1">pt</span>
        </div>
        {diff && (
          <p className={`text-xs mt-2 font-medium ${diff.positive ? "text-[#b7e4c7]" : "text-red-300"}`}>
            {diff.text}
          </p>
        )}
        <p className="text-[11px] text-[#b7e4c7]/80 mt-3 leading-relaxed">{comment}</p>
      </section>

      {/* スコア内訳 — 5項目 */}
      <section>
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-2 px-1">スコア内訳</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <ScoreCard label="お金のめぐりスコア" score={cur.moneyScore}     icon="💴" color="#4a90d9" />
          <ScoreCard label="ごみのめぐりスコア" score={cur.wasteScore}     icon="♻️" color="#2d6a4f" />
          <ScoreCard label="エコスコア"         score={cur.ecoScore}       icon="🌿" color="#52b788" />
          <ScoreCard label="地域循環スコア"      score={cur.localScore}     icon="🏘️" color="#1a7a5e" />
          <ScoreCard label="気づきスコア"        score={cur.awarenessScore} icon="💡" color="#c9a227" />
        </div>
      </section>

      {/* 月別グラフ */}
      <section className="bg-white rounded-2xl p-4 shadow-sm border border-[#ede8dc]">
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-3">月別スコア推移（過去6ヶ月）</h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#8aaa8a" }} />
              <YAxis tick={{ fontSize: 10, fill: "#8aaa8a" }} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #ede8dc" }} />
              <Bar dataKey="合計" fill="#2d6a4f" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-xs text-[#8aaa8a] text-center py-8">記録を追加するとグラフが表示されます</p>
        )}
      </section>

      {/* クイックアクション */}
      <section>
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-2 px-1">今日の記録</h2>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/record/waste"
            className="bg-[#2d6a4f] text-white rounded-2xl p-3 flex flex-col gap-1 shadow-sm active:scale-95 transition-transform">
            <span className="text-lg">🗑️</span>
            <span className="text-xs font-bold">ごみ記録</span>
            <span className="text-[9px] text-[#b7e4c7]">処理先を確認</span>
          </Link>
          <Link href="/record/eco"
            className="bg-[#52b788] text-white rounded-2xl p-3 flex flex-col gap-1 shadow-sm active:scale-95 transition-transform">
            <span className="text-lg">🌿</span>
            <span className="text-xs font-bold">エコ記録</span>
            <span className="text-[9px] text-white/80">行動を積み上げ</span>
          </Link>
          <Link href="/record/purchase"
            className="text-white rounded-2xl p-3 flex flex-col gap-1 shadow-sm active:scale-95 transition-transform"
            style={{ background: "linear-gradient(135deg, #4a90d9 0%, #2d5fa0 100%)" }}>
            <span className="text-lg">💴</span>
            <span className="text-xs font-bold">買い物記録</span>
            <span className="text-[9px] text-white/80">お金の行き先</span>
          </Link>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-[#ede8dc] rounded-2xl p-4 border border-[#d4cfc5]">
        <div className="flex items-center gap-2">
          <span className="text-lg">💬</span>
          <div>
            <p className="text-sm font-bold text-[#1a4731]">思い出チャット</p>
            <p className="text-[10px] text-[#8aaa8a]">Coming Soon — AIが思い出の新しい活用を提案</p>
          </div>
          <span className="ml-auto text-[10px] bg-[#c8d8c8] text-[#4a5e4a] px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
            近日公開
          </span>
        </div>
      </section>
    </div>
  );
}
