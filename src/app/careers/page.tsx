"use client";

import { motion } from "framer-motion";
import { Briefcase, Newspaper } from "lucide-react";
import { Button } from "../components/Button";

export default function CareersPage() {
  return (
    <main className="bg-bg text-fg font-sans transition-colors duration-500">
      {/* HERO */}
      <section className="relative py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-accent leading-tight">
            Careers & News
          </h1>
          <p className="text-lg md:text-xl text-fg/80 mt-6 max-w-3xl mx-auto">
            Stay informed about new opportunities and company updates at
            Hawkeye 11 Company Limited.
          </p>
        </motion.div>
      </section>

      {/* CAREERS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 text-center bg-bg-alt"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <Briefcase className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold text-accent">
            Join Our Team
          </h2>
          <p className="text-lg text-fg/80 max-w-3xl mx-auto">
            We are always looking for disciplined, dedicated, and professional
            individuals to join our security and administrative teams.
          </p>
          <p className="text-fg/70 max-w-2xl mx-auto">
            To apply, send your CV and a brief cover letter to{" "}
            <span className="text-accent">careers@hawkeye11.co.ke</span>.  
            Please specify your area of interest or previous security experience.
          </p>
          <Button variant="solid" href="mailto:careers@hawkeye11.co.ke">
            Apply Now
          </Button>
        </div>
      </motion.section>

      {/* NEWS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 text-center bg-bg"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <Newspaper className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold text-accent">
            Latest Updates
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {[
              {
                title: "Hawkeye 11 Expands K-9 Unit",
                desc: "Our elite canine unit now operates in four new counties, reinforcing rapid response coverage nationwide.",
                date: "September 2025",
              },
              {
                title: "Community Partnership Program Launched",
                desc: "We’ve initiated community awareness campaigns focusing on security education and public safety.",
                date: "August 2025",
              },
            ].map(({ title, desc, date }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                className="bg-bg-alt border border-border rounded-3xl p-8 shadow-md transition"
              >
                <h3 className="text-2xl font-serif font-semibold text-fg mb-2">
                  {title}
                </h3>
                <p className="text-sm text-fg/60 mb-3">{date}</p>
                <p className="text-fg/80">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
