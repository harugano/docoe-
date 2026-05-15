/**
 * ecoScore 再設定スクリプト
 *
 * スコア基準:
 *  0 = 公開情報なし・取り組み確認不可
 *  1 = 基本的なCSRページあり・省エネ等の取り組みを記載
 *  2 = 具体的な環境プログラム・削減目標・年次レポートあり
 *  3 = 業界先進的な目標・TCFD等フレームワーク対応・複数の検証済み実績
 *  4 = SBT相当の野心的目標・再エネ大規模採用・業界トップ水準の取り組み
 *  5 = カーボンネガティブ/ネイチャーポジティブ・TNFD開示・SBTi認定・世界最高水準
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/data/companyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 全企業のスコアマッピング（id: 新スコア）
const scoreMap = {

  // ─── コンビニ・小売 ───────────────────────────────
  "seven-and-i":      2,  // CO2削減目標+TCFD+フードロス削減+統合報告
  "lawson":           2,  // フードロス削減+省エネ冷蔵+CSR情報開示
  "familymart":       2,  // FamilyMart Challenge 2050+プラ削減+統合報告
  "aeon":             3,  // AEON Forest+2040CN+1%クラブ+TCFD+GRI
  "ryohin-keikaku":   2,  // サステナブル素材+オーガニック+プラ削減+統合報告
  "nitori":           1,  // リサイクル+CO2削減（基本レベル）
  "yamada-hd":        1,  // 家電リサイクル+省エネ推進
  "ppih":             1,  // 値引き販売によるフードロス削減

  // ─── 食品・飲料 ───────────────────────────────────
  "suntory":          4,  // 水の天然水保全+2050CN+天然水の森+TCFD詳細
  "kirin":            3,  // CO2削減+水資源保全+生物多様性+TCFD
  "asahi-group":      3,  // CO2削減目標+エコ包材+生物多様性+統合報告
  "ito-en":           3,  // 茶殻リサイクル+CO2削減+生物多様性+TCFD
  "ajinomoto":        2,  // アミノ酸発酵CO2削減+環境目標+TCFD
  "meiji-hd":         2,  // CO2削減目標+包材削減+統合報告
  "nissin-food":      2,  // CO2削減目標+包材削減+統合報告
  "calbee":           2,  // CO2削減目標+農業持続可能性
  "kikkoman":         2,  // CO2削減目標+大豆廃棄活用+環境報告
  "morinaga-milk":    2,  // 包材削減+CO2削減+環境報告

  // ─── 外食 ─────────────────────────────────────────
  "mcdonalds-japan":  2,  // 環境行動計画+CO2削減+プラ削減+統合報告
  "starbucks-japan":  3,  // Planet Positive 2030+リユース推進+農家支援+TCFD
  "skylark":          1,  // 食品廃棄削減+省エネ設備
  "zensho":           2,  // CO2削減目標+フードロス+統合報告
  "mos-food":         2,  // 産地指定+農業支援+CO2削減
  "doutor":           1,  // コーヒーかす活用+省エネ

  // ─── 衣類・生活用品 ───────────────────────────────
  "fast-retailing":   3,  // 全商品リサイクル全国+サステナブル素材+CO2目標+統合報告
  "kao":              4,  // Kirei Lifestyle Plan 2030+詰め替え大規模普及+CO2削減+TCFD+GRI
  "lion":             2,  // 詰め替え推進+CO2削減+省エネ+統合報告
  "unicharm":         2,  // リサイクル技術+CO2削減+TCFD
  "shiseido":         2,  // CMCC+CO2削減+自然由来成分+TCFD
  "asics":            3,  // アシックスアースチャレンジ2030+CO2削減+リサイクル+TCFD
  "shimamura":        1,  // 省エネ+廃棄削減（基本レベル）

  // ─── IT・通信 ─────────────────────────────────────
  "rakuten":          2,  // 再生可能エネルギー+CO2目標+TCFD
  "ntt":              2,  // グリーンイノベーション+再エネ+CN目標
  "kddi":             2,  // 脱炭素+再エネ+CN目標+TCFD
  "softbank-group":   2,  // 再生可能エネルギー事業+CN目標
  "mercari":          3,  // リユースエコノミーで循環経済に直接貢献+CN目標+TCFD
  "fujitsu":          2,  // CN目標+脱炭素支援+TCFD

  // ─── 交通・物流 ───────────────────────────────────
  "jr-east":          2,  // 省エネ電車+再エネ+CN目標+TCFD
  "yamato-hd":        2,  // EV配送+CO2削減+グリーン物流+TCFD
  "sg-hd":            2,  // EV車両+グリーン物流+CN目標
  "japan-post":       2,  // EV車両+省エネ+CN目標
  "ana-hd":           2,  // SAF+燃費改善+CN目標+TCFD
  "jal":              2,  // SAF+燃費改善+CN目標+TCFD

  // ─── 金融・保険 ───────────────────────────────────
  "mufg":             2,  // サステナブルファイナンス35兆+CN目標+TCFD
  "smfg":             2,  // グリーンファイナンス+CN目標+TCFD
  "mizuho-fg":        2,  // サステナブルファイナンス+CN目標+TCFD
  "resona-hd":        1,  // 脱炭素ファイナンス（基本レベル）
  "nippon-life":      1,  // 環境投資+サステナビリティ情報

  // ─── その他 ───────────────────────────────────────
  "jccu":             1,  // 環境配慮商品+フードロス
  "toyota":           3,  // CASE電動化+CN+水素+環境チャレンジ2050+TCFD
  "panasonic":        3,  // グリーンインパクト+環境ビジョン+再エネ+TCFD
  "tepco":            1,  // 再生可能エネルギー事業（negativeRisksあり）
  "tokyo-gas":        2,  // 水素+LNG脱炭素+CN目標
  "yoshinoya":        1,  // CO2削減+食材廃棄（基本）
  "kobayashi-pharma": 1,  // 製品環境負荷+CO2削減
  "pg-japan":         3,  // Ambition 2030+パッケージ削減+再生可能エネルギー+TCFD
  "nec":              2,  // CN目標+省エネIT+TCFD

  // ─── ドラッグストア ───────────────────────────────
  "welcia-hd":        1,  // 廃棄削減+省エネ
  "tsuruha-hd":       1,  // 省エネ+廃棄削減
  "matsukiyokokkmin": 1,  // プラ削減+省エネ
  "sugi-hd":          1,  // 省エネ+廃棄削減

  // ─── 住宅・建設 ───────────────────────────────────
  "sekisui-house":    5,  // SBTi認定+TNFD開示+ZEH全住宅化2030+5本の樹+統合報告
  "daiwa-house":      4,  // 環境ビジョン2055+ZEH/ZEB+再エネ事業+TCFD

  // ─── 製薬 ─────────────────────────────────────────
  "takeda-pharma":    3,  // Environment 2040 Ambitions+再エネ+廃棄削減+TCFD
  "otsuka-hd":        1,  // 包材削減+CO2目標（基本）

  // ─── 電機・精密機器 ───────────────────────────────
  "canon":            2,  // グリーン戦略+カートリッジリサイクル+CO2目標+TCFD
  "sony-group":       4,  // Road to Zero 2050+再エネ積極導入+TAKE BACK PROGRAM+TCFD

  // ─── ホームセンター・文具 ─────────────────────────
  "dcm-hd":           1,  // プラ削減+省エネ
  "komeri":           1,  // 省エネ+農業支援
  "kokuyo":           2,  // FSC認証紙+再生紙+CO2目標+TCFD

  // ─── 電力・飲料・教育・スーパー等（miscNew内の企業） ──
  "kansai-electric":  2,  // 再生可能エネルギー大規模+CN目標
  "yakult":           1,  // 環境目標+省エネ
  "benesse-hd":       1,  // 教育+サステナビリティ
  "yaoko":            1,  // フードロス削減
  "bic-camera":       1,  // 家電リサイクル+省エネ

  // ─── newBatch（飲料・スーパー・外食等30社） ─────────
  "cherio":           0,  // 詳細な情報なし
  "dydo-group":       1,  // 自販機省エネ+見守りサービス
  "ccbji":            3,  // 2030再エネ100%目標+軽量ボトル+CO2削減+TCFD
  "pokka-sapporo":    1,  // 容器削減+省エネ
  "arcs":             1,  // フードロス+省エネ
  "life-corp":        1,  // フードロス+プラ削減
  "maruetsu":         1,  // 食品廃棄削減+省エネ
  "san-a":            1,  // 省エネ（基本）
  "osho-food":        1,  // 廃食油リサイクル+省エネ
  "saizeriya":        1,  // 農場直営+廃棄削減
  "matsuya-foods":    1,  // 省エネ+廃棄削減
  "ringer-hut":       2,  // 国産野菜100%+農薬削減+農家支援+統合報告
  "komeda-hd":        1,  // 省エネ+フランチャイズ支援
  "unilever-japan":   4,  // Sustainable Living Plan+プラ削減+2039CN+TCFD
  "st-corp":          1,  // 詰め替え+パッケージ削減
  "rohto-pharma":     1,  // CO2目標+農業×ヘルスケア
  "geo-hd":           2,  // リユース・リサイクル事業（循環経済への直接貢献）
  "bookoff-group":    2,  // 中古流通（循環経済への直接貢献）+廃棄削減
  "aoki-hd":          1,  // スーツリサイクル+環境配慮素材
  "aoyama-shoji":     1,  // 衣類回収・リサイクル+環境配慮
  "abc-mart":         1,  // シューズリサイクル
  "nishimatsuya":     1,  // 省エネ+子ども用品リユース促進
  "nojima":           1,  // 家電リサイクル+省エネ家電販売
  "joshin":           1,  // 家電リサイクル+省エネ
  "kintetsu-group":   1,  // 省エネ車両+CO2目標+TCFD
  "hankyu-hanshin":   1,  // 省エネ車両+CO2目標+TCFD
  "orix":             4,  // 再生可能エネルギー事業積極投資・運営+グリーンファイナンス+TCFD
  "takara-hd":        1,  // 酒粕活用+水資源保全+CO2目標
  "house-foods":      1,  // 食品廃棄+包材削減
  "kracie-hd":        1,  // 廃棄削減+容器削減
  "japanet-hd":       1,  // 下取りリサイクル+省エネ製品普及

  // ─── globalAndCommon（グローバル・日常利用20社） ───
  "amazon-japan":     3,  // The Climate Pledge+EV配送+再エネ大規模調達
  "apple-japan":      5,  // 2030全サプライチェーンCN+製品別データ公開+再生素材+再エネ100%達成
  "google-japan":     4,  // カーボンフリー2030+低排出ルート機能+データセンター効率化
  "microsoft-japan":  5,  // カーボンネガティブ2030+2050全CO2排出履歴除去目標
  "ikea-japan":       4,  // クライメートポジティブ2030+再エネ100%運営達成+持続可能素材
  "nike-japan":       2,  // Move to Zero+再生素材+CN目標
  "adidas-japan":     2,  // Parley ocean plastic+再生素材+環境目標
  "hm-japan":         1,  // Conscious Collection+回収（ファストファッション課題あり）
  "nestle-japan":     2,  // CN目標+サステナブル農業+包材削減
  "glico":            1,  // 食品廃棄+CO2+包材
  "lotte-hd":         1,  // 食品廃棄+省エネ
  "morinaga-seika":   1,  // CO2削減+食品廃棄
  "kfc-japan":        1,  // 容器削減+フードバンク
  "fujifilm-hd":      3,  // GHG削減目標+ISO14001+資源循環+TCFD+統合報告
  "bridgestone":      3,  // 2050CN+タイヤリサイクル+天然ゴム持続可能+TCFD
  "hitachi":          4,  // 2050CN+社会インフラCO2削減+DE&I+TCFD+統合報告詳細
  "kagome":           2,  // 農業CO2削減+水資源保全+国内農業振興+統合報告
  "yamazaki-baking":  1,  // 省エネ+食品廃棄
  "kewpie":           3,  // 食品廃棄ゼロエミッション+CO2削減+プラ削減+統合報告
  "zara-japan":       1,  // Join Life+回収プログラム（ファストファッション課題あり）

  // ─── everydayStores（飲食・ファッション・家電等50社） ─
  "toridoll-hd":      1,  // 食品廃棄削減+省エネ
  "hideyhidaka":      0,  // 詳細なサステナビリティ情報なし
  "royal-hd":         1,  // 食品廃棄+省エネ+統合報告
  "duskin":           1,  // プラ削減+食品廃棄+障がい者雇用
  "ichibanya":        1,  // 廃食油リサイクル+フードバンク
  "torikizoku-hd":    1,  // 食品廃棄+省エネ+統合報告
  "watami":           2,  // 有機農業+宅食容器リユース+再生可能エネルギー
  "kura-corp":        1,  // 食品廃棄削減+鮮度くん
  "food-and-life":    1,  // 食品廃棄+プラ削減
  "arcland-service":  0,  // 詳細なサステナビリティ情報なし
  "kourakuen-hd":     0,  // 詳細なサステナビリティ情報なし
  "dominos-japan":    1,  // EV配送+容器削減
  "adastria":         2,  // サステナブル素材+リサイクル+CO2目標+TCFD
  "tsi-hd":           1,  // サステナブル素材+環境配慮包材
  "united-arrows":    2,  // サステナブル素材+リサイクル+CO2削減+TCFD
  "beams":            2,  // サステナブル+修理・アップサイクル+BEAMS JAPAN(地域職人支援)
  "stripe-intl":      1,  // オーガニックコットン+リサイクル素材
  "onward-hd":        1,  // サステナブル素材+リサイクル+CO2削減
  "world-hd":         1,  // 環境配慮素材
  "honeys-hd":        1,  // 環境配慮包材+省エネ
  "yodobashi-hd":     1,  // 家電リサイクル+省エネ
  "edion":            1,  // 家電リサイクル+長期修理+省エネ
  "ks-hd":            1,  // 家電リサイクル+省エネ家電
  "daiso":            1,  // プラ削減+省エネ
  "seria":            1,  // プラ削減+省エネ
  "cando":            0,  // 詳細なサステナビリティ情報なし
  "watts":            0,  // 詳細なサステナビリティ情報なし
  "xebio-hd":         1,  // スポーツリユース+省エネ
  "alpn-group":       1,  // スポーツリユース+省エネ
  "himalaya-sports":  0,  // 詳細なサステナビリティ情報なし
  "maruzen-chi-hd":   1,  // 廃棄削減+省エネ
  "kinokuniya":       1,  // 廃棄削減+省エネ
  "cainz":            2,  // サステナブル素材PB+省エネ+再エネ導入
  "kohnan":           1,  // プラ削減+省エネ
  "nafco":            1,  // 省エネ
  "koshidaka-hd":     1,  // 省エネ+CO2削減
  "daiichi-kosho":    1,  // 省エネ
  "park24":           2,  // カーシェアによるCO2削減直接貢献+EV対応+TCFD
  "autobacs-seven":   1,  // 廃油・廃タイヤリサイクル+EV対応
  "konami-group":     1,  // 省エネ+CO2目標
  "renaissance":      1,  // 省エネ+節水（プール）+健康・医療連携
  "qbnet":            2,  // 水不使用（節水）+毛くずリサイクル（肥料化）
  "loft-co":          1,  // エコ商品品揃え+省エネ
  "hands":            1,  // エコ商品品揃え+省エネ
  "ccc-tsutaya":      1,  // レンタル・中古流通（循環経済貢献）
  "takaratomy":       1,  // プラ削減+リサイクル+CO2目標
  "bandai-namco-hd":  2,  // プラ削減（ガシャポン等）+CO2目標+TCFD
  "pola-orbis-hd":    2,  // 詰め替え推進+サステナブル原材料+CO2削減+TCFD
  "kose":             3,  // プラ削減+CN+生物多様性保全+TCFD+統合報告
  "goldwin":          3,  // サステナブル素材積極採用+リペア・リユース+CN目標+TCFD
};

// ── スコアを適用 ────────────────────────────────────────────
let updatedCount = 0;
for (const [id, newScore] of Object.entries(scoreMap)) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(id: "${escapedId}",[\\s\\S]*?ecoScore: )\\d+(,)`, '');
  const before = content;
  content = content.replace(pattern, `$1${newScore}$2`);
  if (content !== before) {
    updatedCount++;
  } else {
    console.warn(`[WARN] Not found or no change: ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');

// ── 結果集計 ─────────────────────────────────────────────────
const distribution = {};
const matches = content.matchAll(/ecoScore: (\d+),/g);
for (const m of matches) {
  const s = m[1];
  distribution[s] = (distribution[s] || 0) + 1;
}

console.log(`\n✅ Updated: ${updatedCount} companies`);
console.log('\n📊 New score distribution:');
for (const [score, count] of Object.entries(distribution).sort()) {
  const bar = '█'.repeat(Math.ceil(count / 2));
  console.log(`  Score ${score}: ${String(count).padStart(3)}社  ${bar}`);
}
console.log(`\n  Total: ${Object.values(distribution).reduce((a, b) => a + b, 0)}社`);
