import { AnimateSharedLayout } from "framer-motion";
import styles from "./Header.module.scss";
import Link from "next/link";
import Navigation from "@components/Navigation";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>
            <span>🖥</span> Titulo
          </h1>
        </a>
      </Link>

      <Navigation />
    </header>
  );
};

export default Header;
