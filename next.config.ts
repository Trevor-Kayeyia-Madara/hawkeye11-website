import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly disable Turbopack for build
  experimental: {
    turbo: undefined, // Ensure turbo is not enabled
  },
  
  // Your security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  
  // Add additional security headers that are commonly recommended
  async rewrites() {
    return [];
  },
};

export default nextConfig;