import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "@components/NoScrollLink";
import styles from "../styles/Home.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Home: NextPage = () => {
  return (
    <Layout title={"Página Inicial"} description={"Bem vindo ao meu mundo!"}>
      <h1>Rychillie</h1>
      <p>
        Programador FrontEnd, estudante de UI/UX Design e Swift, compartilhando
        meu conhecimento através de um <Link href="/blog">Blog</Link>, conheça{" "}
        <Link href="/portfolio">meus trabalhos</Link> e um pouco mais{" "}
        <Link href="/sobre">sobre mim</Link>.
      </p>
    </Layout>
  );
};

export default Home;
