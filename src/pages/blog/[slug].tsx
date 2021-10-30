import { GetStaticPropsContext } from "next";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { useRouter } from "next/router";
import Layout from "@components/Layout";

type Props = {
  locale: "en-US" | string;
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
const BlogPost = ({ post, locale }: Props) => {
  console.log(post);
  return (
    <Layout title={"title"} description={"description"} hasHeader hasFooter>
      <h1>title</h1>
    </Layout>
  );
};

export default BlogPost;
