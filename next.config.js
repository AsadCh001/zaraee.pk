/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'], // Add Google domain here
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          pathname: '/public',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  