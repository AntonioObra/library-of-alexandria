/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        strech: ["Strech Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

module.exports = config;
