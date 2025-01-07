/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.monocubed.com',
        pathname: '**',
      }
    ]
  }
};

export default nextConfig;
