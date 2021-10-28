import type { NextPage } from "next";
import styles from "../styles/Blog.module.scss";

import Layout from "@components/Layout";

const Blog: NextPage = ({ posts }: any) => {
  return (
    <Layout
      title={"Blog"}
      description={"Welcome to my world!"}
      hasHeader
      hasFooter
    >
      <h1>This is my blog</h1>

      <div>
        <p>Listagem de posts</p>
      </div>
    </Layout>
  );
};

export default Blog;
