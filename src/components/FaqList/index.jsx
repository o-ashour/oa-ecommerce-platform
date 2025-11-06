import FaqItem from "../FaqItem";
import styles from "./style.module.css";

function FaqList() {
  return (
    <ul className={styles.faqList}>
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </ul>
  );
}

export default FaqList;
