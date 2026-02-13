"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Button({
  text,
  href,
  onClick,
  variant = "black",
  size = "md",
  icon,
  newTab = false,
  className = "",
}) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md";

  // Sizes
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  // Variants
  const variantStyles = {
    black:
      "bg-black text-white border border-transparent hover:bg-amber-400 hover:text-black",
    gold:
      "bg-amber-400 text-black border border-transparent hover:bg-black hover:text-white",
    white:
      "bg-transparent text-black border border-black hover:bg-black hover:text-amber-400",
  };

  const combined = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.black,
    className
  );

  // Motion animation props
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  const ButtonContent = (
    <motion.div {...motionProps} className={combined}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </motion.div>
  );

  // If link
  if (href) {
    const isExternal = href.startsWith("http") || newTab;

    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {ButtonContent}
      </Link>
    );
  }

  // If button
  return (
    <button onClick={onClick} type="button">
      {ButtonContent}
    </button>
  );
}
