import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AnimateSharedLayout } from "framer-motion";

import * as gtag from "@lib/gtag";
import Analytics from "@components/Analytics";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://rychillie.net${router.route}`;
  const myRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    myRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      myRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [myRouter.events]);

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

      <AnimateSharedLayout>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimateSharedLayout>
      <Analytics />
    </>
  );
}
export default MyApp;
