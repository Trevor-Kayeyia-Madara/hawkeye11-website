"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Securing Today. Safeguarding Tomorrow.</h1>
          <p className="mt-4 text-lg text-slate-300">Licensed private security firm since 2013. Professional. Reliable. Nationwide.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="px-6 py-3 rounded bg-yellow-400 text-black font-semibold">Request Security Services</Link>
            <Link href="/services" className="px-6 py-3 rounded border border-yellow-400 text-yellow-400">Our Services</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-black flex items-center justify-center">
            <div className="text-sm text-slate-400">[Hero image placeholder — guard, K9, vehicle]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
