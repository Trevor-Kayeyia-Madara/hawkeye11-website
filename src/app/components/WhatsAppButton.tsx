"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254765869184"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg flex items-center justify-center animate-pulse-gold"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
      whileHover={{ scale: 1.1, backgroundColor: "#000000", color: "#D4AF37" }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: "#25D366",
        color: "#fff",
        width: "56px",
        height: "56px",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
