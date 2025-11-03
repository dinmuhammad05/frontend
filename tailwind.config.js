/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- ENG MUHIM SOZLAMA
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- React fayllaringiz shu yerda ekanligiga ishonch hosil qiling
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}