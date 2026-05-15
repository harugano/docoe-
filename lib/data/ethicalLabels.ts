import { EthicalLabel } from "@/lib/types";

/**
 * エシカルラベル・認証ラベルデータ
 * ポイント設計：
 *  +5 = 国際的第三者認証・根拠が比較的明確
 *  +4 = 第三者認証 or 公的制度・一定の信頼性
 *  +3 = 業界制度・公的表示・一定の環境配慮確認
 *  +2 = 企業表示・社会貢献方向性確認、第三者性限定
 *  +1 = 自己申告的・根拠確認限定（曖昧表示含む）
 */
export const ethicalLabels: EthicalLabel[] = [

  // ===== フェアトレード・人権・労働 =====

  {
    id: "fairtrade-intl",
    labelName: "国際フェアトレード認証",
    aliases: ["国際フェアトレード", "フェアトレード認証", "fairtrade", "fair trade", "フェアトレード"],
    point: 5,
    category: "fair_trade",
    description:
      "Fairtrade International が認証する、生産者への公正な対価支払いや労働・環境基準の遵守を条件とした国際認証制度です。コーヒー・チョコレート・バナナ等で広く普及しています。",
    sourceUrls: ["https://www.fairtrade-jp.org/", "https://www.fairtrade.net/"],
    sourceMemo: "フェアトレード・ラベル・ジャパン公式サイト等",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "wfto",
    labelName: "WFTO認証",
    aliases: ["WFTO", "世界フェアトレード機関"],
    point: 5,
    category: "fair_trade",
    description:
      "世界フェアトレード機関（WFTO）による認証。フェアトレードを事業の中心に置く組織であることを認証します。",
    sourceUrls: ["https://wfto.com/"],
    sourceMemo: "WFTO公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "rainforest-alliance",
    labelName: "Rainforest Alliance認証",
    aliases: ["レインフォレストアライアンス", "Rainforest Alliance", "緑のカエル"],
    point: 4,
    category: "fair_trade",
    description:
      "農業・林業・観光業における環境保全・社会公正・経済的持続可能性を認証するNGO「Rainforest Alliance」の認証マークです。コーヒー・茶・チョコレートなどで見られます。",
    sourceUrls: ["https://www.rainforest-alliance.org/"],
    sourceMemo: "Rainforest Alliance公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "utz",
    labelName: "UTZ認証",
    aliases: ["UTZ", "UTZ Certified"],
    point: 4,
    category: "fair_trade",
    description:
      "コーヒー・カカオ等の持続可能な農業実践を認証する制度です。2018年にRainforest Allianceと統合されました。",
    sourceUrls: ["https://www.rainforest-alliance.org/"],
    sourceMemo: "Rainforest Alliance（UTZ統合後）公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "rspo",
    labelName: "RSPO認証",
    aliases: ["RSPO", "持続可能なパーム油認証", "Roundtable on Sustainable Palm Oil"],
    point: 4,
    category: "fair_trade",
    description:
      "持続可能なパーム油の生産・調達を認証する国際機関RSPOの認証です。熱帯雨林保護・労働権保護等の基準があります。",
    sourceUrls: ["https://www.rspo.org/"],
    sourceMemo: "RSPO公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "sa8000",
    labelName: "SA8000",
    aliases: ["SA8000", "Social Accountability 8000", "SA 8000"],
    point: 5,
    category: "labor_human_rights",
    description:
      "Social Accountability International（SAI）が定める労働環境・人権に関する国際的な第三者認証規格です。強制労働・児童労働の禁止、安全な労働環境等が基準に含まれます。",
    sourceUrls: ["https://sa-intl.org/programs/sa8000/"],
    sourceMemo: "SAI公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "b-corp",
    labelName: "B Corp認証",
    aliases: ["B Corp", "Bコープ", "B Corporation", "Certified B Corp"],
    point: 5,
    category: "certified_b_corp",
    description:
      "B Lab が認証する、社会・環境・従業員・地域社会・ガバナンス等の基準を満たす企業認証です。世界中で5000社以上が認証を受けています。",
    sourceUrls: ["https://www.bcorporation.net/", "https://bcorporation.jp/"],
    sourceMemo: "B Lab公式サイト・Bコープジャパン",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  // ===== オーガニック・農産物 =====

  {
    id: "yuki-jas",
    labelName: "有機JAS",
    aliases: ["有機JAS", "有機JAS認証", "有機農産物", "有機食品", "JAS有機"],
    point: 5,
    category: "organic",
    description:
      "農林水産省が定めるJAS規格に基づく有機農産物・有機食品の認証です。化学農薬・化学肥料の使用を原則禁止した農法で生産されていることを第三者機関が認証します。",
    sourceUrls: ["https://www.maff.go.jp/j/jas/jas_kikaku/organic.html"],
    sourceMemo: "農林水産省JAS規格ページ",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "eu-organic",
    labelName: "EU Organic",
    aliases: ["EU Organic", "EU有機", "ユーロリーフ", "Euroleaf"],
    point: 4,
    category: "organic",
    description:
      "欧州連合（EU）が定める有機農業・有機食品の認証制度です。EUで流通する有機食品には原則このマークの表示が義務付けられています。",
    sourceUrls: ["https://ec.europa.eu/info/food-farming-fisheries/farming/organic-farming_en"],
    sourceMemo: "欧州委員会公式サイト",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "usda-organic",
    labelName: "USDA Organic",
    aliases: ["USDA Organic", "USDA有機", "アメリカ有機"],
    point: 4,
    category: "organic",
    description:
      "米国農務省（USDA）が認定する有機農産物・有機食品の認証プログラムです。95%以上が有機農業基準に従って生産されていることが条件です。",
    sourceUrls: ["https://www.usda.gov/topics/organic"],
    sourceMemo: "USDA公式サイト",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "gots",
    labelName: "GOTS（有機繊維国際認証）",
    aliases: ["GOTS", "Global Organic Textile Standard", "オーガニックコットン認証"],
    point: 5,
    category: "organic",
    description:
      "繊維製品のオーガニック原料使用と責任ある製造プロセスを認証するグローバル標準（GOTS）です。コットン・ウール等の有機繊維製品に使われます。",
    sourceUrls: ["https://global-standard.org/"],
    sourceMemo: "GOTS公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "oeko-tex",
    labelName: "OEKO-TEX（エコテックス）",
    aliases: ["OEKO-TEX", "エコテックス", "STANDARD 100", "OEKO TEX"],
    point: 4,
    category: "organic",
    description:
      "繊維製品に有害物質が含まれていないことを認証するOEKO-TEX® STANDARD 100などの認証制度です。消費者の健康・安全に重点を置いています。",
    sourceUrls: ["https://www.oeko-tex.com/"],
    sourceMemo: "OEKO-TEX公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "ocs",
    labelName: "Organic Content Standard（OCS）",
    aliases: ["OCS", "Organic Content Standard", "オーガニックコンテンツスタンダード"],
    point: 3,
    category: "organic",
    description:
      "製品中の有機農産物の含有量を認証する国際基準（OCS）です。GOTSが全プロセスを対象とするのに対し、OCSは原料の有機率に特化しています。",
    sourceUrls: ["https://textileexchange.org/ocs/"],
    sourceMemo: "Textile Exchange公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "grs",
    labelName: "Global Recycled Standard（GRS）",
    aliases: ["GRS", "Global Recycled Standard", "グローバルリサイクルスタンダード"],
    point: 4,
    category: "recycle",
    description:
      "製品中のリサイクル素材の含有量と責任ある製造プロセスを認証するグローバル標準（GRS）です。ペットボトル再生繊維等の製品に使われます。",
    sourceUrls: ["https://textileexchange.org/grs/"],
    sourceMemo: "Textile Exchange公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  // ===== 森林・紙・木材 =====

  {
    id: "fsc",
    labelName: "FSC認証",
    aliases: ["FSC", "FSC認証", "Forest Stewardship Council", "森林認証", "FSCマーク"],
    point: 5,
    category: "forest",
    description:
      "FSC（Forest Stewardship Council／森林管理協議会）が認証する、適切に管理された森林由来の木材・紙製品の国際認証です。生物多様性・地域社会・環境への配慮が基準に含まれます。",
    sourceUrls: ["https://jp.fsc.org/"],
    sourceMemo: "FSCジャパン公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "pefc",
    labelName: "PEFC認証",
    aliases: ["PEFC", "Programme for the Endorsement of Forest Certification", "PEFC認証"],
    point: 4,
    category: "forest",
    description:
      "持続可能な森林管理を認証する国際的なプログラム（PEFC）の認証マークです。多くの国の国内森林認証制度と相互認証しています。",
    sourceUrls: ["https://www.pefc.org/", "https://www.sgec-endorsement.com/"],
    sourceMemo: "PEFC公式サイト・SGECサイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "sgec",
    labelName: "SGEC認証",
    aliases: ["SGEC", "緑の循環認証会議", "SGEC認証"],
    point: 4,
    category: "forest",
    description:
      "日本の「緑の循環認証会議（SGEC）」が認証する国内向け森林認証制度です。PEFCと相互認証しています。",
    sourceUrls: ["https://www.sgec-endorsement.com/"],
    sourceMemo: "SGEC公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "thinning-wood-mark",
    labelName: "間伐材マーク",
    aliases: ["間伐材マーク", "間伐材", "間伐"],
    point: 3,
    category: "forest",
    description:
      "国産の間伐材・間伐材由来の製品であることを示すマークです。森林の適切な整備（間伐）の促進に貢献します。",
    sourceUrls: ["https://www.rinya.maff.go.jp/j/sin_riyou/mabiki/mabikizai_mark.html"],
    sourceMemo: "林野庁公式サイト",
    verificationLevel: "public_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ===== 水産・海洋 =====

  {
    id: "msc",
    labelName: "MSC認証（海洋管理協議会）",
    aliases: ["MSC", "MSC認証", "Marine Stewardship Council", "持続可能な漁業", "MSCマーク"],
    point: 5,
    category: "marine",
    description:
      "海洋管理協議会（MSC）が認証する、持続可能な漁業で獲られた水産物であることを示す国際認証です。水産資源の持続的利用と海洋生態系の保全が基準に含まれます。",
    sourceUrls: ["https://www.msc.org/ja-jp"],
    sourceMemo: "MSC公式サイト（日本語）",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "asc",
    labelName: "ASC認証（水産養殖管理協議会）",
    aliases: ["ASC", "ASC認証", "Aquaculture Stewardship Council", "責任ある養殖"],
    point: 5,
    category: "marine",
    description:
      "水産養殖管理協議会（ASC）が認証する、環境・社会基準を満たした責任ある養殖業の水産物認証です。",
    sourceUrls: ["https://www.asc-aqua.org/ja/"],
    sourceMemo: "ASC公式サイト（日本語）",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "mel",
    labelName: "MEL認証",
    aliases: ["MEL", "Marine Eco-Label Japan", "MEL認証"],
    point: 3,
    category: "marine",
    description:
      "日本の「海洋エコラベルジャパン（MEL）」による水産物の持続可能性認証です。国内の漁業・養殖業を対象としています。",
    sourceUrls: ["https://www.melj.jp/"],
    sourceMemo: "MELジャパン公式サイト",
    verificationLevel: "industry_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "dolphin-safe",
    labelName: "Dolphin Safe",
    aliases: ["Dolphin Safe", "ドルフィンセーフ", "イルカフレンドリー"],
    point: 3,
    category: "marine",
    description:
      "マグロ等の漁獲においてイルカを傷つけない方法で漁獲されたことを示す表示です。主にツナ缶等の水産缶詰製品に見られます。",
    sourceUrls: ["https://www.dolphins.org/dolphinsafe"],
    sourceMemo: "Earth Island Institute公式サイト",
    verificationLevel: "industry_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ===== 動物福祉 =====

  {
    id: "animal-welfare",
    labelName: "アニマルウェルフェア認証",
    aliases: ["アニマルウェルフェア", "動物福祉", "animal welfare"],
    point: 4,
    category: "animal_welfare",
    description:
      "動物が生きている間、身体的・精神的に良好な状態に置かれていること（5つの自由）を認証する基準です。認証機関によって基準が異なります。",
    sourceUrls: ["https://www.maff.go.jp/j/chikusan/sinko/animalwelfare.html"],
    sourceMemo: "農林水産省アニマルウェルフェアページ等",
    verificationLevel: "industry_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "cage-free",
    labelName: "ケージフリー表示",
    aliases: ["ケージフリー", "cage free", "平飼い", "放し飼い"],
    point: 2,
    category: "animal_welfare",
    description:
      "鶏等の家畜をケージ（檻）に入れずに飼育していることを示す表示です。第三者認証がない場合は企業の自己申告となります。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・第三者認証有無により評価が変わる",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  {
    id: "cruelty-free",
    labelName: "クルエルティフリー",
    aliases: ["クルエルティフリー", "cruelty free", "動物実験なし", "no animal testing"],
    point: 3,
    category: "animal_welfare",
    description:
      "製品や原材料の開発・製造において動物実験を行っていないことを示す表示です。化粧品・日用品等に見られます。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・認証機関により基準が異なる",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  {
    id: "leaping-bunny",
    labelName: "Leaping Bunny認証",
    aliases: ["Leaping Bunny", "リーピングバニー", "うさぎマーク"],
    point: 4,
    category: "animal_welfare",
    description:
      "動物実験を一切行っていないことを認証するLeaping Bunny Programの認証マークです。製品だけでなく原材料についても動物実験を禁止しています。",
    sourceUrls: ["https://www.leapingbunny.org/"],
    sourceMemo: "Leaping Bunny Program公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "vegan-society",
    labelName: "Vegan Society認証",
    aliases: ["Vegan Society", "ビーガン認証", "The Vegan Society", "ヴィーガン認証"],
    point: 4,
    category: "animal_welfare",
    description:
      "英国Vegan Societyによる、動物性成分を一切含まず動物実験も行っていない製品への認証です。",
    sourceUrls: ["https://www.vegansociety.com/"],
    sourceMemo: "Vegan Society公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "vegan-label",
    labelName: "Vegan認証（一般）",
    aliases: ["vegan", "ビーガン", "ヴィーガン", "完全菜食"],
    point: 3,
    category: "animal_welfare",
    description:
      "動物性成分を使用していないことを示す表示です。第三者認証がある場合と企業の自己申告の場合があり、認証機関により基準が異なります。",
    sourceUrls: [],
    sourceMemo: "複数の認証機関が存在・要確認",
    verificationLevel: "industry_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ===== リサイクル・資源循環 =====

  {
    id: "eco-mark",
    labelName: "エコマーク",
    aliases: ["エコマーク", "eco mark", "公益財団法人日本環境協会"],
    point: 4,
    category: "recycle",
    description:
      "公益財団法人日本環境協会が認定する、環境負荷が少ない商品・サービスへの認証マークです。原料の調達から廃棄までのライフサイクル全体が評価されます。",
    sourceUrls: ["https://www.ecomark.jp/"],
    sourceMemo: "エコマーク公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "green-mark",
    labelName: "グリーンマーク",
    aliases: ["グリーンマーク", "green mark", "再生紙グリーン"],
    point: 3,
    category: "recycle",
    description:
      "古紙を原料として一定割合以上使用した製品（トイレットペーパー等）に表示されるマークです。公益財団法人古紙再生促進センターが認定します。",
    sourceUrls: ["https://www.prpc.or.jp/"],
    sourceMemo: "古紙再生促進センター公式サイト",
    verificationLevel: "industry_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "recycled-paper-mark",
    labelName: "再生紙使用マーク",
    aliases: ["再生紙マーク", "再生紙使用", "リサイクル紙"],
    point: 3,
    category: "recycle",
    description:
      "再生紙を使用した製品に表示されるマークです。R100（100%再生紙）等の表示がある場合は信頼性が高くなります。",
    sourceUrls: [],
    sourceMemo: "公開情報に基づく",
    verificationLevel: "public_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "pet-recycle",
    labelName: "PETボトルリサイクル推奨マーク",
    aliases: ["PETリサイクル", "PETボトルリサイクル", "PETリサイクル推奨"],
    point: 3,
    category: "recycle",
    description:
      "PETボトルのリサイクルに適した素材・デザインである製品に表示されるマークです。公益財団法人PETボトルリサイクル推進協議会が認定します。",
    sourceUrls: ["https://www.petbottle-rec.gr.jp/"],
    sourceMemo: "PETボトルリサイクル推進協議会公式サイト",
    verificationLevel: "industry_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "biomass-mark",
    labelName: "バイオマスマーク",
    aliases: ["バイオマスマーク", "biomass mark", "バイオマス"],
    point: 3,
    category: "recycle",
    description:
      "農林水産省の支援を受けた日本バイオマス製品普及促進協議会が認定する、バイオマス（生物由来の資源）を一定割合以上使用した製品へのマークです。",
    sourceUrls: ["https://www.biomass-mark.org/"],
    sourceMemo: "バイオマスマーク協議会公式サイト",
    verificationLevel: "industry_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "recycled-material",
    labelName: "リサイクル素材使用表示",
    aliases: ["リサイクル素材", "再生素材", "recycled material", "recycled"],
    point: 2,
    category: "recycle",
    description:
      "製品にリサイクル素材が使用されていることを示す表示です。第三者認証がない場合は企業の自己申告となります。含有率の確認をお勧めします。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・企業自己申告のものも多い",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  {
    id: "refill-ready",
    labelName: "詰め替え対応表示",
    aliases: ["詰め替え可能", "詰め替え対応", "refill", "つめかえ"],
    point: 2,
    category: "plastic_reduction",
    description:
      "詰め替え用製品が存在することを示す表示です。容器の廃棄削減に貢献します。",
    sourceUrls: [],
    sourceMemo: "公開情報に基づく",
    verificationLevel: "company_self_claim",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "plant-based-plastic",
    labelName: "植物由来プラスチック表示",
    aliases: ["植物由来プラ", "バイオプラスチック", "bio plastic", "植物性プラスチック"],
    point: 2,
    category: "plastic_reduction",
    description:
      "石油由来ではなく植物資源由来のプラスチックを使用していることを示す表示です。生分解性の有無は製品によって異なります。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・要確認",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  // ===== 気候・エネルギー =====

  {
    id: "carbon-footprint",
    labelName: "カーボンフットプリント",
    aliases: ["カーボンフットプリント", "CFP", "CO2表示", "カーボンラベル"],
    point: 3,
    category: "climate",
    description:
      "製品のライフサイクル全体における温室効果ガス排出量を可視化した表示です。日本ではカーボンフットプリントコミュニケーションプログラムが推進しています。",
    sourceUrls: ["https://www.cfp-japan.jp/"],
    sourceMemo: "CFP（カーボンフットプリント）プログラム公式サイト",
    verificationLevel: "public_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "carbon-trust",
    labelName: "Carbon Trust認証",
    aliases: ["Carbon Trust", "カーボントラスト", "Carbon Footprint Label"],
    point: 4,
    category: "climate",
    description:
      "英国Carbon Trust機関による、製品のカーボンフットプリント削減や排出量測定を認証するラベルです。",
    sourceUrls: ["https://www.carbontrust.com/"],
    sourceMemo: "Carbon Trust公式サイト",
    verificationLevel: "third_party_certification",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "renewable-energy",
    labelName: "再生可能エネルギー使用表示",
    aliases: ["再エネ使用", "再生可能エネルギー", "renewable energy", "再エネ100%"],
    point: 2,
    category: "energy",
    description:
      "製造や事業活動に再生可能エネルギーを使用していることを示す表示です。RE100等の取り組みと関連する場合もあります。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・企業自己申告のものも多い",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  {
    id: "energy-saving-label",
    labelName: "省エネラベル",
    aliases: ["省エネラベル", "統一省エネラベル", "省エネ", "エネルギー消費効率"],
    point: 3,
    category: "energy",
    description:
      "経済産業省が推進する省エネ性能表示制度に基づくラベルです。家電・照明等の省エネ性能を示します。",
    sourceUrls: ["https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/appliance/label/"],
    sourceMemo: "経済産業省省エネポータルサイト",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "energy-star",
    labelName: "ENERGY STAR",
    aliases: ["ENERGY STAR", "エナジースター", "エネルギースター"],
    point: 3,
    category: "energy",
    description:
      "米国環境保護庁（EPA）が認定する省エネ製品の認証マークです。電子機器・家電等の省エネ性能が一定基準を満たす製品に表示されます。",
    sourceUrls: ["https://www.energystar.gov/"],
    sourceMemo: "ENERGY STAR公式サイト（EPA）",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  // ===== 食品ロス・地域・福祉 =====

  {
    id: "food-loss-label",
    labelName: "フードロス削減商品",
    aliases: ["フードロス削減", "食品ロス削減", "ロス削減", "food loss"],
    point: 3,
    category: "food_loss",
    description:
      "食品ロスの削減を目的として、規格外品・賞味期限間近品などを販売する商品への表示です。廃棄予定の食品を救済することで、食品廃棄を減らします。",
    sourceUrls: ["https://www.maff.go.jp/j/shokusan/recycle/syoku_loss/index.html"],
    sourceMemo: "農林水産省食品ロスページ等に基づく",
    verificationLevel: "company_self_claim",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "temae-dori",
    labelName: "てまえどり",
    aliases: ["てまえどり", "手前どり", "手前取り", "期限間近"],
    point: 2,
    category: "food_loss",
    description:
      "コンビニ・スーパー等で、賞味期限・消費期限の近い商品を手前から取ることを促す取り組みです。農林水産省・消費者庁が推進しています。",
    sourceUrls: ["https://www.caa.go.jp/policies/policy/consumer_policy/information/food_loss/"],
    sourceMemo: "消費者庁・農林水産省関連ページ",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "local-gi",
    labelName: "地理的表示（GI）",
    aliases: ["GI", "地理的表示", "GIマーク", "地域ブランド"],
    point: 3,
    category: "local",
    description:
      "農林水産省が認定する地理的表示（GI）保護制度に基づく表示です。特定地域の産品・品質・生産方法が保護されます。",
    sourceUrls: ["https://www.maff.go.jp/j/shokusan/gi_act/index.html"],
    sourceMemo: "農林水産省GI制度ページ",
    verificationLevel: "public_standard",
    confidenceLevel: "high",
    lastUpdated: "2026-05-15",
  },

  {
    id: "local-product",
    labelName: "地産地消表示",
    aliases: ["地産地消", "地元産", "地場産", "国産"],
    point: 3,
    category: "local",
    description:
      "地域で生産された農産物・食品を地域で消費することを促す表示です。輸送距離短縮・地域経済への貢献が期待できます。",
    sourceUrls: [],
    sourceMemo: "農林水産省等の推進施策に基づく概念",
    verificationLevel: "company_self_claim",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "welfare-work",
    labelName: "障害者就労支援商品",
    aliases: ["障害者就労支援", "福祉作業所", "就労継続支援", "障害者雇用", "授産品"],
    point: 3,
    category: "welfare",
    description:
      "障害のある方が就労する事業所（就労継続支援事業所等）が製造・提供した商品・サービスです。社会参加と経済的自立の支援につながります。",
    sourceUrls: ["https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/service/shurou.html"],
    sourceMemo: "厚生労働省障害者就労支援ページ等",
    verificationLevel: "public_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  {
    id: "donation-attached",
    labelName: "寄付付き商品・売上の一部寄付",
    aliases: ["寄付付き", "売上寄付", "チャリティ商品", "社会貢献商品", "寄付"],
    point: 2,
    category: "welfare",
    description:
      "商品の売上の一部が社会貢献活動・NPO・環境保全等に寄付される商品です。寄付先・金額・割合の透明性を確認することをお勧めします。",
    sourceUrls: [],
    sourceMemo: "公開情報限定・企業自己申告のものも多い",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
  },

  {
    id: "akaihane",
    labelName: "赤い羽根共同募金協賛商品",
    aliases: ["赤い羽根", "共同募金", "赤い羽根共同募金"],
    point: 2,
    category: "welfare",
    description:
      "赤い羽根共同募金運動に協賛している商品です。地域の福祉活動への資金提供を支援します。",
    sourceUrls: ["https://www.akaihane.or.jp/"],
    sourceMemo: "赤い羽根共同募金公式サイト",
    verificationLevel: "public_standard",
    confidenceLevel: "medium",
    lastUpdated: "2026-05-15",
  },

  // ===== 曖昧表示（グリーンウォッシュ注意） =====

  {
    id: "eco-generic",
    labelName: "エコ商品表示（一般）",
    aliases: ["エコ", "eco", "エコ商品", "エコ製品"],
    point: 1,
    category: "other",
    description:
      "「エコ」の表示は広く使われていますが、第三者認証や具体的な根拠が確認できない場合があります。詳細を確認することをお勧めします。",
    sourceUrls: [],
    sourceMemo: "自己申告的表示",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    greenWashWarning: true,
  },

  {
    id: "sustainable-generic",
    labelName: "サステナブル表示（一般）",
    aliases: ["サステナブル", "sustainable", "持続可能", "サステナ"],
    point: 1,
    category: "other",
    description:
      "「サステナブル」の表示は広く使われていますが、第三者認証や具体的な根拠が確認できない場合があります。認証の有無を確認することをお勧めします。",
    sourceUrls: [],
    sourceMemo: "自己申告的表示",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    greenWashWarning: true,
  },

  {
    id: "natural-generic",
    labelName: "自然派・ナチュラル表示（一般）",
    aliases: ["自然派", "ナチュラル", "natural", "天然", "オールナチュラル"],
    point: 1,
    category: "other",
    description:
      "「自然派」「ナチュラル」の表示は法的定義が曖昧な場合があり、第三者認証を伴わない場合があります。原材料や認証の有無を確認することをお勧めします。",
    sourceUrls: [],
    sourceMemo: "自己申告的表示",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    greenWashWarning: true,
  },

  {
    id: "green-generic",
    labelName: "グリーン商品表示（一般）",
    aliases: ["グリーン", "green", "地球にやさしい", "環境にやさしい", "環境配慮"],
    point: 1,
    category: "other",
    description:
      "「グリーン」「地球にやさしい」等の表示は広く使われていますが、具体的な認証・根拠が確認できない場合があります。詳細な情報を確認することをお勧めします。",
    sourceUrls: [],
    sourceMemo: "自己申告的表示",
    verificationLevel: "company_self_claim",
    confidenceLevel: "low",
    lastUpdated: "2026-05-15",
    greenWashWarning: true,
  },
];

/** カテゴリ一覧（UI表示用） */
export const labelCategoryLabels: Record<string, string> = {
  fair_trade: "フェアトレード・人権",
  organic: "オーガニック",
  forest: "森林・紙・木材",
  marine: "水産・海洋",
  animal_welfare: "動物福祉",
  climate: "気候・脱炭素",
  recycle: "リサイクル・資源循環",
  plastic_reduction: "プラスチック削減",
  energy: "省エネ・エネルギー",
  local: "地産地消・地域",
  labor_human_rights: "労働・人権",
  food_loss: "食品ロス削減",
  biodiversity: "生物多様性",
  certified_b_corp: "B Corp",
  welfare: "福祉・社会貢献",
  other: "その他",
};
