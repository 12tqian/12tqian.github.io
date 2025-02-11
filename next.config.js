/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  distDir: "build", // Changes the build directory to "build"
};

module.exports = nextConfig;
