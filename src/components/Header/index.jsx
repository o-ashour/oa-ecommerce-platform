import Nav from "../Nav";
import styles from './style.module.css'

export default function Header({ setView }) {
  return (
    <header className={styles.header}>
      <Nav setView={setView} />
    </header>
  );
}