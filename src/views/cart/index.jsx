import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import styles from "./style.module.css";

export default function Cart({
  cartItems,
  setCartItems,
  data,
  setData,
  setView,
  setTotalNItemsInCart,
}) {
  function calculateSubtotal() {
    const subtotal = cartItems.reduce(
      (total, current) => total + current.qtyInCart * current.price,
      0
    );
    return (Math.round(subtotal * 100) / 100).toFixed(2);
  }
  const subtotal = calculateSubtotal();

  function compareFn(a, b) {
    return a.id - b.id;
  }

  function decerementTotalNItemsInCart() {
    setTotalNItemsInCart((prevVal) => prevVal - 1);
  }

  function decrementCartItem(cartItemToRemove) {
    setCartItems((prevVal) =>
      [
        ...prevVal.filter((item) => item !== cartItemToRemove),
        { ...cartItemToRemove, qtyInCart: cartItemToRemove.qtyInCart - 1 },
      ].sort(compareFn)
    );
  }

  function removeCartItem(cartItemToRemove) {
    setCartItems((prevVal) =>
      prevVal.filter((item) => item !== cartItemToRemove).sort(compareFn)
    );
  }

  function updateCart(cartItemToRemove) {
    const foundCartItem = cartItems.find((item) => item === cartItemToRemove);
    if (foundCartItem.qtyInCart > 1) {
      decrementCartItem(foundCartItem);
    } else {
      removeCartItem(foundCartItem);
    }
  }

  function incrementItemInStock(cartItemToRemove) {
    setData((prevVal) =>
      [
        ...prevVal.filter((item) => item.id !== cartItemToRemove.id),
        { ...cartItemToRemove, stock: cartItemToRemove.stock + 1 },
      ].sort(compareFn)
    );
  }

  function updateInventory(cartItemToRemove) {
    const foundDataItem = data.find((item) => item.id === cartItemToRemove.id);
    incrementItemInStock(foundDataItem);
  }

  function handleRemoveCartItem(cartItemToRemove) {
    decerementTotalNItemsInCart();
    updateCart(cartItemToRemove);
    updateInventory(cartItemToRemove);
  }

  const handleCheckout = () => {
    setCartItems([]);
    setTotalNItemsInCart(0);
    setData((prevVal) => prevVal.filter((item) => item.stock > 0));
  };

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
                  <button type="button" onClick={() => setView("shop")}>
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
