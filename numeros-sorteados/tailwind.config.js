/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ShowLoterias: '#0837be',
        customMegasena: '#6BEFA3',
        customQuina: '#8666EF',
        customLotoFacil: '#DD7AC6',
        customLotomania: '#FFAB84',
        customTimemania: '#ffbf00'
      },
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

