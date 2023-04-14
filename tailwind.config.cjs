/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'top-bottom': '0px 1px 20px #000, 0px 1px 20px #000;',
      },
      colors: 
      {
        'primary-blue': '#74bde0',
        'blue-dark': '#3282B8',
        'blue-light': '#bbe1fa',
        'gray-light': '#3c4757',
        'gray-dark': '#222831',
        'blue-darker': '#1b262c'
      },
      fontFamily:
      {
        'primary': ['"Red Hat Display"', 'sans-serif']
      }
    },
  },
  
  plugins: [require("daisyui")],
}
