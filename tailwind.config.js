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
      },
      white:"#FFF",
      blue:{
        200:"#89D0CA",
        500:"#1877F2",
        800:"#1566cf"
      },
      violeta:{
       200:"#A8A1DF",
       400:"#7771a2",
      },
      green:{
        200:"#9DF3A0",
      },
    
    },
    colors:{
      white: "#FFF",
      secondary:"#3C3C3C",
      tercero:"#FFDC72",
      blue:{
        200:"#89D0CA",
        500:"#1877F2",
        800:"#1566cf"
      },
      green:{
        200:"#9DF3A0",
      },
      hoverPrimary:"#f3973b",
      warning:"#FF0000CC"
    }
  },
  plugins: [],

}

