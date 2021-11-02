import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";
import content from "../../data/components.json";

type Props = {
  locale?: string | undefined;
};

const Footer = ({ locale }: Props): JSX.Element => {
  const localeContent = locale === "pt-BR" ? "pt-BR" : "en-US";
  const { pages, social, extra } = content.footer[localeContent];

  return (
    <footer className={styles.footer}>
      <div className={styles.side}>
        <h2>
          <Link href="/">
            <a>
              🦄 <span>Rychillie</span>
            </a>
          </Link>
        </h2>
      </div>
      <div className={styles.side}>
        <div className={styles.list}>
          {pages.map(({ name, href }) => (
            <Link key={name} href={href}>
              <a>{name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.list}>
          {social.map(({ name, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </div>
        <div className={styles.list}>
          {extra.map(({ name, href }) => (
            <Link key={name} href={href}>
              <a>{name}</a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
