import styles from "../styles/Blog.module.scss";
import { getAllPosts } from "@lib/posts";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import ItemPost from "@components/ItemPost";
import content from "../../data/pages.json";

type Props = {
  locale: string;
  posts: Array<{
    slug: string;
    title: string;
    isPublished: boolean;
    description: string;
    thumbnailUrl: string;
    tags: string[];
    date: string;
  }>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await getAllPosts({ locale });

  return {
    props: {
      locale,
      posts,
    },
  };
}

const Blog = ({ posts, locale }: Props) => {
  console.log("posts", posts);
  const blogContent = content.blogPage;

  const { title, description, titleContent, contentPage } =
    blogContent[locale === "pt-BR" ? "pt-BR" : "en-US"];

  return (
    <Layout title={title} description={description} hasHeader hasFooter>
      <h1>{titleContent}</h1>

      <div>
        {contentPage}

        {/* {posts.map((post) => (
          // TODO: add Post page
          <ItemPost
            key={post.slug}
            title={post.title}
            slug={post.slug}
            description={post.description}
            isPublished={post.isPublished}
            thumbnailUrl={post.thumbnailUrl}
            date={post.date}
            tags={post.tags}
            locale={locale}
          />
        ))} */}
      </div>
    </Layout>
  );
};

export default Blog;
