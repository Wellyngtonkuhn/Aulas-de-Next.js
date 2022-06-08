import Link from "next/link";

export async function getStaticProps(context){
    const { params } = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.tarefasId}`)

    const tarefasList = await data.json()

    return {
        props: {tarefasList }
    }
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((tarefa)=>{
        return{
            params:{
                tarefasId: `${tarefa.id}`
            }
        }
    })
    return { paths, fallback: false }
}


export default function Terefa({ tarefasList }){

    return(
        <>
            <Link href={'/tarefas'}>
                <a>Voltar</a>
            </Link>
            <h1>Exibindo a terefa: {tarefasList.id}</h1>
            <h3>Texto: {tarefasList.title}</h3>
            <p>
                Cometário: la la la...
                <Link href={`/tarefas/${tarefasList.id}/comentarios/1`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>
                Cometário: la la la...
                <Link href={`/tarefas/${tarefasList.id}/comentarios/2`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>
                Cometário: la la la...
                <Link href={`/tarefas/${tarefasList.id}/comentarios/3`}>
                    <a>Detalhes</a>
                </Link>
            </p>
        </>
    )
}





