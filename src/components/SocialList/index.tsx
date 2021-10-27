/* eslint-disable @next/next/no-img-element */
import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";

const links: { name: string; href: string; icon: string }[] = [
  {
    name: "Twiiter",
    href: "https://twitter.com/rychillie",
    icon: "twitter",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rychillie",
    icon: "instagram",
  },
  {
    name: "Github",
    href: "https://github.com/rychillie",
    icon: "github",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/rychillie",
    icon: "linkedin",
  },
];

const SocialList = (): JSX.Element => {
  return (
    <ul className={styles.socialMedia}>
      {links.map(({ name, href, icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer">
            <img src={`/icons/${icon}.svg`} alt={name} />
          </a>

          <span className={styles.socialName}>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
