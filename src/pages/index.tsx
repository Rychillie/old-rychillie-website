import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { AnimatePresence, motion } from "framer-motion";

import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import Navigation from "@components/Navigation";
import SocialList from "@components/SocialList";

const Home: NextPage = () => {
  return (
    <Layout title={"Página Inicial"} description={"Bem vindo ao meu mundo!"}>
      <h1>Hello, i&rsquo;m Rychillie</h1>
      <p>
        Frontend Developer, junior UI Designer and Swift development student,
        compartilhando meu conhecimento através do meu blog sharing my knowledge
        through my <Link href="/blog">blog</Link>, know{" "}
        <Link href="/portfolio">my work </Link> and a little more{" "}
        <Link href="/sobre">about me</Link>.
      </p>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.profile}
        >
          <div className={styles.containerImage}>
            <Image
              src="/images/rychillie.png"
              blurDataURL="/images/rychillie.png"
              placeholder="blur"
              quality={100}
              layout="fixed"
              width={48}
              height={48}
              alt="this is me"
              className={styles.profileImage}
            />
          </div>
          <SocialList />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
