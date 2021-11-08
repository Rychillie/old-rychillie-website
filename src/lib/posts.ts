import matter from "gray-matter";
import marked from "marked";
import glob from "glob-promise";
import path from "path";
import { promises as fs } from "fs";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://rychillie.net";

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

      const thumbAPI = `${baseUrl}/api/thumbnail.png?title=${
        meta.data.title
      }&slug=${path.parse(fullPath).name}&lang=${locale}`;

      return {
        title: meta.data.title,
        slug: path.parse(fullPath).name,
        description: meta.data.description,
        thumbnailUrl: thumbAPI,
        date: meta.data.date,
      };
    })
  );

  return posts;
}

// get post i18n by slug
export async function getPostBySlug(
  slug: string,
  { locale = "en-US" }: { locale: string }
) {
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
      const content = marked(meta.content);

      const thumbAPI = `${baseUrl}/api/thumbnail.png?title=${
        meta.data.title
      }&slug=${path.parse(fullPath).name}&lang=${locale}`;

      return {
        title: meta.data.title,
        slug: path.parse(fullPath).name,
        description: meta.data.description,
        thumbnailUrl: thumbAPI,
        date: meta.data.date,
        content: content,
      };
    })
  );

  const post = posts.find((p) => p.slug === slug);

  return post;
}

// get all posts i18n by locale
export async function getAllPostsByLocale({
  locale = "en-US",
}: {
  locale: string;
}) {
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
      const content = marked(meta.content);

      const thumbAPI = `${baseUrl}/api/thumbnail.png?title=${
        meta.data.title
      }&slug=${path.parse(fullPath).name}&lang=${locale}`;

      return {
        title: meta.data.title,
        slug: path.parse(fullPath).name,
        description: meta.data.description,
        thumbnailUrl: thumbAPI,
        date: meta.data.date,
        content: content,
      };
    })
  );

  return posts;
}
