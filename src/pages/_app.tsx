import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Navigation />

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
