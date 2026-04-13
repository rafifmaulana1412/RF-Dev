/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#00C8E0",
        "gold-light": "#60E8F8",
        "gold-dark": "#0090A8",
        dark: "#0A0F1A",
        "dark-card": "#0D1520",
        "dark-border": "#1A2535",
        cream: "#E8F0F5",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
