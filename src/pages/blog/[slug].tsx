import { GetStaticPropsContext } from "next";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { useRouter } from "next/router";
import Layout from "@components/Layout";

type Props = {
  locale: "en-US" | string;
  params: {
    slug: string;
  };
  props: {
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

export async function getStaticProps({ params, locale }: Props) {
  const post = await getPostBySlug(params.slug, { locale });
  return {
    props: {
      ...post,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths({ locale }: Props) {
  const posts = await getAllPosts({ locale });
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

// component for generate blog post page
const BlogPost = ({ props }: Props) => {
  return (
    <Layout title={"title"} description={"description"}>
      <h1>{props.title}</h1>
    </Layout>
  );
};

export default BlogPost;
