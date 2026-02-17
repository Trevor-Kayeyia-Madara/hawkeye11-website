import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 transition-transform hover:scale-105"
        >
          <img
            src="/logo.png"
            alt="Hawkeye 11 Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-wide">
            HAWKEYE 11
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">

          <Link
            to="/"
            className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300"
            >
              About ▾
            </button>

            {aboutOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 border border-gray-100">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm hover:bg-black hover:text-amber-400 transition-all duration-300"
                >
                  Company Overview
                </Link>
                <Link
                  to="/about#certifications"
                  className="block px-4 py-2 text-sm hover:bg-black hover:text-amber-400 transition-all duration-300"
                >
                  Certifications
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/services"
            className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300"
          >
            Services
          </Link>

          <Link
            to="/careers"
            className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300"
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="px-3 py-2 rounded-md hover:bg-black hover:text-amber-400 transition-all duration-300"
          >
            Contact
          </Link>

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
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-3 text-sm font-medium">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all"
          >
            Services
          </Link>

          <Link
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all"
          >
            Careers
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-black hover:text-amber-400 rounded-md px-3 py-2 transition-all"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/254765869184"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300 w-full text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
