/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'], // Set Satoshi as the default sans font
      },
      screens: {
        '3xl': '2000px', // Custom breakpoint for 2000px and up
      },
    },
  },
  plugins: [],
}
