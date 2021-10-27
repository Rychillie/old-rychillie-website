import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import SocialList from "@components/SocialList";

const Home: NextPage = () => {
  return (
    <Layout
      title={"Hello, i'm Rychillie"}
      description={"Welcome to my world!"}
      center
    >
      <h1>Hello, i&rsquo;m Rychillie</h1>
      <p>
        Frontend Developer, junior UI Designer and Swift development student,
        compartilhando meu conhecimento através do meu blog sharing my knowledge
        through my <Link href="/blog">blog</Link>, know{" "}
        <Link href="/work">my work</Link> and a little more{" "}
        <Link href="/about">about me</Link>.
      </p>
      <div className={styles.profile}>
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
      </div>
    </Layout>
  );
};

export default Home;
