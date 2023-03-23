/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  ...nextTranslate(),
};

module.exports = withBundleAnalyzer(nextConfig);
