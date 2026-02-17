import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so site can be uploaded directly to Netlify Drop.
  output: "export",
  // Required for static export when using next/image.
  images: {
    unoptimized: true,
  },
  // Folder-based routes are safer on static hosts.
  trailingSlash: true,
};

export default nextConfig;
