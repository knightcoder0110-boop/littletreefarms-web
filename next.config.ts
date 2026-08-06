import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/land/what-do-i-do-with-woodland-i-dont-want",
        destination: "/land/i-dont-want-my-woodland-anymore",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: false,
    qualities: [70, 75, 80, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
