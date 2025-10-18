"use client";

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
    <main className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-40 text-center">
        <div className="absolute inset-0 bg-[url('/security-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[#0B0B0B]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#D4AF37] leading-tight tracking-tight">
            Securing Today. <br />
            Safeguarding Tomorrow.
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-2xl mx-auto font-sans">
            Over a decade of elite private security services, blending precision,
            integrity, and innovation across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 text-center px-6 bg-[#0B0B0B]"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37] tracking-tight">
          About Hawkeye 11
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80 font-sans">
          Established in 2013, <span className="font-semibold text-white">Hawkeye 11 Company Limited</span> is a licensed private security firm operating under{" "}
          <span className="font-semibold text-white">PSRA License No. PSRA/HCL/19/82</span>.
          As proud members of{" "}
          <span className="font-semibold text-white">PROSAK</span>, we deliver
          innovative, disciplined, and technology-driven security solutions across Kenya.
        </p>
        <div className="mt-10">
          <Button variant="solid" href="/about">
            Learn More
          </Button>
        </div>
      </motion.section>

      {/* WHAT WE DO / BENCHMARK SECTION */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-28 bg-[#111111] text-center px-6"
>
  <h2 className="text-4xl font-serif font-bold mb-8 text-[#D4AF37]">
    What We Do
  </h2>
  <p className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed font-sans mb-12">
    Hawkeye 11 Company Limited delivers professional security solutions that
    integrate human expertise with advanced technology. We provide a complete
    range of protection—from manned guarding to modern surveillance, ensuring
    safety, reliability, and client peace of mind.
  </p>
  <h3 className="text-3xl font-serif font-semibold text-[#D4AF37] mb-6">
    Setting the Benchmark
  </h3>
  <p className="max-w-4xl mx-auto text-lg text-white/70 leading-relaxed font-sans">
    We continuously raise industry standards by investing in personnel
    training, leveraging smart technology, and maintaining full PSRA
    compliance. Our operational discipline and customer-first approach
    have positioned Hawkeye 11 as a benchmark in Kenya’s private security
    sector.
  </p>
</motion.section>


      {/* SERVICES PREVIEW */}
      <section className="py-28 bg-[#111111] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-center text-[#D4AF37] mb-16 tracking-tight"
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
              desc: "Professional guards trained for residential, commercial, and corporate environments.",
            },
            {
              icon: Dog,
              title: "K-9 Dog Unit",
              desc: "Elite trained dogs and handlers for patrol, crowd control, and special events.",
            },
            {
              icon: Camera,
              title: "CCTV & Alarm Systems",
              desc: "Smart surveillance solutions with 24/7 response and system maintenance.",
            },
            {
              icon: UserCheck,
              title: "VIP Escort & Protection",
              desc: "Discreet and reliable protection for executives and high-profile individuals.",
            },
            {
              icon: Building2,
              title: "Facility Management",
              desc: "Access control, asset protection, and operational support for secure facilities.",
            },
            {
              icon: Briefcase,
              title: "Security Consultancy",
              desc: "Comprehensive risk analysis, audits, and tailored security training.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              className="bg-[#0B0B0B] border border-[#1A1A1A] p-8 rounded-3xl shadow-md hover:shadow-lg transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-5" />
              <h3 className="text-xl font-serif font-semibold text-white mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-white/70 font-sans">{desc}</p>
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
        className="py-28 bg-[#0B0B0B] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-14 text-[#D4AF37] tracking-tight">
          Why Choose Hawkeye 11
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              desc: "Over 10 years of excellence in delivering reliable and compliant security solutions.",
            },
            {
              icon: MapPin,
              title: "Nationwide Coverage",
              desc: "Operational presence across Kenya’s major towns and counties.",
            },
            {
              icon: CheckCircle2,
              title: "Certified & Insured",
              desc: "PSRA licensed, PROSAK member, and fully insured operations through AAR Kenya.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="border border-[#1A1A1A] rounded-3xl p-8 hover:border-[#D4AF37] transition"
            >
              <Icon className="w-12 h-12 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-xl font-serif font-semibold text-white mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-white/70 font-sans">{desc}</p>
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
        className="py-28 bg-[#111111] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37] tracking-tight">
          Ready to Secure What Matters?
        </h2>
        <p className="text-lg mb-10 text-white/80 font-sans">
          Connect with our experts today for bespoke protection solutions.
        </p>
        <Button variant="solid" href="/contact">
          Get a Quote
        </Button>
      </motion.section>
    </main>
  );
}
