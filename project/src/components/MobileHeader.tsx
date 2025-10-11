import React from 'react';

const MobileHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-center bg-[#f5f0ea] px-4 py-6 shadow-md">
      <img
        src="/images/mobile-header-calligraphy.png"
        alt="青森県立八戸西高等学校 同窓会 奥南会"
        className="h-20 w-auto max-w-full object-contain"
      />
    </header>
  );
};

export default MobileHeader;
