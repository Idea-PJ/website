import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['ideapj-statics.s3.us-east-1.amazonaws.com/'],
  },
};

export default nextConfig;
