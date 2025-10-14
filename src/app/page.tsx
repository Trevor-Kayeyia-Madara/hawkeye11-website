/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const M: any = motion;

const services = [
  { title: "Manned Guarding", desc: "Visible, trained officers to deter and respond." },
  { title: "K-9 Patrol Units", desc: "Canine teams for detection and rapid interception." },
  { title: "CCTV Monitoring", desc: "Live monitoring with incident verification and escalation." },
  { title: "Perimeter Systems", desc: "Alarms and electric fences for proactive perimeter defence." },
];

const testimonials = [
  { name: "M. Odhiambo", role: "Facilities Manager", quote: "Professional, reliable, and always on point." },
  { name: "A. Njoroge", role: "CEO", quote: "Their rapid response made all the difference." },
  { name: "L. Kamau", role: "Operations Lead", quote: "Smart tech plus disciplined guards increased safety." },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
      </div>
      <div className="flex-1 ml-6 h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" />
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <M.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="p-6 rounded-lg border-2 border-yellow-400 bg-white dark:bg-gray-800 text-slate-900 dark:text-white"
    >
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
  </M.div>
  );
}

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070707] text-slate-900 dark:text-white">
      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
  <M.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center"
        >
          <div className="w-full">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Securing Today. Safeguarding Tomorrow.
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
                Professional security solutions that blend trained people and modern technology to keep you safe.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#services"
                  className="px-6 py-3 rounded-md font-semibold bg-yellow-400 text-black shadow-md hover:shadow-xl transition-shadow duration-200"
                >
                  Request Security Services
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-md font-semibold border-2 border-transparent hover:border-yellow-400 transition-colors duration-200"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
  </M.section>

        {/* About Summary */}
  <M.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">About Hawkeye 11</h3>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                We provide professional, reliable security services across commercial and residential sectors —
                blending local knowledge with international standards.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Trained, vetted, and uniformed officers</li>
                <li>• Integrated alarm and monitoring solutions</li>
                <li>• Rapid local response teams</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                <span className="text-sm text-slate-500 dark:text-slate-300">[Image / Illustration Placeholder]</span>
              </div>
            </div>
          </div>
  </M.section>

        {/* Featured Services */}
  <M.section id="services" className="mt-12">
          <SectionHeader title="Featured Services" subtitle="Disciplined, reassuring solutions for every security need." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.desc} />
            ))}
          </div>
  </M.section>

        {/* Why Choose Us */}
  <M.section className="mt-12">
          <SectionHeader title="Why Choose Us" subtitle="What sets us apart" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Vetted Personnel", desc: "Strict recruitment & continuous training." },
              { title: "Technology First", desc: "Integrated CCTV and real-time monitoring." },
              { title: "Rapid Response", desc: "Local teams positioned for fast deployment." },
            ].map((c) => (
              <M.div
                key={c.title}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg bg-white dark:bg-[#0f0f0f] border hover:border-yellow-400 border-transparent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">★</div>
                  <div>
                    <h4 className="font-semibold">{c.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  </div>
                </div>
              </M.div>
            ))}
          </div>
        </M.section>

        {/* Testimonials (carousel) */}
  <M.section className="mt-12">
          <SectionHeader title="Testimonials" subtitle="Hear from our clients" />
          <div className="mt-6 relative">
            <div className="overflow-hidden rounded-lg bg-white dark:bg-[#0f0f0f] p-6">
              <AnimatePresence mode="wait">
                <M.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-lg italic text-slate-800 dark:text-slate-200">“{testimonials[index].quote}”</p>
                  <div className="mt-4 text-sm text-muted-foreground">— {testimonials[index].name}, {testimonials[index].role}</div>
    </M.div>
              </AnimatePresence>
            </div>
          </div>
  </M.section>

        {/* CTA Footer */}
  <M.section className="mt-14 rounded-lg overflow-hidden">
          <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-black">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to protect what matters most?</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Request a tailored quote and security assessment today.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-semibold bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-shadow"
              >
                Request Quote
              </a>
            </div>
          </div>
  </M.section>
      </main>
    </div>
  );
}
