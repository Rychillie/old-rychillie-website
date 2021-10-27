import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "@components/NoScrollLink";

const links: { name: string; href: string }[] = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
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
