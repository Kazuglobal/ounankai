import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Award,
  MapPin,
  ArrowRight,
  Megaphone,
  Trophy,
  GraduationCap,
  BookOpen,
  Image as ImageIcon
} from 'lucide-react';

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

  const newsItems = [
    {
      id: 1,
      title: '2024年度 同窓会総会のお知らせ',
      date: '2024年03月15日',
      category: '楓',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    },
    {
      id: 2,
      title: '卒業30周年記念リユニオンを開催します',
      date: '2024年04月02日',
      category: '祝',
      image:
        'https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    },
    {
      id: 3,
      title: '新しい奨学金制度がスタートしました',
      date: '2024年04月10日',
      category: '学',
      image:
        'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    }
  ];

  const quickLinks = [
    {
      title: '広告ページ',
      href: '/announcements',
      icon: Megaphone,
      gradientFrom: 'from-yellow-200',
      gradientTo: 'to-yellow-100',
      iconColor: 'text-yellow-700'
    },
    {
      title: '同窓会活動',
      href: '/announcements',
      icon: Users,
      gradientFrom: 'from-blue-200',
      gradientTo: 'to-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      title: '部活動報告',
      href: '/announcements',
      icon: Trophy,
      gradientFrom: 'from-pink-200',
      gradientTo: 'to-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      title: '進路概要',
      href: '/member-registration',
      icon: GraduationCap,
      gradientFrom: 'from-indigo-200',
      gradientTo: 'to-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      title: '過去の会報バックナンバー',
      href: '/announcements',
      icon: BookOpen,
      gradientFrom: 'from-green-200',
      gradientTo: 'to-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: '思い出コーナー',
      href: '/gallery',
      icon: ImageIcon,
      gradientFrom: 'from-purple-200',
      gradientTo: 'to-purple-100',
      iconColor: 'text-purple-600'
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
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="space-y-10 px-4 pb-24 pt-6">
          <section className="relative h-56 overflow-hidden rounded-3xl shadow-lg">
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
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`スライド ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-br from-[#ffe5f4] via-[#f0e8ff] to-[#dbe9ff] p-6 shadow-lg">
            <span className="inline-flex items-center rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              NEW
            </span>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">広告ギャラリー公開中</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              同窓会の皆さま向けの最新広告をまとめました。スワイプで次の広告をチェックできます。
            </p>
            <Link
              to="/announcements"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
            >
              詳細を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">ニュース</h2>
              <Link
                to="/announcements"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                もっと見る
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="-mx-4 overflow-x-auto px-4 pb-2">
              <div className="flex snap-x snap-mandatory gap-4">
                {newsItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="min-w-[85%] snap-center overflow-hidden rounded-3xl bg-white shadow-lg"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                          {item.category}
                        </span>
                        <span className="text-xs font-medium text-blue-600">Ounan News</span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold leading-snug text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-500">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">クイックアクセス</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex flex-col items-center rounded-3xl bg-white p-4 text-center shadow-lg transition-shadow duration-200 hover:shadow-xl"
                  >
                    <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
                      <span
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo}`}
                      />
                      <Icon className={`relative h-7 w-7 ${item.iconColor}`} />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
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
    </div>
  );
};

export default Home;
