"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Dog,
  Camera,
  UserCheck,
  Building2,
  Briefcase,
  Award,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./components/Button";

export default function HomePage() {
  return (
    <main className="overflow-hidden font-sans bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative bg-black text-white py-32 text-center">
        <div className="absolute inset-0 bg-[url('/security-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center"
        >
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Hawkeye 11 Company Limited Logo"
            width={160}
            height={160}
            className="mb-6 brightness-110 drop-shadow-lg"
          />

          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#D4AF37] mb-6 leading-tight">
            Securing Today.
            <br />
            Safeguarding Tomorrow.
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Trusted security professionals delivering peace of mind across Kenya
            since 2013.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="solid" href="/services">
              Our Services
            </Button>
            <Button variant="outline" href="/contact">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SUMMARY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">
          About Hawkeye 11
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800">
          Founded in 2013, <span className="font-semibold">Hawkeye 11 Company Limited</span> is a
          licensed and accredited private security firm under the{" "}
          <span className="font-semibold">
            Private Security Regulation Authority (PSRA)
          </span>, License No. PSRA/HCL/19/82. As proud members of{" "}
          <span className="font-semibold">
            PROSAK (Protective & Safety Association of Kenya)
          </span>, we provide disciplined, reliable, and innovative security
          solutions nationwide.
        </p>
        <div className="mt-10">
          <Button variant="dark" href="/about">
            Learn More
          </Button>
        </div>
      </motion.section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-black text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-center text-[#D4AF37] mb-14"
        >
          Our Core Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {[
            {
              icon: ShieldCheck,
              title: "Manned Guarding",
              desc: "Trained and vetted guards delivering 24/7 professional protection.",
            },
            {
              icon: Dog,
              title: "K-9 Dog Unit",
              desc: "Expert dog handlers and trained canines for patrol and event security.",
            },
            {
              icon: Camera,
              title: "CCTV & Alarm Systems",
              desc: "Installation, monitoring, and rapid alarm response with modern tech.",
            },
            {
              icon: UserCheck,
              title: "VIP Escort & Close Protection",
              desc: "Professional escort and bodyguard services for individuals and teams.",
            },
            {
              icon: Building2,
              title: "Facility Management",
              desc: "Access control and property protection for corporate and private sites.",
            },
            {
              icon: Briefcase,
              title: "Security Consultancy",
              desc: "Risk assessments, training, and security audits tailored to your needs.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              className="bg-white text-black p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-5" />
              <h3 className="text-xl font-bold font-serif mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button variant="solid" href="/services">
            View All Services
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white text-center px-6 text-black"
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#D4AF37]">
          Why Choose Hawkeye 11
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: Award,
              title: "10+ Years Experience",
              desc: "Over a decade of proven professionalism in Kenya’s security industry.",
            },
            {
              icon: MapPin,
              title: "Nationwide Coverage",
              desc: "Operations across Nairobi, Mombasa, Nakuru, Kisii, and more regions.",
            },
            {
              icon: CheckCircle2,
              title: "Licensed & Certified",
              desc: "Fully registered under PSRA and proud PROSAK members.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="border border-black/10 rounded-3xl p-8 hover:border-[#D4AF37] transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold font-serif mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-black text-center text-white px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">
          Ready to Secure What Matters?
        </h2>
        <p className="text-lg mb-10 text-white/90">
          Get in touch with our experts today for tailored security solutions.
        </p>
        <Button variant="solid" href="/contact">
          Get a Quote
        </Button>
      </motion.section>
    </main>
  );
}
