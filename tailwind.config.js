/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        greenprice:"#36CC7B"
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        patua: ['var(--patua-font)',"cursive", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
