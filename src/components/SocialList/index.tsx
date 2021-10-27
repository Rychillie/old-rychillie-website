/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence key={name}>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={`/icons/${icon}.svg`}
                alt={name}
              />
            </motion.a>

            <span className={styles.socialName}>{name}</span>
          </motion.li>
        </AnimatePresence>
      ))}
    </ul>
  );
};

export default SocialList;
