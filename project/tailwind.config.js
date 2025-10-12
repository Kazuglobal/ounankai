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
        beige: {
          50: '#FDFCFB',
          100: '#F7F3F0',
          200: '#F0E6D6',
          300: '#E8D5BC',
          400: '#DFC4A2',
          500: '#D6B388',
          600: '#C8A06E',
          700: '#B08D54',
          800: '#8B6F3A',
          900: '#665120',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
      },
    },
  },
  plugins: [],
};
