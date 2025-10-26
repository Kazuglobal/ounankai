import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Building2, School, Users } from 'lucide-react';

const CareerPaths: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const departments = [
    {
      id: 'mechanical',
      name: '機械科',
      color: 'from-blue-600 to-indigo-600',
      careers: {
        prefectureEmployment: [
          '(株)小山田工業所', '(株)カガヤ', '(株)カノウ', '(株)キタセキ',
          '(株)岩手木材', '(株)東洋機械盛岡工場', '(有)二和木材', '盛岡セイコー工業(株)'
        ],
        outsideEmployment: [
          '(株)NTTME開発事業部花巻工場', 'TDKエレクトロニクスファクトリーズ',
          '東北送配電サービス(株)', '(株)ニコン', '日野自動車(株)',
          '(株)フジクラソリューションズ', '(株)フジタ', '(株)ヨシコンプロジェクト小田原(株)',
          '京浜急行電鉄(株)', 'ジャパンマテリアル(株)', 'シンヨー(株)',
          'ジャストエンジニアリング(株)', '東鉄工業(株)', 'トヨタ自動車東日本(株)',
          '日本製鉄(株)東日本製鉄所君津地区 (2名)', '(株)NIPPO',
          '(株)ハイレックスコーポレーション', 'I-PEX(株)'
        ],
        publicService: ['消防副士長・一般曹候補生'],
        university: ['東北学院大学', '関東学院大学'],
        juniorCollege: [
          '岩手県立産業技術短期大学校矢巾校 (2名)',
          '東北職業能力開発大学校'
        ],
        vocationalSchool: [
          '岩手県立宮古高等技術専門校',
          '仙台工科専門学校', 'トヨタ自動車大学校', '日本工学院専門学校',
          '早稲田速記医療福祉専門学校', '日本自動車大学校', '中日本航空専門学校'
        ]
      }
    },
    {
      id: 'electrical',
      name: '電気科',
      color: 'from-yellow-600 to-orange-600',
      careers: {
        prefectureEmployment: [
          'IGRいわて銀河鉄道(株)', '岩手製紙(株)', '(株)扇コンサルタンツ', '(株)東北制御設計'
        ],
        outsideEmployment: [
          'エヌ・デー・ケー(株)宮城工場', '(株)大崎電業社大衡事業所',
          'OKIエレクトロニクスファクトリー(株)', '(株)関電工', '(株)NTT東日本-東北',
          '大崎電設工業(株)', '鹿島建設(株)総合管理(株)', '関東電気(株)',
          '(株)きんでん', 'CPOWERエナジー', 'JR東日本ビルテック(株)',
          '寺岡オート・ドアシステム(株)', '(株)トーエネック', '東北電力(株) (3名)',
          '東芝エレベータ(株)東京支社', '東北電力ネットワーク(株) (2名)',
          '東日本旅客鉄道(株)盛岡支社 (2名)', '日鉄テックスエンジ(株)東京エネス',
          '東京電力パワーグリッド(株) (2名)', '東京電気管理エンジニア(株) (2名)',
          '(株)ネクスコ東日本エンジニアリング', '(株)日立ビルシステム首都圏支社',
          '三菱電機ビルソリューションズ(株)', 'ユアテック(株)美和電気工業(株)',
          '(株)ユアテック', '(株)ユアテックサービス'
        ],
        publicService: ['一般曹候補生 (2名)'],
        university: ['岩手大学', '東北学院大学', '新潟医療福祉大学'],
        juniorCollege: ['岩手県立産業技術短期大学校矢巾校'],
        vocationalSchool: ['盛岡外語観光＆ブライダル専門学校']
      }
    },
    {
      id: 'civil',
      name: '土木科',
      color: 'from-green-600 to-emerald-600',
      careers: {
        prefectureEmployment: [
          '(株)岩手東部土地改良区', '工藤建設(株)', '(株)斎藤工業', '佐々木建設(株)',
          '東日本舗道(株)', '(株)中居建設', '(株)菱和建設', '(株)宮城建設',
          '宮本土木(株)', '(株)森組'
        ],
        outsideEmployment: [
          '(株)熊谷組', '(株)CyberFightプロレスリング・ノア', '世紀東急工業(株)',
          '仙建工業(株)', '大豊建設(株)東京土木支店', '鉄建建設(株)',
          '東北自然エネルギー(株)', '日特建設(株)', '日本道路(株)東北支店',
          '(株)NIPPO東北支社', 'ライト工業(株)', 'ユニオン建設(株)',
          '前田道路(株) (2名)'
        ],
        publicService: ['盛岡市職員'],
        university: ['国立研究開発法人大学校']
      }
    },
    {
      id: 'chemistry',
      name: '電子化学科',
      color: 'from-purple-600 to-pink-600',
      careers: {
        prefectureEmployment: [
          '(株)岩手熱錬チタンフーズ(株)', '(株)菊地工場', '旭熱処理工業(株)',
          '東熱地工エンジニアリング(株)', 'イーエヌ大塚製薬(株)花巻工場'
        ],
        outsideEmployment: [
          'デンカ(株)大船工場', 'デンカ(株)千葉工場', '(株)巴商会', '東邦化学工業(株)'
        ],
        university: ['東北工業大学', '関東学院大学', 'コーネル大学＆ウェルネス専門職大学']
      }
    },
    {
      id: 'mechatronics',
      name: '電子機械科',
      color: 'from-red-600 to-orange-600',
      careers: {
        prefectureEmployment: [
          'ALSOK岩手(株)', '(株)岩手村田製作所', '岩手日東工器(株)',
          '岩手リコー(株)', '北上製紙(株)', '(株)ジャムコ',
          '(株)富士通ゼネラルエレクトロニクス', '(株)みちのくクボタ',
          '白石工業(株)盛岡工場', '日産プリンス岩手販売(株)', '(株)富士通ゼネラル',
          '(株)シチズン時計マニュファクチャリング相馬事業所', '森永乳業(株)盛岡工場',
          '盛岡セイコー工業(株)'
        ],
        outsideEmployment: [
          'イーエヌ大塚製薬(株)花巻工場', '(株)ツガワMS開発事業部花巻工場',
          'TDKエレクトロニクスファクトリーズ', 'TDK(株)秋田工場',
          'いすゞ自動車東北(株)', '住友電装(株)', 'トーエネック',
          '(株)日立ハイテクフィールディング', '東日本旅客鉄道(株)津田沼車掌区',
          '日立ジョンソンコントロールズ清水(株)', '(株)日立ビルシステム',
          'YDKテクノロジーズ(株)'
        ],
        university: ['日本大学', '武蔵野学院大学', '島根県立大学'],
        juniorCollege: ['岩手県立産業技術短期大学校水沢校'],
        vocationalSchool: [
          '大原簿記情報ビジネス医療福祉専門学校盛岡校', '北上コンピュータ・アカデミー',
          '東北電子専門学校', '仙台デザイン専門学校', '花壇自動車大学校',
          '仙台総合テクノロジー専門学校', '東京デザイン専門学校', '新潟デザイン専門学校'
        ]
      }
    },
    {
      id: 'information',
      name: '電子情報科',
      color: 'from-cyan-600 to-blue-600',
      careers: {
        prefectureEmployment: [
          '小岩井乳業(株)小岩井工場', '(株)小松製作所', '(株)岩手ダイハツ販売',
          '(株)岩手富士通ゼネラル', '(株)岩手リコー', '盛岡セイコー工業(株)'
        ],
        outsideEmployment: [
          'アリオテクノ(株)', 'イオニアシブヤ(株)', '(株)NTT東日本-南関東',
          '(株)エヌ・ティ・ティ・エムイー (2名)', 'NECフィールディング(株)',
          '関東電気(株)', '(株)サンテック', 'JR東日本メカトロニクス(株)',
          '(株)関電工', 'デンカ(株)千葉工場', 'トヨタ自動車(株)',
          '(株)ホンダデグナーフェンス', '鹿島建設(株)首都圏建築支店',
          '大崎電設工業(株)', '東日本旅客鉄道(株)千葉支社', '新光エンジニアリング(株)'
        ],
        university: ['千葉工業大学'],
        juniorCollege: ['岩手県立産業技術短期大学校矢巾校 (3名)'],
        vocationalSchool: [
          '盛岡外語観光＆ブライダル専門学校', '仙台ヘアメイク専門学校',
          '(社)日本ホテルスクール', '専門学校日本デザイナー学院',
          '仙台デザイン専門学校', '日本工学院八王子専門学校',
          '東北電子専門学校', '千葉デザイナー学院'
        ]
      }
    },
    {
      id: 'architecture',
      name: '建築・デザイン科',
      color: 'from-teal-600 to-green-600',
      careers: {
        prefectureEmployment: [
          '(株)アート不動産', '(株)イヤタカ', '(株)岩手県建築', '(株)高光建設',
          '(株)タカヤアリーナ', '(株)TAKエンジニアリング', '(株)田村建設',
          '(株)メグミ', '菱和建設(株)', '(株)前田工務店'
        ],
        outsideEmployment: [
          '(株)浅沼組', '(株)一条工務店', '(株)一條工務店仙台', '(株)田中建設',
          '中央建設(株)東京支店', '(株)東急設計コンサルタント', '(株)西原衛生工業所',
          '(株)長谷工コーポレーション', '日立建設設計'
        ],
        university: [
          '東北芸術工科大学', '東北工業大学', '八戸学院大学', '東北学院大学',
          '日本大学', '宮城学院大学'
        ],
        juniorCollege: ['岩手県立産業技術短期大学校矢巾校 (4名)'],
        vocationalSchool: [
          '盛岡医療福祉スポーツ専門学校', '東北ヘアモード学院', '新潟デザイン専門学校',
          '日本デザイナー学院 (2名)', '東京デザイナー学院'
        ]
      }
    },
    {
      id: 'parttime',
      name: '定時制',
      color: 'from-gray-600 to-slate-600',
      careers: {
        prefectureEmployment: [
          '(株)アイソニック矢巾事業所', '岩手製紙(株)', 'キンコーズ・ジャパン(株)盛岡店',
          '(株)佐々木組', '(株)ハシ勝'
        ],
        outsideEmployment: ['東京ビジネスサービス(株)', '(株)リフューズ'],
        university: ['岩手県立大学'],
        vocationalSchool: ['MCI盛岡医療大学校', '盛岡情報ビジネス&デザイン専門学校']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          ホームに戻る
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Career Paths
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            令和5年度 各科進路先一覧
          </h1>
          <p className="text-xl text-gray-600">
            企業名及び校種別の学校名は五十音順
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-64 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/30 text-9xl">🎓</div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-blue-600 mb-2">2023年度</p>
              <h2 className="text-2xl font-bold text-gray-900">全8学科の進路実績</h2>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="space-y-8">
          {departments.map((dept) => (
            <section key={dept.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className={`inline-flex items-center gap-3 mb-6 bg-gradient-to-r ${dept.color} px-6 py-3 rounded-full`}>
                <GraduationCap className="h-6 w-6 text-white" />
                <h2 className="text-2xl font-bold text-white">{dept.name}</h2>
              </div>

              <div className="space-y-6">
                {dept.careers.prefectureEmployment && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">県内就職</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.prefectureEmployment.map((company, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dept.careers.outsideEmployment && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-5 w-5 text-green-600" />
                      <h3 className="text-lg font-bold text-gray-900">県外就職</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.outsideEmployment.map((company, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dept.careers.publicService && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <h3 className="text-lg font-bold text-gray-900">公務員</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.publicService.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dept.careers.university && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <School className="h-5 w-5 text-orange-600" />
                      <h3 className="text-lg font-bold text-gray-900">大学</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.university.map((school, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm"
                        >
                          {school}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dept.careers.juniorCollege && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <School className="h-5 w-5 text-pink-600" />
                      <h3 className="text-lg font-bold text-gray-900">短大</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.juniorCollege.map((school, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm"
                        >
                          {school}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dept.careers.vocationalSchool && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <School className="h-5 w-5 text-teal-600" />
                      <h3 className="text-lg font-bold text-gray-900">専門学校・専修学校</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.careers.vocationalSchool.map((school, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm"
                        >
                          {school}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;
