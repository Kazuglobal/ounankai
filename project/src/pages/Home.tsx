import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, Award, MapPin, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/school-building.png'
    },
    {
      image: '/images/school-aerial.png'
    },
    {
      image: '/images/school-emblem-new.png'
    }
  ];

  const featuredAlumni = [
    {
      id: 1,
      name: '田中 さくら',
      year: '2018年卒',
      profession: 'テクノロジー起業家',
      location: '東京都',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: '5000万ドルの価値を持つAIスタートアップを創設'
    },
    {
      id: 2,
      name: '陳 健太',
      year: '2015年卒',
      profession: '医学研究者',
      location: '大阪府',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: '画期的ながん研究プロジェクトを主導'
    },
    {
      id: 3,
      name: '山田 美咲',
      year: '2012年卒',
      profession: '環境弁護士',
      location: '愛知県',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievement: '連邦レベルでの気候政策改革を推進'
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
              alt="青森県立八戸西高等学校"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <Link
            to="/announcements"
            className="bg-blue-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700/90 transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            今後のイベント
          </Link>
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
                  八戸西高等学校同窓会奧南会の皆様におかれましては、各方面においてご活躍のことと心よりお喜び申し上げます。また、日頃より同窓会活動に対してご理解とご協力を賜り、厚く御礼申し上げます。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  この度、同窓生の皆様との更なる連携強化と情報共有の充実を図るため、奧南会公式ホームページを開設する運びとなりました。創立以来培われてきた同窓生の絆を、現代の情報技術を活用してより一層深めてまいりたいと考えております。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  近年、デジタル化の進展により、情報伝達の手段も大きく変化しております。このホームページを通じて、同窓会の活動報告、各種イベントのご案内、そして同窓生の皆様の近況報告など、タイムリーな情報発信を行ってまいります。また、同窓生同士の交流促進の場としてもご活用いただけるよう、様々なコンテンツを準備しております。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  自啓自発の校訓のもと、文武両道を目指して青春を過ごした母校での思い出は、皆様にとってかけがえのない財産であることでしょう。このホームページが、そうした思い出を共有し、新たな交流を生み出す架け橋となることを願っております。
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  結びに、ホームページ開設にあたりご協力いただきました関係者の皆様に心から感謝申し上げますとともに、同窓生の皆様の益々のご健勝と今後のご活躍を御祈念申し上げます。
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
              つながりの輪
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              同窓生との新しいつながりを築きましょう
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
                    詳細プロフィールを見る
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
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              同窓生とのつながりが、新たな人脈を築き、転職の機会を広げ、人生の可能性を無限に広げていきます。
              先輩・後輩たちとつながろう！
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/member-registration"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 border-2 border-white shadow-lg"
              >
                メンバー登録
              </Link>
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