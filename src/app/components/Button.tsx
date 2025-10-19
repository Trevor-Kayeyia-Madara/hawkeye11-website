"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // ✅ correct import path

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "black" | "gold" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  newTab?: boolean;
  className?: string;
}

export default function Button({
  text,
  href,
  onClick,
  variant = "black",
  size = "md",
  icon,
  newTab = false,
  className = "",
}: ButtonProps) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md";

  // Sizes
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  // Brand colors
  const gold = "#ffd700";
  const black = "#000000";
  const white = "#ffffff";

  // Variants
  const variantStyles = {
    black: `bg-[${black}] text-white border border-transparent hover:bg-[${gold}] hover:text-[${black}]`,
    gold: `bg-amber-400 text-[${black}] border border-transparent hover:bg-[${black}] hover:text-white`,
    white: `bg-transparent text-[${black}] border border-[${black}] hover:bg-[${black}] hover:text-amber-400`,
  };

  const combined = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  // Motion animation props
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  // Content block
  const ButtonContent = (
    <motion.div {...motionProps} className={combined}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </motion.div>
  );

  // Link or button output
  if (href) {
    if (href.startsWith("http") || newTab) {
      return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </Link>
      );
    } else {
      return <Link href={href}>{ButtonContent}</Link>;
    }
  }

  return (
    <button onClick={onClick} type="button">
      {ButtonContent}
    </button>
  );
}
