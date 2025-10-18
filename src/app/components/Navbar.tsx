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

  // ensure theme hydration before render
  useEffect(() => setMounted(true), []);

  // navbar shadow and background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md shadow-md border-b border-[var(--border)]/30"
          : "bg-[var(--bg)]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO + BRAND */}
        <Link
          href="/"
          className="flex items-center space-x-3 font-bold text-xl text-[var(--accent)]"
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

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden text-[var(--accent)] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Why Us", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : "/" + item.toLowerCase().replace(/\s+/g, "-")
                }
                className="relative text-[var(--fg)] font-medium transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="text-[var(--fg)] font-medium transition group-hover:text-[var(--accent)]">
                Services ▾
              </button>
              <div className="absolute hidden group-hover:block bg-[var(--bg)] border border-[var(--border)] rounded-lg mt-2 shadow-lg z-50">
                <div className="flex flex-col text-left py-2">
                  {[
                    { name: "Manned Guarding", href: "/services#manned-guarding" },
                    { name: "K-9 Dog Unit", href: "/services#k9-unit" },
                    { name: "CCTV Systems", href: "/services#cctv" },
                    { name: "Cash In Transit (CIT)", href: "/services#cit" },
                    { name: "VIP Escort", href: "/services#vip-escort" },
                    { name: "Facility Management", href: "/services#facility" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] text-sm whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          {/* THEME TOGGLE (DESKTOP) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-[var(--accent)]/40 hover:border-[var(--accent)] transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-[var(--accent)]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--accent)]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center space-y-4 py-6 border-t border-[var(--border)]/40">
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
                className="text-lg font-medium hover:text-[var(--accent)] transition"
              >
                {item}
              </Link>
            )
          )}

          {/* THEME TOGGLE (MOBILE) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-[var(--accent)]/40 hover:border-[var(--accent)] transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-[var(--accent)]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--accent)]" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
