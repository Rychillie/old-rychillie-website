import Layout from "@components/Layout";

type Props = {
  post: {
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
    date: string;
  };
};

export async function getStaticPaths() {}

// component for generate blog post page
const BlogPost = ({ post }: Props) => {
  return (
    <Layout title={""} description={""}>
      <h1>{post?.title ?? "[not-set]"}</h1>
    </Layout>
  );
};
