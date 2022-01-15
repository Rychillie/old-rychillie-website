import { globalStyles } from "@styles/global";
import type { AppProps } from "next/app";
import NavigationTop from "@components/navigationTop";
import NavigationBottom from "@components/navigationBottom";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
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
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
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
