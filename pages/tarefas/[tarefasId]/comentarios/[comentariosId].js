import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comentarios(){

    const router = useRouter()
    const tarefasId = router.query.tarefasId
    const comentariosId = router.query.comentariosId

    return(
        <>
            <Link href={`/tarefas/${tarefasId}`}>
                <a>Voltar</a>
            </Link>
            <h1>Exibindo comentário número: {comentariosId}</h1>
        </>
    )
}



