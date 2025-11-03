import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { Home, Users, Bell, Heart, Mail } from 'lucide-react';

type TabItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  isActive?: (pathname: string) => boolean;
};

const tabs: TabItem[] = [
  {
    id: 'home',
    label: 'ホーム',
    icon: Home,
    href: '/',
    isActive: (pathname) => pathname === '/',
  },
  {
    id: 'news',
    label: 'お知らせ',
    icon: Bell,
    href: '/announcements',
    isActive: (pathname) => pathname.startsWith('/announcements'),
  },
  {
    id: 'donations',
    label: '寄付',
    icon: Heart,
    href: '/donations',
    isActive: (pathname) => pathname.startsWith('/donations'),
  },
  {
    id: 'contact',
    label: 'お問い合わせ',
    icon: Mail,
    href: '/contact',
    isActive: (pathname) => pathname.startsWith('/contact'),
  },
];

const MobileTabBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="mx-auto w-full max-w-md rounded-t-3xl bg-white/95 shadow-[0_-10px_30px_-12px_rgba(30,64,175,0.35)] backdrop-blur-md">
      <div className="flex justify-around px-1 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = tab.isActive ? tab.isActive(currentPath) : currentPath === tab.href;

          return (
            <Link
              key={tab.id}
              to={tab.href}
              className={`flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-xs font-medium transition-all duration-200 ${
                active
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <Icon
                size={20}
                className={`mb-1 transition-transform duration-200 ${active ? 'scale-105' : 'opacity-80'}`}
              />
              <span className="font-gothic whitespace-nowrap leading-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileTabBar;

