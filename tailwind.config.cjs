/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        strech: ["Strech Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
