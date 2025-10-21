import React from 'react';
import { Calendar, Music, Camera, Mic, Award, Trophy } from 'lucide-react';

const ClubActivities: React.FC = () => {
  const recentActivities = [
    {
      id: 1,
      title: '春季コンサート開催',
      club: '合唱部',
      clubColor: 'bg-blue-600',
      description: '3年ぶりに一般公開での春季コンサートを開催。美しいハーモニーが会場を包みました。',
      participants: '観客動員数300名',
      date: '2024年3月20日',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 2,
      title: '都大会準優勝',
      club: 'テニス部',
      clubColor: 'bg-orange-600',
      description: '東京都高等学校春季テニス大会において準優勝という素晴らしい成績を残しました。',
      participants: '',
      date: '2024年5月15日',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=640'
    }
  ];

  const achievements = [
    {
      id: 1,
      club: 'バスケットボール部',
      achievement: '関東大会出場',
      competition: '関東大会',
      icon: Trophy,
      iconBg: 'bg-yellow-500'
    },
    {
      id: 2,
      club: '文芸部',
      achievement: '全国コンクール入賞',
      competition: '全国大会',
      icon: Award,
      iconBg: 'bg-gray-500'
    },
    {
      id: 3,
      club: '吹奏楽部',
      achievement: '金賞受賞',
      competition: '地区大会',
      icon: Trophy,
      iconBg: 'bg-orange-500'
    }
  ];

  const featuredClubs = [
    {
      id: 1,
      name: '音楽部',
      members: '女子高生 約25名',
      description: 'ビオラ、バイオリン、声楽など様々なジャンルで音楽を追求しています。',
      recentActivity: '校内の活動：定期演奏会で多くの観客を魅了？',
      icon: Music,
      iconBg: 'bg-pink-500'
    },
    {
      id: 2,
      name: '写真部',
      members: '女子高生 約18名',
      description: '校内外での撮影活動を通じて、美しい瞬間を切り取っています。',
      recentActivity: '校内の活動：写真コンテストで3名が入賞',
      icon: Camera,
      iconBg: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'ディベート部',
      members: '男子高生 約15名',
      description: '論理的思考力と表現力を磨き、様々な社会問題について議論しています。',
      recentActivity: '校内の活動：全国大会出場決定',
      icon: Mic,
      iconBg: 'bg-indigo-500'
    },
    {
      id: 4,
      name: '書道部',
      members: '女子高生 約20名',
      description: '伝統的な書道から現代的な表現まで、幅広く書の美を探求しています。',
      recentActivity: '校内の活動：地域書道展で最優秀賞受賞',
      icon: Award,
      iconBg: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">部活動報告</h1>
            <p className="text-sm text-gray-600">生徒たちの活発な部活動の様子をお伝えします</p>
          </div>

          {/* Recent Activities Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">最近の活動</h2>
            <div className="-mx-4 overflow-x-auto px-4 pb-2">
              <div className="flex snap-x snap-mandatory gap-3">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-36 overflow-hidden relative">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-3 left-3 ${activity.clubColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {activity.club}
                      </div>
                    </div>
                    <div className="p-3.5">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{activity.title}</h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{activity.description}</p>
                      {activity.participants && (
                        <p className="text-xs text-blue-600 font-semibold mb-2">{activity.participants}</p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{activity.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">主な成績・受賞</h2>
            <div className="space-y-3">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-12 h-12 ${achievement.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 mb-1">{achievement.club}</h3>
                        <p className="text-sm text-gray-700 font-semibold mb-1">{achievement.achievement}</p>
                        <p className="text-xs text-gray-500">{achievement.competition}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Clubs Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">注目の部活動</h2>
            <div className="space-y-3">
              {featuredClubs.map((club) => {
                const Icon = club.icon;
                return (
                  <div
                    key={club.id}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 w-12 h-12 ${club.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{club.name}</h3>
                        <p className="text-xs text-gray-500">{club.members}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{club.description}</p>
                    <p className="text-xs text-blue-600 font-semibold">{club.recentActivity}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">部活動報告</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              生徒たちの活発な部活動の様子をお伝えします
            </p>
          </div>

          {/* Recent Activities Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">最近の活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 ${activity.clubColor} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      {activity.club}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 mb-3">{activity.description}</p>
                    {activity.participants && (
                      <p className="text-blue-600 font-semibold mb-3">{activity.participants}</p>
                    )}
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-5 w-5" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">主な成績・受賞</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 ${achievement.iconBg} rounded-full flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.club}</h3>
                      <p className="text-gray-700 font-semibold mb-2">{achievement.achievement}</p>
                      <p className="text-sm text-gray-500">{achievement.competition}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Clubs Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">注目の部活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredClubs.map((club) => {
                const Icon = club.icon;
                return (
                  <div
                    key={club.id}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 ${club.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{club.name}</h3>
                        <p className="text-sm text-gray-500">{club.members}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{club.description}</p>
                    <p className="text-blue-600 font-semibold">{club.recentActivity}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClubActivities;
