"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setServicesOpen(false); // close other dropdown
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAboutOpen(false); // close other dropdown
  };

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Hawkeye 11 Logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="text-xl font-heading font-bold tracking-wide">
            HAWKEYE 11
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {[{ name: "Home", href: "/" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" }].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 transition-all duration-300 hover:bg-black hover:text-amber-400 rounded-md"
            >
              {item.name}
            </Link>
          ))}

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={toggleAbout}
              className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300 flex items-center"
            >
              About ▾
            </button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 border border-gray-100 animate-fadeIn">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-black hover:text-amber-400 transition-all duration-300"
                >
                  Company Overview
                </Link>
                <Link
                  href="/about#certifications"
                  className="block px-4 py-2 text-sm hover:bg-black hover:text-amber-400 transition-all duration-300"
                >
                  Certifications
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300 flex items-center"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-56 border border-gray-100 animate-fadeIn">
                {[
                  { name: "Manned Guarding", href: "/services/guarding" },
                  { name: "K9 Dog Unit", href: "/services/k9" },
                  { name: "Alarm & CCTV", href: "/services/alarm-cctv" },
                  { name: "VIP Escort", href: "/services/vip" },
                  { name: "Security Consultancy", href: "/services/consultancy" },
                  { name: "Cash In Transit (CIT)", href: "/services/cit" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-black hover:text-amber-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254765869184"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-3 text-sm font-medium animate-fadeIn">
          <Link href="/" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all">Home</Link>
          <details>
            <summary className="cursor-pointer hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all">About</summary>
            <div className="pl-4 space-y-1 mt-2">
              <Link href="/about" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Company Overview</Link>
              <Link href="/about#certifications" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Certifications</Link>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all">Services</summary>
            <div className="pl-4 space-y-1 mt-2">
              <Link href="/services/guarding" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Manned Guarding</Link>
              <Link href="/services/k9" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">K9 Dog Unit</Link>
              <Link href="/services/alarm-cctv" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Alarm & CCTV</Link>
              <Link href="/services/vip" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">VIP Escort</Link>
              <Link href="/services/consultancy" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Security Consultancy</Link>
              <Link href="/services/cit" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-1">Cash In Transit (CIT)</Link>
            </div>
          </details>
          <Link href="/careers" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2">Careers</Link>
          <Link href="/contact" className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2">Contact</Link>
          <a
            href="https://wa.me/254765869184"
            className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300 w-full text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
