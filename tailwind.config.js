/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'pink-light': '#E00CBD',
        'blue-dark': '#0847AD',
        'pink-gray': '#A63884',
        'orange-ligth': '#EA3D1A',
        'yellow-dark':'#FFA401',
        'indigo-black': '#37298C',
        'purple-black': '#5C0742',
        
      },
      screens: {
        '1xl': '1440px',
        '3xl': '2100px'
      },
      gridTemplateColumns: {
        'services-movil': 'repeat(2, minmax(0, 160px))',
        'services-desktop': 'repeat(4, minmax(0, 330px))'
      }
    }
  },
  plugins: [],
}