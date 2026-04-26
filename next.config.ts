import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@tailwindcss/node', '@tailwindcss/postcss'],
};

export default nextConfig;
