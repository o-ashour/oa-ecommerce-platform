import { useDispatch } from "react-redux";
import styles from "./style.module.css";
import { addCartItem } from "../../cartSlice";

function ProductItem({
  productId,
  productImgAlt,
  productImgUrl,
  productName,
  productPrice,
  productQuantity,
  productCategory,
  setShowToast,
  showToast,
}) {
  const dispatch = useDispatch();

  const product = {
    id: productId,
    name: productName,
    category: productCategory,
    price: productPrice,
    stock: productQuantity,
    image: productImgUrl,
  };

  function displayNotificationToUser() {
    if (!showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  function handleAddToCart() {
    if (product.stock < 1) return;
    dispatch(addCartItem(product));
    displayNotificationToUser();
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
