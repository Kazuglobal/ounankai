import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Users, Calendar, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronLeft } from 'lucide-react';
import MobileTabBar from './MobileTabBar';
import MobileHeader from './MobileHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'ご挨拶', href: '/announcements' },
    { name: '同窓会活動', href: '/alumni-activities' },
    { name: '部活動報告', href: '/club-activities' },
    { name: '進路概要', href: '/career-paths' },
    { name: '事務局', href: '/secretariat' },
    { name: '学校', href: '/school' },
    { name: '卒業生トピックス', href: '/#alumni-topics' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3F0]">
      

      {/* Navigation */}
      <header
        className={`z-50 w-full transition-all duration-300 ${
          isScrolled ? 'lg:bg-white/95 lg:backdrop-blur-sm lg:shadow-lg' : 'lg:bg-transparent'
        } lg:fixed`}
      >
        <div className="hidden lg:block">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between gap-4 xl:h-32">
              <Link to="/" className="flex items-center gap-4">
                <img
                  src="/images/morioka-alumni-babber.png"
                  alt="盛工同窓会々報"
                  className="h-10 w-auto hidden lg:block"
                />
              </Link>
              <div className="flex items-center space-x-4 xl:space-x-6">
                {navigation.map((item) => {
                  const isHashLink = item.href.startsWith('/#');
                  const commonClass = `rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-morioka-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:text-morioka-600 hover:shadow-md'
                  }`;
                  return isHashLink ? (
                    <a key={item.name} href={item.href} className={commonClass}>
                      {item.name}
                    </a>
                  ) : (
                    <Link key={item.name} to={item.href} className={commonClass}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <MobileHeader />
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate('/');
                }
              }}
              className="absolute left-4 top-4 rounded-2xl bg-white/95 p-2 shadow-md transition hover:bg-white"
              aria-label="前のページに戻る"
            >
              <ChevronLeft className="h-6 w-6 text-morioka-600" />
            </button>
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
              {navigation.map((item) => {
                const isHashLink = item.href.startsWith('/#');
                const mobileClass = `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-morioka-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-purple-50'
                }`;
                return isHashLink ? (
                  <a key={item.name} href={item.href} className={mobileClass}>
                    {item.name}
                  </a>
                ) : (
                  <Link key={item.name} to={item.href} className={mobileClass}>
                    {item.name}
                  </Link>
                );
              })}
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
            {/* Banner */}
            <img
              src="/images/morioka-alumni-babber.png"
              alt="盛工同窓会々報"
              className="h-10 sm:h-12 w-auto"
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
                © 2025 岩手県立盛岡工業高等学校同窓会. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

