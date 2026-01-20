/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: [
      'http://192.168.1.55:3000', // your dev IP
      'http://localhost:3000',    // optional, already allowed
    ],
  },
};

module.exports = nextConfig;




