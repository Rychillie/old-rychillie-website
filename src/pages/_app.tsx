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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#151718" />
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
