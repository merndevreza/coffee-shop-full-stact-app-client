/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    rancho: ['Rancho', 'cursive'],
    raleway: ['Raleway', 'sans-serif']
  },
  colors: {
    'theme-coffee': '#331A15',
    'theme-red': '#EA4744',
    'theme-golden': '#D2B48C',
    'theme-black-1': '#1B1A1A',
    'theme-black-2': '#5C5B5B',
    'theme-black-3': '#3C393B',
  },
    extend: {},
  },
  plugins: [require("daisyui")],
}

