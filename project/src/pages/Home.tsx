import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
  Award,
  MapPin,
  ArrowRight,
  Megaphone,
  Trophy,
  GraduationCap,
  BookOpen,
  Image as ImageIcon,
  Newspaper,
  X,
  Volume2
} from 'lucide-react';
import { alumniTopics } from '../data/alumniTopics';

// Constants for animations and UI
const PULSE_BAR_COUNT = 4;
const PULSE_BAR_DELAY_STEP = 0.2; // seconds

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRugbyModal, setShowRugbyModal] = useState(true);
  const [showRugbyDetail, setShowRugbyDetail] = useState(false);

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
      id: 0,
      title: '同窓会長からのご挨拶',
      date: '2024年12月01日',
      category: '挨',
      image: '/images/president-greeting.jpg',
      href: '/announcements'
    },
    {
      id: 1,
      title: '体育後援会長からのご挨拶',
      date: '2024年12月01日',
      category: '体',
      image: '/images/sports-support-greeting.jpg',
      href: '/announcements'
    },
    {
      id: 2,
      title: '校長からのご挨拶',
      date: '2024年12月01日',
      category: '校',
      image: '/images/principal-greeting.jpg',
      href: '/announcements'
    },
    {
      id: 3,
      title: '2024年度 同窓会総会のお知らせ',
      date: '2024年03月15日',
      category: '楓',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    },
    {
      id: 4,
      title: '卒業30周年記念リユニオンを開催します',
      date: '2024年04月02日',
      category: '祝',
      image:
        'https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    },
    {
      id: 5,
      title: '新しい奨学金制度がスタートしました',
      date: '2024年04月10日',
      category: '学',
      image:
        'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=640',
      href: '/announcements'
    }
  ];

  const clubActivities = [
    {
      id: 1,
      label: 'バスケットボール部',
      title: '東北大会出場・国体出場',
      description: '黄金期以来の東北大会出場を果たしました。岩手県選抜から6名が選出され東北総体で準優勝。佐賀国体に東北代表として出場。古豪から強豪への挑戦が続きます。',
      stats: '東北総体準優勝',
      date: '2024年',
      image: '/images/club-basketball.jpg',
      bgColor: 'from-orange-900 to-orange-700',
      href: '/club-activities/basketball'
    },
    {
      id: 2,
      label: '硬式野球部',
      title: '秋季大会ベスト8',
      description: '第77回秋季東北地区高等学校野球岩手県大会に出場。初戦で盛岡第一高校に勝利し、10本超のヒットが出る乱打戦を制しました。花巻東高校戦では2-8で敗退しベスト8という結果でしたが、新チームの成長を実感できる大会となりました。',
      stats: 'ベスト8',
      date: '2024年',
      image: '/images/club-baseball.jpg',
      bgColor: 'from-green-700 to-blue-700',
      href: '/club-activities/baseball'
    },
    {
      id: 3,
      label: 'アーチェリー部',
      title: 'インターハイ・国体出場',
      description: '岩手県高等学校総合体育大会男子団体で優勝。インターハイと国民スポーツ大会に出場しました。',
      stats: '団体優勝',
      date: '2024年',
      image: '/images/club-archery.jpg',
      bgColor: 'from-green-700 to-teal-700',
      href: '/club-activities'
    },
    {
      id: 4,
      label: 'ソフトテニス部',
      title: 'インターハイ出場',
      description: '高総体個人戦で2ペアが上位入賞。吉田・城内ペアが第3位、高橋・小田島ペアが第5位でインターハイ出場。',
      stats: '2ペア出場',
      date: '2024年',
      image: '/images/club-soft-tennis.jpg',
      bgColor: 'from-blue-700 to-indigo-700',
      href: '/club-activities'
    },
    {
      id: 5,
      label: 'スケート部',
      title: '国民スポーツ大会出場',
      description: '全国高等学校スピードスケート競技選手権大会女子500mで三浦陽選手が第10位入賞。',
      stats: '女子500m 10位',
      date: '2024年',
      image: '/images/club-skating.jpg',
      bgColor: 'from-cyan-700 to-blue-700',
      href: '/club-activities'
    },
    {
      id: 6,
      label: 'アマチュア無線部',
      title: '全国大会優勝',
      description: '全国高等学校アマチュア無線コンテストSWL部門で見事優勝を果たしました。',
      stats: 'SWL部門優勝',
      date: '2024年',
      image: '/images/club-radio.jpg',
      bgColor: 'from-purple-700 to-pink-700',
      href: '/club-activities'
    }
  ];

  const quickLinks = [
    {
      title: '広告ページ',
      href: '/announcements',
      icon: Megaphone,
      bubbleGradient: 'from-amber-200 via-amber-100 to-yellow-200',
      iconColor: 'text-blue-700',
      iconBg: 'bg-white'
    },
    {
      title: '同窓会活動',
      href: '/alumni-activities',
      icon: Users,
      bubbleGradient: 'from-sky-300 via-sky-200 to-sky-200',
      iconColor: 'text-blue-700',
      iconBg: 'bg-white'
    },
    {
      title: '部活動報告',
      subtitle: 'インターハイ・国体出場！',
      href: '/club-activities',
      icon: Trophy,
      bubbleGradient: 'from-yellow-300 via-orange-200 to-red-200',
      iconColor: 'text-orange-600',
      iconBg: 'bg-white',
      highlight: true
    },
    {
      title: '進路概要',
      href: '/career-paths',
      icon: GraduationCap,
      bubbleGradient: 'from-sky-300 via-cyan-200 to-sky-200',
      iconColor: 'text-blue-700',
      iconBg: 'bg-white'
    },
    {
      title: '役員名簿',
      href: '/board-of-directors',
      icon: BookOpen,
      bubbleGradient: 'from-emerald-300 via-teal-200 to-green-200',
      iconColor: 'text-blue-700',
      iconBg: 'bg-white'
    },
    {
      title: '学校',
      href: '/school',
      icon: BookOpen,
      bubbleGradient: 'from-indigo-300 via-violet-200 to-purple-200',
      iconColor: 'text-blue-700',
      iconBg: 'bg-white'
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
      {/* ラグビー部花園出場モーダル */}
      {showRugbyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6">
          <div className="relative max-w-3xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowRugbyModal(false)}
              className="sticky top-3 right-3 sm:top-4 sm:right-4 float-right z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 hover:bg-gray-100 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="閉じる"
            >
              <X className="h-7 w-7 text-gray-700" />
            </button>

            {/* Feature Image */}
            <div className="relative">
              <img
                src="/images/rugby-popup-highlight.png"
                alt="全国大会で躍動するラグビー部の選手たち"
                className="w-full max-h-64 sm:max-h-72 object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-t-2xl sm:rounded-t-3xl ring-1 ring-black/5" />
            </div>

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-morioka-600 via-purple-600 to-morioka-700 px-6 sm:px-10 py-6 sm:py-8 text-center">
              <div className="mb-4 flex justify-center">
                <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-300 animate-pulse" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight px-2">
                第104回全国高等学校<br className="sm:hidden" />ラグビーフットボール大会
              </h2>
              <div className="bg-white/25 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-4 sm:py-5 inline-block shadow-lg">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1 drop-shadow-lg">
                  岩手県大会優勝
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-white drop-shadow">
                  4年ぶり 36回目花園出場!!
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 sm:px-8 md:px-12 py-8 sm:py-10 space-y-8">
              {/* 詳細を見るボタン */}
              <div className="text-center">
                <button
                  onClick={() => setShowRugbyDetail(!showRugbyDetail)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-morioka-600 to-purple-600 text-white px-8 py-4 text-lg sm:text-xl rounded-full font-bold hover:from-morioka-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
                >
                  {showRugbyDetail ? (
                    <>
                      詳細を閉じる
                      <ChevronUp className="h-6 w-6" />
                    </>
                  ) : (
                    <>
                      詳細を見る
                      <ChevronDown className="h-6 w-6" />
                    </>
                  )}
                </button>
              </div>

              {/* 詳細情報（トグル） */}
              {showRugbyDetail && (
                <div className="space-y-8 transition-all duration-500 ease-in-out">
                  {/* 顧問挨拶 */}
                  <div className="bg-purple-50 rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-1 w-14 bg-morioka-600 rounded-full"></div>
                      <h3 className="text-xl sm:text-2xl font-bold text-morioka-800">ラグビー部顧問より</h3>
                    </div>
                    <p className="text-base text-gray-600 mb-5 font-medium">
                      <span className="font-semibold text-morioka-700">顧問 小原 義巧</span>（電子科13年卒）
                    </p>

                    <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-loose">
                      <p>
                        秋冷の候、盛岡工業高等学校同窓会の皆様におかれましては、ますます御健勝のこととお慶び申し上げます。
                        さて、今年度も同窓会皆様より沢山の激励を賜り、誠にありがとうございました。この場をお借りしまして、厚く御礼申し上げます。
                      </p>
                      <p>
                        さて、去る10月20日にいわぎんスタジアムに於いて、第104回全国高等学校ラグビーフットボール大会岩手県大会決勝が行われ、黒沢尻工業高校と花園切符をかけて戦いました。
                      </p>
                      <p>
                        前半は風下ということもあり7－15とリードされハーフタイムとなりました。
                        後半に入り、風上の攻防でしたが、キャプテン吉田のトライで逆転に成功。試合終盤に黒沢尻工業高校の怒涛の猛攻にあいましたが、懸念のディフェンスでリードを守り切り<span className="font-bold text-morioka-600">21－20で勝利</span>し、12月27日から行われる花園の出場権を勝ち取ることができました。
                      </p>
                      <p>
                        決勝当日は、同窓会長をはじめ多くの同窓生の諸先輩方の熱いご声援を賜り、誠にありがとうございました。この場をお借りしまして厚く御礼申し上げます。
                        選手たちは、スタンドからの「モリコウ！」コールの大声援のお陰で、最後まで諦めることなく戦い抜くことができたと感じております。
                      </p>
                      <p>
                        岩手県高校総体決勝の大敗から、もう一度自らの取り組みや甘さを見つめなおし、目標を見失わずひたむきに日々の練習に取り組み、60分間をひっくり返し自らの手で花園の切符を掴み取ったラグビー部44名の選手たちを心から誇りに思います。
                      </p>
                      <p>
                        本校としては4年ぶりの出場となりますが、ご支援いただいた関係者の皆様への感謝の気持ちと、全国各地で母校の花園出場を待った同窓生皆様の想いを胸に花園へ行って参ります。
                      </p>
                      <p>
                        チームが今よりさらに大きく成長できるよう、そして盛工の名を全国に轟かせることができるよう更に精進を重ねる所存です。
                        何卒、今後とも厳しくも温かいご声援を賜りますようお願い致します。
                      </p>
                      <p className="text-sm sm:text-base italic text-gray-700">
                        結びになりますが、盛工同窓会の今後のご発展と、同窓様方の更なるご活躍をお祈り申し上げますとともに、皆様のご健康を心よりお祈り致します。
                      </p>
                    </div>
                  </div>

                  {/* 大会結果 */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Calendar className="h-7 w-7 sm:h-8 sm:w-8 text-morioka-600" />
                      大会結果
                    </h3>
                    <div className="space-y-5">
                      {/* 各大会 */}
                      <div className="border-l-4 border-morioka-600 pl-5 py-3 bg-white rounded-r-lg shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
                          令和6年度第11回全国高等学校7人制ラグビーフットボール大会 岩手県予選
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3">4月20日（土）於：北上総合運動公園</p>
                        <ul className="text-sm sm:text-base space-y-2 text-gray-700">
                          <li>一回戦 対 岩手高校 <span className="font-semibold text-morioka-700">19-5</span></li>
                          <li>決定戦 対 花巻東高校 <span className="font-semibold text-morioka-700">21-0</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-morioka-600 pl-5 py-3 bg-white rounded-r-lg shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
                          令和6年度第76回岩手県高等学校総合体育大会
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3">5月23日（木）～26日（日）於：八幡平市ラグビー場</p>
                        <ul className="text-sm sm:text-base space-y-2 text-gray-700">
                          <li>一回戦 対 合同 <span className="font-semibold text-morioka-700">69-7, 19-7</span></li>
                          <li>準決勝 対 黒沢尻北高校 <span className="font-semibold text-morioka-700">20-40, 7-7</span></li>
                          <li>決勝 対 黒沢尻工業高校 <span className="font-semibold text-morioka-700">7-40, 20-40</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-morioka-600 pl-5 py-3 bg-white rounded-r-lg shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
                          令和6年度第75回東北高等学校ラグビーフットボール大会
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3">6月13日（木）～16日（日）於：秋田市（秋田県立中央公園球技場）</p>
                        <ul className="text-sm sm:text-base space-y-2 text-gray-700">
                          <li>一回戦 対 三本木農業恵拓高校 <span className="font-semibold text-morioka-700">59-28, 17-12</span></li>
                          <li>準決勝 対 仙台第三高校 <span className="font-semibold text-morioka-700">24-26, 12-26</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-5 py-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-r-lg shadow-md">
                        <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
                          第104回全国高等学校ラグビーフットボール大会 岩手県大会
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3">10月20日 於：いわぎんスタジアム</p>
                        <ul className="text-sm sm:text-base space-y-2 text-gray-700">
                          <li className="font-bold text-morioka-700 text-lg sm:text-xl">決勝 対 黒沢尻工業高校 <span className="text-2xl sm:text-3xl text-yellow-600">21-20</span> <span className="text-yellow-600">★優勝★</span></li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-morioka-600 pl-5 py-3 bg-white rounded-r-lg shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
                          令和6年度岩手県高等学校新人大会ラグビーフットボール競技
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3">11月2日（土）～11月4日（月）於：宮古市若木公園グランド</p>
                        <ul className="text-sm sm:text-base space-y-2 text-gray-700">
                          <li>準決勝 対 合同A <span className="font-semibold text-morioka-700">33-0</span></li>
                          <li>決勝 不戦勝</li>
                          <li>決勝 対 黒沢尻北高校 <span className="font-semibold text-morioka-700">10-7</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 応援メッセージ */}
                  <div className="bg-gradient-to-r from-morioka-50 to-purple-50 rounded-2xl p-8 sm:p-10 text-center shadow-md border border-morioka-200">
                    <h3 className="text-3xl sm:text-4xl font-bold text-morioka-800 mb-4">
                      🎉 祝 全国大会出場 🎉
                    </h3>
                    <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5">
                      選手達に熱い声援をお願いします!!
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      母校では全国大会出場に伴う支援活動を行っております。<br />
                      皆様からのご協力をお願い致します。
                    </p>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="text-center pt-6 pb-2">
                <button
                  onClick={() => setShowRugbyModal(false)}
                  className="bg-morioka-600 text-white px-10 py-4 text-base sm:text-lg rounded-full font-bold hover:bg-morioka-700 transition-all hover:scale-105 shadow-lg"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 pb-0 pt-4">
          <section className="relative h-56 overflow-hidden rounded-3xl shadow-lg mb-4">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt="岩手県立盛岡工業高校"
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

          <section className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">ニュース</h2>
              <Link
                to="/announcements"
                className="inline-flex items-center gap-1 text-sm font-medium text-morioka-600"
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
                    className="relative w-[234px] shrink-0 snap-center overflow-hidden rounded-[32px] bg-white shadow-[0_16px_32px_rgba(114,64,179,0.08)] ring-1 ring-purple-50 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6fc] via-[#f0ecf9] to-[#e1d8f3]" />
                    <div className="relative flex min-h-[230px] flex-col justify-end p-6">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-morioka-600 text-xs font-semibold tracking-wide text-white shadow-[0_6px_14px_rgba(114,64,179,0.25)]">
                        {item.category}
                      </span>
                      <h3 className="mt-6 text-sm font-semibold leading-snug text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">クイックアクセス</h2>
            <div className="grid grid-cols-3 gap-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`group relative overflow-hidden rounded-[28px] bg-white px-5 pb-6 pt-6 text-left transition-all duration-200 hover:-translate-y-1 ${
                      item.highlight
                        ? 'shadow-[0_16px_40px_rgba(234,88,12,0.25)] ring-2 ring-orange-400 animate-pulse'
                        : 'shadow-[0_16px_32px_rgba(114,64,179,0.08)] ring-1 ring-purple-50 hover:shadow-[0_20px_45px_rgba(114,64,179,0.14)]'
                    }`}
                  >
                    <div
                      className={`absolute -top-8 right-[-18px] h-32 w-32 rounded-full bg-gradient-to-br ${item.bubbleGradient} opacity-90 transition-transform duration-300 group-hover:scale-105`}
                    />
                    <div className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_6px_12px_rgba(114,64,179,0.15)]">
                      <Icon className={`h-4 w-4 ${item.iconColor}`} />
                    </div>
                    <p className="relative z-10 mt-5 text-xs font-semibold leading-snug text-slate-800">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="relative z-10 mt-1 text-[10px] font-bold leading-tight text-orange-600 animate-pulse">
                        {item.subtitle}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="rounded-[20px] bg-white p-2 shadow-lg mb-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-morioka-600 to-purple-600 shadow-md">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900">卒業生トピックス</h2>
                <p className="text-xs font-medium uppercase tracking-wider text-morioka-600">ALUMNI TOPICS</p>
              </div>
              <Link
                to="/announcements"
                className="inline-flex items-center gap-1 text-sm font-semibold text-morioka-600"
              >
                もっと見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-0.5">
              {alumniTopics.map((topic, index) => (
                <Link
                  key={topic.id}
                  to={topic.url ?? '/announcements'}
                  className={`group flex items-center gap-2 rounded-[10px] p-2 transition-all duration-300 ${
                    index === 0
                      ? 'bg-purple-50/80 shadow-sm ring-1 ring-purple-100 animate-pulse'
                      : 'hover:bg-gray-100'
                  }`}
                  aria-label={`${topic.title} - ${topic.category}`}
                  title={topic.title}
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md shadow-sm transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-br from-morioka-500 to-purple-500 scale-105'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    <Newspaper className={`h-5 w-5 ${index === 0 ? 'text-white' : 'text-morioka-600'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`truncate text-sm font-semibold ${
                      index === 0 ? 'text-morioka-700' : 'text-gray-900'
                    }`}>{topic.title}</h3>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className={`text-xs font-medium ${
                        index === 0 ? 'text-morioka-600' : 'text-gray-500'
                      }`}>{topic.category}</span>
                      <span className="text-xs text-gray-400" aria-hidden="true">•</span>
                      <span className="text-xs text-gray-400">{topic.date}</span>
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className="flex items-center gap-0.5" aria-label="現在注目のトピック" role="status">
                      {Array.from({ length: PULSE_BAR_COUNT }, (_, i) => (
                        <div
                          key={i}
                          className="h-7 w-0.5 rounded-full bg-morioka-500"
                          style={{
                            animation: 'pulseBar 1s ease-in-out infinite',
                            animationDelay: `${i * PULSE_BAR_DELAY_STEP}s`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="flex h-6 w-6 items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="トピックを読む"
                      role="button"
                    >
                      <div className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-gray-900" />
                    </div>
                  )}
                </Link>
              ))}
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
              alt="岩手県立盛岡工業高校"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <Link
            to="/announcements"
            className="bg-morioka-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-morioka-700/90 transition-all duration-200 transform hover:scale-105 shadow-xl"
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

      {/* Club Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">部活動報告</h2>
            <p className="text-lg text-gray-600">生徒たちの活発な部活動の様子をお伝えします</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">最近の活動</h3>
            <p className="text-lg font-semibold text-gray-800">令和年度後期～令和年度前期主な部活動結果</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clubActivities.map((activity) => (
              <Link
                key={activity.id}
                to={activity.href}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 画像エリア */}
                <div className={`relative h-56 bg-gradient-to-br ${activity.bgColor} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      {activity.label}
                    </span>
                  </div>
                  {/* 画像プレースホルダー */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/30 text-8xl group-hover:scale-110 transition-transform duration-300">📸</div>
                  </div>
                </div>

                {/* コンテンツエリア */}
                <div className="p-6 relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Award className="h-5 w-5" />
                      <span className="text-sm font-semibold">{activity.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{activity.date}</span>
                    </div>
                  </div>

                  {/* 音声再生ボタン */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // 音声再生処理をここに追加
                      console.log('Playing audio for:', activity.title);
                    }}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group-hover:from-purple-700 group-hover:to-purple-800"
                    aria-label="音声を再生"
                  >
                    <Volume2 className="h-6 w-6" />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/club-activities"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              すべての部活動を見る
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
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
                  盛岡工業高等学校同窓会の皆様へ
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  岩手県立盛岡工業高等学校同窓会の皆様におかれましては、各方面においてご活躍のことと心よりお喜び申し上げます。また、日頃より同窓会活動に対してご理解とご協力を賜り、厚く御礼申し上げます。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  この度、同窓生の皆様との更なる連携強化と情報共有の充実を図るため、盛岡工業高等学校同窓会公式ホームページを開設する運びとなりました。創立以来培われてきた同窓生の絆を、現代の情報技術を活用してより一層深めてまいりたいと考えております。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  近年、デジタル化の進展により、情報伝達の手段も大きく変化しております。このホームページを通じて、同窓会の活動報告、各種イベントのご案内、そして同窓生の皆様の近況報告など、タイムリーな情報発信を行ってまいります。また、同窓生同士の交流促進の場としてもご活用いただけるよう、様々なコンテンツを準備しております。
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  ものづくりの精神と技術を学び、文武両道を目指して青春を過ごした母校での思い出は、皆様にとってかけがえのない財産であることでしょう。このホームページが、そうした思い出を共有し、新たな交流を生み出す架け橋となることを願っております。
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  結びに、ホームページ開設にあたりご協力いただきました関係者の皆様に心から感謝申し上げますとともに、同窓生の皆様の益々のご健勝と今後のご活躍を御祈念申し上げます。
                </p>
                <div className="text-right">
                  <p className="text-2xl font-script text-morioka-600 mb-2" style={{fontFamily: 'cursive'}}>
                    会長名
                  </p>
                  <p className="text-gray-600 font-medium">岩手県立盛岡工業高等学校同窓会 会長</p>
                  <p className="text-gray-500 text-sm">○○年卒</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                    alt="松井正文 同窓会会長"
                    className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-morioka-600 rounded-full flex items-center justify-center">
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-morioka-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">20,000+</h3>
              <p className="text-gray-600 font-medium">卒業生</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-morioka-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600 font-medium">創立周年</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-morioka-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600 font-medium">学科数</p>
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
                  <p className="text-morioka-600 font-semibold mb-2">{alumni.year}</p>
                  <p className="text-gray-700 font-medium mb-2">{alumni.profession}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{alumni.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{alumni.achievement}</p>
                  <Link
                    to={`/alumni-profiles/${alumni.id}`}
                    className="inline-flex items-center text-morioka-600 font-semibold hover:text-morioka-700 transition-colors duration-200"
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
              className="inline-flex items-center bg-morioka-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-morioka-700 transition-all duration-200 transform hover:scale-105 shadow-xl"
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
          <div className="bg-gradient-to-r from-morioka-600 to-purple-800 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              つながりませんか？
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              同窓生とのつながりが、新たな人脈を築き、転職の機会を広げ、人生の可能性を無限に広げていきます。
              先輩・後輩たちとつながろう！
            </p>
            <div className="flex justify-center">
              <Link
                to="/member-registration"
                className="bg-white text-morioka-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 border-2 border-white shadow-lg"
              >
                メンバー登録をする
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
