/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { // New way to enable images from a given domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
