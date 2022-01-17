import Layout from "@/components/Layout";
import {API_URL} from '@/config/index'


export default function HomePage({events}) {
  console.log('reefee')
  return (
    <Layout>
      <h1>UPcoming events.</h1>
    </Layout>
  );
}

export async function getServerSideProps(){
  const res=await fetch(`${API_URL}/api/events`)
  const events=await res.json()

// console.log(events)log
  return {
    props:{events}
  }
}