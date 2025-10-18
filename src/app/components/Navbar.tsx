"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent hydration mismatch by rendering only after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = (menu: string) =>
    setDropdown(dropdown === menu ? null : menu);

  // ✅ Avoid SSR/client mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black h-[80px] shadow-sm"></nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37]"
        >
          Hawkeye 11
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 hover:text-[#D4AF37]"
            >
              Services <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {dropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 bg-white dark:bg-black border border-[#D4AF37]/30 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col text-sm text-gray-700 dark:text-gray-300">
                    <Link href="/services/manned-guarding" className="px-4 py-2 hover:bg-[#D4AF37]/10">Manned Guarding</Link>
                    <Link href="/services/cash-in-transit" className="px-4 py-2 hover:bg-[#D4AF37]/10">Cash In Transit</Link>
                    <Link href="/services/event-security" className="px-4 py-2 hover:bg-[#D4AF37]/10">Event Security</Link>
                    <Link href="/services/cctv-surveillance" className="px-4 py-2 hover:bg-[#D4AF37]/10">CCTV & Surveillance</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("whyus")}
              className="flex items-center gap-1 hover:text-[#D4AF37]"
            >
              Why Us <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {dropdown === "whyus" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 bg-white dark:bg-black border border-[#D4AF37]/30 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col text-sm text-gray-700 dark:text-gray-300">
                    <Link href="/about" className="px-4 py-2 hover:bg-[#D4AF37]/10">About Us</Link>
                    <Link href="/certifications" className="px-4 py-2 hover:bg-[#D4AF37]/10">Certifications</Link>
                    <Link href="/testimonials" className="px-4 py-2 hover:bg-[#D4AF37]/10">Testimonials</Link>
                    <Link href="/coverage" className="px-4 py-2 hover:bg-[#D4AF37]/10">Coverage</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/careers" className="hover:text-[#D4AF37]">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-[#D4AF37]">
            Contact
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D4AF37]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-black border-t border-[#D4AF37]/30"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-lg">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center justify-between w-full"
                >
                  Services <ChevronDown size={18} />
                </button>
                {dropdown === "services" && (
                  <div className="ml-4 mt-2 flex flex-col text-sm space-y-2">
                    <Link href="/services/manned-guarding">Manned Guarding</Link>
                    <Link href="/services/cash-in-transit">Cash In Transit</Link>
                    <Link href="/services/event-security">Event Security</Link>
                    <Link href="/services/cctv-surveillance">CCTV & Surveillance</Link>
                  </div>
                )}
              </div>

              {/* Mobile Why Us */}
              <div>
                <button
                  onClick={() => toggleDropdown("whyus")}
                  className="flex items-center justify-between w-full"
                >
                  Why Us <ChevronDown size={18} />
                </button>
                {dropdown === "whyus" && (
                  <div className="ml-4 mt-2 flex flex-col text-sm space-y-2">
                    <Link href="/about">About Us</Link>
                    <Link href="/certifications">Certifications</Link>
                    <Link href="/testimonials">Testimonials</Link>
                    <Link href="/coverage">Coverage</Link>
                  </div>
                )}
              </div>

              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
