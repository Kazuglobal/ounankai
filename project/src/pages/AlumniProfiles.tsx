import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, ArrowRight, Users, Briefcase, Award } from 'lucide-react';

const AlumniProfiles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const alumniData = [
    {
      id: 1,
      name: '田中 さくら',
      year: '2018',
      profession: 'テクノロジー起業家',
      company: 'イノベートテック・ソリューションズ',
      location: '東京都',
      industry: 'テクノロジー',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '5000万ドルの価値を持つAIスタートアップを創設',
      description: 'ヘルスケア分野における人工知能と機械学習ソリューションのイノベーションを主導。',
      highlights: ['Forbes 30 Under 30', 'TechCrunch Disruptor Award', 'MIT Technology Review Innovator']
    },
    {
      id: 2,
      name: '陳 健太',
      year: '2015',
      profession: '医学研究者',
      company: 'ハーバード医科大学',
      location: '大阪府',
      industry: 'ヘルスケア',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '画期的ながん研究プロジェクトを主導',
      description: '免疫療法研究を通じたがん治療の新しいアプローチを開拓。',
      highlights: ['Nature誌論文著者', 'NIH研究助成金受賞', 'アメリカがん学会フェロー']
    },
    {
      id: 3,
      name: '山田 美咲',
      year: '2012',
      profession: '環境弁護士',
      company: 'グリーン・ジャスティス連合',
      location: '愛知県',
      industry: '法律',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '連邦レベルでの気候政策改革を推進',
      description: '環境正義と持続可能な政策実施の推進活動を行う。',
      highlights: ['最高裁判所訴訟勝訴', '環境法研究所賞', '気候政策アドバイザー']
    },
    {
      id: 4,
      name: '金 大輔',
      year: '2010',
      profession: '投資銀行家',
      company: 'ゴールドマン・サックス',
      location: '神奈川県',
      industry: '金融',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '20億ドル以上の取引を監督するマネージングディレクター',
      description: 'テクノロジー分野のM&Aを専門とする。',
      highlights: ['トップ1%パフォーマー', '年間最優秀取引賞', '業界リーダーシップ賞']
    },
    {
      id: 5,
      name: '佐藤 あまり',
      year: '2014',
      profession: 'ドキュメンタリー映画監督',
      company: '独立系プロデューサー',
      location: '埼玉県',
      industry: 'メディア',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '社会正義ドキュメンタリーでエミー賞受賞',
      description: '社会変革と意識向上を推進するインパクトのあるドキュメンタリーを制作。',
      highlights: ['エミー賞受賞', 'サンダンス映画祭選出', 'ヒューマンライツ映画賞']
    },
    {
      id: 6,
      name: '田村 太郎',
      year: '2008',
      profession: '再生可能エネルギーエンジニア',
      company: 'テスラエナジー',
      location: '千葉県',
      industry: 'エンジニアリング',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '革新的バッテリー技術の主任エンジニア',
      description: '持続可能な未来のための次世代エネルギー貯蔵ソリューションを開発。',
      highlights: ['特許保有者（15件以上）', 'IEEEフェロー', 'クリーンエネルギーイノベーション賞']
    },
    {
      id: 7,
      name: '中村 理沙',
      year: '2016',
      profession: '教育政策ディレクター',
      company: 'ゲイツ財団',
      location: '兵庫県',
      industry: '非営利',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '支援の行き届かない地域での教育アクセスを変革',
      description: '世界的に教育成果と公平性を向上させるイニシアティブを主導。',
      highlights: ['グローバル教育リーダー', 'ユネスコパートナーシップディレクター', '教育イノベーション賞']
    },
    {
      id: 8,
      name: '鈴木 大樹',
      year: '2011',
      profession: 'スポーツ医学医師',
      company: 'オリンピックトレーニングセンター',
      location: '北海道',
      industry: 'ヘルスケア',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '複数のオリンピックチームのチームドクター',
      description: 'エリートアスリートに最先端のスポーツ医学ケアを提供。',
      highlights: ['オリンピックチームドクター', 'スポーツ医学専門医', 'アスレチックパフォーマンス研究者']
    },
    {
      id: 9,
      name: '小島 真理',
      year: '2013',
      profession: '航空宇宙エンジニア',
      company: 'スペースX',
      location: '福岡県',
      industry: '航空宇宙',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: '火星ミッション宇宙船の主任エンジニア',
      description: '次世代宇宙探査のための推進システムを設計。',
      highlights: ['火星ミッションチームリーダー', 'NASA共同研究', '航空宇宙イノベーション賞']
    }
  ];

  const industries = ['all', 'テクノロジー', 'ヘルスケア', '法律', '金融', 'メディア', 'エンジニアリング', '非営利', '航空宇宙', '飲食'];
  const locations = [
    'all', 
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県',
    '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || alumni.industry === selectedIndustry;
    const matchesLocation = selectedLocation === 'all' || alumni.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            同窓生とつながる
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多彩なキャリアと卓越した功績を持つ同窓生たちとつながりましょう
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="同窓生を検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'すべての業界' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'すべての地域' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {alumniData.length}名中 {filteredAlumni.length} 名を表示
            </p>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-semibold">Class of {alumni.year}</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {alumni.industry}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{alumni.profession}</p>
                <p className="text-gray-600 mb-3">{alumni.company}</p>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{alumni.location}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {alumni.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">主な功績</span>
                  </div>
                  <p className="text-sm text-gray-600">{alumni.achievement}</p>
                </div>

                <Link
                  to={`/alumni-profiles/${alumni.id}`}
                  className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  詳細プロフィールを見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">同窓生が見つかりません</h3>
            <p className="text-gray-600 mb-8">
              検索条件やフィルタを調整してください。
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedLocation('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              すべてのフィルタをクリア
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AlumniProfiles;