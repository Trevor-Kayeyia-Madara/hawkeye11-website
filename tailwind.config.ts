import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand Core
        gold: {
          DEFAULT: "#D4AF37", // Hawkeye gold
          light: "#E5C158",
          dark: "#B8962E",
        },
        black: {
          DEFAULT: "#0B0B0B", // deep security black
          soft: "#1A1A1A",
          faded: "#2D2D2D",
        },
        white: {
          DEFAULT: "#FFFFFF",
          soft: "#F9F9F9",
          off: "#F2F2F2",
        },

        // Semantic Palette (for design tokens)
        base: {
          light: "#FFFFFF",
          dark: "#0B0B0B",
        },
        surface: {
          light: "#F9F9F9",
          dark: "#111111",
        },
        text: {
          light: "#111111", // ✅ black text on light mode
          dark: "#FFFFFF",  // ✅ white text on dark mode
          mutedLight: "#4B5563",
          mutedDark: "#D1D5DB",
        },
        border: {
          light: "#E5E7EB",
          dark: "#2C2C2C",
        },
      },

      // Fonts & Transitions
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
