import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name='description' content='Encontre a melhor roupa para você' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Hello World Next.js</h1>
      <Image src='/imagens/foto2.jpg' width='400px%' height='400px' alt='Quarto' />

     </div>
       )
}
