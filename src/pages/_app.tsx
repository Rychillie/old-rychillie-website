import "../styles/globals.scss";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://rychillie.net${router.route}`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Rychillie.net"
        openGraph={{
          type: "website",
          locale: "pt-Br",
          url,
          description:
            "O website pessoal de Rychillie Umpierre de Oliveira, desenvolvedor.",
          site_name: "Rychillie | rychillie.net",
          images: [],
        }}
        canonical={url}
      />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
}
export default MyApp;
