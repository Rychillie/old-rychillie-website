import { globalStyles } from "@styles/global";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import NavigationTop from "@components/navigationTop";
import NavigationBottom from "@components/navigationBottom";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const APP_NAME = "Rychillie 🦄";
  const APP_DESCRIPTION = "UI Designer, Frontend & IOS Developer";

  return (
    <>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icon-512x512.png"></link>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#151718" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <NavigationTop />

      <main>
        <Component {...pageProps} />
      </main>
      <NavigationBottom />
    </>
  );
}

export default MyApp;
