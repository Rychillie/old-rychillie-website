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

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const SocialList = (): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.ul className={styles.socialMedia}>
        {links.map(({ name, href, icon }) => (
          <motion.li
            key={name}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.a
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={`/icons/${icon}.svg`}
                alt={name}
              />
            </motion.a>

            <span className={styles.socialName}>{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default SocialList;
