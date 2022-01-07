import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/navigation";

const Home: NextPage = ({ pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Homepage</h1>
    </>
  );
};

export default Home;
