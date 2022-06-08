import Link from "next/link"



export default function NotFounded(){

    return(
        <>
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link href={'/'}>
                <a>Página Incial</a>
            </Link>
        </>
    )
}