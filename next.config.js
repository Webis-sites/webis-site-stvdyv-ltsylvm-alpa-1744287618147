/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'alpha-photo-studio.com', 'localhost', 'yourdomain.com', 'cdn.yourdomain.com', 'example.com'],
  },
};

module.exports = nextConfig;