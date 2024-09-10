/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      colors: {
        'firstColor': '#00933D',
        'secondColor': '#0072C0',
        'transparentBlack': 'rgba(30, 30, 30, 0.1);',
        'transparentBlackII': 'rgba(30, 30, 30, 0.98);',
      },
    },
  },
  plugins: [],
}