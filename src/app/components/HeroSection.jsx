"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroSectionComponent({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
  backgroundImage,
}) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
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

        <p className="text-lg md:text-xl mb-10 text-gray-200">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {buttonPrimary && (
            <Button
              text={buttonPrimary.text}
              href={buttonPrimary.link}
              variant="gold"
              size="lg"
            />
          )}

          {buttonSecondary && (
            <Button
              text={buttonSecondary.text}
              href={buttonSecondary.link}
              variant="white"
              size="lg"
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
