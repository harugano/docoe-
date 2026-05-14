import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "docoe? | なくなった先に、社会が見える。",
  description:
    "手元を離れたごみ・モノ・お金がどこへ行くかを可視化し、社会への影響をスコア化するアプリ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-[#f5f0e8] text-[#1a2e1a] pb-20" style={{ paddingBottom: "calc(5rem + env(safe-area-inset-bottom, 0px))" }}>
        <main className="flex-1 max-w-md mx-auto w-full">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
