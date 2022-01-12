const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
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
