/**
 * updateEcoScores.js
 * ecoScore を 0〜10 の10段階に再設定するバッチスクリプト
 *
 * 使い方: node tools/updateEcoScores.js
 *
 * ── スコア基準（10段階）───────────────────────────────────────────
 * 10  カーボンネガティブ／クライメートポジティブ・世界最高水準
 *  9  カーボンニュートラル達成または高信頼度宣言、自然資本保護を大規模推進
 *  8  SBT認定済み・TNFD開示・大規模再エネ採用・複数分野で業界トップ水準
 *  7  高度目標設定（SBT等）、TCFD本格対応、再エネ大規模採用
 *  6  GRI/TCFDフレームワーク活用、業界平均を上回る削減実績
 *  5  サステナビリティ報告書発行、複数の定量目標と進捗公開
 *  4  TCFD対応開始または統合報告書発行、定量的削減目標あり
 *  3  環境報告書または同等の公開あり、一部の数値目標・第三者認証
 *  2  基本施策（省エネ・廃棄物削減等）を実施・公表しているが定量目標は限定的
 *  1  CSRページで取り組みを記載しているが具体的な目標・実績データなし
 *  0  公開情報なし / 環境取り組みを全く確認できない
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/data/companyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// ─────────────────────────────────────────────────────────────────────
// スコアマップ（全176社）
// ─────────────────────────────────────────────────────────────────────
const scoreMap = {

  // ── Score 10 (1社) ─────────────────────────────────────────────────
  "microsoft-japan": 10,

  // ── Score 9 (3社) ──────────────────────────────────────────────────
  "apple-japan":   9,
  "sekisui-house": 9,
  "ikea-japan":    9,

  // ── Score 8 (7社) ──────────────────────────────────────────────────
  "suntory":       8,
  "kao":           8,
  "sony-group":    8,
  "google-japan":  8,
  "unilever-japan":8,
  "hitachi":       8,
  "goldwin":       8,

  // ── Score 7 (10社) ─────────────────────────────────────────────────
  "daiwa-house":   7,
  "panasonic":     7,
  "orix":          7,
  "toyota":        7,
  "fujifilm-hd":   7,
  "bridgestone":   7,
  "asics":         7,
  "mercari":       7,
  "pola-orbis-hd": 7,
  "kose":          7,

  // ── Score 6 (13社) ─────────────────────────────────────────────────
  "aeon":          6,
  "kirin":         6,
  "asahi-group":   6,
  "ito-en":        6,
  "ajinomoto":     6,
  "fast-retailing":6,
  "pg-japan":      6,
  "ccbji":         6,
  "amazon-japan":  6,
  "adidas-japan":  6,
  "nike-japan":    6,
  "takeda-pharma": 6,
  "kagome":        6,

  // ── Score 5 (19社) ─────────────────────────────────────────────────
  "meiji-hd":      5,
  "nissin-food":   5,
  "calbee":        5,
  "kikkoman":      5,
  "morinaga-milk": 5,
  "mcdonalds-japan":5,
  "starbucks-japan":5,
  "lion":          5,
  "unicharm":      5,
  "shiseido":      5,
  "ntt":           5,
  "yakult":        5,
  "otsuka-hd":     5,
  "canon":         5,
  "house-foods":   5,
  "hm-japan":      5,
  "nestle-japan":  5,
  "kewpie":        5,
  "zara-japan":    5,

  // ── Score 4 (28社) ─────────────────────────────────────────────────
  "seven-and-i":   4,
  "lawson":        4,
  "familymart":    4,
  "ryohin-keikaku":4,
  "nitori":        4,
  "yamada-hd":     4,
  "rakuten":       4,
  "kddi":          4,
  "softbank-group":4,
  "fujitsu":       4,
  "jr-east":       4,
  "yamato-hd":     4,
  "sg-hd":         4,
  "japan-post":    4,
  "ana-hd":        4,
  "jal":           4,
  "mufg":          4,
  "smfg":          4,
  "mizuho-fg":     4,
  "resona-hd":     4,
  "nippon-life":   4,
  "jccu":          4,
  "tokyo-gas":     4,
  "nec":           4,
  "kokuyo":        4,
  "rohto-pharma":  4,
  "bandai-namco-hd":4,
  "benesse-hd":    4,

  // ── Score 3 (33社) ─────────────────────────────────────────────────
  "ppih":          3,
  "skylark":       3,
  "zensho":        3,
  "mos-food":      3,
  "doutor":        3,
  "shimamura":     3,
  "glico":         3,
  "lotte-hd":      3,
  "morinaga-seika":3,
  "kfc-japan":     3,
  "tepco":         3,
  "yoshinoya":     3,
  "kobayashi-pharma":3,
  "welcia-hd":     3,
  "tsuruha-hd":    3,
  "matsukiyokokkmin":3,
  "sugi-hd":       3,
  "dcm-hd":        3,
  "komeri":        3,
  "kansai-electric":3,
  "bic-camera":    3,
  "geo-hd":        3,
  "bookoff-group": 3,
  "abc-mart":      3,
  "nojima":        3,
  "joshin":        3,
  "kintetsu-group":3,
  "hankyu-hanshin":3,
  "takaratomy":    3,
  "autobacs-seven":3,
  "cainz":         3,
  "yamazaki-baking":3,
  "onward-hd":     3,

  // ── Score 2 (49社) ─────────────────────────────────────────────────
  "yaoko":         2,
  "dydo-group":    2,
  "pokka-sapporo": 2,
  "arcs":          2,
  "life-corp":     2,
  "maruetsu":      2,
  "san-a":         2,
  "osho-food":     2,
  "saizeriya":     2,
  "matsuya-foods": 2,
  "ringer-hut":    2,
  "komeda-hd":     2,
  "st-corp":       2,
  "aoki-hd":       2,
  "aoyama-shoji":  2,
  "nishimatsuya":  2,
  "takara-hd":     2,
  "kracie-hd":     2,
  "japanet-hd":    2,
  "toridoll-hd":   2,
  "royal-hd":      2,
  "duskin":        2,
  "ichibanya":     2,
  "watami":        2,
  "kura-corp":     2,
  "food-and-life": 2,
  "dominos-japan": 2,
  "adastria":      2,
  "tsi-hd":        2,
  "united-arrows": 2,
  "beams":         2,
  "stripe-intl":   2,
  "world-hd":      2,
  "yodobashi-hd":  2,
  "edion":         2,
  "ks-hd":         2,
  "daiso":         2,
  "xebio-hd":      2,
  "alpn-group":    2,
  "maruzen-chi-hd":2,
  "kinokuniya":    2,
  "kohnan":        2,
  "koshidaka-hd":  2,
  "park24":        2,
  "konami-group":  2,
  "renaissance":   2,
  "loft-co":       2,
  "hands":         2,
  "ccc-tsutaya":   2,

  // ── Score 1 (6社) ──────────────────────────────────────────────────
  "torikizoku-hd": 1,
  "honeys-hd":     1,
  "seria":         1,
  "nafco":         1,
  "daiichi-kosho": 1,
  "qbnet":         1,

  // ── Score 0 (7社) ──────────────────────────────────────────────────
  "cherio":         0,
  "hideyhidaka":    0,
  "arcland-service":0,
  "kourakuen-hd":   0,
  "cando":          0,
  "watts":          0,
  "himalaya-sports":0,
};

// ─────────────────────────────────────────────────────────────────────
// バッチ更新処理
// ─────────────────────────────────────────────────────────────────────
let updatedCount = 0;
const notFoundIds = [];

for (const [id, newScore] of Object.entries(scoreMap)) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `(id: "${escapedId}",[\\s\\S]*?ecoScore: )\\d+(,)`,
    ''
  );
  const before = content;
  content = content.replace(pattern, `$1${newScore}$2`);

  if (content !== before) {
    updatedCount++;
  } else {
    // 変更なし = 既に同じスコアか、IDが見つからない
    if (content.includes(`id: "${id}"`)) {
      updatedCount++; // 既に同じ値
    } else {
      notFoundIds.push(id);
    }
  }
}

fs.writeFileSync(filePath, content, 'utf8');

// ── 結果レポート ────────────────────────────────────────────────────
console.log(`\n✅ Updated: ${updatedCount} companies\n`);

if (notFoundIds.length > 0) {
  console.warn(`⚠️  Not found in file (${notFoundIds.length}):`);
  notFoundIds.forEach(id => console.warn(`   - ${id}`));
}

// スコア分布を集計
const scoreDistribution = {};
for (let i = 0; i <= 10; i++) scoreDistribution[i] = 0;

for (const m of content.matchAll(/ecoScore: (\d+),/g)) {
  const s = parseInt(m[1], 10);
  if (s >= 0 && s <= 10) scoreDistribution[s]++;
}

const total = Object.values(scoreDistribution).reduce((a, b) => a + b, 0);

console.log('📊 New score distribution (0〜10):');
for (let i = 10; i >= 0; i--) {
  const count = scoreDistribution[i];
  const bar = '█'.repeat(Math.ceil(count / 2));
  console.log(`  Score ${i.toString().padStart(2)}: ${String(count).padStart(3)}社  ${bar}`);
}
console.log(`\n  Total: ${total}社\n`);
