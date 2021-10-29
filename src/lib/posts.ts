import matter from "gray-matter";
import marked from "marked";
import glob from "glob-promise";
import path from "path";
import { promises as fs } from "fs";

/**
 * Faz leitura de todos os posts da pasta de acordo com a linguagem
 * passada como parâmetro.
 *
 * A função vai ler arquivo por aquivo e devolver o conteúdo tratado
 * em formato JSON para o componente.
 */
export async function getAllPosts({ locale = "en-US" }: { locale: string }) {
  // definição da pasta de armazenamento do conteúdo
  const basePath = `./content/blog/${locale}`;

  // faz a leitura dos arquivos e devolve um array com os arquivos
  const files = await glob(`${basePath}/*.md`);

  // faz um map para arquivo por aquivo e prepara o JSON com base
  // no conteúdo interno
  const posts = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.resolve(file);
      const fileContent = await fs.readFile(fullPath, "utf8");
      const meta = matter(fileContent);

      return {
        title: meta.data.title,
        slug: path.parse(fullPath).name,
        description: meta.data.description,
        isPublished: meta.data.isPublished,
        thumbnailUrl: meta.data.image,
        date: meta.data.date,
        tags: meta.data.tags,
      };
    })
  );

  return posts;
}

export async function getPostBySlug({
  slug,
  locale = "en-US",
}: {
  slug: string;
  locale: string;
}) {
  const basePath = `./content/blog/${locale}`;
  const fileContent = await fs.readFile(`${basePath}/${slug}.md`);

  const meta = matter(fileContent);
  const content = marked(meta.content);
  console.log(content);

  const thumbnailUrl = meta.data.image;

  return {
    title: meta.data.title,
    description: meta.data.description,
    postMonth: meta.data.postMonth,
    postDay: meta.data.postDay,
    postID: meta.data.postID,
    tags: meta.data.tag,
    thumbnailUrl,
    content,
    slug,
  };
}
