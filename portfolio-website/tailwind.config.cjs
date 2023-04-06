/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: 
      {
        'primary-blue': '#74bde0',
        'blue-dark': '#3282B8',
        'blue-light': '#bbe1fa',
        'gray-light': '#3c4757',
        'gray-dark': '#222831',
        'blue-darker': '#1b262c'
      },
    },
  },
  
  plugins: [require("daisyui")],
}
