import styles from "./style.module.css";

function ProductItem({
  productId,
  productImgAlt,
  productImgUrl,
  productName,
  productPrice,
  productQuantity,
  productCategory,
  cartItems,
  setCartItems,
  setData,
  data,
  setShowToast,
  showToast,
  setTotalNItemsInCart,
}) {
  const product = {
    id: productId,
    name: productName,
    category: productCategory,
    price: productPrice,
    stock: productQuantity,
    image: productImgUrl,
  };

  function compareFn(a, b) {
    return a.id - b.id;
  }

  function updateCart() {
    const foundCartItem = cartItems.find((item) => item.id === product.id);

    if (!foundCartItem) {
      setCartItems((prevVal) =>
        [...prevVal, { ...product, qtyInCart: 1 }].sort((a, b) => a.id - b.id)
      );
    } else {
      setCartItems((prevVal) =>
        [
          ...prevVal.filter((item) => item !== foundCartItem),
          { ...product, qtyInCart: foundCartItem.qtyInCart + 1 },
        ].sort(compareFn)
      );
    }
  }

  function updateInventory() {
    const foundDataItem = data.find((item) => item.id === product.id);
    setData((prevVal) =>
      [
        ...prevVal.filter((item) => item !== foundDataItem),
        { ...foundDataItem, stock: foundDataItem.stock - 1 },
      ].sort(compareFn)
    );
  }

  function displayNotificationToUser() {
    if (!showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  function incrementNItemsInCart() {
    setTotalNItemsInCart((prevVal) => prevVal + 1);
  }

  function handleAddToCart() {
    if (product.stock < 1) return;
    incrementNItemsInCart();
    updateCart();
    displayNotificationToUser();
    updateInventory();
  }

  const isOutOfStock = product.stock < 1;

  return (
    <div className={styles.productContainer}>
      <img alt={productImgAlt} src={productImgUrl} />
      <div className={styles.productDescriptionContainer}>
        <div>
          <h3>{productName}</h3>
          <p className={styles.productQty}>In stock: {productQuantity}</p>
          <button
            id={product.id}
            type="button"
            className={styles.addToCartBtn}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            Add to Cart
          </button>
        </div>
        <div>
          <p className={styles.productPrice}>${productPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
