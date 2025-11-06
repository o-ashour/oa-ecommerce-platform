import ImageGrid from "../../components/ImageGrid";
import Newsletter from "../../components/Newsletter";
import Testimonial from "../../components/Testimonial";
import styles from "./style.module.css";

function Home({ setView }) {
  return (
    <>
      <section className={styles.collectionPreview}>
        <div className={styles.outerWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.description}>
              <h1>Fall styles are finally here</h1>
              <p>
                This year, our new autumn collection will keep you feeling nice
                and cozy while maintaining your chic.
              </p>
            </div>
            <div>
              <div className={styles.imageGridOuterContainer}>
                <ImageGrid />
                <button
                  type="button"
                  className={styles.shopCollectionBtn}
                  onClick={() => setView("shop")}
                >
                  Shop Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default Home;
