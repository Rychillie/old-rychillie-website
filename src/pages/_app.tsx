import { globalStyles } from "@styles/global";
import type { AppProps } from "next/app";
import NavigationTop from "@components/navigationTop";
import NavigationBottom from "@components/navigationBottom";

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
