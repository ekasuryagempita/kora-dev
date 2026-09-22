/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'akcdn.detik.net.id',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'labuanbajotour.com',
      },
      {
        protocol: 'https',
        hostname: 'phinisitrip.com',
      },
      {
        protocol: 'https',
        hostname: '093007acd4aeb68adf71.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;