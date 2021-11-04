const path = require("path");

const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  i18n: {
    localeDetection: true,
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
};

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();
        return { ...entries, "scripts/rss-generate": "./src/lib/rss.ts" };
      };
    }

    return config;
  },
};
