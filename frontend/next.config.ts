import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // /* config options here */
  // images: {
  //   dangerouslyAllowLocalIP: true,
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "1337",
  //       pathname: "/uploads/**/*",
  //     },
  //   ],
  // },
};

export default nextConfig;
