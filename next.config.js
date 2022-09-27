/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  ...nextTranslate(),
}

module.exports = nextConfig
