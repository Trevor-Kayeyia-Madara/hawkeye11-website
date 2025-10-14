"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ensure correct theme rendering only after hydration
  useEffect(() => setMounted(true), []);

  // navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // prevent mismatch on SSR

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md shadow-md border-b border-accent/20"
          : "bg-bg"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center space-x-3 font-bold text-xl text-accent"
        >
          <Image
            src="/logo.png"
            alt="Hawkeye 11 Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="hidden sm:inline tracking-wide">HAWKEYE 11</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Services", "Why Us", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : "/" + item.toLowerCase().replace(/\s+/g, "-")
                }
                className="relative text-fg font-medium transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
              </Link>
            )
          )}

          {/* Desktop Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-accent/40 hover:border-accent transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-accent" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-bg text-fg flex flex-col items-center space-y-4 py-6 border-t border-accent/30">
          {["Home", "About", "Services", "Why Us", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : "/" + item.toLowerCase().replace(/\s+/g, "-")
                }
                onClick={() => setOpen(false)}
                className="text-lg font-medium hover:text-accent transition"
              >
                {item}
              </Link>
            )
          )}

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-accent/40 hover:border-accent transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-accent" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
