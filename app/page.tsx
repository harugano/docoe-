"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import {
  getMonthlyScore, getRecentMonths, initHistory,
  currentMonth, prevMonth, formatMonthLabel,
  currentDate, getDailyScore,
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
  const [cur, setCur]       = useState<MonthlyScore | null>(null);
  const [prev, setPrev]     = useState<MonthlyScore | null>(null);
  const [chart, setChart]   = useState<MonthlyScore[]>([]);
  const [daily, setDaily]   = useState<MonthlyScore | null>(null);
  const [today, setToday]   = useState<string>("");

  useEffect(() => {
    const loadData = () => {
      initHistory();
      const now  = currentMonth();
      const last = prevMonth(now);
      const date = currentDate();
      setCur(getMonthlyScore(now));
      setPrev(getMonthlyScore(last));
      setChart(getRecentMonths(6));
      setDaily(getDailyScore(date));
      setToday(date);
    };

    loadData();
    // 記録ページで保存されたとき（同一タブ内でコンポーネントが生きていた場合）も即時反映
    window.addEventListener("docoe:updated", loadData);
    return () => window.removeEventListener("docoe:updated", loadData);
  }, []);

  if (!cur || !daily) return null;

  const diff    = prev ? diffLabel(cur.totalScore, prev.totalScore) : null;
  const comment = highlightComment(cur, prev);

  const chartData = chart.map((m) => ({
    name:  formatMonthLabel(m.month).replace("年", "/").replace("月", ""),
    合計:  m.totalScore,
    お金:  m.moneyScore,
    ごみ:  m.wasteScore,
    エコ:  m.ecoScore,
    地域:  m.localScore,
  }));

  const radarData = [
    { subject: "お金のめぐり", score: daily.moneyScore },
    { subject: "ごみのめぐり", score: daily.wasteScore },
    { subject: "エコ",         score: daily.ecoScore },
    { subject: "エシカル",     score: daily.ethicalScore },
    { subject: "ラベル",       score: daily.labelScore },
    { subject: "地域循環",     score: daily.localScore },
    { subject: "気づき",       score: daily.awarenessScore },
  ];
  const radarMax = Math.max(10, ...radarData.map((d) => d.score));
  const todayLabel = today ? today.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$1年$2月$3日") : "";

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

      {/* スコア内訳 — 7項目 */}
      <section>
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-2 px-1">スコア内訳</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <ScoreCard label="お金のめぐりスコア" score={cur.moneyScore}     icon="💴" color="#4a90d9" />
          <ScoreCard label="ごみのめぐりスコア" score={cur.wasteScore}     icon="♻️" color="#2d6a4f" />
          <ScoreCard label="エコスコア"         score={cur.ecoScore}       icon="🌿" color="#52b788" />
          <ScoreCard label="エシカルポイント"    score={cur.ethicalScore}   icon="🌱" color="#1a7a5e" />
          <ScoreCard label="ラベルポイント"      score={cur.labelScore}     icon="🏷️" color="#2d9e6a" />
          <ScoreCard label="地域循環スコア"      score={cur.localScore}     icon="🏘️" color="#6a7a2a" />
          <ScoreCard label="気づきスコア"        score={cur.awarenessScore} icon="💡" color="#c9a227" />
        </div>
      </section>

      {/* 月別グラフ */}
      <section className="bg-white rounded-2xl p-4 shadow-sm border border-[#ede8dc]">
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-1">月別スコア推移</h2>
        <p className="text-[10px] text-[#8aaa8a] mb-3">アプリ開始月からの記録（最大6ヶ月）</p>
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

      {/* 今月のスコアレーダーチャート */}
      <section className="bg-white rounded-2xl p-4 shadow-sm border border-[#ede8dc]">
        <h2 className="text-xs font-semibold text-[#4a5e4a] mb-1">今日のスコア分布</h2>
        <p className="text-[10px] text-[#8aaa8a] mb-2">{todayLabel} — 5つの視点から今日の活動を可視化</p>
        {daily.totalScore > 0 ? (
          <ResponsiveContainer width="100%" height={230}>
            <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="#ede8dc" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 10, fill: "#4a5e4a", fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, radarMax]}
                tick={false}
                axisLine={false}
              />
              <Radar
                dataKey="score"
                stroke="#2d6a4f"
                fill="#52b788"
                fillOpacity={0.35}
                dot={{ r: 3, fill: "#2d6a4f", strokeWidth: 0 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-xs text-[#8aaa8a] text-center py-8">
            今日の記録を追加するとレーダーチャートが表示されます
          </p>
        )}
        {daily.totalScore > 0 && (
          <div className="mt-2 grid grid-cols-7 gap-1 text-center">
            {radarData.map((d) => (
              <div key={d.subject} className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] text-[#8aaa8a] leading-tight">{d.subject}</span>
                <span className="text-xs font-bold text-[#2d6a4f]">{d.score}</span>
              </div>
            ))}
          </div>
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
