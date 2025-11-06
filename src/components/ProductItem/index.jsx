import styles from "./style.module.css";

function ProductItem({
  productId,
  productImgAlt,
  productImgUrl,
  productName,
  productPrice,
}) {
  return (
    <div key={productId} className={styles.productContainer}>
      <img alt={productImgAlt} src={productImgUrl} />
      <div className={styles.productDescriptionContainer}>
        <div>
          <h3>{productName}</h3>
          <p className={styles.productQty}>In stock: 3</p>
          <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
        <div>
          <p className={styles.productPrice}>${productPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
