/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dibase-hub',
  assetPrefix: '/dibase-hub/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
