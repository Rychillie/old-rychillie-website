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
  const pageLocale = useRouter();
  const locale = pageLocale ? "pt-BR" : "en-US";

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Rychillie.net"
        openGraph={{
          description:
            "O website pessoal de Rychillie Umpierre de Oliveira, desenvolvedor.",
          site_name: "Rychillie | rychillie.net",
          url,
          title: "Open Graph Title",
          locale,
          images: [
            {
              url: "https://rychillie.net/images/rychillie.png",
              width: 800,
              height: 800,
              alt: "Rychillie",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@rychillie",
          site: "@rychillie",
          cardType: "summary_large_image",
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
