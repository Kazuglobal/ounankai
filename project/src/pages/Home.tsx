import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, Award, MapPin, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: '世代を繋ぐ',
      subtitle: '共に未来を築く'
    },
    {
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: '同窓生の輝き',
      subtitle: '成功の物語を祝う'
    },
    {
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: '共に歩む',
      subtitle: '成果のコミュニティ'
    }
  ];

  const featuredAlumni = [
    {
      id: 1,
      name: '田中 さくら',
      year: '2018年卒',
      profession: 'テック起業家',
      location: '東京都',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: 'AI スタートアップを成功に導く'
    },
    {
      id: 2,
      name: '佐藤 健太',
      year: '2015年卒',
      profession: '医学研究者',
      location: '大阪府',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: 'がん研究の最前線で活躍'
    },
    {
      id: 3,
      name: '山田 美咲',
      year: '2012年卒',
      profession: '環境弁護士',
      location: '京都府',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: '気候変動政策改革を推進'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[80vh] overflow-hidden rounded-b-3xl">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              世界中で活躍する同窓生の活気あるコミュニティにご参加ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-2xl">
                同窓会に入会
              </button>
              <Link
                to="/announcements"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-200 transform hover:scale-105 border border-white/30"
              >
                今後のイベント
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* President's Greeting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  会長からのご挨拶
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  八戸西高等学校同窓会奧南会の皆様へ
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  八戸西高等学校同窓会奧南会の皆様におかれましては、各方面においてご活躍の事とお喜び申し上げます。また、日頃より同窓会活動に対してご理解とご協力を頂きお礼申し上げます。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  同窓会会員名簿は八戸西高等学校創立40周年時に第１号（株式会社サラト様作成依頼）を発行しておりますが、この度創立50周年を記念し、坪校長先生をはじめとする先生方そして同窓生の皆様のご協力を得て、第２号となる同窓会会員名簿を発行することになりました。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  近年全国的に人口減少が進んでおり、また青森県では少子化が深刻な問題となっております。そのため廃校や学校統合という事が進められて来ておりますが、このような状況でも本校は４年前に普通科が１クラス増加となり、スポーツ科学科と合わせて１学年が６学級となりました。この八戸西高等学校に入学を希望する生徒さんは大きな夢と期待感を抱き受験している事でしょう。現在卒業生は12,000名を超えております。自啓自発の校訓の下、文武両道を目指して高校生活を送り、心身ともに成長を遂げ社会人として信用を確立しているからこその結果であると思います。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  2021年春、第93回選抜高等学校野球大会に八戸西高野球部が出場が決定した際には、同窓生が歓喜の声を上げたことを思いだします。その後、後援会、PTA、野球部OB会や同窓会等の呼びかけによって運営費の寄付を頂きました。やはり同窓会という強固な繋がりを持つ、行動する集団がこの事業を成功裡に収めたものと感じております。当時野球部で活躍した皆様もこれからはこのネットワークの一員として後輩のために力を発揮して欲しいものと思います。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  皆様は、この同窓会名簿を手にした時、楽しかった事、うれしかったこと、悲しかったことや恥ずかしかったことなどなど、在学していた頃の若き日を思い巡らすことでしょう。今回発行の名簿を活用して、クラス会や同期会を企画、開催し、積極的に交流、情報交換をして同窓生のネットワークの構築を推進して頂きたいと切に願います。
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  結びに、名簿編集にあたり全面的にご協力くださいました株式会社サラト様を始め、広告掲載や名簿作成協賛金へのご協力、また名簿を購入された会員の皆さま、名簿作成に携わって頂いた学校関係者に対し心から感謝申し上げますとともに、皆様の益々のご健勝と今後のご活躍を御祈念申し上げます。
                </p>
                <div className="text-right">
                  <p className="text-2xl font-script text-blue-600 mb-2" style={{fontFamily: 'cursive'}}>
                    松井 正文
                  </p>
                  <p className="text-gray-600 font-medium">青森県立八戸西高等学校同窓会奥南会 会長</p>
                  <p className="text-gray-500 text-sm">1995年卒</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                    alt="松井正文 同窓会会長"
                    className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">12,000+</h3>
              <p className="text-gray-600 font-medium">卒業生</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50</h3>
              <p className="text-gray-600 font-medium">創立周年</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">6</h3>
              <p className="text-gray-600 font-medium">学級数</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              注目の同窓生
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              同窓生コミュニティの素晴らしい成果を祝福します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredAlumni.map((alumni) => (
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{alumni.year}</p>
                  <p className="text-gray-700 font-medium mb-2">{alumni.profession}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{alumni.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{alumni.achievement}</p>
                  <Link
                    to={`/alumni-profiles/${alumni.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    詳細プロフィール
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/alumni-profiles"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              すべての同窓生を見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              つながりませんか？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              すでに活気あるコミュニティの一員となっている数千人の同窓生に参加しませんか
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
                会員になる
              </button>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all duration-200 transform hover:scale-105 border-2 border-blue-400"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;