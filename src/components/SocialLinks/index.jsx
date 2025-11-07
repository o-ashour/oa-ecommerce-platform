import styles from "./style.module.css";
import { SocialLinksConfig } from "../../config";

function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {SocialLinksConfig.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a href={socialLink.url}>{socialLink.icon}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
