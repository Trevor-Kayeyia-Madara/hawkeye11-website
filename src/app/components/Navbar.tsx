"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; // your toggle component

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    {
      label: "Services",
      dropdown: [
        { label: "Manned Guarding", href: "/services/manned-guarding" },
        { label: "Cash in Transit", href: "/services/cash-in-transit" },
        { label: "Event Security", href: "/services/event-security" },
      ],
    },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-light dark:bg-base-dark border-b border-border-light dark:border-border-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Hawkeye 11" width={48} height={48} />
          <span className="font-serif text-xl font-bold text-text-light dark:text-text-dark">
            Hawkeye 11
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 font-medium text-text-light dark:text-text-dark hover:text-gold transition">
                  {item.label} <ChevronDown size={16} />
                </button>
                <div className="absolute hidden group-hover:block top-full left-0 bg-white dark:bg-black shadow-lg rounded-md mt-2">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d.label}
                      href={d.href}
                      className="block px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-gold hover:text-black dark:hover:text-black transition"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-text-light dark:text-text-dark hover:text-gold transition"
              >
                {item.label}
              </Link>
            )
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-light dark:text-text-dark"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-base-light dark:bg-base-dark border-t border-border-light dark:border-border-dark"
          >
            <div className="flex flex-col items-start px-6 py-4 space-y-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <details key={item.label} className="w-full">
                    <summary className="flex justify-between items-center cursor-pointer font-medium text-text-light dark:text-text-dark hover:text-gold transition">
                      {item.label}
                    </summary>
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          href={d.href}
                          className="text-sm text-text-mutedLight dark:text-text-mutedDark hover:text-gold transition"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-medium text-text-light dark:text-text-dark hover:text-gold transition"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
