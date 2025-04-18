 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'dark': '#0E0E0E',
          'darkgrey': '#1B1B1B',
          'midgrey': '#2D2D2D',
          'silver': '#BFBFBF',
          'beige': '#F3EDE1',
          'gold': '#EFCC6E',
          'ocre': '#EFCC6E',
          'text-grey': '#9C9C9C'
      },
      backgroundImage: {
          "shiny-gold": 'linear-gradient(90deg, rgba(140,66,29,1) 0%, rgba(251,230,123,1) 33%, rgba(252,251,231,1) 54%, rgba(247,209,78,1) 77%, rgba(212,160,65,1) 100%)',
          "subtle-gold": 'linear-gradient(90deg, rgba(232,198,135,1) 0%, rgba(193,153,94,1) 100%)'
      }
  },
  },
  plugins: [],
}