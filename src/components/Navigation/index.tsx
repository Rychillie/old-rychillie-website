import { AnimateSharedLayout } from "framer-motion";
import styles from "./Navigation.module.scss";
import Link from "@components/NoScrollLink";

const links: { name: string; href: string }[] = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

const Navigation = (): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <nav className={styles.navigation}>
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a>{name}</a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
