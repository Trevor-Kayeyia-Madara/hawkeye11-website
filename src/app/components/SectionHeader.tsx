"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  textColor?: string; // optional override (e.g. "text-white")
}

export default function SectionHeader({ title, textColor }: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center ${textColor || "text-black"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold">{title}</h2>
      <div className="mt-3 mx-auto w-20 h-1 bg-gold rounded-full" />
    </motion.div>
  );
}
