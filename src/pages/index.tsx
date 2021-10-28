import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import SocialList from "@components/SocialList";
import content from "../data/pages.json";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();

  const homeContent = content.homePage;
  const { locale } = router;
  const {
    title,
    description,
    titleContent,
    synopsis,
    blog,
    know,
    myWork,
    littleMore,
    aboutMe,
  } = homeContent[locale === "pt-BR" ? "pt-BR" : "en-US"];

  return (
    <Layout title={title} description={description} center>
      <h1>{titleContent}</h1>
      <p>
        {synopsis} <Link href="/blog">{blog}</Link>, {know}{" "}
        <Link href="/work">{myWork}</Link> {littleMore}{" "}
        <Link href="/about">{aboutMe}</Link>.
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
