"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-gold transition-all duration-500
        ${isDark
          ? "bg-black text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          : "bg-white text-black hover:bg-[#D4AF37] hover:text-black"}
      `}
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
