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
import { getMonthlyIncome, getMonthlyExpense, getMonthlyBalance } from "@/lib/budgetStore";
import { MonthlyScore } from "@/lib/types";
import ScoreCard from "@/components/ScoreCard";
import Link from "next/link";

// ─── 月間ポイント目標データ ───────────────────────────────────────
// 根拠：環境省「家庭部門のCO2排出実態統計調査」、国立環境研究所「温室効果ガスインベントリ」
// 日本の家庭部門CO2排出量：約3.7t/人・年（2021年）= 約308kg/月
// 2030年目標（46%削減）：約2.0t/人・年 = 約167kg/月
// パリ協定1.5℃：約2.5t/人・年 = 約208kg/月
// スコアはCO2の直接換算ではなく「行動変容の積み重ね」を示す独自指標です。
const MONTHLY_GOALS = [
  {
    pt: 100,
    label: "気づきのスタート",
    emoji: "🌱",
    color: "#8aaa8a",
    bg: "#f0f7f3",
    border: "#b7e4c7",
    desc: "お金やごみの行き先を記録し始めた段階。小さな気づきが変化の第一歩です。",
    envNote: "記録すること自体が意識変容の起点になります。",
  },
  {
    pt: 300,
    label: "行動の第一歩",
    emoji: "🌿",
    color: "#52b788",
    bg: "#e8f5ee",
    border: "#52b788",
    desc: "お金の行き先を意識し、企業情報を確認して購入選択をしている段階。",
    envNote: "環境省調査における「グリーン購入意識あり」層の平均的な行動量に相当する水準です。",
  },
  {
    pt: 750,
    label: "環境配慮型消費者",
    emoji: "🌳",
    color: "#2d6a4f",
    bg: "#dff0e8",
    border: "#2d6a4f",
    desc: "エシカルラベルや地域循環を意識した購入を継続し、ごみの行き先も記録している段階。",
    envNote: "消費行動の転換により、日本の平均的な家庭より約15〜20%の環境負荷削減が期待できる水準です（推計値）。",
  },
  {
    pt: 1500,
    label: "2030年目標水準",
    emoji: "🌊",
    color: "#1a6b9e",
    bg: "#e0f0fb",
    border: "#4a90d9",
    desc: "高エコスコア企業・エシカルラベル・地域産品を積極的に選び、ごみ削減も実践している段階。",
    envNote: "日本が掲げる2030年温室効果ガス46%削減目標（2013年比）に向けた生活スタイルに近い水準です（内閣府・環境省の行動目標を参考に設定）。",
  },
  {
    pt: 5000,
    label: "1.5℃パリ協定水準",
    emoji: "⭐",
    color: "#a06000",
    bg: "#fdf5e0",
    border: "#f4a261",
    desc: "あらゆる行動で環境・地域・社会への影響を意識し、持続可能な消費を実践している段階。",
    envNote: "IPCCが示す1.5℃目標に向けた個人の行動変容水準。消費行動による環境貢献がトップ層に相当します（参考：Climate Action Tracker）。",
  },
] as const;

