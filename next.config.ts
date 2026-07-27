import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Default next/image quality (75) plus 85, used by Hero's full-bleed
    // background photos where the extra quality is worth the byte cost.
    // Required explicitly starting in Next.js 16.
    qualities: [75, 85],
  },
};

export default nextConfig;
