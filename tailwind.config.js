/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2px 2px 2px 2px rgba(10, 10, 10, 0.1)',
      },
      keyframes: {
        textAnimation: {
          '0%': { backgroundPosition: '0px 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0px 50%' },
        },
      },
      animation: {
        textAnimation: 'textAnimation 2s ease-in-out infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
