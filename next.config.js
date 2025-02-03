/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "localhost",
      "i.pinimg.com",
      "www.pinterest.co.uk",
      "www.ephotozine.com",
      "parade.com",
      "cdn.dribbble.com",
      "media.geeksforgeeks.org",
      "cdn.villacim.com",
      "www.villacim.com",
      "cdn.villaciniz.com.tr",
      "cdn.villacim.com.tr",
      "www.villam365.com",
      "www.villam365.com.tr",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.villacim.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.villaciniz.com.tr",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "cdn.villacim.com.tr",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.villam365.com.tr",
        pathname: "/site/sized/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_API_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
  },
};

module.exports = nextConfig;