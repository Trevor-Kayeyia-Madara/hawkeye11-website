/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: undefined,
  },

  // Security headers
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

  // ✅ Redirect logic to fix Google’s “Redirect error”
  async redirects() {
    return [
      // Force non-www domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.hawkeye11companylimited.com",
          },
        ],
        destination: "https://hawkeye11companylimited.com/:path*",
        permanent: true,
      },
      // Remove any /index URLs
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      // Force HTTPS (if not already handled at hosting level)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "hawkeye11companylimited.com",
          },
        ],
        missing: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "https",
          },
        ],
        destination: "https://hawkeye11companylimited.com/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
