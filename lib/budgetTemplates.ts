"use client";

import { BudgetTemplate } from "@/lib/types";

const TEMPLATES_KEY = "docoe_budget_templates";

// ---- デフォルトテンプレート ----

export const DEFAULT_TEMPLATES: BudgetTemplate[] = [
  {
    id: "tpl_convenience_lunch",
    name: "コンビニ昼食",
    type: "expense",
    category: "食費",
    docoeCategories: ["outside_money", "disposable_money"],
    supportTags: [],
    disposableTags: ["コンビニ弁当", "使い捨て容器"],
    paymentMethod: "cash",
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_local_supermarket",
    name: "地元スーパー",
    type: "expense",
    category: "食費",
    docoeCategories: ["local_money"],
    supportTags: [],
    disposableTags: [],
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_local_shop",
    name: "地元商店",
    type: "expense",
    category: "日用品・雑貨",
    docoeCategories: ["local_money", "support_money"],
    supportTags: ["地元店舗応援"],
    disposableTags: [],
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_my_bottle",
    name: "マイボトル利用",
    type: "expense",
    category: "日用品・雑貨",
    docoeCategories: ["eco_money", "awareness_money"],
    supportTags: [],
    disposableTags: [],
    memo: "マイボトル利用で使い捨て削減",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_public_transport",
    name: "公共交通",
    type: "expense",
    category: "交通費",
    docoeCategories: ["eco_money"],
    supportTags: [],
    disposableTags: [],
    paymentMethod: "transport_ic",
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_donation",
    name: "寄付",
    type: "expense",
    category: "寄付",
    docoeCategories: ["support_money"],
    supportTags: ["NPO・寄付"],
    disposableTags: [],
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_crowdfunding",
    name: "クラファン支援",
    type: "expense",
    category: "寄付",
    docoeCategories: ["support_money"],
    supportTags: ["クラファン支援"],
    disposableTags: [],
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
  {
    id: "tpl_food_loss",
    name: "フードロス削減商品",
    type: "expense",
    category: "食費",
    docoeCategories: ["eco_money", "support_money"],
    supportTags: ["フードロス削減"],
    disposableTags: [],
    memo: "",
    isDefault: true,
    createdAt: "2026-01-01T00:00:00",
  },
];

// ---- localStorage ----

function loadUserTemplates(): BudgetTemplate[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(TEMPLATES_KEY);
    return raw ? (JSON.parse(raw) as BudgetTemplate[]) : [];
  } catch {
    return [];
  }
}

function saveUserTemplates(list: BudgetTemplate[]): void {
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(list));
}

// ---- Public API ----

/** デフォルト + ユーザー定義テンプレートを返す */
export function getTemplates(): BudgetTemplate[] {
  return [...DEFAULT_TEMPLATES, ...loadUserTemplates()];
}

export function addTemplate(tpl: BudgetTemplate): void {
  const list = loadUserTemplates();
  list.push(tpl);
  saveUserTemplates(list);
}

export function deleteTemplate(id: string): void {
  // デフォルトテンプレートは削除不可
  if (DEFAULT_TEMPLATES.some((t) => t.id === id)) return;
  const list = loadUserTemplates().filter((t) => t.id !== id);
  saveUserTemplates(list);
}

export function updateTemplate(updated: BudgetTemplate): void {
  if (updated.isDefault) return; // デフォルトは編集不可
  const list = loadUserTemplates().map((t) => (t.id === updated.id ? updated : t));
  saveUserTemplates(list);
}
