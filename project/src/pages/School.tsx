import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const School: React.FC = () => {
  const departmentNews = [
    {
      id: 1,
      department: '土木科',
      director: '畠山 剛',
      content: [
        '本校は、明治三十一年に開校し、今年で百二十六年の歴史と伝統を誇る学校です。土木科については、大正十二年に設立され、今年で百一年になります。卒業生の多くは全国各地でその専門技術を活かし活躍しています。',
        '学科の特色として、資格取得に力を入れています。特に二級土木施工管理技術検定試験については、県内でも高い合格率を達成することができ、例年全国での合格率は三十五％～四十五％ですが、本校土木科では一昨年が九五％、昨年度が九三％の合格率でした。先輩たちが築き上げてきたものを糧に、朝学習や放課後学習を通して全員合格に向けて取り組んでいます。また、測量士補国家試験では、昨年度十三名、今年度十二名の合格者が出ており、ここ数年二桁の合格者が続いています。意欲を持って取り組んだ結果が実を結んでいます。',
        '次に進路状況ですが、就職について建設関係の会社を中心に、例年百％の内定を早い時期よりいただいております。特に、ここ数年求人数も多く土木を目指す生徒にとっては追い風となっています。また、公務員（土木技術職）にも採用されています。国家公務員、岩手県職員、各市町村職員などです。早い時期より公務員試験に向けた準備が必要ですが朝学習や放課後学習で効率的に力を付けて合格することができました。進学については四年生大学、専門学校など目的に合わせた学校を自ら選択し、ほとんどの生徒が学校推薦で合格している状況です。',
        '土木科では運動部を中心に活躍する生徒が多く、全国大会に毎年出場しています。厳しい練習を重ねながら、学習との両立を図っており、規律を守って生活行動する人財育成を目指していきたいと思います。今後とも同窓生の皆様方からの御指導、御支援をよろしくお願いいたします。'
      ]
    }
  ];

  const schoolStats = [
    {
      icon: BookOpen,
      value: '126年',
      label: '学校の歴史',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: '8学科',
      label: '専門学科',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: '95%',
      label: '資格取得率',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: '就職内定率',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">母校からのお知らせ</h1>
            <p className="text-sm text-gray-600">岩手県立盛岡工業高等学校</p>
          </div>

          {/* School Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {schoolStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${stat.color} mb-2`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Department News Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">科だより</h2>
            <div className="space-y-4">
              {departmentNews.map((news) => (
                <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">科だより……{news.department}</h3>
                    <p className="text-sm text-blue-100">
                      <span className="font-semibold">{news.department}長</span>
                      <span className="ml-2">{news.director}</span>
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                      {news.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">母校からのお知らせ</h1>
            <p className="text-lg text-gray-600">岩手県立盛岡工業高等学校</p>
          </div>

          {/* School Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {schoolStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Department News Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">科だより</h2>
            <div className="space-y-8">
              {departmentNews.map((news) => (
                <div key={news.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">科だより……{news.department}</h3>
                    <div className="flex items-center text-blue-100">
                      <span className="text-lg font-semibold">{news.department}長</span>
                      <span className="mx-3 text-2xl">·</span>
                      <span className="text-xl">{news.director}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                      {news.content.map((paragraph, index) => (
                        <p key={index} className="text-justify">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default School;
