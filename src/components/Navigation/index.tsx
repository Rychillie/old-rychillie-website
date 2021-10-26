import { AnimateSharedLayout } from "framer-motion";
import Link from "../NoScrollLink";

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
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
      <nav className="flex">
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
