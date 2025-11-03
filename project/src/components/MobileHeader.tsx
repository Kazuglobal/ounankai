import React from 'react';

const MobileHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-center bg-[#f5f0ea] px-4 py-6 shadow-md">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-base font-bold text-gray-800">
          岩手県立盛岡工業高等学校同窓会
        </h1>
        <img
          src="/images/morioka-alumni-babber.png"
          alt="盛工同窓会々報"
          className="h-8 w-auto"
        />
      </div>
    </header>
  );
};

export default MobileHeader;
