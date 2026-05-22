// アプリアイコン生成スクリプト
// 使用方法: node scripts/generate-icons.mjs
import sharp from "sharp";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const iconsDir = path.join(publicDir, "icons");

if (!existsSync(iconsDir)) await mkdir(iconsDir, { recursive: true });

// ─── SVGアイコン定義 ───────────────────────────────────────────────
// docoe? ブランドカラー：ダークグリーン #1a4731
function makeSvg(size, maskable = false) {
  const pad = maskable ? Math.round(size * 0.12) : Math.round(size * 0.04);
  const r = maskable ? size / 2 : Math.round(size * 0.18);
  const cx = size / 2;
  const cy = size / 2;
  const fontSize = Math.round(size * 0.38);
  const subFontSize = Math.round(size * 0.13);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#1a4731" rx="${r}"/>
  <!-- 外枠の円 -->
  <circle cx="${cx}" cy="${cy - Math.round(size * 0.04)}" r="${Math.round(size * 0.3)}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="${Math.round(size * 0.025)}"/>
  <!-- メイン文字 "?" -->
  <text
    x="${cx}"
    y="${cy + Math.round(fontSize * 0.35)}"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="${fontSize}"
    font-weight="900"
    fill="white"
    text-anchor="middle"
    letter-spacing="-0.02em"
  >?</text>
  <!-- サブテキスト "docoe" -->
  <text
    x="${cx}"
    y="${cy + Math.round(size * 0.38)}"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="${subFontSize}"
    font-weight="700"
    fill="rgba(183,228,199,0.9)"
    text-anchor="middle"
    letter-spacing="0.08em"
  >docoe</text>
</svg>`;
}

// ─── 生成するアイコンサイズ ───────────────────────────────────────
const icons = [
  { name: "icon-72.png",            size: 72,   maskable: false },
  { name: "icon-96.png",            size: 96,   maskable: false },
  { name: "icon-128.png",           size: 128,  maskable: false },
  { name: "icon-144.png",           size: 144,  maskable: false },
  { name: "icon-152.png",           size: 152,  maskable: false },
  { name: "icon-192.png",           size: 192,  maskable: false },
  { name: "icon-384.png",           size: 384,  maskable: false },
  { name: "icon-512.png",           size: 512,  maskable: false },
  { name: "icon-maskable-192.png",  size: 192,  maskable: true  },
  { name: "icon-maskable-512.png",  size: 512,  maskable: true  },
];

for (const { name, size, maskable } of icons) {
  const svg = Buffer.from(makeSvg(size, maskable));
  const dest = path.join(iconsDir, name);
  await sharp(svg).png().toFile(dest);
  console.log(`✓ ${name} (${size}x${size}${maskable ? " maskable" : ""})`);
}

// favicon.ico 用の 32x32 PNG も作成
const faviconSvg = Buffer.from(makeSvg(32, false));
await sharp(faviconSvg).png().toFile(path.join(publicDir, "favicon-32.png"));
console.log("✓ favicon-32.png");

console.log("\n✅ アイコン生成完了！");
