import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Portfolio.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Portfolio: NextPage = () => {
  return (
    <Layout
      title={"My work"}
      description={"Welcome to my world!"}
      hasHeader
      hasFooter
    >
      <h1>This is my work</h1>
    </Layout>
  );
};

export default Portfolio;
