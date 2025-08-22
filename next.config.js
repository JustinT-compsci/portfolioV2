// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // enables static HTML export
  basePath: isProd ? "/portfolioV2" : "",
  assetPrefix: isProd ? "/portfolioV2/" : "",
};
