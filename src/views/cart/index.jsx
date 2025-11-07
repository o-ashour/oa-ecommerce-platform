import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import styles from "./style.module.css";

export default function Cart({ cartItems, setCartItems, data, setData }) {
  let subtotal = 0.0;
  cartItems.forEach(
    (item) => (subtotal = subtotal + item.price * item.qtyInCart)
  );
  const roundedSubtotal = Math.round(subtotal).toFixed(2);

  function handleClick(cartItemToRemove) {
    // let updatedCart = [];
    // let foundItem = {};
    // for (let i = 0; i < cartItems.length; i++) {
    //   if (cartItems[i].id === cartItemToRemove.id) {
    //     foundItem = { ...cartItems[i] };
    //   }
    // }
    // if (foundItem.qtyInCart === 1) {
    //   const updatedCart = cartItems.filter(item => item.id !== foundItem.id);
    //   setCartItems(updatedCart)
    // }

    // const updatedCart = [
    //   ...cartItems,
    //   { ...foundItem, qtyInCart: foundItem.qtyInCart - 1 },
    // ];
    console.log('remove item')
  }

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
                    {cartItems.map((cartItem) => (
                      <li key={cartItem.id}>
                        <div className={styles.productItemImageWrapper}>
                          <img alt="product image" src={imgUrl} />
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
                                onClick={() => handleClick(cartItem)}
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
                <p>${roundedSubtotal}</p>
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
