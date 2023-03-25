/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: 
      {
        'bg-primary': '#74bde0',
        'blue-dark': '#3282B8'
      },
    },
  },
  
  plugins: [require("daisyui")],
}
