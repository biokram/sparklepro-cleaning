import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  basePath: isGithubPages ? '/sparklepro-cleaning' : '',
  assetPrefix: isGithubPages ? '/sparklepro-cleaning/' : '',
  reactStrictMode: true,
};

export default nextConfig;
