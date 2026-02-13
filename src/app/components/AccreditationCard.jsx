"use client";

import { motion } from "framer-motion";

export default function AccreditationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-sm border border-gold/30 p-6 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-500"
    >
      <p className="font-medium text-base text-center md:text-left">
        Accredited by{" "}
        <a
          href="https://prosak.or.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline hover:text-black transition-colors"
        >
          PROSAK
        </a>{" "}
        (Protective & Safety Association of Kenya) and{" "}
        <a
          href="https://kcaa.or.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline hover:text-black transition-colors"
        >
          KCAA
        </a>{" "}
        (Kenya Civil Aviation Authority)
      </p>
    </motion.div>
  );
}
