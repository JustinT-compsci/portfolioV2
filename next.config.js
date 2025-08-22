// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // enables static HTML export
  basePath: '/portfolioV@', // remove this if deploying to root domain
  images: {
    unoptimized: true,        // required for static export
  },
};

module.exports = nextConfig;
