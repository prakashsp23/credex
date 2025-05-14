import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'unsplash.com' },
      { protocol: 'https', hostname: 'www.pexels.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'ehvdkdwnhczvjgkzxjtd.supabase.co' },
      { protocol: 'https', hostname: 'your-image-domain.com' },
      { protocol: 'https', hostname: 'nvmjelvtxpqrkdabwfsk.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'tailark.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
