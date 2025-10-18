import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 🟡 Company Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-4">
            Hawkeye 11
          </h3>
          <p className="text-white/70 leading-relaxed">
            Licensed by PSRA and a proud member of PROSAK.  
            Delivering reliable, technology-driven private security services across Kenya.
          </p>
        </div>

        {/* 🧭 Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37]">About</Link></li>
            <li><Link href="/services" className="hover:text-[#D4AF37]">Services</Link></li>
            <li><Link href="/careers" className="hover:text-[#D4AF37]">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
          </ul>
        </div>

        {/* 💼 Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
            Services
          </h4>
          <ul className="space-y-2">
            <li>Manned Guarding</li>
            <li>Cash in Transit</li>
            <li>Event Security</li>
            <li>K9 & Patrol</li>
            <li>CCTV & Access Control</li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
            Contact
          </h4>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#D4AF37]" />
              Nairobi, Kenya
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#D4AF37]" />
              <a href="tel:+254765869184" className="hover:text-[#D4AF37]">
                +254 765 869 184
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#D4AF37]" />
              <a href="mailto:info@hawkeye11.co.ke" className="hover:text-[#D4AF37]">
                info@hawkeye11.co.ke
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-[#D4AF37]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-[#D4AF37]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Hawkeye 11 Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
