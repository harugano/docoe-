import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-4 pt-6 pb-4 space-y-6">
      {/* ヘッダー */}
      <header className="flex items-center gap-3">
        <Link href="/" className="p-1.5 rounded-full bg-white border border-[#ede8dc] shadow-sm">
          <ChevronLeft size={18} className="text-[#4a5e4a]" />
        </Link>
        <div>
          <h1 className="text-lg font-black text-[#1a4731]">docoe? について</h1>
          <p className="text-[10px] text-[#8aaa8a]">コンセプトと使い方</p>
        </div>
      </header>

      {/* キービジュアル */}
      <section
        className="rounded-3xl p-6 text-white text-center shadow-md"
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
      >
        <h2 className="text-3xl font-black mb-1">
          docoe<span className="text-[#52b788]">?</span>
        </h2>
        <p className="text-sm text-[#b7e4c7] font-medium">どこへ？</p>
        <p className="text-lg font-bold mt-4 leading-relaxed">
          なくなった先に、<br />社会が見える。
        </p>
        <p className="text-xs text-[#b7e4c7]/80 mt-3 leading-relaxed">
          行き先を知ることで、見えなかった影響に気づく
        </p>
      </section>

      {/* コンセプト */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-[#1a4731]">なぜ「どこへ？」なのか</h3>
        <p className="text-xs text-[#4a5e4a] leading-relaxed">
          捨てたごみ、支払ったお金、手放したモノ——それらは「なくなった」ように見えて、
          実は社会のどこかで動き続けています。
        </p>
        <p className="text-xs text-[#4a5e4a] leading-relaxed">
          docoe? は、その「行き先」を可視化することで、
          日常の小さな選択が社会とつながっている実感を生み出すアプリです。
        </p>
        <p className="text-xs text-[#4a5e4a] leading-relaxed">
          ※ スコアは実際の社会的インパクトを完全に測定するものではなく、
          行動と気づきを可視化するための参考指標です。
        </p>
      </section>

      {/* 買い物スコアについて */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-[#1a4731]">💴 買い物スコアについて</h3>
        <p className="text-xs text-[#4a5e4a] leading-relaxed">
          docoe? の買い物スコアは、企業の公式HP、サステナビリティレポート、統合報告書、
          TNFD等の自然関連情報開示、地域貢献情報などをもとに、
          <strong>確認できる範囲で算出する参考スコア</strong>です。
        </p>
        <p className="text-xs text-[#4a5e4a] leading-relaxed">
          企業を一方的に評価・断定するものではなく、<strong>自分の買い物がどのような企業活動につながっているのかを知るための気づきの指標</strong>です。
        </p>
        <div className="bg-[#f0f7f3] rounded-xl p-3 space-y-1.5">
          <p className="text-[10px] font-bold text-[#2d6a4f]">スコアに使用する情報源（予定）</p>
          {[
            "企業公式HP・サステナビリティページ",
            "サステナビリティレポート・統合報告書",
            "TNFDレポート・自然関連情報開示",
            "地域貢献・CSR活動の公開情報",
          ].map((s) => (
            <p key={s} className="text-[10px] text-[#4a5e4a] flex gap-1.5">
              <span className="text-[#52b788]">●</span>{s}
            </p>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-[10px] text-amber-700 leading-relaxed">
            ⚠️ 現在のサンプルデータは<strong>架空企業</strong>を使用しています。
            実在企業のデータを追加する際は、公式情報の確認と
            confidenceLevel の適切な設定が必要です。
          </p>
        </div>
      </section>

      {/* スコア設計 */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-[#1a4731]">スコアの考え方</h3>
        <ul className="space-y-2">
          {[
            { icon: "💴", name: "お金のめぐりスコア", desc: "買い物・支払いを通じた企業活動への貢献" },
            { icon: "♻️", name: "ごみのめぐりスコア", desc: "分別・リサイクルへの取り組みを記録" },
            { icon: "🌿", name: "エコスコア", desc: "日々の環境配慮行動を加点" },
            { icon: "🏘️", name: "地域循環スコア", desc: "地域経済・資源循環への貢献" },
            { icon: "💡", name: "気づきスコア", desc: "新しい発見・行動変容を記録" },
          ].map(({ icon, name, desc }) => (
            <li key={name} className="flex gap-3 items-start">
              <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <p className="text-xs font-bold text-[#1a4731]">{name}</p>
                <p className="text-[10px] text-[#8aaa8a]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-[#f0f7f3] rounded-xl p-3 mt-2">
          <p className="text-[10px] text-[#4a5e4a]">
            📌 スコアは<strong>月単位・加点方式</strong>。減点なし。過去の自分と比較して、継続的な気づきを積み上げましょう。
          </p>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="bg-white rounded-2xl p-4 border border-[#ede8dc] shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-[#1a4731]">ロードマップ</h3>
        <div className="space-y-3">
          {[
            {
              phase: "Phase 1（現在）",
              items: ["ごみの行き先可視化", "エコ行動記録", "買い物・企業インパクト記録", "月別スコア管理"],
              active: true,
            },
            {
              phase: "Phase 2",
              items: ["実在企業データの追加（公式情報確認後）", "バーコード・レシート読み取り", "自治体データ連携"],
              active: false,
            },
            {
              phase: "Phase 3",
              items: ["思い出チャット（AI）", "自治体向けダッシュボード", "Supabase対応・クラウド同期"],
              active: false,
            },
          ].map(({ phase, items, active }) => (
            <div key={phase}
              className={`rounded-xl p-3 border ${active ? "border-[#52b788] bg-[#f0f7f3]" : "border-[#ede8dc] bg-[#faf8f4]"}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${active ? "bg-[#2d6a4f] text-white" : "bg-[#ede8dc] text-[#8aaa8a]"}`}>
                  {active ? "リリース中" : "開発予定"}
                </span>
                <span className="text-xs font-bold text-[#1a4731]">{phase}</span>
              </div>
              <ul className="space-y-0.5">
                {items.map((item) => (
                  <li key={item} className="text-[10px] text-[#4a5e4a] flex gap-1.5">
                    <span className={active ? "text-[#52b788]" : "text-[#c0ccc0]"}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 注意書き */}
      <section className="bg-[#ede8dc] rounded-2xl p-4 border border-[#d4cfc5]">
        <p className="text-[10px] text-[#6a7a6a] leading-relaxed">
          本アプリに表示される処理費用・リサイクル収益・企業インパクト等の数値は、
          公開データや推計値をもとにした<strong>参考値</strong>です。
          実際の自治体・企業データとは異なる場合があります。
        </p>
      </section>
    </div>
  );
}
