// app/not-found.tsx
"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 overflow-hidden">
      {/* Animated background sparkle */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-yellow-400 opacity-10 animate-pulse-slow"></div>
      </div>

      {/* 404 Headline with shimmer */}
      <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 relative shimmer">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-center text-gray-300 mb-8 max-w-md">
        The page you are looking for might have wandered off or never existed. 
        Don’t worry, we’ll guide you back home.
      </p>

      {/* CTA Button */}
      <Link href="/">
        <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
          Return Home
        </button>
      </Link>

      {/* Optional secondary navigation */}
      <div className="mt-10 flex space-x-6 text-gray-400">
        <Link href="/services" className="hover:text-yellow-400 transition">
          Services
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>
      </div>

      {/* Decorative floating sparkles */}
      <div className="absolute top-10 right-10 text-yellow-400 text-6xl opacity-20 animate-pulse">
        ✦
      </div>

      <style jsx>{`
        /* Shimmer effect on 404 numbers */
        .shimmer {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Slow pulse animation for decorative circle */
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
