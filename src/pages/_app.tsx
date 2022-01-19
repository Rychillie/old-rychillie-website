import { globalStyles } from "@styles/global";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import NavigationTop from "@components/navigationTop";
import NavigationBottom from "@components/navigationBottom";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <NavigationTop />

      <main>
        <Component {...pageProps} />
      </main>
      <NavigationBottom />
    </>
  );
}

export default MyApp;
