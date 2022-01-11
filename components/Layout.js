import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

//defult props
Layout.defaultProps = {
  title: "DJ events | find th  e collest parties",
  description: "find music ",
  keywords: "music,dj,events,albums",
};
