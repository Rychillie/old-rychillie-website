const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});

module.exports = {
  images: {
    domains: ["rychillie.net", "localhost"],
  },
  async rewrites() {
    return [{ source: "/api/thumbnail.png", destination: "/api/thumbnail" }];
  },
  target: "serverless",
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
};
