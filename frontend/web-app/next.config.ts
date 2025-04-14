import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'bucket.dealervenom.com' },
    ],
  },
};

export default nextConfig;
