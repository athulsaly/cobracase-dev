/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
  images: { domains: ["utfs.io"] },
};

export default nextConfig;
