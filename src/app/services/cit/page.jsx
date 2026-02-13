"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

export default function CITPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/services/cit.jpg')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cash In Transit (CIT)
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Secure, insured, and professional movement of cash and valuables.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Overview" />
        <motion.div
          className="mt-10 max-w-4xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6">
            Our <strong>Cash In Transit (CIT)</strong> service ensures the safe collection,
            movement, and delivery of cash, documents, and other valuables. We utilize armored
            vehicles, armed escorts, and trained CIT personnel for maximum security.
          </p>
          <p>
            We serve banks, retail chains, Saccos, and high-value clients — adhering to strict
            operational procedures and coordination protocols for risk-free transfers.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Key Features" />
        <motion.ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-gray-700"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            "Armored and GPS-tracked CIT vehicles",
            "Armed, trained, and licensed escorts",
            "Cash and valuables insurance coverage",
            "Real-time communication with HQ",
            "Secure counting and handover protocols",
            "K9 support and route analysis for high-risk areas",
          ].map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 bg-white rounded-lg shadow-sm hover:shadow-md border-l-4 border-gold transition-all duration-300"
            >
              {f}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gold text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-heading font-bold"
        >
          Partner with Trusted CIT Experts
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button text="Request a Quote" href="/contact" variant="black" size="md" />
          <Button
            text="Chat on WhatsApp"
            href="https://wa.me/254765869184"
            newTab
            variant="white"
            size="md"
          />
        </motion.div>
      </section>
    </main>
  );
}
