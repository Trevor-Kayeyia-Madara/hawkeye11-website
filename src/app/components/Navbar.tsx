"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/20"
          : "bg-[#0B0B0B]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center space-x-3 font-bold text-xl text-[#D4AF37]"
        >
          <Image
            src="/logo.png"
            alt="Hawkeye 11 Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="hidden sm:inline tracking-wide text-[#D4AF37]">
            HAWKEYE 11
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#D4AF37] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Why Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : "/" + item.toLowerCase().replace(/\s+/g, "-")
              }
              className="relative text-white font-medium transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#0B0B0B] text-white flex flex-col items-center space-y-4 py-6 border-t border-[#D4AF37]/30">
          {["Home", "About", "Services", "Why Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : "/" + item.toLowerCase().replace(/\s+/g, "-")
              }
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[#D4AF37] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
