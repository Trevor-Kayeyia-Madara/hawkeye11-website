"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Users,
  Cpu,
} from "lucide-react";
import { Button } from "../components/Button";

export default function WhyUsPage() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden font-sans">
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
            Why Choose Hawkeye 11
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-3xl mx-auto font-sans">
            Experience, discipline, and integrity — the foundations of every
            service we deliver. Discover why leading institutions trust Hawkeye 11
            for their security.
          </p>
        </motion.div>
      </section>

      {/* CORE ADVANTAGES */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-16 text-center text-[#D4AF37]">
          Our Competitive Edge
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Award,
              title: "Proven Track Record",
              desc: "Over 10 years of consistent excellence in private security operations across Kenya.",
            },
            {
              icon: MapPin,
              title: "Nationwide Presence",
              desc: "Operational coverage in major towns and counties — ensuring response wherever you are.",
            },
            {
              icon: CheckCircle2,
              title: "Certified & Compliant",
              desc: "Licensed by PSRA, proud member of PROSAK, and fully insured for client confidence.",
            },
            {
              icon: ShieldCheck,
              title: "Highly Trained Personnel",
              desc: "Professionally vetted, disciplined, and continuously trained security teams.",
            },
            {
              icon: Cpu,
              title: "Technology Integration",
              desc: "Use of GPS patrol systems, real-time reporting, and modern surveillance analytics.",
            },
            {
              icon: Users,
              title: "Client-Centric Approach",
              desc: "Every assignment is tailored to meet unique operational and safety requirements.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111111] border border-[#1A1A1A] p-8 rounded-3xl shadow-md hover:border-[#D4AF37]/60 transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-5" />
              <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                {title}
              </h3>
              <p className="text-white/70 font-sans leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CREDENTIALS & INSURANCE */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#111111] px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-[#D4AF37]">
          Our Compliance & Credentials
        </h2>

        <div className="max-w-5xl mx-auto text-center space-y-6 text-lg text-white/80 font-sans leading-relaxed">
          <p>
            Hawkeye 11 Company Limited operates under
            <span className="text-[#D4AF37] font-semibold"> Private Security Regulation Authority (PSRA)</span>.
          </p>
          <p>
            We are proud members of the{" "}
            <span className="text-[#D4AF37] font-semibold">Protective and Safety Association of Kenya (PROSAK)</span>,
            ensuring our practices align with the national standards of professionalism and compliance.
          </p>
          <p>
            All our operations are{" "}
            <span className="font-semibold text-white">fully insured through AAR Kenya</span>,
            guaranteeing both personnel and client protection in every engagement.
          </p>
        </div>
      </motion.section>

      {/* STATS / EXPERIENCE */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-16 text-[#D4AF37]">
          Our Experience at a Glance
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { number: "10+", label: "Years of Proven Service" },
            { number: "150+", label: "Corporate & Residential Clients" },
            { number: "20+", label: "Counties Covered Nationwide" },
          ].map(({ number, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="border border-[#1A1A1A] rounded-3xl py-12 hover:border-[#D4AF37] transition"
            >
              <h3 className="text-5xl font-serif font-bold text-[#D4AF37] mb-3">
                {number}
              </h3>
              <p className="text-white/80 font-sans text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#111111] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">
          Partner with a Name You Can Trust
        </h2>
        <p className="text-lg mb-10 text-white/80 font-sans">
          Experience the assurance of professional protection backed by integrity,
          compliance, and innovation.
        </p>
        <Button variant="solid" href="/contact">
          Contact Our Team
        </Button>
      </motion.section>
    </main>
  );
}