function MonthlyGoalSection({ score }: { score: number }) {
  const reached = MONTHLY_GOALS.filter((g) => score >= g.pt);
  const current = reached[reached.length - 1] ?? null;
  const next = MONTHLY_GOALS[reached.length] ?? null;

  // 全体の進捗バー（0〜750pt）
  const maxPt = MONTHLY_GOALS[MONTHLY_GOALS.length - 1].pt;
  const totalPct = Math.min(100, Math.round((score / maxPt) * 100));

  return (
    <section className="bg-white rounded-2xl p-4 shadow-sm border border-[#ede8dc] space-y-3">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold text-[#4a5e4a]">毎月のポイント目標</h2>
          <p className="text-[10px] text-[#8aaa8a] mt-0.5">
            環境保全への貢献度を示す独自指標（環境省・IPCC等を参考に設定）
          </p>
        </div>
        <span className="text-lg font-black text-[#2d6a4f]">{score}pt</span>
      </div>

      {/* 全体進捗バー */}
      <div>
        <div className="relative h-3 bg-[#ede8dc] rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
            style={{
              width: `${totalPct}%`,
              background: "linear-gradient(90deg, #52b788 0%, #2d6a4f 60%, #4a90d9 100%)",
            }}
          />
          {/* ティック */}
          {MONTHLY_GOALS.map((g) => (
            <div
              key={g.pt}
              className="absolute top-0 h-full w-px bg-white/70"
              style={{ left: `${(g.pt / maxPt) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-[#8aaa8a] mt-1 px-0.5">
          <span>0</span>
          {MONTHLY_GOALS.map((g) => (
            <span key={g.pt}>{g.pt}</span>
          ))}
        </div>
      </div>

      {/* 現在のレベル */}
      {current ? (
        <div
          className="rounded-xl px-3 py-2.5 border"
          style={{ background: current.bg, borderColor: current.border }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{current.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black" style={{ color: current.color }}>
                現在：{current.label}（{current.pt}pt〜）
              </p>
              <p className="text-[10px] text-[#4a5e4a] mt-0.5 leading-relaxed">{current.desc}</p>
            </div>
          </div>
          <p className="text-[10px] text-[#8aaa8a] mt-2 leading-relaxed border-t border-white/60 pt-2">
            📊 {current.envNote}
          </p>
        </div>
      ) : (
        <div className="rounded-xl px-3 py-2 bg-[#faf8f4] border border-[#ede8dc]">
          <p className="text-xs text-[#8aaa8a]">今月の記録を追加すると目標レベルが表示されます</p>
        </div>
      )}

      {/* 次の目標 */}
      {next && (
        <div className="flex items-center gap-2 px-1">
          <div className="flex-1 h-px bg-[#ede8dc]" />
          <p className="text-[10px] text-[#8aaa8a] shrink-0">
            次の目標：{next.emoji} <span className="font-bold">{next.label}</span>（{next.pt}pt）
            まで <span className="font-bold text-[#2d6a4f]">あと{next.pt - score}pt</span>
          </p>
          <div className="flex-1 h-px bg-[#ede8dc]" />
        </div>
      )}

      {/* 全レベル一覧（小さく） */}
      <div className="grid grid-cols-5 gap-1">
        {MONTHLY_GOALS.map((g) => {
          const done = score >= g.pt;
          return (
            <div
              key={g.pt}
              className="flex flex-col items-center gap-0.5 py-1.5 px-1 rounded-xl border transition-all"
              style={{
                background: done ? g.bg : "#faf8f4",
                borderColor: done ? g.border : "#ede8dc",
                opacity: done ? 1 : 0.6,
              }}
            >
              <span className="text-base">{g.emoji}</span>
              <span className="text-[8px] font-bold leading-tight text-center" style={{ color: done ? g.color : "#8aaa8a" }}>
                {g.pt}pt
              </span>
              {done && <span className="text-[8px] text-[#52b788]">✓</span>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── アプリコンセプト説明 ─────────────────────────────────────────
function ConceptSection() {
  const [open, setOpen] = useState(false);

  const pillars = [
    {
      icon: "💴",
      title: "お金のめぐり",
      color: "#4a90d9",
      body: "買い物をするとき、そのお金はどこへ行くのでしょうか。企業の環境活動・社会貢献・地域循環を確認し、「選ぶ力」を意識することがdocoe?スコアの中心です。",
    },
    {
      icon: "🗑️",
      title: "ごみのめぐり",
      color: "#2d6a4f",
      body: "捨てたごみには処理コストが発生します。どの品目がどれだけ地域に費用をかけているか知ることで、ごみを減らす動機が生まれます。",
    },
    {
      icon: "🌿",
      title: "エコ行動",
      color: "#52b788",
      body: "マイボトル・公共交通・節電など、日々の小さな行動を記録することでエコスコアが積み上がります。継続する習慣が社会を動かします。",
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-base">🌍</span>
          <div>
            <p className="text-xs font-bold text-[#1a4731]">docoe? とは？</p>
            <p className="text-[10px] text-[#8aaa8a]">アプリのコンセプトを見る</p>
          </div>
        </div>
        <span className="text-xs text-[#8aaa8a] font-medium">{open ? "▲ 閉じる" : "▼ 開く"}</span>
      </button>

      {open && (
        <div className="border-t border-[#ede8dc] px-4 pb-4 space-y-4 pt-3">
          {/* キャッチコピー */}
          <div
            className="rounded-2xl p-4 text-center"
            style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
          >
            <p className="text-xs text-[#b7e4c7] mb-1">docoe? = どこへ？</p>
            <p className="text-base font-black text-white leading-snug">
              なくなった先に、社会が見える。
            </p>
            <p className="text-[11px] text-[#b7e4c7] mt-2 leading-relaxed">
              お金もごみも、消えるのではなく「どこか」へ行きます。
              その行き先を知ることで、自分の行動が社会とつながっていることに気づきます。
            </p>
          </div>

          {/* 3つの柱 */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold text-[#4a5e4a] px-1">3つの記録の意味</p>
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-3 bg-[#faf8f4] rounded-xl p-3 border border-[#ede8dc]"
              >
                <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: p.color }}>{p.title}</p>
                  <p className="text-[10px] text-[#4a5e4a] mt-1 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* スコアの意味 */}
          <div className="bg-[#f0f7f3] rounded-xl p-3 border border-[#b7e4c7]">
            <p className="text-[10px] font-bold text-[#1a4731] mb-1">📊 docoe?スコアについて</p>
            <p className="text-[10px] text-[#4a5e4a] leading-relaxed">
              スコアはCO2排出量の直接換算ではなく、「どれだけ行動と意識が社会につながっているか」を示す独自指標です。
              企業の透明性・環境活動・エシカルラベル・地域循環など、複数の視点から加点されます。
            </p>
          </div>

          {/* 注記 */}
          <p className="text-[9px] text-[#8aaa8a] leading-relaxed px-1">
            ※ ポイント目標は環境省「家庭部門のCO2排出実態統計調査」、IPCC第6次評価報告書、
            Climate Action Trackerなどの公開情報を参考に設定した参考値です。
            個人の環境負荷を正確に算定するものではありません。
          </p>
        </div>
      )}
    </section>
  );
}

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
  const [budgetIncome,  setBudgetIncome]  = useState(0);
  const [budgetExpense, setBudgetExpense] = useState(0);
  const [budgetBalance, setBudgetBalance] = useState(0);

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
      setBudgetIncome(getMonthlyIncome(now));
      setBudgetExpense(getMonthlyExpense(now));
      setBudgetBalance(getMonthlyBalance(now));
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

      {/* 家計簿サマリー */}
      <section className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#ede8dc]">
          <div className="flex items-center gap-2">
            <span className="text-base">📒</span>
            <div>
              <p className="text-xs font-bold text-[#1a4731]">今月の家計簿</p>
              <p className="text-[10px] text-[#8aaa8a]">お金のめぐりを確認する</p>
            </div>
          </div>
          <Link href="/budget" className="text-[11px] text-[#4a90d9] font-medium">
            詳細 ›
          </Link>
        </div>
        <div className="grid grid-cols-3 divide-x divide-[#f0f0f0]">
          <div className="px-3 py-3 text-center">
            <p className="text-[10px] text-[#8aaa8a] mb-0.5">収入</p>
            <p className="text-sm font-black text-[#2d6a4f]">
              {budgetIncome > 0 ? `${(budgetIncome / 10000).toFixed(1)}万` : "—"}
            </p>
          </div>
          <div className="px-3 py-3 text-center">
            <p className="text-[10px] text-[#8aaa8a] mb-0.5">支出</p>
            <p className="text-sm font-black text-[#e07b39]">
              {budgetExpense > 0 ? `${(budgetExpense / 10000).toFixed(1)}万` : "—"}
            </p>
          </div>
          <div className="px-3 py-3 text-center">
            <p className="text-[10px] text-[#8aaa8a] mb-0.5">残高</p>
            <p className={`text-sm font-black ${
              budgetIncome === 0 && budgetExpense === 0
                ? "text-[#8aaa8a]"
                : budgetBalance >= 0
                  ? "text-[#1a4731]"
                  : "text-red-500"
            }`}>
              {budgetIncome === 0 && budgetExpense === 0
                ? "—"
                : (budgetBalance >= 0 ? "+" : "") + (budgetBalance / 10000).toFixed(1) + "万"
              }
            </p>
          </div>
        </div>
        {budgetIncome === 0 && budgetExpense === 0 && (
          <div className="px-4 pb-3">
            <Link href="/budget/new"
              className="flex items-center justify-center gap-1.5 text-[11px] text-[#2d6a4f] font-bold bg-[#f0f7f3] rounded-xl py-2">
              ＋ 最初の記録を追加する
            </Link>
          </div>
        )}
      </section>

      {/* 月間ポイント目標 */}
      <MonthlyGoalSection score={cur.totalScore} />

      {/* アプリコンセプト説明 */}
      <ConceptSection />

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
