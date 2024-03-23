/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F78E12",
        gray: "#43454D",
        background: "#292F36",
        backgroundSecondary: "#1A1E23",
        secondary: "#FFBE73",
        complementary: "#127BF7",
        react: "#61DAFB",
        php: "#8892BF",
        javascript: "#F0DB4F",
        unity: "#000000",
      },
    },
  },
  plugins: [],
}

