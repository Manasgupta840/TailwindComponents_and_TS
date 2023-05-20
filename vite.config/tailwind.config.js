/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'statusInactivebackground':"rgba(243, 40, 40, 0.1)"
      }
    },
  },
  plugins: [],
}