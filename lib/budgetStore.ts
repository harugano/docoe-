"use client";

import { Transaction, MonthlyBudget, DocoeCategory } from "@/lib/types";

const TRANSACTIONS_KEY = "docoe_transactions";
const BUDGETS_KEY      = "docoe_budgets";

// ---- helpers ----

/** 旧データとの後方互換: docoeCategories 等がなければ空配列で補完 */
function normalizeTransaction(raw: Partial<Transaction>): Transaction {
  return {
    docoeCategories: [],
    supportTags:     [],
    disposableTags:  [],
    ...raw,
  } as Transaction;
}

function loadRaw(): Transaction[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(TRANSACTIONS_KEY);
    const arr = raw ? (JSON.parse(raw) as Partial<Transaction>[]) : [];
    return arr.map(normalizeTransaction);
  } catch {
    return [];
  }
}

function save(list: Transaction[]): void {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(list));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("docoe:budget:updated"));
    window.dispatchEvent(new CustomEvent("docoe:updated"));
  }
}

/** "YYYY-MM-DD" → "YYYY-MM" */
function toMonth(date: string): string {
  return date.slice(0, 7);
}

function monthsBack(n: number): string[] {
  const today = new Date();
  const result: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    result.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
  }
  return result;
}

// ---- CRUD ----

export function getTransactions(): Transaction[] { return loadRaw(); }

export function addTransaction(tx: Transaction): void {
  const list = loadRaw();
  list.push(tx);
  save(list);
}

export function updateTransaction(updated: Transaction): void {
  const list = loadRaw().map((t) => (t.id === updated.id ? updated : t));
  save(list);
}

export function deleteTransaction(id: string): void {
  save(loadRaw().filter((t) => t.id !== id));
}

export function getTransactionsByMonth(month: string): Transaction[] {
  return loadRaw().filter((t) => toMonth(t.date) === month);
}

// ---- 基本集計 ----

export function getMonthlyIncome(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);
}

export function getMonthlyExpense(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);
}

export function getMonthlyBalance(month: string): number {
  return getMonthlyIncome(month) - getMonthlyExpense(month);
}

/** カテゴリ別支出集計（降順） */
export function getCategoryExpenseBreakdown(
  month: string
): { category: string; amount: number }[] {
  const map = new Map<string, number>();
  getTransactionsByMonth(month)
    .filter((t) => t.type === "expense")
    .forEach((t) => map.set(t.category, (map.get(t.category) ?? 0) + t.amount));
  return [...map.entries()]
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
}

/** 直近 n ヶ月の収支トレンド */
export function getMonthlyExpenseTrend(n: number) {
  return monthsBack(n).map((m) => ({
    month:   m,
    income:  getMonthlyIncome(m),
    expense: getMonthlyExpense(m),
    balance: getMonthlyBalance(m),
  }));
}

/** 直近 n 件取引（降順） */
export function getRecentTransactions(n: number): Transaction[] {
  return loadRaw()
    .slice()
    .sort((a, b) => (b.date + b.createdAt).localeCompare(a.date + a.createdAt))
    .slice(0, n);
}

/** docoe? スコアを持つ今月支出のサマリー */
export function getMonthlyDocoeScoreSummary(month: string) {
  const txs = getTransactionsByMonth(month).filter(
    (t) => t.type === "expense" && t.includeInDocoeScore && t.docoeScoreBreakdown
  );
  return {
    totalDocoeScore:  txs.reduce((s, t) => s + (t.docoeScoreBreakdown?.totalPoint ?? 0), 0),
    totalDocoeAmount: txs.reduce((s, t) => s + t.amount, 0),
  };
}

// ---- docoe? 独自分類 集計 ----

/** docoe? 独自分類別支出集計 */
export function getDocoeCategoryBreakdown(month: string): { category: DocoeCategory; amount: number }[] {
  const map = new Map<DocoeCategory, number>();
  getTransactionsByMonth(month)
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      for (const c of t.docoeCategories) {
        map.set(c, (map.get(c) ?? 0) + t.amount);
      }
    });
  return [...map.entries()].map(([category, amount]) => ({ category, amount })).sort((a, b) => b.amount - a.amount);
}

// ---- 地域内循環 ----

export function getLocalSpendingAmount(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("local_money"))
    .reduce((s, t) => s + t.amount, 0);
}

export function getLocalCirculationRate(month: string): number {
  const expense = getMonthlyExpense(month);
  if (expense === 0) return 0;
  return Math.round((getLocalSpendingAmount(month) / expense) * 1000) / 10; // 小数1桁
}

export function getMonthlyLocalCirculationTrend(n: number) {
  return monthsBack(n).map((m) => ({
    month:    m,
    amount:   getLocalSpendingAmount(m),
    rate:     getLocalCirculationRate(m),
    expense:  getMonthlyExpense(m),
  }));
}

