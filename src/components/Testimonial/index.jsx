import imgUrl8 from "../../assets/images/Group 35.png";
import styles from "./style.module.css";

function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialSectionInnerWrapper}>
        <figure>
          <blockquote>
            <p>
              “Fantastic items, great customer service, and everything came on
              time! I don't think about going anywhere now except O&A to get my
              stitches for the season. One less decision to have to make!”
            </p>
          </blockquote>
          <figcaption>
            <img alt="" src={imgUrl8} />
            <div className={styles.authorWrapper}>
              <div className={styles.authorName}>Omar Ashour</div>
              <svg width={3} height={3} viewBox="0 0 2 2">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className={styles.authorRole}>Happy Customer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
