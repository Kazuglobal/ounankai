import React from 'react';
import { Calendar, MapPin, Users, Heart, Award, Globe } from 'lucide-react';

const AlumniActivities: React.FC = () => {
  const activityReports = [
    {
      id: 1,
      title: '令和6年度盛工同窓会・体育後援会総会',
      date: '令和6年7月6日（土）',
      location: 'ホテルメトロポリタン盛岡本館',
      images: [
        '/images/alumni-sokai-2024-1.jpg',
        '/images/alumni-sokai-2024-2.jpg',
        '/images/alumni-sokai-2024-3.jpg'
      ],
      content: `同窓会長挨拶では白根会長より、前吉田会長がお亡くなりになり早いもので1年がたとうとしていること、今年の総会は5年ぶりに懇親会までの開催できたこと、コロナ禍での生活が元に戻りつつありうれしく思うことなどの話をされました。

続いて、議長に浅沼新一氏（擬宝珠会S42年卒）を選出し議事に入りました。はじめに、令和5年度事業報告並びに会計報告では、4月7日の入学式を皮切りに例年通りの事業が行われたことに加え、9月には前会長ご逝去に伴い臨時の常任委員会が行われ役員体制についての審議が行われたことなど、会計決算と併せて承認をいただきました。続いて、準会員（在校生）からの徴収金運用方法及び徴収金値下げ、これに伴う会則の一部改定についてご審議いただき原案のとおり可決されました。続いて、令和6年度事業計画（案）並びに予算（案）について審議をいただき承認をいただきました。

最後に、役員改選について審議され、原案通り可決いただきました。また、校舎移転にかかわる検討委員会が発足されたこと、今後の収入減に伴い多くの皆様から会費を頂戴したい旨、事業の縮小・整理など昨今の物価上昇を含め時代に即した形で進められるよう検討していきたいことなどお伝えしております。

5年ぶりとなった懇親会については、叙勲受章者への記念品の贈呈や、多年にわたり同窓会副会長として歴任されました金谷栄治様・体育後援会副会長渡邊力様のご退任に伴い感謝状が贈呈されました。また、来年の冬季オリンピックに向けて励んでいる吉田雪乃様にも参加いただき経過・展望等お話しいただき会の中でも激励を行ったところです。ご参加いただきました皆様ありがとうございました。

次回開催予定は、令和7年7月5日（土）※7月第1土曜日 ホテルメトロポリタン盛岡となっております。たくさんの方々のご参加お待ちしております。`
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: '2024年度同窓会総会',
      date: '2024年4月15日 14:00-17:00',
      location: 'カートメルホール',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 2,
      title: '春季コンサート',
      date: '2024年5月10日',
      location: '大講堂',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640'
    }
  ];

  const annualActivities = [
    {
      id: 1,
      icon: Users,
      title: '同窓会総会',
      description: '年次総会、役員選出、記念講演会を開催',
      frequency: '毎年4月',
      iconBg: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Heart,
      title: '植国祭参加',
      description: '母校の学園祭に展示・模擬店運営',
      frequency: '毎年5月',
      iconBg: 'bg-pink-500'
    },
    {
      id: 3,
      icon: Award,
      title: '奨学金授与式',
      description: '後輩への奨学金支援活動',
      frequency: '毎年7月',
      iconBg: 'bg-amber-500'
    },
    {
      id: 4,
      icon: Globe,
      title: '海外支部訪問',
      description: '海外在住卒業生との交流会',
      frequency: '隔年開催',
      iconBg: 'bg-indigo-500'
    }
  ];

  const regionalChapters = [
    {
      id: 1,
      name: '関東支部',
      leader: '田中 美智子',
      activities: '月例会、観劇会、講演会',
      members: 850
    },
    {
      id: 2,
      name: '関西支部',
      leader: '山田 花子',
      activities: '年次総会、ボランティア活動',
      members: 320
    },
    {
      id: 3,
      name: '東海支部',
      leader: '佐藤 恵子',
      activities: '文化活動、地域貢献活動',
      members: 180
    },
    {
      id: 4,
      name: '九州支部',
      leader: '鈴木 由美',
      activities: '定期交流会、チャリティー活動',
      members: 120
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">同窓会活動</h1>
            <p className="text-sm text-gray-600">卒業生の皆様どの絆を深める活動をご紹介します</p>
          </div>

          {/* Activity Reports Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">活動報告</h2>
            <div className="space-y-4">
              {activityReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                  {/* 画像ギャラリー */}
                  <div className="-mx-4 overflow-x-auto px-4 pb-2 pt-3">
                    <div className="flex snap-x snap-mandatory gap-2">
                      {report.images.map((image, index) => (
                        <div
                          key={index}
                          className="w-[80vw] max-w-[300px] h-48 shrink-0 snap-center rounded-xl overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${report.title} - 写真${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-3 text-base">{report.title}</h3>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="h-3.5 w-3.5 text-blue-600" />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="h-3.5 w-3.5 text-blue-600" />
                        <span>{report.location}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {report.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">今後のイベント</h2>
            <div className="-mx-4 overflow-x-auto px-4 pb-2">
              <div className="flex snap-x snap-mandatory gap-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{event.title}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar className="h-3.5 w-3.5 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Annual Activities Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">年間活動</h2>
            <div className="space-y-3">
              {annualActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-12 h-12 ${activity.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-gray-900">{activity.title}</h3>
                          <span className="text-xs font-semibold text-blue-600 whitespace-nowrap ml-2">
                            {activity.frequency}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Regional Chapters Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">地域支部</h2>
            <div className="space-y-3">
              {regionalChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{chapter.name}</h3>
                    <div className="flex items-center gap-1 text-blue-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-semibold">{chapter.members}名</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">支部長：</span>
                      {chapter.leader}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">主な活動：</span>
                      {chapter.activities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Office Contact Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">同窓会事務局</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>〒028-0525 岩手県遠野市中央通り3-17</p>
                <p>TEL: 0198-62-2823</p>
                <p>Email: info@tono-hs-alumni.jp</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">同窓会活動</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              卒業生の皆様どの絆を深める活動をご紹介します
            </p>
          </div>

          {/* Activity Reports Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">活動報告</h2>
            <div className="space-y-8">
              {activityReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 画像ギャラリー */}
                  <div className="grid grid-cols-3 gap-0 h-80">
                    {report.images.map((image, index) => (
                      <div key={index} className="relative h-full overflow-hidden">
                        <img
                          src={image}
                          alt={`${report.title} - 写真${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* コンテンツ */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{report.title}</h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span>{report.location}</span>
                      </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {report.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">今後のイベント</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Annual Activities Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">年間活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {annualActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-16 h-16 ${activity.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                          <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">
                            {activity.frequency}
                          </span>
                        </div>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Regional Chapters Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">地域支部</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regionalChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{chapter.name}</h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">{chapter.members}名</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">支部長：</span>
                      {chapter.leader}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">主な活動：</span>
                      {chapter.activities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Office Contact Section */}
          <section>
            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">同窓会事務局</h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg">〒028-0525 岩手県遠野市中央通り3-17</p>
                <p className="text-lg">TEL: 0198-62-2823</p>
                <p className="text-lg">Email: info@tono-hs-alumni.jp</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlumniActivities;
