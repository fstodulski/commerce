import MillionLint from "@million/lint";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withMillion = MillionLint.next({
  rsc: true,
  optimizeDOM: true,
});

export default isProd
  ? createMDX()(nextConfig)
  : withMillion(createMDX()(nextConfig));
