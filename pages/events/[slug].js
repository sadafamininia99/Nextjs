import { useRouter } from "next/router";
export default function EventPage() {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>sluggggg</h1>
      <h1>{router.query.slug}</h1>
      <button onClick={() => router.push("/")}>click </button>
      
    </div>
  );
}
