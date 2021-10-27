import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blog.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Blog: NextPage = () => {
  return (
    <Layout
      title={"Blog"}
      description={"Welcome to my world!"}
      hasHeader
      hasFooter
    >
      <h1>This is my blog</h1>
    </Layout>
  );
};

export default Blog;
