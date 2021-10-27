import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Layout.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  hasHeader?: boolean | false;
  hasFooter?: boolean | false;
  center?: boolean | false;
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
  hasFooter,
  center,
}: Props): JSX.Element => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    {hasHeader && <Header />}
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className={`${styles.main} ${center && styles.center}`}
    >
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {children}
      </AnimatePresence>
    </motion.main>
    {hasFooter && <Footer />}
  </>
);

export default Layout;
