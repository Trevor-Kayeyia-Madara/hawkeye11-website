"use client";

import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import Service from "./components/Service";
import Link from "next/link";

const featured = [
  { title: "Manned Guarding", desc: "Visible, trained officers to deter and respond." },
  { title: "K-9 Patrol Units", desc: "Canine teams for detection and rapid interception." },
  { title: "CCTV Monitoring", desc: "Live monitoring with incident verification and escalation." },
  { title: "Perimeter Systems", desc: "Alarms and electric fences for proactive perimeter defence." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <HeroSection />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeader title="Featured Services" subtitle="Trusted security solutions" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((s) => (
            <Service key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-12 bg-yellow-400/5 dark:bg-yellow-400/10 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Need reliable protection?</h3>
            <p className="text-sm text-muted-foreground">Contact us for a tailored security assessment and quote.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded bg-yellow-400 text-black font-semibold">Request Quote</Link>
            <Link href="/services" className="px-5 py-3 rounded border border-yellow-400 text-yellow-400">Our Services</Link>
          </div>
        </div>
      </main>
    </div>
  );
}