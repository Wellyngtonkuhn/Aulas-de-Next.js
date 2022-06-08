import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
        <meta name="description" content="exmeplo de teste" />
        <meta name="keywords" content="Paulo, Maria e José" />
      </Head>
      <main>
        <h1 className={styles.title}>Página sobre</h1>
      </main>
    </>
  );
}
