import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import styles from "./style.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletterOuterContainer}>
      <div className={styles.newsletterInnerContainer}>
        <div className={styles.newsletterInnerWrapper}>
          <div className={styles.newsletterFormWrapper}>
            <h2>Subscribe to our newsletter</h2>
            <p>
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className={styles.subscribeSectionContainer}>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
              />
              <button type="submit">Subscribe</button>
            </div>
          </div>
          <dl className={styles.newsletterDetails}>
            <div className={styles.newsletterDetailsItem}>
              <div className={styles.newsletterDetailsIconWrapper}>
                <CalendarDaysIcon />
              </div>
              <dt>Weekly articles</dt>
              <dd>
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className={styles.newsletterDetailsItem}>
              <div className={styles.newsletterDetailsIconWrapper}>
                <HandRaisedIcon />
              </div>
              <dt>No spam</dt>
              <dd>
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
