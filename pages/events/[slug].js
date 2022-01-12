import { useRouter } from "next/router";
import Layout from "@/components/Layout";
export default function EventPage() {
  const router = useRouter();

  console.log(router);

  return (
    <Layout>
      <h1>sluggggg</h1>
      <h1>{router.query.slug}</h1>
      <button onClick={() => router.push("/")}>click </button>
      
    </Layout>
  );
}
