"use client";

import { UserRecord, MonthlyScore, ScoreCategory, PurchaseRecord } from "@/lib/types";

const RECORDS_KEY     = "docoe_records";
const PURCHASE_KEY    = "docoe_purchases";
const START_MONTH_KEY = "docoe_start_month";

// ---- localStorage helpers ----

function loadRecords(): UserRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECORDS_KEY);
    return raw ? (JSON.parse(raw) as UserRecord[]) : [];
  } catch { return []; }
}

function saveRecords(records: UserRecord[]): void {
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

function loadPurchases(): PurchaseRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PURCHASE_KEY);
    return raw ? (JSON.parse(raw) as PurchaseRecord[]) : [];
  } catch { return []; }
}

function savePurchases(purchases: PurchaseRecord[]): void {
  localStorage.setItem(PURCHASE_KEY, JSON.stringify(purchases));
}

// ---- Month utilities ----

export function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function currentDate(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getDailyScore(date: string): MonthlyScore {
  return calcMonthScore(loadRecords(), loadPurchases(), date);
}

export function prevMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(y, m - 2, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function nextMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  // Date の月は 0 始まり。m (1始まり) をそのまま渡すと翌月になる
  const d = new Date(y, m, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function formatMonthLabel(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return `${y}年${m}月`;
}

// ---- Score calculation ----

function calcMonthScore(
  records: UserRecord[],
  purchases: PurchaseRecord[],
  month: string
): MonthlyScore {
  const rs = records.filter((r) => r.createdAt.startsWith(month));
  const ps = purchases.filter((p) => p.createdAt.startsWith(month));

  let moneyScore = 0, wasteScore = 0, ecoScore = 0, localScore = 0, awarenessScore = 0;

  for (const r of rs) {
    switch (r.scoreCategory as ScoreCategory) {
      case "waste":     wasteScore     += r.point; break;
      case "eco":       ecoScore       += r.point; break;
      case "local":     localScore     += r.point; break;
      case "awareness": awarenessScore += r.point; break;
      case "money":     moneyScore     += r.point; break;
    }
  }
  for (const p of ps) {
    moneyScore     += p.scoreBreakdown.moneyScore;
    ecoScore       += p.scoreBreakdown.ecoScore;
    localScore     += p.scoreBreakdown.localScore;
    awarenessScore += p.scoreBreakdown.awarenessScore;
  }

  const totalScore = moneyScore + wasteScore + ecoScore + localScore + awarenessScore;
  return { month, totalScore, moneyScore, wasteScore, ecoScore, localScore, awarenessScore };
}

// ---- Public API ----

export function getRecords(): UserRecord[] { return loadRecords(); }

export function addRecord(record: UserRecord): void {
  const list = loadRecords();
  list.push(record);
  saveRecords(list);
}

export function getPurchases(): PurchaseRecord[] { return loadPurchases(); }

export function addPurchase(purchase: PurchaseRecord): void {
  const list = loadPurchases();
  list.push(purchase);
  savePurchases(list);
}

export function getMonthlyScore(month: string): MonthlyScore {
  return calcMonthScore(loadRecords(), loadPurchases(), month);
}

/**
 * アプリを初めて開いた月を記録する。
 * この月を起点にグラフが始まる（それ以前の月は表示しない）。
 */
export function initHistory(): void {
  if (typeof window === "undefined") return;
  if (!localStorage.getItem(START_MONTH_KEY)) {
    localStorage.setItem(START_MONTH_KEY, currentMonth());
  }
}

export function getStartMonth(): string {
  if (typeof window === "undefined") return currentMonth();
  return localStorage.getItem(START_MONTH_KEY) ?? currentMonth();
}

/**
 * 開始月〜今月の全月をスキャンし、実績から計算したスコア配列を返す。
 * サンプルデータは一切使用しない。開始前の月はグラフに出ない。
 */
export function getFullHistory(): MonthlyScore[] {
  const start = getStartMonth();
  const cur   = currentMonth();

  const months: string[] = [];
  let m = start;
  while (m <= cur) {
    months.push(m);
    const nxt = nextMonth(m);
    if (nxt <= m) break; // 安全ガード
    m = nxt;
  }

  const records   = loadRecords();
  const purchases = loadPurchases();
  return months.map((month) => calcMonthScore(records, purchases, month));
}

export function getRecentMonths(n: number): MonthlyScore[] {
  return getFullHistory().slice(-n);
}
