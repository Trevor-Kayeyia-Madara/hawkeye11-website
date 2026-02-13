"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function ServiceCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Service image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Text and button */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        <Button
          text="Learn More"
          href={link}
          variant="gold"
          size="sm"
          className="mt-2"
        />
      </div>
    </motion.div>
  );
}
