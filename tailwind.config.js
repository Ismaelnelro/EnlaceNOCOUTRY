/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],

    },
    backgroundColor:{
      primary:"#f3973b",
      secondary:"#fac33e",
      grey:{
        100:"#a4a4a4",
        400:"#9a9a9a",
        700:"#58595b",
        900:"#3C3C3C"
      }
    },
    colors:{
      primary: "#fff",
      secondary:"#3C3C3C",
      hoverPrimary:"#f3973b"
    }
  },
  plugins: [],

}

