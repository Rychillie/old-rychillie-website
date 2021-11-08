const path = require("path");

const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rychillie.net", "localhost"],
  },
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    localeDetection: true,
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
};
