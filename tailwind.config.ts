/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 10px rgba(212, 175, 55, 0.4)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
