import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Sobre.module.scss";

import Layout from "@components/Layout";
import Navigation from "@components/Navigation";

const Sobre: NextPage = () => {
  return (
    <Layout title={"Página Inicial"} description={"Bem vindo ao meu mundo!"}>
      <h1>Está é o Sobre</h1>
    </Layout>
  );
};

export default Sobre;
