import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "@components/NoScrollLink";
import Layout from "@components/Layout";
import content from "../data/pages.json";
import styles from "../styles/404.module.scss";

const Home: NextPage = () => {
  const errorContent = content.errorPage;
  const { locale } = useRouter();
  const pageLocale = locale === "pt-BR" ? "pt-BR" : "en-US";
  const { title, description, titleContent, contentPage, linkHome } =
    errorContent[pageLocale];

  return (
    <Layout
      title={title}
      description={description}
      locale={pageLocale}
      slug={"/404"}
      center
    >
      <h1>{titleContent}</h1>
      <p>
        {contentPage} <Link href="/">{linkHome}</Link>.
      </p>
    </Layout>
  );
};

export default Home;
