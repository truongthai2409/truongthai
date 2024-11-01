/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Ubuntu Mono", "sans-serif"],
        'sans': ['"Ubuntu Mono"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary: "#111",
        secondary: "#222"
      },
      screens: {
        // Custom max-width breakpoints
        'sm-max': { 'max': '640px' },
        'md-max': { 'max': '768px' },
        'lg-max': { 'max': '1024px' },
        'xl-max': { 'max': '1280px' },
      },
    },
  },
  
  plugins: [],
}

