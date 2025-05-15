/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'main': ['Edu VIC WA NT Beginner', 'Sans-serif'],
      'lato': ['Lato', 'Sans-serif']
    },
  },
  plugins: [],
}