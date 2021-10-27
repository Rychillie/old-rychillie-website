import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";
import Navigation from "@components/Navigation";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          🦄 <span>Rychillie</span>
        </a>
      </Link>

      <Navigation />
    </header>
  );
};

export default Header;
