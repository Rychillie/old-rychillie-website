import fs from "fs";
import { Feed } from "feed";
import remark from "remark";
import html from "remark-html";
import emoji from "remark-emoji";
import feedContent from "../data/feed.json";

const LOCALES = ["en", "ptBR"];
import { getAllPostsByLocale } from "./posts";

const markdownToHtml = (markdown: string): string =>
  remark().use(html).use(emoji).processSync(markdown).toString();

export const generateRssFeed = (): void => {
  LOCALES.forEach(async (lang) => {
    const contentLang = lang === "ptBR" ? "pt-BR" : "en-US";
    const {
      title,
      description,
      link,
      language,
      authorName,
      twitterUserName,
      copyright,
    } = feedContent.feed[contentLang];

    const author = {
      name: authorName,
      link: `https://twitter.com/${twitterUserName}`,
    };

    // @ts-ignore
    // https://github.com/jpmonette/feed/issues/138
    const feed = new Feed({
      title: authorName,
      description: description as string,
      id: `${link}/${contentLang}`,
      link: `${link}/${contentLang}`,
      language: lang,
      copyright,
      generator: "Next.js & Feed",
      feedLinks: {
        rss2: `${link}/${contentLang}/feed.xml`,
      },
      author,
    });
    const locale = lang === "ptBR" ? "pt-BR" : "en-US";

    const posts = await getAllPostsByLocale({ locale });

    posts.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: `${link}/${contentLang}/blog/${post.slug}`,
        link: `${link}/${contentLang}/blog/${post.slug}`,
        description: post.description,
        content: markdownToHtml(post.content),
        date: new Date(post.date),
        author: [author],
      });
    });

    fs.mkdirSync(`./public/${lang}`, { recursive: true });
    fs.writeFileSync(`./public/${lang}/feed.xml`, feed.rss2(), "utf8");
  });
};

// generateRssFeed();

// export async function generateRss(
//   posts: {
//     slug: string;
//     title: string;
//     description: string;
//     date: string | number | Date;
//     content: string;
//   }[],
//   { locale = "en-US" }: { locale: string }
// ) {
//   const contentLang = locale === "pt-BR" ? "pt-BR" : "en-US";
//   const { title, description, link, language } = feedContent.feed[contentLang];
//   console.log(posts);
// }
