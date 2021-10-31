import React, { useEffect } from "react";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import Layout from "@components/Layout";
import { Params } from "next/dist/server/router";
import styles from "../../styles/Blog.module.scss";
import Prism from "prismjs";

type Props = {
  locale: "en-US" | string;
  locales: string[];
  params: {
    slug: string;
  };
  post: {
    title: string;
    description: string;
    thumbnailUrl: string;
    date: string;
    content: string;
    slug: string;
  };
};

// get all posts by locale and return path slug of pos
export async function getStaticPaths() {
  const enPosts = await getAllPosts({ locale: "en-US" });
  const ptPosts = await getAllPosts({ locale: "pt-BR" });

  const enPaths = enPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "en-US",
  }));

  const ptPaths = ptPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "pt-BR",
  }));

  return {
    paths: enPaths.concat(ptPaths),
    fallback: false,
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
const BlogPost = ({ post }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout
      title={post.title}
      description={post.description}
      hasHeader
      hasFooter
    >
      <h1>{post.title}</h1>

      <article className={styles.article}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </Layout>
  );
};

export default BlogPost;
