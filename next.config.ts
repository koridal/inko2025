import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  experimental: {
    // Turbopack Scope Hoisting 기능 비활성화 (현재 알려진 workaround)
    turbopackScopeHoisting: false,
  },
};

export default nextConfig;

