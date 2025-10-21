import React from 'react';
import { Calendar, MapPin, Users, Heart, Award, Globe } from 'lucide-react';

const AlumniActivities: React.FC = () => {
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
