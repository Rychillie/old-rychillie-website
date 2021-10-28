import type { NextPage } from "next";
import styles from "../styles/Blog.module.scss";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import content from "../data/pages.json";

const Blog: NextPage = ({ posts }: any) => {
  const blogContent = content.blogPage;
  const { locale } = useRouter();
  const { title, description, titleContent, contentPage } =
    blogContent[locale === "pt-BR" ? "pt-BR" : "en-US"];

  return (
    <Layout title={title} description={description} hasHeader hasFooter>
      <h1>{titleContent}</h1>

      <div>
        <p>{contentPage}</p>
      </div>
    </Layout>
  );
};

export default Blog;
