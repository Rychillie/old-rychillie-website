import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import content from "../data/pages.json";
import styles from "../styles/404.module.scss";

const Home: NextPage = () => {
  const errorContent = content.errorPage;
  const { locale } = useRouter();
  const { title, description, titleContent, contentPage, linkHome } =
    errorContent[locale === "pt-BR" ? "pt-BR" : "en-US"];

  return (
    <Layout title={title} description={description} center>
      <h1>{titleContent}</h1>
      <p>
        {contentPage} <Link href="/">{linkHome}</Link>.
      </p>
    </Layout>
  );
};

export default Home;
