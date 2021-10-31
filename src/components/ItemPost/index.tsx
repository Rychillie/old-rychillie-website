import styles from "./styles.module.scss";
import { parseISO, format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  date: string;
  locale: "en-US" | string;
};

const ItemPost = ({
  title,
  slug,
  description,
  thumbnailUrl,
  date,
  locale,
}: Props): JSX.Element => {
  const postLocale = locale === "pt-BR" ? "/pt-BR" : "";
  const dateLocale = locale === "pt-BR" ? ptBR : enUS;

  return (
    <Link href={`${postLocale}/blog/${slug}`}>
      <a className={styles.itemPost}>
        <div className={styles.itemHeader}>
          <h3>{title}</h3>
          <span>
            {format(parseISO(date), "MMMM dd, yyyy", { locale: dateLocale })}
          </span>
        </div>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default ItemPost;
