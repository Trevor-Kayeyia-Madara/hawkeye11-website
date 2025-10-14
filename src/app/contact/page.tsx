"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/Button";

export default function ContactPage() {
  return (
    <main className="bg-[#0B0B0B] text-white font-sans overflow-hidden">
      {/* HERO */}
      <section className="relative py-36 text-center">
        <div className="absolute inset-0 bg-[url('/security-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-[#0B0B0B]/85"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#D4AF37] leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-3xl mx-auto font-sans">
            Get in touch with Hawkeye 11 today — we’re ready to secure what matters most.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO + FORM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT COLUMN: INFO */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#D4AF37] mb-8">
              Reach Us Directly
            </h2>
            <ul className="space-y-6 text-white/80 text-lg font-sans">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
                <span>
                  <strong className="text-white">Head Office:</strong>  
                  Jeupe House Next to Capital Shopping Mall Utawala
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                <span>
                  <strong className="text-white">Call:</strong>  
                  +254 721 822 869 / +254 765 869 184
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
                <span>
                  <strong className="text-white">Email:</strong>  
                  info@hawkeye11companylimited.com or hawkeye11coltd@gmail.com
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <Button variant="solid" href="tel:+254700000000">
                Call Us Now
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <form
            className="bg-[#111111] p-10 rounded-3xl shadow-lg border border-[#1A1A1A] space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-4 text-center">
              Send Us a Message
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none transition"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none transition w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none transition w-full"
              required
            ></textarea>
            <div className="text-center">
              <Button variant="solid" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </motion.section>

      {/* MAP SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#111111] py-28 px-6 text-center"
      >
        <h2 className="text-4xl font-serif font-bold mb-10 text-[#D4AF37]">
          Find Us on the Map
        </h2>
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-[#1A1A1A] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158138268127!2d36.970530674183294!3d-1.284439835622467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6d88a269ec31%3A0x7d90ea5716ce440a!2sHawkeye%2011%20Company%20Limited!5e0!3m2!1sen!2ske!4v1760471070254!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
          ></iframe>
        </div>
      </motion.section>
    </main>
  );
}
