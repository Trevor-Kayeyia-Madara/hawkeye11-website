"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Button({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline-light" | "outline-dark";
}) {
  const base = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300";

  const styles = {
    gold: "bg-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]",
    "outline-light":
      "border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black",
    "outline-dark":
      "border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37] hover:text-black",
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </Link>
    </motion.div>
  );
}
