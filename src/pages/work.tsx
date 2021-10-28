import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import content from "../data/pages.json";
import styles from "../styles/Work.module.scss";

const Portfolio: NextPage = () => {
  const workContent = content.workPage;
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, description, titleContent, contentPage } = workContent[locale];

  return (
    <Layout title={title} description={description} hasHeader hasFooter>
      <h1>{titleContent}</h1>

      <div>
        <p>{contentPage}</p>
      </div>
    </Layout>
  );
};

export default Portfolio;
