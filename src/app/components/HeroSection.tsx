"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonPrimary?: { text: string; link: string };
  buttonSecondary?: { text: string; link: string };
  backgroundImage?: string;
}

export default function HeroSectionComponent({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 md:px-12 max-w-3xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-6">
          {buttonPrimary && (
            <Link
              href={buttonPrimary.link}
              className="bg-gold text-black font-medium px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              {buttonPrimary.text}
            </Link>
          )}
          {buttonSecondary && (
            <Link
              href={buttonSecondary.link}
              className="border-2 border-gold text-gold font-medium px-8 py-3 rounded-md hover:bg-gold hover:text-black transition-all duration-300"
            >
              {buttonSecondary.text}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
