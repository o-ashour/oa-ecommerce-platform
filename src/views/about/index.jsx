import styles from "./style.module.css";
import FaqList from "../../components/FaqList";

export default function About() {
  return (
    <div className={styles.aboutOuterWrapper}>
      <div className={styles.aboutInnerWrapper}>
        <div className={styles.aboutMissionWrapper}>
          <h1>Our mission</h1>
          <p>
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <FaqList />
      </div>
    </div>
  );
}
