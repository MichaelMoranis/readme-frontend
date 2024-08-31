/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreem: '#6BEFA3'
      },
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

