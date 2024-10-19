/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ff4a57',
        customBlue: '#1F2235',
      },
      backgroundColor: {
        customBlue: '#1F2235',
      }
    },
  },
  plugins: [],
}