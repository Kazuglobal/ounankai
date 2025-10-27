import React from 'react';

const School: React.FC = () => {
  const departmentNews = [
    {
      id: 1,
      department: '土木科',
      director: '畠山 剛',
      directorPhoto: '/images/doboku-director.jpg',
      photos: [
        '/images/doboku-photo-1.jpg',
        '/images/doboku-photo-2.jpg',
        '/images/doboku-photo-3.jpg',
        '/images/doboku-photo-4.jpg'
      ],
      content: [
        '本校は、明治三十一年に開校し、今年で百二十六年の歴史と伝統を誇る学校です。土木科については、大正十二年に設立され、今年で百一年になります。卒業生の多くは全国各地でその専門技術を活かし活躍しています。',
        '学科の特色として、資格取得に力を入れています。特に二級土木施工管理技術検定試験については、県内でも高い合格率を達成することができ、例年全国での合格率は三十五％～四十五％ですが、本校土木科では一昨年が九五％、昨年度が九三％の合格率でした。先輩たちが築き上げてきたものを糧に、朝学習や放課後学習を通して全員合格に向けて取り組んでいます。また、測量士補国家試験では、昨年度十三名、今年度十二名の合格者が出ており、ここ数年二桁の合格者が続いています。意欲を持って取り組んだ結果が実を結んでいます。',
        '次に進路状況ですが、就職について建設関係の会社を中心に、例年百％の内定を早い時期よりいただいております。特に、ここ数年求人数も多く土木を目指す生徒にとっては追い風となっています。また、公務員（土木技術職）にも採用されています。国家公務員、岩手県職員、各市町村職員などです。早い時期より公務員試験に向けた準備が必要ですが朝学習や放課後学習で効率的に力を付けて合格することができました。進学については四年生大学、専門学校など目的に合わせた学校を自ら選択し、ほとんどの生徒が学校推薦で合格している状況です。',
        '土木科では運動部を中心に活躍する生徒が多く、全国大会に毎年出場しています。厳しい練習を重ねながら、学習との両立を図っており、規律を守って生活行動する人財育成を目指していきたいと思います。今後とも同窓生の皆様方からの御指導、御支援をよろしくお願いいたします。'
      ]
    }
  ];

  const partTimeNews = {
    title: '定時制だより',
    subtitle: '定時制の近況',
    position: '定時制副校長',
    director: '宮沢 一裕',
    directorPhoto: '/images/parttime-director.jpg',
    photos: [
      '/images/parttime-photo-1.jpg',
      '/images/parttime-photo-2.jpg',
      '/images/parttime-photo-3.jpg',
      '/images/parttime-photo-4.jpg'
    ],
    content: [
      '日頃から定時制教育に対し御理解と御協力をいただき、誠にありがとうございます。',
      '令和六年度の定時制は八名の新入生を迎え、一年生五名、三年生一名、四年生一二名の計二十二名でスタートし、四修制コースで学ぶ生徒が五名、三修制コースは十七名の生徒が学んでいます。専門教科（工業）の授業では機械と電気の分野を学び、国家資格の取得にも挑戦しています。',
      '四月九日に全日制と合同で入学式を行い、定時制の対面式や部活紹介、五月の生徒総会では、「一誠」〜物事に対し誠実に取り組もう〜のスローガンを掲げ、何事にも誠実に取り組み、心身ともに強く逞しく学校生活を送ることを生徒全員で確認しました。県高等学校総合体育大会では、二部に陸上競技部、卓球部、バドミントン部が出場しました。'
    ]
  };

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
                    {/* Director Photo */}
                    <div className="mb-4">
                      <img
                        src={news.directorPhoto}
                        alt={`${news.director}先生`}
                        className="w-32 h-32 object-cover rounded-lg mx-auto"
                      />
                    </div>
                    {/* Content */}
                    <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-4">
                      {news.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    {/* Photos Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {news.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`${news.department}の様子 ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part-Time School News Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{partTimeNews.title}</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                <h3 className="text-lg font-bold text-white mb-1">{partTimeNews.subtitle}</h3>
                <p className="text-sm text-purple-100">
                  <span className="font-semibold">{partTimeNews.position}</span>
                  <span className="ml-2">{partTimeNews.director}</span>
                </p>
              </div>
              <div className="p-4">
                {/* Director Photo */}
                <div className="mb-4">
                  <img
                    src={partTimeNews.directorPhoto}
                    alt={`${partTimeNews.director}先生`}
                    className="w-32 h-32 object-cover rounded-lg mx-auto"
                  />
                </div>
                {/* Content */}
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-4">
                  {partTimeNews.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {/* Photos Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {partTimeNews.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`定時制の様子 ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">母校からのお知らせ</h1>
            <p className="text-lg text-gray-600">岩手県立盛岡工業高等学校</p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left: Director Photo */}
                      <div className="lg:col-span-1">
                        <img
                          src={news.directorPhoto}
                          alt={`${news.director}先生`}
                          className="w-full max-w-xs object-cover rounded-xl shadow-md mx-auto"
                        />
                      </div>
                      {/* Right: Content */}
                      <div className="lg:col-span-2">
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-8">
                          {news.content.map((paragraph, index) => (
                            <p key={index} className="text-justify">{paragraph}</p>
                          ))}
                        </div>
                        {/* Photos Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {news.photos.map((photo, index) => (
                            <img
                              key={index}
                              src={photo}
                              alt={`${news.department}の様子 ${index + 1}`}
                              className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part-Time School News Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{partTimeNews.title}</h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 p-8">
                <h3 className="text-3xl font-bold text-white mb-3">{partTimeNews.subtitle}</h3>
                <div className="flex items-center text-purple-100">
                  <span className="text-lg font-semibold">{partTimeNews.position}</span>
                  <span className="mx-3 text-2xl">·</span>
                  <span className="text-xl">{partTimeNews.director}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Director Photo */}
                  <div className="lg:col-span-1">
                    <img
                      src={partTimeNews.directorPhoto}
                      alt={`${partTimeNews.director}先生`}
                      className="w-full max-w-xs object-cover rounded-xl shadow-md mx-auto"
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-8">
                      {partTimeNews.content.map((paragraph, index) => (
                        <p key={index} className="text-justify">{paragraph}</p>
                      ))}
                    </div>
                    {/* Photos Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {partTimeNews.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`定時制の様子 ${index + 1}`}
                          className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default School;
