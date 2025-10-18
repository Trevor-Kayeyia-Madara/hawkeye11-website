/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ⚙️ Core Theme Colors
        base: {
          light: "#FFFFFF", // clean white
          dark: "#0B0B0B",  // elegant black
        },

        // 🎨 Accents
        gold: "#D4AF37",            // prestige & luxury
        blue: "#1E3A8A",            // deep navy blue (trust & authority)
        green: "#1F4D36",           // muted forest green (stability & protection)
        gray: {
          DEFAULT: "#6B7280",       // neutral gray for text
          light: "#F3F4F6",         // section bg for light mode
          dark: "#1A1A1A",          // section bg for dark mode
        },

        // Semantic tokens (for maintainability)
        text: {
          light: "#0B0B0B",
          dark: "#F9FAFB",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#111111",
        },
      },

      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Garamond", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
