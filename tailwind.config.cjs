/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      vp: ["Black Gold", "sans-serif"],
      sans: ["Philosopher", "sans-serif"],
    },

    extend: {
      fontFamily: {
        sans: ["Philosopher", "sans-serif"],
      },
      colors: {
        gold: "#e3d7bf",
        "dark-gray": "#181818",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

module.exports = config;
