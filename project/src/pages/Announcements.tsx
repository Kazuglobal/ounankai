import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight, Tag } from 'lucide-react';

const Announcements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const announcements = [
    {
      id: 1,
      title: '2024年度ホームカミングウィークエンド',
      category: 'events',
      date: '2024-10-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Campus',
      type: 'イベント',
      featured: true,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      summary: '同窓生最大の年次イベントに参加しましょう！ クラスメートとの再会、キャンパスの最新情報、家族向けアクティビティをお楽しみください。',
      description: 'Our Annual Homecoming Weekend is back with exciting activities for all ages and graduation years. The weekend kicks off Friday evening with a welcome reception, followed by Saturday\'s main events including campus tours, class reunions, the traditional football game, and evening gala dinner. Sunday features a family picnic and farewell brunch.',
      highlights: [
        '節目卒業年の同窓会',
        '新施設を紹介するキャンパスツアー',
        '同窓生功績表彰式',
        'ライブ音楽とエンターテイメント',
        '子ども向けアクティビティとファミリーゾーン'
      ],
      registrationInfo: '早期登録は9月1日まで。 同窓会会員は20%割引。',
      contact: 'homecoming@hachinohe-nishi.ed.jp'
    },
    {
      id: 2,
      title: '新役員就任のお知らせ',
      category: 'news',
      date: '2024-08-20',
      type: 'お知らせ',
      featured: false,
      summary: '同窓会の未来を担う3名の新しい役員が選出されました。',
      description: '厳正なる選考の結果、パトリシア・ウィリアムズ博士（1995年卒）、マーカス・ジョンソン氏（2010年卒）、リサ・チェン博士（2008年卒）の3名が取締役会に加わりました。 それぞれが持つ専門知識と情熱が同窓生の絆をさらに強めます。',
      newMembers: [
        {
          name: 'Dr. Patricia Williams',
          class: '1995',
          profession: 'Healthcare Executive',
          expertise: 'Strategic planning and healthcare innovation'
        },
        {
          name: 'Marcus Johnson',
          class: '2010',
          profession: 'Tech Entrepreneur',
          expertise: 'Digital engagement and young alumni outreach'
        },
        {
          name: 'Dr. Lisa Chen',
          class: '2008',
          profession: 'Education Policy Expert',
          expertise: 'Educational partnerships and program development'
        }
      ]
    },
    {
      id: 3,
      title: '地域別同窓会ミートアップ ― 2024年秋',
      category: 'events',
      date: '2024-09-01',
      type: 'イベントシリーズ',
      featured: true,
      summary: 'お住まいの地域で同窓生とつながりましょう！ この秋は15都市でミートアップを開催します。',
      description: 'Our regional meetup series continues with exciting gatherings planned across the country. Each event features networking opportunities, guest speakers, and updates from campus.',
      cities: [
        { city: 'New York', date: 'September 12', venue: 'Rooftop Bar Manhattan' },
        { city: 'Los Angeles', date: 'September 19', venue: 'Beverly Hills Hotel' },
        { city: 'Chicago', date: 'September 26', venue: 'Art Institute of Chicago' },
        { city: 'San Francisco', date: 'October 3', venue: 'Ferry Building' },
        { city: 'Boston', date: 'October 10', venue: 'Faneuil Hall' }
      ],
      registrationRequired: true
    },
    {
      id: 4,
      title: '同窓生奨学基金が100万ドルの節目を達成',
      category: 'news',
      date: '2024-07-30',
      type: '功績',
      featured: false,
      summary: '同窓生の寛大なご支援により、奨学基金が100万ドルの節目を迎えました。',
      description: '過去5年間で2,500名を超える同窓生が学生奨学金に寄付を行い、この大きな成果を達成しました。 すでに150名の学生が支援を受けています。',
      impact: {
        totalRaised: '$1,000,000',
        studentsHelped: 150,
        donors: 2500,
        averageScholarship: '$5,000'
      }
    },
    {
      id: 5,
      title: '若手同窓生向けキャリア開発ワークショップ',
      category: 'workshops',
      date: '2024-11-15',
      time: '6:00 PM - 9:00 PM',
      location: 'Alumni Center',
      type: 'ワークショップ',
      featured: false,
      summary: '卒業後1〜10年の同窓生を対象としたキャリアアップワークショップ。',
      description: 'キャリアアップ、ネットワーキング戦略、業界洞察に関する専門家パネルを含むプロフェッショナル開発の夕べにご参加ください。 夕食と交流会付き。',
      topics: [
        'キャリア転換戦略',
        'プロフェッショナルネットワーキングのベストプラクティス',
        'リーダーシップ開発',
        '業界別ブレークアウトセッション',
        'メンタープログラム紹介'
      ],
      speakers: [
        'サラ・ジョンソン（2018年卒） - テック起業家',
        'マイケル・ロドリゲス（2015年卒） - 投資銀行副社長',
        'アマンダ・リー博士（2012年卒） - 医学ディレクター'
      ]
    },
    {
      id: 6,
      title: '同窓生表彰候補者の募集',
      category: 'news',
      date: '2024-09-15',
      type: '呼びかけ',
      featured: false,
      summary: '年間同窓生功績表彰の候補者受付を開始しました。 あなたの分野で優れた同窓生を推薦してください。',
      description: '同窓会では、専門的功績、社会奉仕、若手リーダーシップを顕彰する栄誉ある年次表彰の候補者を募集しています。',
      categories: [
        'プロフェッショナル功績賞',
        '社会奉仕賞',
        '若手同窓生リーダーシップ賞',
        'ボランティアサービス賞',
        '生涯功労賞'
      ],
      deadline: '2024年11月30日',
      submissionInfo: '同窓生ポータルよりオンラインで推薦を受け付けています'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて', count: announcements.length },
    { id: 'events', name: 'イベント', count: announcements.filter(a => a.category === 'events').length },
    { id: 'news', name: 'ニュース', count: announcements.filter(a => a.category === 'news').length },
    { id: 'workshops', name: 'ワークショップ', count: announcements.filter(a => a.category === 'workshops').length }
  ];

  const filteredAnnouncements = activeCategory === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === activeCategory);

  const featuredAnnouncements = announcements.filter(a => a.featured);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            お知らせ・ニュース
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            同窓生コミュニティの最新情報、イベント、ニュースをお届けします
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Announcements */}
        {(activeCategory === 'all' || featuredAnnouncements.some(a => a.category === activeCategory)) && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">注目</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredAnnouncements
                .filter(announcement => activeCategory === 'all' || announcement.category === activeCategory)
                .map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {announcement.image && (
                    <div className="aspect-[16/9]">
                      <img
                        src={announcement.image}
                        alt={announcement.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-semibold capitalize">{announcement.type}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        注目
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {announcement.title}
                    </h3>

                    <div className="flex items-center text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formatDate(announcement.date)}</span>
                      </div>
                      {announcement.time && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{announcement.time}</span>
                        </div>
                      )}
                      {announcement.location && (
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{announcement.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {announcement.summary}
                    </p>

                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      詳細を読む
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        {regularAnnouncements.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">最新更新</h2>
            <div className="space-y-6">
              {regularAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-semibold capitalize">{announcement.type}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {announcement.title}
                      </h3>

                      <div className="flex items-center text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{formatDate(announcement.date)}</span>
                        </div>
                        {announcement.time && (
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{announcement.time}</span>
                          </div>
                        )}
                        {announcement.location && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{announcement.location}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {announcement.summary}
                      </p>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                        詳細を見る
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Announcements;