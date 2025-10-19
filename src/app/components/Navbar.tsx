"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
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
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:underline underline-offset-4 transition-all">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center hover:underline underline-offset-4">
              About ▾
            </button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-48 border border-gray-100">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Company Overview
                </Link>
                <Link
                  href="/about#certifications"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Certifications
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center hover:underline underline-offset-4">
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-56 border border-gray-100">
                <Link href="/services/guarding" className="block px-4 py-2 hover:bg-gray-50">Manned Guarding</Link>
                <Link href="/services/k9" className="block px-4 py-2 hover:bg-gray-50">K9 Dog Unit</Link>
                <Link href="/services/alarm-cctv" className="block px-4 py-2 hover:bg-gray-50">Alarm & CCTV</Link>
                <Link href="/services/vip" className="block px-4 py-2 hover:bg-gray-50">VIP Escort</Link>
                <Link href="/services/consultancy" className="block px-4 py-2 hover:bg-gray-50">Security Consultancy</Link>
                <Link href="/services/cit" className="block px-4 py-2 hover:bg-gray-50">Cash In Transit (CIT)</Link>
              </div>
            )}
          </div>

          <Link href="/careers" className="hover:underline underline-offset-4">
            Careers
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254765869184"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition"
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
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 px-6 py-4 space-y-3 text-sm font-medium">
          <Link href="/" className="block hover:underline">Home</Link>
          <details>
            <summary className="cursor-pointer hover:underline">About</summary>
            <div className="pl-4 space-y-1">
              <Link href="/about" className="block hover:underline">Company Overview</Link>
              <Link href="/about#certifications" className="block hover:underline">Certifications</Link>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer hover:underline">Services</summary>
            <div className="pl-4 space-y-1">
              <Link href="/services/guarding" className="block hover:underline">Manned Guarding</Link>
              <Link href="/services/k9" className="block hover:underline">K9 Dog Unit</Link>
              <Link href="/services/alarm-cctv" className="block hover:underline">Alarm & CCTV</Link>
              <Link href="/services/vip" className="block hover:underline">VIP Escort</Link>
              <Link href="/services/consultancy" className="block hover:underline">Security Consultancy</Link>
              <Link href="/services/cit" className="block hover:underline">Cash In Transit (CIT)</Link>
            </div>
          </details>
          <Link href="/careers" className="block hover:underline">Careers</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
          <a
            href="https://wa.me/254765869184"
            className="inline-block bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
