import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudfront.johnlloydserrano.com',
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
    ]
  }
};

export default nextConfig;
