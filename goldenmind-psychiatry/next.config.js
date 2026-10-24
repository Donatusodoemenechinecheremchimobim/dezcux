/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Three.js / R3F ship ESM + some packages need transpiling in Next's SWC pipeline.
  transpilePackages: ["three"],
};

module.exports = nextConfig;
