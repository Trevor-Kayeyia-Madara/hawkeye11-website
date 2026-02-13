"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

export default function MannedGuardingPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/services/guarding.jpg')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Manned Guarding
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Professional, disciplined, and reliable security personnel protecting what matters most.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <SectionHeader title="Overview" />
        <motion.div
          className="mt-10 max-w-4xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6">
            Our <strong>Manned Guarding Services</strong> are designed to offer unmatched protection for
            residential, corporate, industrial, and government premises. Every guard in our team is
            trained, vetted, and certified under the <strong>Private Security Regulatory Authority (PSRA)</strong>,
            ensuring professionalism, vigilance, and reliability.
          </p>
          <p>
            We pride ourselves on delivering customer-focused solutions through trained personnel,
            advanced communication systems, and continuous supervision. Our guards are disciplined,
            alert, and responsive to both routine and emergency scenarios.
          </p>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <SectionHeader title="Key Features" />
        <motion.ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-gray-700"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            "24/7 manned posts for corporate and residential premises",
            "PSRA-certified, trained, and uniformed security officers",
            "Rapid response backup and supervision teams",
            "Use of advanced communication and reporting tools",
            "Regular rotation and refresher training programs",
            "Detailed reporting and incident management system",
          ].map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 bg-white rounded-lg shadow-sm hover:shadow-md border-l-4 border-gold transition-all duration-300"
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-black text-white">
        <SectionHeader title="Why Choose Hawkeye 11" textColor="text-white" />
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold text-xl font-semibold mb-3">Expert Supervision</h3>
            <p className="text-gray-300 leading-relaxed">
              Our supervisors conduct regular spot checks and performance audits, ensuring that all
              deployed guards adhere to operational standards and client expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold text-xl font-semibold mb-3">Customized Deployment</h3>
            <p className="text-gray-300 leading-relaxed">
              We tailor guard assignments to each client’s needs — from corporate offices and banks
              to gated communities and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-gold text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-heading font-bold"
        >
          Ready to Secure Your Property?
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
