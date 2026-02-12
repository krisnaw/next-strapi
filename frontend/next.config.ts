import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  /* config options here */
  images: {
    // Disable image optimization for localhost in development
    ...(process.env.NODE_ENV === 'development' ? { unoptimized: true, dangerouslyAllowLocalIP: true } : { }),
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOSTNAME || 'localhost',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
