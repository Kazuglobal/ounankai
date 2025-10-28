import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Calendar, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Volume2, VolumeX } from 'lucide-react';
import MobileTabBar from './MobileTabBar';
import MobileHeader from './MobileHeader';

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
    { name: '学校', href: '/school' },
    { name: '同窓生とつながる', href: '/alumni-profiles' },
    { name: '会報', href: '/newsletter/issue-74' },
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
        className="fixed bottom-28 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-morioka-600/90 text-white shadow-xl transition-all duration-200 hover:bg-morioka-700/90 backdrop-blur-sm sm:bottom-auto sm:right-6 sm:top-24"
        aria-label={isPlaying ? '音楽を停止' : '音楽を再生'}
      >
        {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <header
        className={`z-50 w-full transition-all duration-300 ${
          isScrolled ? 'lg:bg-white/95 lg:backdrop-blur-sm lg:shadow-lg' : 'lg:bg-transparent'
        } lg:fixed`}
      >
        <div className="hidden lg:block">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between gap-4 xl:h-32">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo-ounankai-header.png"
                  alt="岩手県立盛岡工業高等学校同窓会"
                  className="h-20 w-auto xl:h-28"
                />
              </Link>
              <div className="flex items-center space-x-4 xl:space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-morioka-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white hover:text-morioka-600 hover:shadow-md'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <MobileHeader />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-4 top-4 rounded-2xl bg-white/95 p-2 shadow-md transition hover:bg-white"
              aria-label="メニュー"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-morioka-600" /> : <Menu className="h-6 w-6 text-morioka-600" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="space-y-2 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-morioka-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16 pt-4 sm:pt-6 lg:pb-0 lg:pt-36 xl:pt-40">
        {children}
      </main>

      {/* Mobile Tab Bar */}
      <div className="fixed bottom-0 left-1/2 z-40 w-full -translate-x-1/2 px-4 pb-3 lg:hidden">
        <MobileTabBar />
      </div>

      {/* Footer */}
      <footer className="bg-white rounded-t-3xl mt-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo */}
            <img
              src="/images/logo-ounankai.png"
              alt="岩手県立盛岡工業高等学校同窓会"
              className="h-20 sm:h-24 w-auto"
            />
            
            {/* Description */}
            <p className="text-gray-600 max-w-md">
              卒業生の絆を深め、生涯にわたる関係を築く活気ある同窓生コミュニティを通じて、世代を繋いでいます。
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-morioka-600 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-morioka-600 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-morioka-600 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-morioka-600 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-6 w-full">
              <p className="text-sm text-gray-600">
                © 2024 岩手県立盛岡工業高等学校同窓会. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

