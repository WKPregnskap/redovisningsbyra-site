import type { NextConfig } from "next";

const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const githubPagesBasePath = isGithubPagesBuild && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  // Static export so site can be uploaded directly to Netlify Drop.
  output: "export",
  // endret: støtter GitHub Pages preview uten å påvirke Netlify/egen domene.
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
  // Required for static export when using next/image.
  images: {
    unoptimized: true,
  },
  // Folder-based routes are safer on static hosts.
  trailingSlash: true,
};

export default nextConfig;
