import Link from "next/link";

import styles from '../styles/Navbar.module.css'


export default function Navbar() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/sobre"}>
            <a>Sobre nós</a>
          </Link>
        </li>
        <li>
          <Link href={"/produtos"}>
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href={"/tarefas"}>
            <a>Lista de tarefas</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
