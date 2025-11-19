import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../viewSlice";
import styles from "./style.module.css";
import { initializeCart, removeCartItem } from "../../cartSlice";
import { calculateSubtotal } from "../../utils";
import { updateStockOnCheckout } from "../../productsSlice";
import { useState } from "react";

export default function Cart() {
  const [cartState, setCartState] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const subtotal = calculateSubtotal(cart);

  function handleRemoveCartItem(cartItemToRemove) {
    dispatch(removeCartItem(cartItemToRemove));
  }

  const handleCheckout = () => {
    dispatch(initializeCart());
    dispatch(updateStockOnCheckout(cart));
    setCartState("paid");
  };

  return (
    <div className={styles.cartOuterContainer}>
      <div className={styles.cartInnerContainer}>
        <div className={styles.cartOuterWrapper}>
          {cart.length < 1 && !cartState ? (
            <div className={styles.cartInnerWrapper}>
              <div className={styles.cartMain}>
                <div className={styles.cartHeaderWrapper}>
                  <h1>Your cart is empty</h1>
                </div>
              </div>
              <div className={styles.continueShoppingBtnWrapper}>
                <p>
                  <button
                    type="button"
                    onClick={() => dispatch(changeView("shop"))}
                  >
                    Continue Shopping
                    <span> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          ) : cartState === "paid" ? (
            <div className={styles.cartInnerWrapper}>
              <div className={styles.cartMain}>
                <div className={styles.cartHeaderWrapper}>
                  <h1>Your order has been made!</h1>
                </div>
              </div>
              <div className={styles.continueShoppingBtnWrapper}>
                <p>
                  <button
                    type="button"
                    onClick={() => dispatch(changeView("shop"))}
                  >
                    Continue Shopping
                    <span> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.cartInnerWrapper}>
              <div className={styles.cartMain}>
                <div className={styles.cartHeaderWrapper}>
                  <h1>Shopping cart</h1>
                </div>

                <div className={styles.productItemsSection}>
                  <div className={styles.productItemsWrapper}>
                    <ul>
                      {cart.map((cartItem) => (
                        <li key={cartItem.id}>
                          <div className={styles.productItemImageWrapper}>
                            <img alt="product image" src={cartItem.image} />
                          </div>

                          <div className={styles.productItemDetailsWrapper}>
                            <div className={styles.productItemDetailsTop}>
                              <h3>{cartItem.name}</h3>
                              <p>${cartItem.price}</p>
                            </div>
                            <div className={styles.productItemDetailsBottom}>
                              <p>Qty {cartItem.qtyInCart}</p>
                              <div
                                className={
                                  styles.productItemDetailsBottomBtnWrapper
                                }
                              >
                                <button
                                  id={cartItem.id}
                                  onClick={() => handleRemoveCartItem(cartItem)}
                                  type="button"
                                >
                                  Remove
                                </button>
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
                  <p>${subtotal}</p>
                </div>
                <p className={styles.cartSubtotalSubtitle}>
                  Shipping and taxes calculated at checkout.
                </p>
                <div className={styles.checkoutBtnWrapper}>
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
                <div className={styles.continueShoppingBtnWrapper}>
                  <p>
                    or{" "}
                    <button
                      type="button"
                      onClick={() => dispatch(changeView("shop"))}
                    >
                      Continue Shopping
                      <span> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
