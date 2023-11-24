/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

    },
    listStyleImage: {
      checkmark: 'url("/img/icons/check-mark.png")',
    },
    screens: {
      'desktop-full': '1600px'
    }
  },
  plugins: [],
})