/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        black: "#000000",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)",
      },
      backgroundSize: {
        shimmer: "200% 100%",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
