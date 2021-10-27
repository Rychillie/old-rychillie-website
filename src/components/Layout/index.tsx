import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: {
    height: 0,
    opacity: 0,
    x: -200,
    y: 0,
  },
  enter: {
    height: 0,
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    height: "fit-content",
    opacity: 0,
    x: 0,
    y: -100,
  },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <div>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className={styles.main}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
