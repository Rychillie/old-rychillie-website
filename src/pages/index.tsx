import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Home: NextPage = () => {
  return (
    <Layout title={"Página Inicial"} description={"Bem vindo ao meu mundo!"}>
      <h1>Está é a pagina inicial</h1>
      <Navigation />
    </Layout>
  );
};

export default Home;
