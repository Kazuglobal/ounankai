import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Calendar, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Volume2, VolumeX } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // 音楽自動再生機能
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('自動再生が制限されています。ユーザーの操作が必要です。');
          setIsPlaying(false);
        }
      }
    };

    playAudio();

    const handleUserInteraction = () => {
      if (!isPlaying && audioRef.current) {
        playAudio();
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: '会則', href: '/bylaws' },
    { name: '役員名簿', href: '/board-of-directors' },
    { name: 'ギャラリー', href: '/gallery' },
    { name: '同窓生とつながる', href: '/alumni-profiles' },
    { name: 'お知らせ', href: '/announcements' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3F0]">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        autoPlay
        muted={false}
        preload="auto"
      />

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-24 right-6 z-50 w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-700/90 transition-all duration-200 shadow-xl"
        aria-label={isPlaying ? '音楽を停止' : '音楽を再生'}
      >
        {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 gap-2 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo-ounankai.png" 
                alt="青森県立八戸西高等学校同窓会奥南会" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto max-h-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              {navigation.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
                  }`}
                >
                  {item.name === '役員名簿' ? '役員' : (item.name.length > 3 ? item.name.substring(0, 3) + '...' : item.name)}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white shadow-md flex-shrink-0"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-40">
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white rounded-t-3xl mt-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center">
                <img 
                  src="/images/logo-ounankai.png" 
                  alt="青森県立八戸西高等学校同窓会奥南会" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto"
                />
              </div>
              <p className="mt-4 text-gray-600 max-w-md">
                卒業生の絆を深め、生涯にわたる関係を築く活気ある同窓生コミュニティを通じて、世代を繋いでいます。
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">クイックリンク</h4>
              <ul className="space-y-3">
                <li><Link to="/bylaws" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">会則</Link></li>
                <li><Link to="/board-of-directors" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">役員名簿</Link></li>
                <li><Link to="/alumni-profiles" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">同窓生とつながる</Link></li>
              </ul>
            </div>

            {/* Member Registration */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">参加しませんか？</h4>
              <div className="bg-blue-50 rounded-2xl p-4 mb-4">
                <p className="text-sm text-blue-900 mb-3">
                  まだメンバーでない方も、<br />
                  奥南会に参加できます！
                </p>
                <Link
                  to="/member-registration"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 w-full justify-center"
                >
                  メンバー登録
                </Link>
              </div>
              <p className="text-xs text-gray-500">
                同窓生ネットワークに参加して、新しいつながりを築きましょう
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">お問い合わせ</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">〒039-1101<br />青森県八戸市大字尻内町字中根市14</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:ounankai@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    ounankai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 青森県立八戸西高等学校同窓会奥南会. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;