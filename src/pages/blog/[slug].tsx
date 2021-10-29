import { GetStaticPropsContext } from "next";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { useRouter } from "next/router";
import Layout from "@components/Layout";

type Props = {
  locale: string;
  post: {
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
    date: string;
  };
};

type staticProps = {
  params: {
    slug: string;
  };
  locale: "en-US" | string;
};

export async function getStaticProps({ params, locale }: staticProps) {
  return {
    props: await getPostBySlug(params.slug, { locale }),
  };
}

export async function getStaticPaths({ locale }: staticProps) {
  const posts = await getAllPosts({ locale });

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// component for generate blog post page
export const BlogPost = ({ post }: Props) => {
  return (
    <Layout title={post.title} description={post.description}>
      <h1>{post.title}</h1>
    </Layout>
  );
};
