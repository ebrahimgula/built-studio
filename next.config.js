/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export requires unoptimized images (no Next.js image server).
    unoptimized: true,
  },
};

module.exports = nextConfig;
