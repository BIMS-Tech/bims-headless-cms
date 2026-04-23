require('dotenv').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
});

const headers = require('./config/headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },

  experimental: {},

  poweredByHeader: false,
  compress: true,

  headers,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'images.eu.ctfassets.net',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