// ---- 応援支出 ----

export function getSupportSpendingAmount(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("support_money"))
    .reduce((s, t) => s + t.amount, 0);
}

export function getSupportSpendingRatio(month: string): number {
  const expense = getMonthlyExpense(month);
  if (expense === 0) return 0;
  return Math.round((getSupportSpendingAmount(month) / expense) * 1000) / 10;
}

/** 応援タグ別集計 */
export function getSupportTagBreakdown(month: string): { tag: string; amount: number }[] {
  const map = new Map<string, number>();
  getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("support_money"))
    .forEach((t) => {
      for (const tag of t.supportTags) {
        map.set(tag, (map.get(tag) ?? 0) + t.amount);
      }
    });
  return [...map.entries()].map(([tag, amount]) => ({ tag, amount })).sort((a, b) => b.amount - a.amount);
}

export function getMonthlySupportSpendingTrend(n: number) {
  return monthsBack(n).map((m) => ({
    month:  m,
    amount: getSupportSpendingAmount(m),
    ratio:  getSupportSpendingRatio(m),
  }));
}

// ---- 使い捨て支出 ----

export function getDisposableSpendingAmount(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("disposable_money"))
    .reduce((s, t) => s + t.amount, 0);
}

export function getDisposableSpendingRatio(month: string): number {
  const expense = getMonthlyExpense(month);
  if (expense === 0) return 0;
  return Math.round((getDisposableSpendingAmount(month) / expense) * 1000) / 10;
}

/** 使い捨てタグ別集計 */
export function getDisposableTagBreakdown(month: string): { tag: string; amount: number }[] {
  const map = new Map<string, number>();
  getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("disposable_money"))
    .forEach((t) => {
      for (const tag of t.disposableTags) {
        map.set(tag, (map.get(tag) ?? 0) + t.amount);
      }
    });
  return [...map.entries()].map(([tag, amount]) => ({ tag, amount })).sort((a, b) => b.amount - a.amount);
}

export function getMonthlyDisposableSpendingTrend(n: number) {
  return monthsBack(n).map((m) => ({
    month:  m,
    amount: getDisposableSpendingAmount(m),
    ratio:  getDisposableSpendingRatio(m),
  }));
}

// ---- エコ支出 ----

export function getEcoSpendingAmount(month: string): number {
  return getTransactionsByMonth(month)
    .filter((t) => t.type === "expense" && t.docoeCategories.includes("eco_money"))
    .reduce((s, t) => s + t.amount, 0);
}

// ---- 予算管理 ----

function loadBudgets(): MonthlyBudget[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BUDGETS_KEY);
    return raw ? (JSON.parse(raw) as MonthlyBudget[]) : [];
  } catch {
    return [];
  }
}

function saveBudgets(list: MonthlyBudget[]): void {
  localStorage.setItem(BUDGETS_KEY, JSON.stringify(list));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("docoe:budget:updated"));
  }
}

export function getBudget(month: string): MonthlyBudget | null {
  return loadBudgets().find((b) => b.month === month) ?? null;
}

export function saveBudget(budget: MonthlyBudget): void {
  const list = loadBudgets();
  const idx = list.findIndex((b) => b.month === budget.month);
  if (idx >= 0) {
    list[idx] = budget;
  } else {
    list.push(budget);
  }
  saveBudgets(list);
}

// ---- 予算進捗 ----

export interface BudgetProgressItem {
  category: string;
  spent: number;
  budget: number;
  ratio: number;   // 0-100 (over 100 = over budget)
}

export interface BudgetProgress {
  totalSpent:         number;
  totalBudget:        number;
  totalRatio:         number;
  categoryProgress:   BudgetProgressItem[];
  localRate:          number;
  localAmount:        number;
  localTarget:        number;
  supportAmount:      number;
  supportTarget:      number;
  ecoAmount:          number;
  ecoTarget:          number;
  disposableAmount:   number;
  disposableLimit:    number;
  docoeScore:         number;
  docoeScoreTarget:   number;
}

