import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for GitHub Pages compatibility
  // basePath: process.env.NODE_ENV === 'production' ? '/homepage-demo' : ''
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/homepage-demo' : ''
};

export default nextConfig;
