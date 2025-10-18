"use client";

import { motion } from "framer-motion";
import { Shield, Briefcase, Users, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./components/Button";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="bg-light dark:bg-dark text-black dark:text-white transition-colors duration-700 overflow-hidden relative">
      {/* 💫 Hero Section */}
      <Hero />
      {/* 🛡️ About Summary */}
      <section className="py-28 bg-gray-100 dark:bg-[#111111] text-center px-6">
        <h2 className="text-4xl font-serif font-bold mb-8 text-[#D4AF37]">About Us</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-white/80 leading-relaxed">
          Hawkeye 11 is a PSRA-certified security provider committed to protecting lives, assets, and reputation.
          We leverage technology, rigorous training, and deep operational experience to deliver unmatched reliability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {[
            { label: "Years of Service", value: "10+" },
            { label: "Trained Guards", value: "300+" },
            { label: "Clients Served", value: "100+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</h3>
              <p className="text-gray-700 dark:text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ Services */}
      <section className="py-28 text-center px-6">
        <h2 className="text-4xl font-serif font-bold mb-8 text-[#D4AF37]">Our Services</h2>
        <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-700 dark:text-white/80">
          Comprehensive solutions for residential, corporate, and government security — built on trust and technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Shield, title: "Manned Guarding", desc: "Highly trained personnel for homes, offices, and critical sites." },
            { icon: Briefcase, title: "Cash In Transit", desc: "Secure, insured movement of valuables with GPS-tracked fleets." },
            { icon: Users, title: "Event Security", desc: "Crowd management and VIP protection for safe, seamless events." },
            { icon: MapPin, title: "Patrol & Response", desc: "Rapid response units for 24/7 protection across Kenya." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 border border-[#D4AF37]/40 rounded-2xl hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300"
            >
              <s.icon className="w-12 h-12 mx-auto text-[#D4AF37] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700 dark:text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/services">View All Services</Button>
        </div>
      </section>

      {/* 🏅 Why Choose Us */}
      <section className="py-28 bg-gray-100 dark:bg-[#111111] text-center px-6">
        <h2 className="text-4xl font-serif font-bold mb-8 text-[#D4AF37]">Why Choose Hawkeye 11</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Trusted & Certified", text: "Fully licensed by PSRA, compliant with all security regulations." },
            { title: "Nationwide Presence", text: "From Nairobi to Mombasa, we safeguard clients across Kenya." },
            { title: "Technology Driven", text: "Real-time tracking, communication, and analytics for efficiency." },
          ].map((reason, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">{reason.title}</h3>
              <p className="text-gray-700 dark:text-white/80">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/80 text-black text-center px-6">
        <h2 className="text-4xl font-serif font-bold mb-6">Ready to Secure with the Best?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Let’s discuss how Hawkeye 11 can protect what matters most to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="dark">Get a Quote</Button>
          <a
            href="https://wa.me/254765869184"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] transition-all"
          >
            <Phone className="w-5 h-5" /> WhatsApp Chat
          </a>
        </div>
      </section>

      {/* 🌍 Footer */}
      <footer className="py-10 bg-dark text-center text-white border-t border-[#D4AF37]/30">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]"><Facebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]"><Instagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]"><Linkedin /></a>
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Hawkeye 11 Security. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
