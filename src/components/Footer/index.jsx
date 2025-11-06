import styles from "./style.module.css";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <div className={styles.attribution}>
      <small>&copy;2025 Omar & Ali Inc.</small>
      <SocialLinks />
    </div>
  );
}

export default Footer;