export function getBudgetProgress(month: string, docoeScore: number): BudgetProgress {
  const budget  = getBudget(month);
  const expense = getMonthlyExpense(month);

  const totalBudget = budget?.categoryBudgets.reduce((s, b) => s + b.budgetAmount, 0) ?? 0;
  const totalRatio  = totalBudget > 0 ? Math.round((expense / totalBudget) * 100) : 0;

  const breakdown = getCategoryExpenseBreakdown(month);
  const categoryProgress: BudgetProgressItem[] = (budget?.categoryBudgets ?? []).map((cb) => {
    const spent = breakdown.find((b) => b.category === cb.category)?.amount ?? 0;
    return {
      category: cb.category,
      spent,
      budget:   cb.budgetAmount,
      ratio:    cb.budgetAmount > 0 ? Math.round((spent / cb.budgetAmount) * 100) : 0,
    };
  });

  const goals = budget?.docoeGoals ?? {};
  return {
    totalSpent:       expense,
    totalBudget,
    totalRatio,
    categoryProgress,
    localRate:        getLocalCirculationRate(month),
    localAmount:      getLocalSpendingAmount(month),
    localTarget:      goals.localSpendingTarget ?? 0,
    supportAmount:    getSupportSpendingAmount(month),
    supportTarget:    goals.supportSpendingTarget ?? 0,
    ecoAmount:        getEcoSpendingAmount(month),
    ecoTarget:        goals.ecoSpendingTarget ?? 0,
    disposableAmount: getDisposableSpendingAmount(month),
    disposableLimit:  goals.disposableSpendingLimit ?? 0,
    docoeScore,
    docoeScoreTarget: goals.docoeScoreTarget ?? 0,
  };
}

// ---- 予算アラート ----

export interface BudgetAlert {
  type: "category" | "local" | "support" | "eco" | "disposable" | "docoe_score";
  severity: "info" | "caution" | "good";
  message: string;
}

export function getBudgetAlerts(month: string, docoeScore: number): BudgetAlert[] {
  const progress = getBudgetProgress(month, docoeScore);
  const alerts: BudgetAlert[] = [];

  // カテゴリ別
  for (const cp of progress.categoryProgress) {
    if (cp.budget === 0) continue;
    if (cp.ratio >= 100) {
      alerts.push({
        type: "category", severity: "caution",
        message: `${cp.category}の支出が今月の予算に達しています。残りの期間を意識してみましょう。`,
      });
    } else if (cp.ratio >= 80) {
      alerts.push({
        type: "category", severity: "caution",
        message: `${cp.category}が予算の${cp.ratio}%に近づいています。`,
      });
    }
  }

  // 地域消費
  if (progress.localTarget > 0) {
    const remain = progress.localTarget - progress.localAmount;
    const ratio = Math.round((progress.localAmount / progress.localTarget) * 100);
    if (ratio >= 100) {
      alerts.push({ type: "local", severity: "good", message: "今月の地域消費目標を達成しました！地域のお金の循環に貢献しています。" });
    } else if (remain <= 2000) {
      alerts.push({ type: "local", severity: "info", message: `今月の地域消費目標まであと${remain.toLocaleString()}円です。地元のお店を選ぶと達成しやすくなります。` });
    } else if (ratio >= 60) {
      alerts.push({ type: "local", severity: "info", message: `地域消費が目標の${ratio}%まで進んでいます。この調子で続けましょう。` });
    }
  }

  // 応援支出
  if (progress.supportTarget > 0) {
    const ratio = Math.round((progress.supportAmount / progress.supportTarget) * 100);
    if (ratio >= 100) {
      alerts.push({ type: "support", severity: "good", message: "今月の応援支出目標を達成しました！あなたのお金が誰かの活動を支えています。" });
    } else {
      alerts.push({ type: "support", severity: "info", message: `応援支出が目標の${ratio}%まで進んでいます。` });
    }
  }

  // エコ支出
  if (progress.ecoTarget > 0) {
    const ratio = Math.round((progress.ecoAmount / progress.ecoTarget) * 100);
    if (ratio >= 100) {
      alerts.push({ type: "eco", severity: "good", message: "今月のエコ支出目標を達成しました！" });
    } else {
      alerts.push({ type: "eco", severity: "info", message: `エコにつながる支出が目標の${ratio}%です。` });
    }
  }

  // 使い捨て支出
  if (progress.disposableLimit > 0) {
    const ratio = Math.round((progress.disposableAmount / progress.disposableLimit) * 100);
    if (ratio >= 100) {
      alerts.push({ type: "disposable", severity: "caution", message: "今月は使い捨てにつながる支出が少し多めでした。次回はマイボトルや詰め替え商品も選択肢にできます。" });
    } else if (ratio >= 80) {
      alerts.push({ type: "disposable", severity: "caution", message: "使い捨て支出が設定した上限に近づいています。この表示は気づきのための参考情報です。" });
    }
  }

  // docoe? スコア目標
  if (progress.docoeScoreTarget > 0) {
    const ratio = Math.round((progress.docoeScore / progress.docoeScoreTarget) * 100);
    if (ratio >= 100) {
      alerts.push({ type: "docoe_score", severity: "good", message: `今月のdocoe?スコア目標を達成しました！（${progress.docoeScore}pt / 目標${progress.docoeScoreTarget}pt）` });
    } else {
      const remain = progress.docoeScoreTarget - progress.docoeScore;
      alerts.push({ type: "docoe_score", severity: "info", message: `docoe?スコア目標まであと${remain}ptです。買い物記録や企業情報の確認でスコアが伸びます。` });
    }
  }

  return alerts;
}
