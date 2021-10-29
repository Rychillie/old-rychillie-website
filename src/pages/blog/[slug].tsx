import { GetStaticPropsContext } from "next";
import { getPostBySlug, getAllPosts } from "@lib/posts";
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

// component for generate blog post page
const BlogPost = ({ post }: Props) => {
  return (
    <Layout title={post.title} description={post.description}>
      <h1>{post.title}</h1>
    </Layout>
  );
};
