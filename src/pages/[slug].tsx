import { GetStaticProps, GetStaticPaths } from "next";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { Params } from "next/dist/server/router";
import styles from "../styles/Blog.module.scss";

type Props = {
  locale: "en-US" | string;
  locales: string[];
  params: {
    slug: string;
  };
  post: {
    title: string;
    description: string;
    isPublished: string;
    thumbnailUrl: string;
    date: string;
    tags: string[];
    content: string;
    slug: string;
  };
};

export async function getStaticPaths({ locale }: Props) {
  const posts = await getAllPosts({ locale });

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true,
  };
}

// getStaticProps for generate blog post page
export async function getStaticProps({ locale, params }: Props & Params) {
  const post = await getPostBySlug(params.slug, { locale });

  return {
    props: {
      locale,
      post,
    },
  };
}

// component for generate blog post page
const BlogPost = ({ post, locale }: Props) => {
  return (
    <Layout
      title={post.title}
      description={post.description}
      hasHeader
      hasFooter
    >
      <h1>{post.title}</h1>

      <article className={styles.article}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
};

export default BlogPost;
