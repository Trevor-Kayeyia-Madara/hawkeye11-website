"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-dark text-light shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-gold font-bold text-xl">
          HAWKEYE 11
        </Link>
        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-6 text-light`}
        >
          {["Home", "About", "Services", "Why Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : "/" + item.toLowerCase().replace(/\s+/g, "-")
              }
              className="hover:text-gold"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
