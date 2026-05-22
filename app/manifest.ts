import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "docoe? | なくなった先に、社会が見える。",
    short_name: "docoe?",
    description:
      "手元を離れたごみ・モノ・お金がどこへ行くかを可視化し、社会への影響をスコア化するアプリ",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#1a4731",
    theme_color: "#1a4731",
    lang: "ja",
    categories: ["lifestyle", "utilities", "sustainability"],
    icons: [
      { src: "/icons/icon-72.png",           sizes: "72x72",     type: "image/png" },
      { src: "/icons/icon-96.png",           sizes: "96x96",     type: "image/png" },
      { src: "/icons/icon-128.png",          sizes: "128x128",   type: "image/png" },
      { src: "/icons/icon-144.png",          sizes: "144x144",   type: "image/png" },
      { src: "/icons/icon-152.png",          sizes: "152x152",   type: "image/png" },
      { src: "/icons/icon-192.png",          sizes: "192x192",   type: "image/png", purpose: "any" },
      { src: "/icons/icon-384.png",          sizes: "384x384",   type: "image/png" },
      { src: "/icons/icon-512.png",          sizes: "512x512",   type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-192.png", sizes: "192x192",   type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512",   type: "image/png", purpose: "maskable" },
    ],
    screenshots: [
      {
        src: "/screenshots/home.png",
        sizes: "390x844",
        type: "image/png",
        label: "ホーム画面 – 月間スコアと目標",
      },
    ],
  };
}
