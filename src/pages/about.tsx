import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import content from "../data/pages.json";
import styles from "../styles/About.module.scss";

const Sobre: NextPage = () => {
  const aboutContent = content.aboutPage;
  const { locale } = useRouter();
  const { title, description, titleContent, contentPage } =
    aboutContent[locale === "pt-BR" ? "pt-BR" : "en-US"];

  return (
    <Layout title={title} description={description} hasHeader hasFooter>
      <h1>{titleContent}</h1>

      <div>
        <p>{contentPage}</p>
      </div>
    </Layout>
  );
};

export default Sobre;
