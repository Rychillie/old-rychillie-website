import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";
import Navigation from "@components/Navigation";
import SocialList from "./SocialList";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <SocialList />
    </footer>
  );
};

export default Footer;
