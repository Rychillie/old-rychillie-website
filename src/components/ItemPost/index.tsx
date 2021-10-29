import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  isPublished: boolean;
  thumbnailUrl: string;
  date: string;
  tags: string[];
  locale: "en-US" | string;
};

const ItemPost = ({
  title,
  slug,
  description,
  isPublished,
  thumbnailUrl,
  date,
  tags,
  locale,
}: Props): JSX.Element => {
  return (
    <div className={styles.itemPost}>
      <Link href={`${locale}/${slug}`}>
        <a className={styles.logo}>
          <div className={styles.itemHeader}>
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default ItemPost;