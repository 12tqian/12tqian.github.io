/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/12tqian.github.io", // Change this to your repo name
  assetPrefix: "/12tqian.github.io/", // Ensures assets are loaded correctly
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  trailingSlash: true, // Ensures that the site works with GitHub Pages
  distDir: "out", // Changes the build directory to "build"
};

module.exports = nextConfig;
