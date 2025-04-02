/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  swcMinify: false, // Disable SWC minification to avoid native addon issues
  transpilePackages: [
    '@anthropic-ai/sdk',
    '@supabase/ssr',
    '@supabase/supabase-js',
  ]
};
module.exports = nextConfig;