import styles from "./style.module.css";
import { sortArray } from "../../views/utils";

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
}) {
  const product = {
    id: productId,
    name: productName,
    category: productCategory,
    price: productPrice,
    stock: productQuantity,
    image: productImgUrl,
  };

  function handleClick() {
    if (product.stock < 1) return;
    let updatedCart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        updatedCart = cartItems.filter((item) => item.id !== product.id);
        updatedCart.push({ ...product, qtyInCart: cartItems[i].qtyInCart + 1 });
        const sortedUpdatedCart = sortArray(updatedCart);
        setCartItems(sortedUpdatedCart);
        break;
      }
    }
    if (updatedCart.length < 1) {
      updatedCart = cartItems.filter((item) => item.id !== product.id);
      updatedCart.push({ ...product, qtyInCart: 1 });
      const sortedUpdatedCart = sortArray(updatedCart);
      setCartItems(sortedUpdatedCart);
    }

    if (!showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }

    function findIndex() {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === product.id) return i;
      }
    }

    const foundIdx = findIndex();
    const foundItem = data[foundIdx];
    const updatedItem = { ...foundItem, stock: foundItem.stock - 1 };
    const updatedData = data.filter((item) => item.id !== product.id);
    updatedData.push(updatedItem);
    function compareFn(a, b) {
      return a.id - b.id;
    }
    updatedData.sort(compareFn);
    setData(updatedData);
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
            type="button"
            className={styles.addToCartBtn}
            onClick={handleClick}
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
