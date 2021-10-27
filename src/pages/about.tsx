import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Sobre.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Sobre: NextPage = () => {
  return (
    <Layout
      title={"About me"}
      description={"Welcome to my world!"}
      hasHeader
      hasFooter
    >
      <h1>This is about me</h1>
    </Layout>
  );
};

export default Sobre;
