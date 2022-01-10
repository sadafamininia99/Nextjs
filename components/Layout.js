import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={StyleSheet.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ events | find the collest parties",
  description: "find music ",
  keywords: "music,dj,events",
};
