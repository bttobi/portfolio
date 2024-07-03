/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      main: ['"Red Hat Display"', 'sans-serif'],
      article: ['"Red Hat Mono"', 'monospace'],
    },
    extend: {
      boxShadow: {},
      colors: {
        primary: '#EBF4F6',
        accent: '#37B7C3',
        secondary: '#088395',
        bg: '#DAF8FF',
        contrast: '#efbd57',
      },
    },
  },

  plugins: [require('daisyui')],
};
