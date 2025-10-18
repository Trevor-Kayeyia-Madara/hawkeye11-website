"use client";
import { motion } from "framer-motion";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/security-bg.jpg')", // replace with your hero image
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-[#D4AF37] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          Securing Today.<br />Safeguarding Tomorrow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed"
        >
          Over a decade of elite private security services blending precision,
          integrity, and innovation across Kenya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/services" variant="gold">
            Our Services
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
