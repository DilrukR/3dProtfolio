/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      matBlack: "#080808",
      red: "#d62828",
    },

    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        allura: ['"Allura", "cursive"'],
        bebas: ['"Bebas Neue", "sans - serif"'],
        teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
