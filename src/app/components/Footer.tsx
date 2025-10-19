import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-heading text-gold mb-2">HAWKEYE 11</h2>
          <p className="text-sm text-gray-300 mb-4">
            “Securing Today. Safeguarding Tomorrow.”
          </p>
          <p className="text-sm text-gray-400">
            Licensed by PSRA • Member of PROSAK • Certified by KCAA
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/careers" className="hover:text-gold">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">Jeupe House, Utawala, Embakasi, Nairobi</p>
          <p className="text-sm mt-2">📞 <a href="tel:+254765869184" className="hover:text-gold">+254 765 869 184</a></p>
          <p className="text-sm">✉️ <a href="mailto:info@hawkeye11companylimited.com" className="hover:text-gold">info@hawkeye11companylimited.com</a></p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.tiktok.com/@hawkeye.11.company" target="_blank" rel="noopener noreferrer" className="hover:text-gold"><Music size={20} /></a>
            <a href="https://www.instagram.com/11.hawkeye/" target="_blank" rel="noopener noreferrer" className="hover:text-gold"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/martin-musa-21545a1a6/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold"><Linkedin size={20} /></a>
            <a href="https://wa.me/254765869184" target="_blank" rel="noopener noreferrer" className="hover:text-gold"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Hawkeye 11 Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
