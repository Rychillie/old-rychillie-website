import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import content from "../data/pages.json";
import Image from "next/image";
import styles from "../styles/About.module.scss";

const Sobre: NextPage = () => {
  const aboutContent = content.aboutPage;
  const { locale } = useRouter();
  const pageLocale = locale === "pt-BR" ? "pt-BR" : "en-US";
  const { title, description, titleContent, contentPage } =
    aboutContent[pageLocale];

  return (
    <Layout
      title={title}
      description={description}
      locale={pageLocale}
      slug={"/about"}
      hasHeader
      hasNewsletter
      hasFooter
    >
      <h1>{titleContent}</h1>

      <Image
        src={"/images/home-office.png"}
        blurDataURL="/images/home-office.png"
        placeholder="blur"
        quality={100}
        width={3840}
        height={2160}
        layout="intrinsic"
        alt="home-office"
      />

      <br />
      <br />

      <div>
        <p dangerouslySetInnerHTML={{ __html: contentPage }}></p>
      </div>
    </Layout>
  );
};

export default Sobre;
