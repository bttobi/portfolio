/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: 
      {
        'bg-primary': '#74bde0',
      },
    },
  },
  
  plugins: [require('daisyui')],
}
