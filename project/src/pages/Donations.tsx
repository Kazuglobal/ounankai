import React from 'react';
import { Star, Heart, Building2, BookOpen, Users, ChevronRight } from 'lucide-react';

const Donations: React.FC = () => {
  const donationOptions = [
    {
      id: 1,
      title: '奨学金支援',
      targetAmount: '¥10,000',
      description: '未来の学生たちを支援するための奨学金基金',
      icon: BookOpen,
      iconBg: 'bg-cyan-500',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 2,
      title: '新校舎建設支援',
      targetAmount: '¥50,000',
      description: '新しい学習環境整備のための建設基金',
      icon: Building2,
      iconBg: 'bg-red-500',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 3,
      title: '図書館充実化',
      targetAmount: '¥5,000',
      description: '図書館の蔵書や設備充実のための支援',
      icon: BookOpen,
      iconBg: 'bg-cyan-500',
      image: 'https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 4,
      title: '課外活動支援',
      targetAmount: '¥20,000',
      description: 'クラブ活動や課外プログラムの充実化',
      icon: Users,
      iconBg: 'bg-pink-500',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640'
    }
  ];

  const donationReports = [
    {
      id: 1,
      title: '奨学金基金が目標額の80%に到達',
      date: '2024年3月15日',
      description: '多くの皆様のご支援により、奨学金基金が大幅に増加しました。'
    },
    {
      id: 2,
      title: '新校舎建設プロジェクト進行中',
      date: '2024年3月10日',
      description: 'ご寄付いただいた資金により、新校舎の建設が順調に進んでおります。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">みなさまからの<br/>寄付</h1>
          </div>

          {/* Hero Section */}
          <section className="mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-800 to-red-950 rounded-3xl mb-4">
                <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">母校の未来を支援する</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                皆様からのご寄付により、卒業後数年以内の学生たちにより良い教育環境を提供し続けることができます。
              </p>
              <button className="w-full bg-gradient-to-r from-red-800 to-red-950 text-white py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all shadow-md">
                <Heart className="h-5 w-5" />
                今すぐ寄付する
              </button>
            </div>
          </section>

          {/* Donation Options Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">寄付先を選ぶ</h2>
            <div className="space-y-4">
              {donationOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex-shrink-0 w-11 h-11 ${option.iconBg} rounded-xl flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 text-sm">{option.title}</h3>
                          <p className="text-xs font-semibold text-cyan-600">推奨寄付額: {option.targetAmount}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-4">{option.description}</p>
                      <button className="w-full bg-gradient-to-r from-red-800 to-red-950 text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all">
                        <Heart className="h-4 w-4" />
                        寄付する
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Donation Reports Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">寄付の活用報告</h2>
            <div className="space-y-3">
              {donationReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{report.title}</h3>
                    <p className="text-xs text-gray-500 mb-1.5">{report.date}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{report.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">みなさまからの寄付</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              母校の未来を支援し、次世代の学生たちに最高の教育環境を提供しましょう
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 rounded-3xl mb-6">
                <Star className="h-12 w-12 text-yellow-400 fill-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">母校の未来を支援する</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                皆様からのご寄付により、卒業後数年以内の学生たちにより良い教育環境を提供し続けることができます。
              </p>
              <button className="bg-gradient-to-r from-red-800 to-red-950 text-white py-4 px-8 rounded-xl text-lg font-semibold inline-flex items-center gap-3 hover:from-red-900 hover:to-black transition-all shadow-lg transform hover:scale-105">
                <Heart className="h-6 w-6" />
                今すぐ寄付する
              </button>
            </div>
          </section>

          {/* Donation Options Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">寄付先を選ぶ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {donationOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 ${option.iconBg} rounded-xl flex items-center justify-center`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                          <p className="text-lg font-semibold text-cyan-600">推奨寄付額: {option.targetAmount}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{option.description}</p>
                      <button className="w-full bg-gradient-to-r from-red-800 to-red-950 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all">
                        <Heart className="h-5 w-5" />
                        寄付する
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Donation Reports Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">寄付の活用報告</h2>
            <div className="space-y-4 max-w-3xl">
              {donationReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{report.date}</p>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Donations;
