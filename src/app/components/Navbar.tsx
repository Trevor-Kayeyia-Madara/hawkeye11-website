"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg transition-colors duration-500 bg-surface-light/90 dark:bg-base-dark/90 border-b border-gray-light/40 dark:border-gray-dark/60">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* 🦅 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Hawkeye 11"
            width={48}
            height={48}
            className="rounded-md"
          />
          <span className="font-sans font-bold text-xl text-text-light dark:text-text-dark">
            Hawkeye 11
          </span>
        </Link>

        {/* 🌐 Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-base">
          <Link
            href="/"
            className="text-text-light dark:text-text-dark hover:text-gold transition-colors"
          >
            Home
          </Link>

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-gold transition-colors"
            >
              Services <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-3 bg-surface-light dark:bg-surface-dark shadow-lg rounded-lg py-2 border border-gray-light/20 dark:border-gray-dark/40">
                {[
                  { title: "Manned Guarding", href: "/services#guarding" },
                  { title: "Cash In Transit", href: "/services#cit" },
                  { title: "CCTV & Alarm Systems", href: "/services#cctv" },
                  { title: "K9 Dog Unit", href: "/services#k9" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-6 py-2 hover:bg-gold hover:text-black transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/why-us"
            className="text-text-light dark:text-text-dark hover:text-gold transition-colors"
          >
            Why Us
          </Link>

          <Link
            href="/careers"
            className="text-text-light dark:text-text-dark hover:text-gold transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-text-light dark:text-text-dark hover:text-gold transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* 🌙 Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
