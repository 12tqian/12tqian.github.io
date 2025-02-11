/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/12tqian.github.io", // Change this to your repo name
  assetPrefix: "/12tqian.github.io/", // Ensures assets are loaded correctly
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  
  distDir: "out", 
};

module.exports = nextConfig;
