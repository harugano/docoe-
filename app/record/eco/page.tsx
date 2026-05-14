"use client";

import { useState } from "react";
import { ecoActions } from "@/lib/data/ecoActions";
import { EcoAction, UserRecord } from "@/lib/types";
import { addRecord } from "@/lib/store";
import { ChevronLeft, Check, Plus } from "lucide-react";
import Link from "next/link";

type Step = "select" | "result";

interface SelectedAction {
  action: EcoAction;
  count: number;
}

export default function EcoRecordPage() {
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<SelectedAction[]>([]);
  const [totalAdded, setTotalAdded] = useState(0);

  function toggleAction(action: EcoAction) {
    setSelected((prev) => {
      const idx = prev.findIndex((s) => s.action.id === action.id);
      if (idx >= 0) {
        return prev.filter((_, i) => i !== idx);
      }
      return [...prev, { action, count: 1 }];
    });
  }

  function isSelected(id: string) {
    return selected.some((s) => s.action.id === id);
  }

  function totalPoints() {
    return selected.reduce((sum, s) => sum + s.action.point * s.count, 0);
  }

  function handleSave() {
    const now = new Date().toISOString();
    for (const s of selected) {
      const record: UserRecord = {
        id: crypto.randomUUID(),
        type: "eco",
        itemId: s.action.id,
        quantity: s.count,
        point: s.action.point * s.count,
        scoreCategory: "eco",
        memo: "",
        createdAt: now,
      };
      addRecord(record);
    }
    setTotalAdded(totalPoints());
    setStep("result");
  }

  function handleReset() {
    setSelected([]);
    setTotalAdded(0);
    setStep("select");
  }

  const categories = Array.from(new Set(ecoActions.map((a) => a.category)));

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">エコ行動記録</h1>
          <p className="text-[10px] text-[#8aaa8a]">
            {step === "select"
              ? "今日実践したことを選んでください"
              : "記録しました！"}
          </p>
        </div>
      </header>

      {/* Step 1: 選択 */}
      {step === "select" && (
        <>
          {categories.map((cat) => (
            <div key={cat} className="space-y-2">
              <h2 className="text-xs font-semibold text-[#4a5e4a] px-1">{cat}</h2>
              {ecoActions
                .filter((a) => a.category === cat)
                .map((action) => {
                  const active = isSelected(action.id);
                  return (
                    <button
                      key={action.id}
                      onClick={() => toggleAction(action)}
                      className={`w-full rounded-2xl p-4 border text-left flex items-center gap-3 transition-all ${
                        active
                          ? "bg-[#f0f7f3] border-[#52b788] shadow-sm"
                          : "bg-white border-[#ede8dc] shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          active
                            ? "border-[#2d6a4f] bg-[#2d6a4f]"
                            : "border-[#c0ccc0]"
                        }`}
                      >
                        {active && <Check size={11} strokeWidth={3} className="text-white" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#1a4731]">{action.name}</p>
                        <p className="text-[10px] text-[#8aaa8a] mt-0.5">{action.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold text-[#52b788] flex-shrink-0">
                        <Plus size={13} />
                        {action.point}pt
                      </div>
                    </button>
                  );
                })}
            </div>
          ))}

          {/* 合計と保存 */}
          {selected.length > 0 && (
            <div className="sticky bottom-20 bg-white border border-[#ede8dc] rounded-2xl p-4 shadow-lg flex items-center gap-3">
              <div className="flex-1">
                <p className="text-[10px] text-[#8aaa8a]">
                  {selected.length}項目を選択中
                </p>
                <p className="text-lg font-black text-[#2d6a4f]">
                  +{totalPoints()}pt
                </p>
              </div>
              <button
                onClick={handleSave}
                className="px-5 py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm active:bg-[#1a4731] transition-colors"
              >
                記録する
              </button>
            </div>
          )}
        </>
      )}

      {/* Step 2: 結果 */}
      {step === "result" && (
        <div className="space-y-4">
          <div
            className="rounded-3xl p-5 text-white shadow-md text-center"
            style={{ background: "linear-gradient(135deg, #52b788 0%, #2d6a4f 100%)" }}
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check size={24} strokeWidth={3} />
            </div>
            <p className="text-sm font-bold mb-1">
              {selected.length}つのエコ行動を記録しました！
            </p>
            <p className="text-4xl font-black">
              +{totalAdded}
              <span className="text-lg text-white/70 ml-1">pt</span>
            </p>
            <p className="text-xs text-white/80 mt-1">エコスコアに加算されました</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-2">
            <p className="text-xs font-semibold text-[#4a5e4a]">記録した行動</p>
            {selected.map(({ action }) => (
              <div key={action.id} className="flex items-center justify-between py-1.5 border-b border-[#f0ece4] last:border-0">
                <span className="text-sm text-[#1a4731]">{action.name}</span>
                <span className="text-sm font-bold text-[#52b788]">+{action.point}pt</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm"
            >
              続けて記録
            </button>
            <Link
              href="/"
              className="flex-grow text-center py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm"
            >
              ホームへ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
