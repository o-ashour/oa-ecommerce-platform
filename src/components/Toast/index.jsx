import styles from "./style.module.css";
import CheckIcon from "../icons/CheckIcon";

function Toast({ showToast }) {
  return (
    <div className={styles.toastWrapper}>
      <div
        className={styles.toast}
        style={{ top: `${showToast ? "0px" : "-80px"}` }}
      >
        <CheckIcon />
        Added to Cart
      </div>
    </div>
  );
}

export default Toast;
