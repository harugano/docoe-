"use client";

import { useState } from "react";
import { wasteItems } from "@/lib/data/wasteItems";
import { WasteItem, UserRecord, CostType } from "@/lib/types";
import { addRecord, currentMonth, localISOString } from "@/lib/store";
import { ChevronLeft, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function costBadge(type: CostType) {
  switch (type) {
    case "plus":
      return (
        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
          地域にプラス
        </span>
      );
    case "minus":
      return (
        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
          処理コストあり
        </span>
      );
    default:
      return (
        <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
          中立
        </span>
      );
  }
}

function estimatedCostText(item: WasteItem, qty: number): string {
  if (item.estimatedCostPerUnit === 0) return "費用：参考データなし";
  const total = Math.abs(item.estimatedCostPerUnit * qty);
  if (item.costType === "plus") return `推定収益：約${total}円（参考値）`;
  if (item.costType === "minus") return `推定処理費：約${total}円（参考値）`;
  return `推定費用：約${total}円（参考値）`;
}

type Step = "select" | "input" | "result";

export default function WasteRecordPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<WasteItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [memo, setMemo] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSelect(item: WasteItem) {
    setSelected(item);
    setQuantity(1);
    setStep("input");
  }

  function handleSave() {
    if (!selected) return;
    const record: UserRecord = {
      id: crypto.randomUUID(),
      type: "waste",
      itemId: selected.id,
      quantity,
      point: selected.defaultPoint * Math.max(1, quantity),
      scoreCategory: "waste",
      memo,
      createdAt: localISOString(),
    };
    addRecord(record);
    setSaved(true);
    setStep("result");
  }

  function handleReset() {
    setSelected(null);
    setQuantity(1);
    setMemo("");
    setSaved(false);
    setStep("select");
  }

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">ごみの行き先記録</h1>
          <p className="text-[10px] text-[#8aaa8a]">
            {step === "select" && "種類を選んでください"}
            {step === "input" && "数量を入力してください"}
            {step === "result" && "記録しました"}
          </p>
        </div>
      </header>

      {/* Step 1: 種類選択 — コストタイプ別グループ */}
      {step === "select" && (
        <div className="space-y-4">
          {/* 地域にプラス */}
          <div className="space-y-2">
            <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 text-xs text-green-800 leading-relaxed">
              ♻️ 以下は<span className="font-bold">地域に収益をもたらす</span>品目です。
              正しく分別・排出することでリサイクル収益に貢献できます。
            </div>
            {wasteItems.filter((item) => item.costType === "plus").map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm text-left flex items-center gap-3 active:bg-[#f0f7f3] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-[#1a4731]">{item.name}</span>
                    {costBadge(item.costType)}
                  </div>
                  <p className="text-[10px] text-[#8aaa8a] mt-0.5">{item.destination}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-green-600">+{item.defaultPoint}pt</span>
                  <p className="text-[10px] text-[#8aaa8a]">/{item.unit}</p>
                </div>
              </button>
            ))}
          </div>

          {/* 中立 */}
          <div className="space-y-2">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-600 leading-relaxed">
              ⚖️ 以下は<span className="font-bold">コストがほぼ中立</span>な品目です。
              正しく分別することで資源として活用されます。
            </div>
            {wasteItems.filter((item) => item.costType === "neutral").map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm text-left flex items-center gap-3 active:bg-[#fafafa] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-[#1a4731]">{item.name}</span>
                    {costBadge(item.costType)}
                  </div>
                  <p className="text-[10px] text-[#8aaa8a] mt-0.5">{item.destination}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-gray-500">+{item.defaultPoint}pt</span>
                  <p className="text-[10px] text-[#8aaa8a]">/{item.unit}</p>
                </div>
              </button>
            ))}
          </div>

          {/* 処理コストあり */}
          <div className="space-y-2">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 text-xs text-amber-800 leading-relaxed">
              ⚠️ 以下は<span className="font-bold">地域の処理コストが発生する</span>品目です。
              正しく分別・排出することで処理コストの削減に貢献できます。
            </div>
            {wasteItems.filter((item) => item.costType === "minus").map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm text-left flex items-center gap-3 active:bg-[#fff8f0] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-[#1a4731]">{item.name}</span>
                    {costBadge(item.costType)}
                  </div>
                  <p className="text-[10px] text-[#8aaa8a] mt-0.5">{item.destination}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-amber-600">{item.defaultPoint}pt</span>
                  <p className="text-[10px] text-[#8aaa8a]">/{item.unit}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: 数量入力 */}
      {step === "input" && selected && (
        <div className="space-y-4">
          {/* 選択アイテム確認 */}
          <div className="bg-[#f0f7f3] rounded-2xl p-4 border border-[#b7e4c7]">
            <div className="flex items-center gap-2">
              {costBadge(selected.costType)}
              <span className="font-bold text-[#1a4731]">{selected.name}</span>
            </div>
            <p className="text-xs text-[#4a5e4a] mt-2">{selected.description}</p>
          </div>

          {/* 数量 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
            <label className="text-xs font-semibold text-[#4a5e4a] block mb-2">
              数量（{selected.unit}）
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full bg-[#ede8dc] text-[#1a4731] font-bold text-xl flex items-center justify-center"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="flex-1 text-center text-2xl font-black text-[#1a4731] bg-transparent outline-none"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-full bg-[#2d6a4f] text-white font-bold text-xl flex items-center justify-center"
              >
                ＋
              </button>
            </div>
          </div>

          {/* メモ */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm">
            <label className="text-xs font-semibold text-[#4a5e4a] block mb-2">
              メモ（任意）
            </label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="気づいたことを書いてみましょう"
              rows={2}
              className="w-full text-sm text-[#1a4731] placeholder-[#c0ccc0] bg-[#faf8f4] border border-[#ede8dc] rounded-xl p-3 resize-none outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* ボタン */}
          <div className="flex gap-2">
            <button
              onClick={() => setStep("select")}
              className="flex-1 py-3 rounded-2xl bg-[#ede8dc] text-[#4a5e4a] font-bold text-sm"
            >
              戻る
            </button>
            <button
              onClick={handleSave}
              className="flex-2 flex-grow py-3 rounded-2xl bg-[#2d6a4f] text-white font-bold text-sm active:bg-[#1a4731] transition-colors"
            >
              記録する
            </button>
          </div>
        </div>
      )}

      {/* Step 3: 結果表示 */}
      {step === "result" && selected && (
        <div className="space-y-4">
          {/* 成功バナー */}
          <div className="bg-[#2d6a4f] text-white rounded-3xl p-5 shadow-md text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check size={24} strokeWidth={3} />
            </div>
            <p className="text-sm font-bold mb-1">記録しました！</p>
            <p className="text-3xl font-black">
              {selected.defaultPoint * Math.max(1, quantity)}
              <span className="text-base text-[#b7e4c7] ml-1">pt</span>
            </p>
            <p className="text-xs text-[#b7e4c7] mt-1">
              正しく分別することで地域コストを意識できました
            </p>
          </div>

          {/* 行き先情報 */}
          <div className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
            <div>
              <p className="text-[10px] text-[#8aaa8a] font-semibold uppercase tracking-wide">
                行き先
              </p>
              <p className="text-sm font-bold text-[#1a4731] mt-0.5">{selected.destination}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8aaa8a] font-semibold uppercase tracking-wide">
                処理プロセス
              </p>
              <p className="text-sm text-[#4a5e4a] mt-0.5">{selected.process}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8aaa8a] font-semibold uppercase tracking-wide">
                地域への影響
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                {costBadge(selected.costType)}
                <p className="text-xs text-[#4a5e4a]">
                  {estimatedCostText(selected, quantity)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-[#8aaa8a] font-semibold uppercase tracking-wide">
                気づき
              </p>
              <p className="text-xs text-[#4a5e4a] mt-0.5">{selected.description}</p>
            </div>
          </div>

          {/* アクションボタン */}
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
