import React, { useState } from 'react';
import { Calendar, ChevronRight, X } from 'lucide-react';

const Announcements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const announcements = [
    {
      id: 0,
      title: '同窓会長からのご挨拶',
      category: 'ご挨拶',
      categoryColor: 'bg-morioka-600',
      date: '2024年12月01日',
      image: '/images/president-greeting.jpg',
      summary: '同窓会長 白根 敬介より、同窓生の皆様へのご挨拶をお届けします。',
      content: `
# ご挨拶

## 同窓会長
## 白根 敬介

盛岡工業高校同窓会長を仰せつかり早いもので一年余りを経過致しました。
その間、同窓会役員事務局を初め多くの関係者の方々のご理解、ご協力をいただき各種事業を滞りなく進めていただいていることに感謝を申し上げます。

コロナ感染症も2類から5類に移行になり、ようやく普通の生活に戻ったことを実感しているところであり、このような状況の中で各科・各地域支部同窓会の活動も活発となり同窓生の交流が図られていることを大変嬉しく思っております。
学校の行事である匠祭・盛工祭等も開催され大いに賑わったところであります。

また部活動におきましても、ラグビー部が4年ぶりに36回目の花園出場、他部においてもインターハイ入賞、国体入賞を初め様々な活躍があります。文化面でも、ものづくりコンテストや吹奏楽部等も活躍されました。また、スピードスケートの吉田雪乃選手の全日本スピードスケート大会女子500m優勝など、全国に盛岡工業高校の名声を発信したものと思います。

少子化等の中、入学生の定員割、校舎の移転等課題が山積みしておりますが、同窓会の皆様とともに母校盛岡工業高校の向上発展に努めてまいりたいと存じます。

終わりになりますが、同窓生の皆様の変わらぬご支援ご協力をお願い致しまして挨拶と致します。
      `
    },
    {
      id: 1,
      title: '体育後援会長からのご挨拶',
      category: 'ご挨拶',
      categoryColor: 'bg-morioka-600',
      date: '2024年12月01日',
      image: '/images/sports-support-greeting.jpg',
      summary: '体育後援会長 滝浦 輝雄より、同窓生の皆様へのご挨拶をお届けします。',
      content: `
# ごあいさつ

## 体育後援会長
## 滝浦 輝雄

盛岡工業高等学校を卒業して57年、母校での学びは私の人間形成の基盤であり、今でも多くの先輩・後輩・友人に支えられております。38年前に盛岡にUターンしてからも、ラグビー部を中心としたご縁が深く、昨年度より盛工同窓会体育後援会長を務めさせていただくことになりました。

母校である盛工は、岩手県で初めて誕生した工業高校であり、あと3年数カ月で130周年を迎える、大変歴史ある学校であります。
母校の歩みと思いを共にした多くの校友、その多様性が盛工の活力であり誇りです。

同窓会では、各学科の会と各地域の支部があり、ネットワークを形成しております。ぜひ盛工同窓会のネットワークをご活用ください。
そして、この歴史ある母校盛工を愛する数多くの多様な人材が、母校の為に熱心に活動されております。同窓会は学生を支援し、母校や社会に貢献するだけではなく、自らもその活動を楽しむのが同窓会です。

今年度は、10月20日に第104回全国高校ラグビー大会岩手県大会決勝戦が盛岡市のいわぎんスタジアムで行われ、盛工が21対20で黒沢尻工業を下し、4年ぶり36回目の花園への切符をつかみました。12月27日に東大阪市の花園ラグビー場で開幕する全国大会へ出場いたします。

更に、10月26日に長野市のエムウェーブで行われたスピードスケートの全日本選手権女子500メートルにおいて、前回準優勝の吉田雪乃選手（盛工卒21歳）が38秒20をマークし、初めて頂点に立ちました。

その他にも今年度、各クラブが目覚ましい活躍を見せております。

どうぞ皆さんもご一緒に母校を盛り上げ、この盛工同窓会の絆を益々深めていければ幸いに思います。
      `
    },
    {
      id: 2,
      title: '校長からのご挨拶',
      category: 'ご挨拶',
      categoryColor: 'bg-morioka-600',
      date: '2024年12月01日',
      image: '/images/principal-greeting.jpg',
      summary: '第37代校長 瀬戸 和彦より、同窓生の皆様へのご挨拶をお届けします。',
      content: `
# ごあいさつ

## 第37代校長
## 瀬戸 和彦

同窓会の皆様には、日頃より母校の教育活動に対しまして、ご支援とご協力をいただいておりますことに深く感謝申し上げます。

さて、今年度のこれまでの生徒の活動を振り返りますと、今年度も本校生徒の活躍は目覚しいものがありました。10月20日の花園予選決勝では全校生徒が応援する中、本校ラグビー部は最後まで粘り強く戦い、黒沢尻工業高校に1点差で勝利し、4年ぶりの全国大会出場を決めました。ウエイトリフティング部は、22年振りに東北総体で団体優勝し、個人では国民スポーツ大会で3位入賞しました。その他の部活動でもインターハイや国民スポーツ大会にアーチェリー部やレスリング部、ソフトテニス部、バスケットボール部等が出場、またロボット競技や自動車部、各文化部も運動部に負けない活躍をしています。

学校行事等では、9月28日、29日にイオンモール盛岡で「盛工匠祭」を開催、10月26日には「盛工祭」を開催し、どちらも昨年度同様に1000名を超える方々をお迎えし、本校の教育活動を知ってもらう良い機会となりました。

このように生徒は自分の目標を定め、他者と協働しながら意欲的に学校生活を送っています。本校はこれからも生徒一人ひとりの資質・能力を伸ばし、様々な社会的変化を乗り越え、豊かな人生を切り拓いていく人物の育成を目指し、特色ある教育活動を展開してまいります。これからも同窓会の皆様のご協力・ご支援をよろしくお願いいたします。
      `
    },
    {
      id: 3,
      title: '2024年度同窓会総会合唱隊のお知らせ',
      category: 'イベント',
      categoryColor: 'bg-red-500',
      date: '2024年3月15日',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '今年度の同窓会総会を下記の通り開催いたします。多くの皆様のご参加をお待ちしております。'
    },
    {
      id: 2,
      title: '園園祭2024のボランティア募集について',
      category: '募集',
      categoryColor: 'bg-cyan-500',
      date: '2024年3月12日',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '今年の園園祭開催にあたり、当日のボランティアスタッフを募集いたします。'
    },
    {
      id: 3,
      title: '新校舎建設計画に関するご報告',
      category: '寄付支援',
      categoryColor: 'bg-emerald-500',
      date: '2024年3月10日',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '学校の新校舎建設計画について、詳細が決定いたしましたのでご報告いたします。'
    },
    {
      id: 4,
      title: '奨学金制度の変更について',
      category: 'お知らせ',
      categoryColor: 'bg-amber-500',
      date: '2024年3月8日',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '2024年度より奨学金制度の一部が変更となります。詳細をご確認ください。'
    },
    {
      id: 5,
      title: '卒業生講演会「グローバル社会での活躍」',
      category: 'イベント',
      categoryColor: 'bg-purple-500',
      date: '2024年3月5日',
      image: 'https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '国際的に活躍する卒業生による講演会を開催いたします。多数のご参加をお待ちしています。'
    },
    {
      id: 6,
      title: '図書館システム更新のお知らせ',
      category: 'お知らせ',
      categoryColor: 'bg-teal-500',
      date: '2024年3月1日',
      image: 'https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&w=640',
      summary: '図書館の検索システムが新しくなりました。使用方法については図書館で案内しております。'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'イベント', name: 'イベント' },
    { id: '募集', name: '募集' },
    { id: 'お知らせ', name: 'お知らせ' },
    { id: '寄付支援', name: '寄付支援' }
  ];

  const filteredAnnouncements = activeCategory === 'all'
    ? announcements
    : announcements.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Detail Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="sticky top-4 right-4 float-right z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="閉じる"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${selectedAnnouncement.categoryColor} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                    {selectedAnnouncement.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedAnnouncement.date}</span>
                  </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {selectedAnnouncement.title}
                </h1>
                {selectedAnnouncement.image && (
                  <div className="mb-6">
                    <img
                      src={selectedAnnouncement.image}
                      alt={selectedAnnouncement.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {selectedAnnouncement.content ? (
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {selectedAnnouncement.content}
                  </div>
                ) : (
                  <div className="text-gray-800 leading-relaxed">
                    <p className="mb-4">{selectedAnnouncement.summary}</p>
                    <p className="text-sm text-gray-500">
                      詳細な内容は準備中です。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">お知らせ</h1>
          </div>

          {/* Category Tabs */}
          <div className="mb-6 -mx-4 overflow-x-auto px-4">
            <div className="flex gap-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Announcements List */}
          <div className="space-y-4">
            {filteredAnnouncements.map((announcement) => (
              <button
                key={announcement.id}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-98 text-left"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="flex gap-3 p-3">
                  <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <span className={`${announcement.categoryColor} text-white text-xs font-bold px-2 py-0.5 rounded`}>
                        {announcement.category}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-auto mt-0.5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                      {announcement.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {announcement.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">お知らせ</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              同窓生コミュニティの最新情報、イベント、ニュースをお届けします
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Announcements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnnouncements.map((announcement) => (
              <button
                key={announcement.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${announcement.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {announcement.category}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {announcement.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
