import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo-name>.
// The deploy workflow passes PAGES_BASE_PATH=/<repo-name> at build time;
// locally it's unset, so dev + preview stay at "/".
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export → hostable on GitHub Pages
  images: { unoptimized: true }, // no Image Optimization server on Pages
  basePath,
  trailingSlash: true, // emit /path/index.html so Pages serves clean URLs
  // next/image doesn't prefix basePath onto local src, so expose it to the
  // client and prepend it ourselves (see ImageSlot).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
