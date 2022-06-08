import styles from "../../styles/Home.module.css";
import style from "../../styles/Tarefas.module.css";

import Link from "next/link";

// função para pre-rendering

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const tarefas = await data.json();

  return {
    props: { tarefas },
  };
}

export default function Tarefas({ tarefas }) {
  return (
    <>
      <h1 className={styles.title}>Tarefas para fazer:</h1>
      <ul className={style.tarefalist}>
        {tarefas.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Link href={`/tarefas/${todo.id}`}>
              <a>Ver mais</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
