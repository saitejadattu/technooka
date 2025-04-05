/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customgrey: "#898989",
        customLightBlue:"#0084CA",
        lemonYellow:"#FFE09B",
        customYellow:"#FFB200",
        customBlue:"#3384B9",
        customlightsky:"#E6F0F6",
      }
    },
  },
  plugins: [],
}

