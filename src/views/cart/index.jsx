import json from "../../data.json";
import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import styles from "./style.module.css";

const products = [json[0], json[1], json[2]];

export default function Cart() {
  return (
    <div className={styles.cartOuterContainer}>
      <div className={styles.cartInnerContainer}>
        <div className={styles.cartOuterWrapper}>
          <div className={styles.cartInnerWrapper}>
            <div className={styles.cartMain}>
              <div className={styles.cartHeaderWrapper}>
                <h1>Shopping cart</h1>
              </div>

              <div className={styles.productItemsSection}>
                <div className={styles.productItemsWrapper}>
                  <ul>
                    {products.map((product) => (
                      <li key={product.id}>
                        <div className={styles.productItemImageWrapper}>
                          <img alt="product image" src={imgUrl} />
                        </div>

                        <div className={styles.productItemDetailsWrapper}>
                          <div className={styles.productItemDetailsTop}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                          </div>
                          <div className={styles.productItemDetailsBottom}>
                            <p>Qty 1</p>
                            <div
                              className={
                                styles.productItemDetailsBottomBtnWrapper
                              }
                            >
                              <button type="button">Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.cartFinalizeWrapper}>
              <div className={styles.cartSubtotalWrapper}>
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className={styles.cartSubtotalSubtitle}>
                Shipping and taxes calculated at checkout.
              </p>
              <div className={styles.checkoutBtnWrapper}>
                <button>Checkout</button>
              </div>
              <div className={styles.continueShoppingBtnWrapper}>
                <p>
                  or{" "}
                  <button type="button">
                    Continue Shopping
                    <span> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
