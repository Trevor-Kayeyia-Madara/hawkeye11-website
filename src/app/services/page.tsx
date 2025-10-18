"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Dog,
  Camera,
  Bell,
  Building2,
  UserCheck,
  Search,
  Briefcase,
  Users,
} from "lucide-react";
import { Button } from "../components/Button";

export default function ServicesPage() {
  return (
    <main className="bg-[#0B0B0B] text-white font-sans overflow-hidden">
      {/* HERO / INTRO */}
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
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 max-w-3xl mx-auto font-sans">
            Comprehensive, customized, and technology-driven security solutions —
            trusted by businesses and individuals across Kenya.
          </p>
        </motion.div>
      </section>

      {/* SERVICE GRID */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: ShieldCheck,
              title: "Manned Guarding Services",
              desc: "Vetted, disciplined, and trained security guards providing 24/7 protection for corporate, residential, and commercial premises.",
            },
            {
              icon: Dog,
              title: "K-9 Dog Unit",
              desc: "Professional dog handlers with trained canines for property patrol, crowd control, and special events.",
            },
            {
              icon: Camera,
              title: "CCTV Surveillance Systems",
              desc: "Design, installation, and maintenance of CCTV systems with mobile and desktop integration for remote monitoring.",
            },
            {
              icon: ShieldCheck,
              title: "Cash In Transit (CIT)",
              desc: "Secure, insured, and GPS-tracked transportation of valuable assets and cash between premises, financial institutions, and ATMs.",
                        },
            {
              icon: Bell,
              title: "Alarm Systems & Rapid Response",
              desc: "24-hour alarm monitoring, technical maintenance, and fast response units for emergency alerts.",
            },
            {
              icon: Building2,
              title: "Facility Management",
              desc: "Comprehensive site security solutions including access control, maintenance, and safety supervision.",
            },
            {
              icon: UserCheck,
              title: "Close Protection & VIP Escort",
              desc: "Discreet, professional, and highly trained security personnel for executive and personal protection.",
            },
            {
              icon: Search,
              title: "Investigations & Security Surveys",
              desc: "In-depth risk and vulnerability assessments to enhance your security posture and incident prevention.",
            },
            {
              icon: Briefcase,
              title: "Security Consultancy",
              desc: "Expert advisory, training, and compliance assessments for both public and private sector clients.",
            },
            {
              icon: Users,
              title: "Event Security & Crowd Control",
              desc: "Professional event protection with surveillance, crowd management, and quick-response protocols.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111111] border border-[#1A1A1A] p-8 rounded-3xl shadow-md hover:shadow-lg hover:border-[#D4AF37]/60 transition"
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

      {/* ADDITIONAL SECTION: TECH + TEAM */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#111111] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#D4AF37]">
          Strength in People and Technology
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80 font-sans leading-relaxed">
          <p>
            Our security operations are driven by a powerful combination of{" "}
            <span className="text-[#D4AF37] font-semibold">skilled personnel</span> and{" "}
            <span className="text-[#D4AF37] font-semibold">advanced technology</span>.
            From modern alarm systems to GPS-enabled patrols and AI-based CCTV analytics,
            Hawkeye 11 ensures your protection is both proactive and precise.
          </p>
          <p>
            Every guard, handler, and technician undergoes thorough vetting, continuous
            training, and supervision to maintain the highest standards of discipline and service.
          </p>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0B0B0B] text-center px-6"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">
          Need Tailored Security Solutions?
        </h2>
        <p className="text-lg mb-10 text-white/80 font-sans">
          Whether you need 24/7 guarding, CCTV installations, or executive protection,
          Hawkeye 11 is ready to secure what matters most.
        </p>
        <Button variant="solid" href="/contact">
          Get in Touch
        </Button>
      </motion.section>
    </main>
  );
}
