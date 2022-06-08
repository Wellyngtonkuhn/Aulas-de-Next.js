import NavBar from "./NavBar";
import Footer from "./Footer";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
