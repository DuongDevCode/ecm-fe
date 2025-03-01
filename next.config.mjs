/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_KEY_PUBLIC: process.env.NEXT_PUBLIC_KEY_PUBLIC,
    NEXT_PUBLIC_IV_PUBLIC: process.env.NEXT_PUBLIC_IV_PUBLIC
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.monocubed.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'demositefiles.blob.core.windows.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'zocker.vn',
        pathname: '**',
      }
    ],
    // localPatterns: [
    //   {
    //     pathname: '/',
    //     search: ''
    //   }
    // ]
  }
};

export default nextConfig;
