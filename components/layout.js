import Head from "next/head";
import Navigation from "../components/navigation";

export default function Layout({ children }){
  return (
    <div>
      <Head>
        <title>Shopping Card</title>
      </Head>
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  )
}