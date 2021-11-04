import fs from "fs";
import { Feed } from "feed";
import remark from "remark";
import html from "remark-html";
import emoji from "remark-emoji";
import { Params } from "next/dist/server/router";
import { getAllPosts, getPostBySlug } from "@lib/posts";
import content from "../data/feed.json";

const LOCALES = ["pt-BR", "en-US"];
const SITE_URL = "https://rychillie.net";
const authorName = "Rychillie";
const TWITTER_USERNAME = "rychillie";

const generateRssFeed = () => {
  const author = {
    name: authorName,
    link: `https://twitter.com/${TWITTER_USERNAME}`,
  };

  LOCALES.forEach(async (lang) => {
    const locale = lang === "pt-BR" ? "pt-BR" : "en-US";
    const { title, description, image, favicon, copyright } =
      content.feed[locale];

    const feed = new Feed({
      title,
      description,
      id: `${SITE_URL}/${lang}`,
      link: `${SITE_URL}/${lang}`,
      language: lang,
      image,
      favicon,
      copyright,
      generator: "Next.js using Feed",
      feedLinks: {
        rss2: `${SITE_URL}/${lang}/feed.xml`,
      },
      author,
    });
    const posts = await getAllPosts({ locale });

    (await posts).forEach((post) => {
      const myPosts = getPostBySlug(post.slug, { locale });

      console.log(myPosts);

      feed.addItem({
        title: post.title,
        id: `${SITE_URL}/${locale}/blog/${post.slug}`,
        link: `${SITE_URL}/${locale}/blog/${post.slug}`,
        description: post.description,
        date: new Date(post.date),
        author: [author],
        // content: myPosts.content.childMarkdownRemark.html,
      });
    });

    fs.mkdirSync(`./public/${lang}`, { recursive: true });
    fs.writeFileSync(`./public/${lang}/feed.xml`, feed.rss2(), "utf8");
  });
};

generateRssFeed();
