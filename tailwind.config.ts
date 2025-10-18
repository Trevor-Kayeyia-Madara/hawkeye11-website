/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🌙 Enables dark mode toggling via the `.dark` class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        dark: "#0B0B0B",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
