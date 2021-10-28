import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import SocialList from "@components/SocialList";

const Home: NextPage = () => {
  return (
    <Layout title={"404 NOT FOUND"} description={"OPS!"} center>
      <h1>404 NOT FOUND</h1>
      <p>
        Sorry, maybe you can go back to <Link href="/">Home Page</Link>.
      </p>
    </Layout>
  );
};

export default Home;
