/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        hoverColor: '#3aafa9',
        bgColor: '#def2f1',
        btnClr: "linear-gradient(180deg, #3aafa9 26.71%, #def2f1 99.36%)"
      },
    },
  },
  plugins: [],
}