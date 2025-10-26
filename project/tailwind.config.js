/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
        script: ['cursive'],
        gothic: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif'],
        mincho: ['"Shippori Mincho"', '"Hiragino Mincho ProN"', 'serif'],
      },
      colors: {
        purple: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        morioka: {
          50: '#F8F6FC',
          100: '#F0ECF9',
          200: '#E1D8F3',
          300: '#C9B8E8',
          400: '#A98BD9',
          500: '#8B5FC7',
          600: '#7240B3',
          700: '#5E3496',
          800: '#4E2C7C',
          900: '#422766',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-bar': 'pulseBar 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseBar: {
          '0%, 100%': { height: '0.5rem' },
          '25%': { height: '1rem' },
          '50%': { height: '1.75rem' },
        },
      },
    },
  },
  plugins: [],
};
