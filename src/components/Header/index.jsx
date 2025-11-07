import Nav from "../Nav";
import styles from './style.module.css'

export default function Header({ setView, totalNItemsInCart }) {
  return (
    <header className={styles.header}>
      <Nav setView={setView} totalNItemsInCart={totalNItemsInCart} />
    </header>
  );
}