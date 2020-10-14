import Head from "next/head";
import Main from "./main";
import Layout from "../components/layout";


export default function HomePage(){
  return(
    <Layout>
      <Head>
        <title>Shopping Card</title>
      </Head>
      <Main />
    </Layout>
  )
}