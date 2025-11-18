import Nav from "../Nav";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}
