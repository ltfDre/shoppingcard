import Head from "next/head";
import Link from "next/link";

const styles = {
  body: {
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center",
    lineHeight: "1.6",
  },
  btn: {
    display: "inline-block",
    color: "whitesmoke",
    backgroundColor: "#81BAD5",
    border: "0px solid",
    marginTop: "5px",
    padding: "10px"
  },

  container: {
    maxWidth: "960px",
    margin: "auto",
    padding: " 0 50px",
  },
  title: {
    fontSize: "30px",
    textTransform: "uppercase",
    color: "#333333",
    fontFamily: `Open Sans", sans-serif`,
  }
}

const mainPage = {
  title: "Welcome To Shopping Card",
  url: "https://i.hizliresim.com/CgRfHA.jpg",
}

export default function Main() {
  return (
    <div style={styles.body}>
      <Head>
        <title>Shopping Card</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="showcase">
        <p style={styles.title}>{mainPage.title}</p>
      </header>
      <div>
        <img src={mainPage.url} />
      </div>

      <Link href="/products">
        <a style={styles.btn}>Let's Shopping</a>
      </Link>

    </div>
  )
}