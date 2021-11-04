import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Newsletter from "@components/Newsletter";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  hasHeader?: boolean | false;
  hasFooter?: boolean | false;
  hasNewsletter?: boolean | false;
  center?: boolean | false;
  locale?: string | undefined;
};

const variants = {
  hidden: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
  },
};

const Layout = ({
  children,
  title,
  description,
  hasHeader,
  hasNewsletter,
  hasFooter,
  center,
  locale,
}: Props): JSX.Element => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    {hasHeader && <Header locale={locale} />}
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className={`${styles.main} ${center && styles.center}`}
    >
      {children}
    </motion.main>
    {hasNewsletter && <Newsletter locale={locale} />}
    {hasFooter && <Footer />}
  </>
);

export default Layout;
