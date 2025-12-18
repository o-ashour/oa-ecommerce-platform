import { useDispatch, useSelector } from "react-redux";
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
  const cart = useSelector((state) => state.cart);

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

  async function handleAddToCart() {
    if (product.stock < 1) return;
    dispatch(addCartItem(product));
    displayNotificationToUser();

    const addCartItemToSession = async () => {
      const cartInSession = JSON.parse(sessionStorage.getItem("cart"));
      if (cartInSession) {
        sessionStorage.setItem(
          "cart",
          JSON.stringify([...cartInSession, { ...product, qtyInCart: 1 }])
        );
      } else {
        sessionStorage.setItem(
          "cart",
          JSON.stringify([{ ...product, qtyInCart: 1 }])
        );
      }
    };

    const updateCartItemInSession = async () => {
      const cartInSession = JSON.parse(sessionStorage.getItem("cart"));

      const foundProduct = cartInSession.find((item) => item.id === product.id);

      const filteredCartInSession = cartInSession.filter(
        (item) => item.id !== product.id
      );

      sessionStorage.setItem(
        "cart",
        JSON.stringify([
          ...filteredCartInSession,
          { ...foundProduct, qtyInCart: foundProduct.qtyInCart + 1 },
        ])
      );
    };

    if (cart.find((item) => item.id === product.id)) {
      updateCartItemInSession();
    } else {
      addCartItemToSession();
    }
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
