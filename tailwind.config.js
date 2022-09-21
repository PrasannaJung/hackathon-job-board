/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(10, 10, 10, 0.1)',
      }
    },
  },
  plugins: [],
};
