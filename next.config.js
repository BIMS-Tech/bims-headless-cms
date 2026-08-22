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

  /**
   * Product sites live outside this app. These run before middleware, so the bare
   * paths resolve even though i18nRouter would otherwise rewrite them under /en-US.
   * The locale-prefixed variants are covered too, for anyone landing on one directly.
   * `permanent: false` (307) — these destinations are the product teams' to change.
   */
  async redirects() {
    const products = [
      { path: '/giyapay', destination: 'https://giyapay.com/' },
      { path: '/zenpos', destination: 'https://www.giyapay.com/pos' },
      { path: '/maretinda', destination: 'https://maretinda.com/ph' },
    ];

    return products.flatMap(({ path, destination }) => [
      { source: path, destination, permanent: false },
      { source: `/:locale(en-US|de-DE)${path}`, destination, permanent: false },
    ]);
  },

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
