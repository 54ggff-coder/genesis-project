import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typedRoutes: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/genesis-project",
  assetPrefix: "/genesis-project/",
};

export default nextConfig;