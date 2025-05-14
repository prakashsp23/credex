import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['lh3.googleusercontent.com','unsplash.com','www.pexels.com','plus.unsplash.com','github.com','ehvdkdwnhczvjgkzxjtd.supabase.co','your-image-domain.com','nvmjelvtxpqrkdabwfsk.supabase.co','images.unsplash.com','tailark.com','randomuser.me'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
