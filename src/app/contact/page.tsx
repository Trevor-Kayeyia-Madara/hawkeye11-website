"use client";

import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/contact-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Let’s discuss how Hawkeye 11 can safeguard your people, assets, and operations.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Reach Us" />
        <div className="grid md:grid-cols-3 gap-10 mt-12 text-center md:text-left">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <Phone className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Call / WhatsApp</h3>
            <p className="text-gray-700">+254 765 869 184</p>
            <a
              href="https://wa.me/254765869184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gold hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <Mail className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-700">hawkeye11coltd@gmail.com</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold"
          >
            <MapPin className="mx-auto md:mx-0 text-gold mb-3" />
            <h3 className="font-semibold text-lg mb-2">Office Location</h3>
            <p className="text-gray-700">
              Nairobi, Kenya — Near Wilson Airport<br />
              (Head Office)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Send a Message" />
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="max-w-3xl mx-auto mt-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
          />
          <textarea
            rows={5}
            placeholder="Your Message..."
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-gold"
          ></textarea>

          <Button text="Send Message" variant="black" size="md" className="w-full md:w-auto" />
        </motion.form>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 md:px-16 bg-black text-white text-center">
        <SectionHeader title="Find Us" textColor="text-white" />
        <div className="mt-10 max-w-5xl mx-auto border-4 border-gold rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815813826807!2d36.97053067318379!3d-1.284439835620368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6d88a269ec31%3A0x7d90ea5716ce440a!2sHawkeye%2011%20Company%20Limited!5e0!3m2!1sen!2ske!4v1760888789410!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Socials */}
        <div className="mt-10 flex justify-center gap-6 text-gold">
          <Link href="https://wa.me/254765869184" target="_blank">
            <MessageCircle className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/11.hawkeye/" target="_blank">
            <Instagram className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/martin-musa-21545a1a6" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
          </Link>
        </div>
      </section>
    </main>
  );
}
