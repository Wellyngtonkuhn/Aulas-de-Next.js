import Link from "next/link";
import Head from "next/dist/shared/lib/head";




export default function Shirt(){
    return (
        <>          
            <Head>
                <title>Shirt</title>
            </Head>

            <h2>Shirt - 19.99</h2>

            <li>
                <Link href={'/produtos'}>
                    <a>Voltar</a>
                </Link>
            </li>
        </>
    )
}