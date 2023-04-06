/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    screens: {
      'custom500':'500px',
      'custom320': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        'screen-lg': '1014px',
      },
      colors: {
        'primary' : '#5CB841',
        'secondary' : '#58794B',

        'comp' : '#004D72',
        'logo_color' : '#3F415A',

        'background' : '#FAFAFA',
        'bg_color' : '#E0F8D5',
        'card_color' : '#F2F3F2',

        'p_color' : '#8B8B8B',
        'h3_color' : '#AEAEAE',
        'num_color' : '#F6F5F5',
      },
    },
  },
  plugins: [],
}