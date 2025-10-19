"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <Link
          href={link}
          className="inline-block text-sm font-medium text-black border-b-2 border-transparent hover:border-gold hover:text-gold transition-all duration-300"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
}
