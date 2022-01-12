import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

export default function NotFoundPAge() {
  return (
    <Layout title="page not found ">
      <div className="{styles.error}">
        <h1>404</h1>
        <h4>sorry there is nothing here</h4>
        <Link href="/">Go back home </Link>
      </div>
    </Layout>
  );
}
