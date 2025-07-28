/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true  // Temporarily disable ESLint during build
  }
};

export default nextConfig;
