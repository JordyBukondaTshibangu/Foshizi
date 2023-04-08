/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;