/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      bgColor:"#0a0c1b",
      cardBg:"#1c1938",
      textColor:"#a95dd9",
      text:"#fcfefc",
      paragraph:"#b1afc5",
      filter:"#510e76"
    },
    screens:{
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

