import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | docoe?",
  description: "docoe? アプリのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>

      <p className="mb-4 text-sm text-gray-500">最終更新日：2025年5月</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. 基本方針</h2>
        <p>
          docoe?（以下「本アプリ」）は、ユーザーのプライバシーを最大限に尊重します。
          本アプリは、個人情報を外部のサーバーに送信・収集しません。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. 収集する情報</h2>
        <p>
          本アプリが収集・記録するデータ（ごみ記録、購入記録、エコ行動記録など）は、
          すべてお使いの端末のローカルストレージ（ブラウザのlocalStorage）にのみ保存されます。
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>外部サーバーへのデータ送信は行いません</li>
          <li>アカウント登録は不要です</li>
          <li>個人を特定できる情報は収集しません</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. アクセス解析</h2>
        <p>
          本アプリはアクセス解析ツールを使用していません。
          ページビューや利用状況の収集・分析は行いません。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. 第三者への提供</h2>
        <p>
          ユーザーのデータを第三者に提供・販売・共有することは一切ありません。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">5. データの削除</h2>
        <p>
          記録したデータはブラウザのキャッシュクリア・アプリのデータ削除により、
          いつでも端末から完全に削除できます。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">6. お問い合わせ</h2>
        <p>
          プライバシーポリシーに関するご質問は、
          <a
            href="https://docoe.vercel.app"
            className="text-green-700 underline"
          >
            docoe.vercel.app
          </a>{" "}
          を通じてご連絡ください。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">7. 変更について</h2>
        <p>
          本ポリシーは予告なく変更されることがあります。
          変更後は本ページに最新版を掲載します。
        </p>
      </section>
    </main>
  );
}
