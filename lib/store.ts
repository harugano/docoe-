"use client";

import { UserRecord, MonthlyScore, ScoreCategory, PurchaseRecord } from "@/lib/types";
import { sampleMonthlyScores } from "@/lib/data/sampleHistory";

const RECORDS_KEY = "docoe_records";
const PURCHASE_KEY = "docoe_purchases";
const HISTORY_KEY = "docoe_history";

// ---- localStorage helpers ----

function loadRecords(): UserRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECORDS_KEY);
    return raw ? (JSON.parse(raw) as UserRecord[]) : [];
  } catch {
    return [];
  }
}

function saveRecords(records: UserRecord[]): void {
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

function loadPurchases(): PurchaseRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PURCHASE_KEY);
    return raw ? (JSON.parse(raw) as PurchaseRecord[]) : [];
  } catch {
    return [];
  }
}

function savePurchases(purchases: PurchaseRecord[]): void {
  localStorage.setItem(PURCHASE_KEY, JSON.stringify(purchases));
}

function loadHistory(): MonthlyScore[] {
  if (typeof window === "undefined") return sampleMonthlyScores;
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? (JSON.parse(raw) as MonthlyScore[]) : sampleMonthlyScores;
  } catch {
    return sampleMonthlyScores;
  }
}

function saveHistory(history: MonthlyScore[]): void {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// ---- Month utilities ----

export function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function prevMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(y, m - 2, 1);
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
  const filteredRecords = records.filter((r) => r.createdAt.startsWith(month));
  const filteredPurchases = purchases.filter((p) => p.createdAt.startsWith(month));

  let moneyScore = 0;
  let wasteScore = 0;
  let ecoScore = 0;
  let localScore = 0;
  let awarenessScore = 0;

  for (const r of filteredRecords) {
    switch (r.scoreCategory as ScoreCategory) {
      case "waste":      wasteScore      += r.point; break;
      case "eco":        ecoScore        += r.point; break;
      case "local":      localScore      += r.point; break;
      case "awareness":  awarenessScore  += r.point; break;
      case "money":      moneyScore      += r.point; break;
    }
  }

  for (const p of filteredPurchases) {
    moneyScore     += p.scoreBreakdown.moneyScore;
    ecoScore       += p.scoreBreakdown.ecoScore;
    localScore     += p.scoreBreakdown.localScore;
    awarenessScore += p.scoreBreakdown.awarenessScore;
  }

  const totalScore = moneyScore + wasteScore + ecoScore + localScore + awarenessScore;
  return { month, totalScore, moneyScore, wasteScore, ecoScore, localScore, awarenessScore };
}

// ---- Public API ----

export function getRecords(): UserRecord[] {
  return loadRecords();
}

export function addRecord(record: UserRecord): void {
  const records = loadRecords();
  records.push(record);
  saveRecords(records);
}

export function getPurchases(): PurchaseRecord[] {
  return loadPurchases();
}

export function addPurchase(purchase: PurchaseRecord): void {
  const purchases = loadPurchases();
  purchases.push(purchase);
  savePurchases(purchases);
}

export function getMonthlyScore(month: string): MonthlyScore {
  const records = loadRecords();
  const purchases = loadPurchases();
  return calcMonthScore(records, purchases, month);
}

export function getFullHistory(): MonthlyScore[] {
  const history = loadHistory();
  const cur = currentMonth();
  const liveScore = getMonthlyScore(cur);

  // 静的履歴（moneyScore が未定義の旧データに 0 を補完）
  const normalized = history.map((h) => ({
    ...h,
    moneyScore: (h as MonthlyScore & { moneyScore?: number }).moneyScore ?? 0,
  }));
  const withoutCurrent = normalized.filter((h) => h.month !== cur);
  return [...withoutCurrent, liveScore].sort((a, b) =>
    a.month.localeCompare(b.month)
  );
}

export function initHistory(): void {
  if (typeof window === "undefined") return;
  if (!localStorage.getItem(HISTORY_KEY)) {
    saveHistory(sampleMonthlyScores);
  }
}

export function getRecentMonths(n: number): MonthlyScore[] {
  const all = getFullHistory();
  return all.slice(-n);
}
