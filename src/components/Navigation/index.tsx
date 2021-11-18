import cn from "classnames";
import { AnimateSharedLayout } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "@components/NoScrollLink";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import content from "../../data/components.json";

type Props = {
  locale?: string | undefined;
};

const Navigation = ({ locale }: Props): JSX.Element => {
  const localeContent = locale === "pt-BR" ? "pt-BR" : "en-US";
  const links = content.navigation[localeContent];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimateSharedLayout>
      <nav className={styles.navigation}>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>

        {isMenuMounted && (
          <ul
            className={cn(styles.menu, isMenuRendered && styles.menuRendered)}
          >
            {links.map(({ name, href }) => (
              <li
                key={name}
                className={""}
                style={{ transitionDelay: "150ms" }}
              >
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
