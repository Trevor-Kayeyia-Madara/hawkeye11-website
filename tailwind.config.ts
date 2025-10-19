import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
          "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)", // ✨ soft gold sweep
      },
      backgroundSize: {
        shimmer: "200% 100%", // ensures motion coverage
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

export default config;
