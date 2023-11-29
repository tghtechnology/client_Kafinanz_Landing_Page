/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      'white': '#FFFF'
    },
    screens: {
      '1xl': '1440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2100px'
    }
  },
  plugins: [],
}