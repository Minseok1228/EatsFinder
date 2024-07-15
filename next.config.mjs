/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_S3_SERVER,
      },
    ],
  },
};

export default nextConfig;
