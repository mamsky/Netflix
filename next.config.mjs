/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatar.iran.liara.run", "image.tmdb.org", "cdn.myanimelist.net"],
  },
};

export default nextConfig;
