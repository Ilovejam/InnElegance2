/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "yoldaolmak.com",
      },
      {
        protocol: "https",
        hostname: "gezicini.com",
      },
      {
        protocol: "https",
        hostname: "cdn.hellovillam.com",
      },
      {
        protocol:"https",
        hostname: "images.pexels.com",
      },
      {
        protocol:"https",
        hostname: "www.villam365.com",
      },
      {
        protocol:"https",
        hostname: "encrypted-tbn1.gstatic.com",
      },
      {
        protocol:"https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol:"https",
        hostname: "media.istockphoto.com",
      }
    ],
  },
};


module.exports = nextConfig;
