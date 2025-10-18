import { cn } from "../lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "dark";
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

export function Button({
  children,
  variant = "solid",
  className,
  href,
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 font-semibold rounded-full transition text-center text-base relative overflow-hidden btn-hover";

  const variants = {
    solid: "bg-[#D4AF37] text-black hover:opacity-90",
    outline:
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
    dark: "bg-black text-white hover:bg-[#D4AF37] hover:text-black",
  };

  const cls = cn(base, variants[variant], className || "");

  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );

  return <button className={cls}>{children}</button>;
}
