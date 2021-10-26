import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Portfolio.module.scss";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

const Portfolio: NextPage = () => {
  return (
    <Layout title={"Página Inicial"} description={"Bem vindo ao meu mundo!"}>
      <h1>Está é o portfolio</h1>
      <Navigation />
    </Layout>
  );
};

export default Portfolio;