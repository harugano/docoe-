"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Check, Target } from "lucide-react";
import { BUDGET_CATEGORIES, MonthlyBudget } from "@/lib/types";
import { getBudget, saveBudget } from "@/lib/budgetStore";
import { localISOString } from "@/lib/store";

function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function prevMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(y, m - 2, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function nextMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(y, m, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthLabel(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return `${y}年${m}月`;
}

type BudgetMap  = Record<string, string>;
type GoalValues = {
  localSpendingTarget:      string;
  supportSpendingTarget:    string;
  ecoSpendingTarget:        string;
  disposableSpendingLimit:  string;
  docoeScoreTarget:         string;
};

function toNum(s: string): number | undefined {
  const n = Number(s.replace(/[,，]/g, ""));
  return isNaN(n) || n === 0 ? undefined : n;
}

export default function BudgetSettingsPage() {
  const [month, setMonth] = useState(currentMonth());
  const [budgetMap, setBudgetMap] = useState<BudgetMap>({});
  const [goals, setGoals] = useState<GoalValues>({
    localSpendingTarget:      "",
    supportSpendingTarget:    "",
    ecoSpendingTarget:        "",
    disposableSpendingLimit:  "",
    docoeScoreTarget:         "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const budget = getBudget(month);
    if (budget) {
      const map: BudgetMap = {};
      for (const cb of budget.categoryBudgets) {
        map[cb.category] = cb.budgetAmount > 0 ? String(cb.budgetAmount) : "";
      }
      setBudgetMap(map);
      setGoals({
        localSpendingTarget:      budget.docoeGoals.localSpendingTarget     ? String(budget.docoeGoals.localSpendingTarget)     : "",
        supportSpendingTarget:    budget.docoeGoals.supportSpendingTarget   ? String(budget.docoeGoals.supportSpendingTarget)   : "",
        ecoSpendingTarget:        budget.docoeGoals.ecoSpendingTarget       ? String(budget.docoeGoals.ecoSpendingTarget)       : "",
        disposableSpendingLimit:  budget.docoeGoals.disposableSpendingLimit ? String(budget.docoeGoals.disposableSpendingLimit) : "",
        docoeScoreTarget:         budget.docoeGoals.docoeScoreTarget        ? String(budget.docoeGoals.docoeScoreTarget)        : "",
      });
    } else {
      setBudgetMap({});
      setGoals({ localSpendingTarget: "", supportSpendingTarget: "", ecoSpendingTarget: "", disposableSpendingLimit: "", docoeScoreTarget: "" });
    }
    setSaved(false);
  }, [month]);

  function handleSave() {
    const existing = getBudget(month);
    const now = localISOString();
    const budget: MonthlyBudget = {
      id:        existing?.id ?? crypto.randomUUID(),
      month,
      categoryBudgets: BUDGET_CATEGORIES
        .map((cat) => ({ category: cat, budgetAmount: toNum(budgetMap[cat] ?? "") ?? 0 }))
        .filter((cb) => cb.budgetAmount > 0),
      docoeGoals: {
        localSpendingTarget:      toNum(goals.localSpendingTarget),
        supportSpendingTarget:    toNum(goals.supportSpendingTarget),
        ecoSpendingTarget:        toNum(goals.ecoSpendingTarget),
        disposableSpendingLimit:  toNum(goals.disposableSpendingLimit),
        docoeScoreTarget:         toNum(goals.docoeScoreTarget),
      },
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    saveBudget(budget);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const isCurrentMonth = month === currentMonth();

  return (
    <div className="px-4 pt-6 pb-24 space-y-5">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/budget" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">予算・目標設定</h1>
          <p className="text-[10px] text-[#8aaa8a]">自分のお金の流れを知るための目安を設定</p>
        </div>
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

      {/* カテゴリ別予算 */}
      <section className="bg-white rounded-2xl border border-[#ede8dc] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f0f0f0] bg-[#faf8f4]">
          <p className="text-xs font-bold text-[#1a4731]">📊 カテゴリ別予算</p>
          <p className="text-[10px] text-[#8aaa8a]">入力しないカテゴリは進捗バーに表示されません</p>
        </div>
        <div className="p-4 space-y-3">
          {BUDGET_CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-3">
              <label className="text-xs text-[#4a5e4a] w-24 flex-shrink-0">{cat}</label>
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={budgetMap[cat] ?? ""}
                  onChange={(e) => setBudgetMap((prev) => ({ ...prev, [cat]: e.target.value }))}
                  placeholder="未設定"
                  className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl px-3 py-2 outline-none focus:border-[#52b788]"
                />
                <span className="text-[11px] text-[#8aaa8a] flex-shrink-0">円</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* docoe? 独自目標 */}
      <section className="bg-[#f0f7f3] rounded-2xl border border-[#b7e4c7] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#b7e4c7]">
          <p className="text-xs font-bold text-[#1a4731] flex items-center gap-1.5">
            <Target size={13} className="text-[#2d6a4f]" />
            docoe? 独自目標
          </p>
          <p className="text-[10px] text-[#8aaa8a]">スコアや行動の目標を自分で設定できます</p>
        </div>
        <div className="p-4 space-y-4">

          {/* 地域消費目標 */}
          <GoalInput
            label="🏘️ 今月の地域消費目標"
            description="「地域に残るお金」の合計目標額"
            unit="円"
            value={goals.localSpendingTarget}
            onChange={(v) => setGoals((p) => ({ ...p, localSpendingTarget: v }))}
          />

          {/* 応援支出目標 */}
          <GoalInput
            label="🤝 今月の応援支出目標"
            description="NPO・地元店舗・クラファンなど応援のお金の合計目標"
            unit="円"
            value={goals.supportSpendingTarget}
            onChange={(v) => setGoals((p) => ({ ...p, supportSpendingTarget: v }))}
          />

          {/* エコ支出目標 */}
          <GoalInput
            label="🌿 今月のエコにつながる支出目標"
            description="「エコにつながるお金」の合計目標額"
            unit="円"
            value={goals.ecoSpendingTarget}
            onChange={(v) => setGoals((p) => ({ ...p, ecoSpendingTarget: v }))}
          />

          {/* 使い捨て支出上限 */}
          <GoalInput
            label="♻️ 今月の使い捨て支出の上限"
            description="目安として設定。超えても責めるためではなく気づくためのものです"
            unit="円"
            value={goals.disposableSpendingLimit}
            onChange={(v) => setGoals((p) => ({ ...p, disposableSpendingLimit: v }))}
          />

          {/* docoe? スコア目標 */}
          <GoalInput
            label="⭐ 今月のdocoe?スコア目標"
            description="今月積み上げたいdocoe?スコアの目標値"
            unit="pt"
            value={goals.docoeScoreTarget}
            onChange={(v) => setGoals((p) => ({ ...p, docoeScoreTarget: v }))}
          />
        </div>
      </section>

      {/* 保存 */}
      <button onClick={handleSave}
        className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
          saved ? "bg-[#52b788] text-white" : "bg-[#2d6a4f] text-white active:bg-[#1a4731]"
        }`}>
        {saved ? (
          <><Check size={16} /> 保存しました</>
        ) : (
          "保存する"
        )}
      </button>

      <p className="text-[10px] text-[#8aaa8a] text-center leading-relaxed">
        予算や目標は、お金の流れを知るための目安です。<br />
        達成できなくても責めず、気づきの材料として使いましょう。
      </p>
    </div>
  );
}

function GoalInput({
  label, description, unit, value, onChange,
}: {
  label: string;
  description: string;
  unit: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-[#1a4731]">{label}</label>
      <p className="text-[10px] text-[#8aaa8a]">{description}</p>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="未設定"
          className="flex-1 text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-white border border-[#b7e4c7] rounded-xl px-3 py-2 outline-none focus:border-[#2d6a4f]"
        />
        <span className="text-xs text-[#8aaa8a] flex-shrink-0">{unit}</span>
      </div>
    </div>
  );
}
