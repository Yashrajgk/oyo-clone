/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["images.pexels.com",
     "images.oyoroomscdn.com",
     "t3.ftcdn.net","upload.wikimedia.org",
     "www.shutterstock.com",
     "cdn.pixabay.com"],
  }
}

module.exports = nextConfig
