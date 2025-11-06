import { useState } from "react";
import styles from "./style.module.css";

function FaqItem() {
  const [showFAQDialog, setShowFAQDialog] = useState(false);

  return (
    <li className={styles.faqListItem}>
      <div className={styles.faqQuestionWrapper}>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          corporis?
        </h2>
        <div>
          <button
            onClick={() => setShowFAQDialog((prevVal) => !prevVal)}
            className={styles.faqExpandBtn}
          >
            <span>{showFAQDialog ? "-" : "+"}</span>
          </button>
        </div>
      </div>

      {showFAQDialog && (
        <p className={styles.faqAnswerContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          nesciunt corrupti modi, voluptatibus temporibus quos accusantium quae
          odio atque facilis vero incidunt nihil! Enim, fugiat?
        </p>
      )}
    </li>
  );
}

export default FaqItem;