// import json from "../../data.json";
import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import ProductItem from "../../components/ProductItem";
import Filter from "../../components/Filter";
import styles from "./style.module.css";

function Shop({ cartItems, setCartItems, data, setData }) {
  return (
    <div className={styles.shopContainerOuter}>
      <div className={styles.productFilterWrapper}>
        <input type="text" placeholder="filter products by name" />
        <div className={styles.productFilterInnerWrapper}>
          <Filter name="category" />
          <Filter name="sortBy" />
        </div>
      </div>

      <div className={styles.shopContainerInner}>
        {data.map((product) => (
          <ProductItem
            key={product.id}
            productId={product.id}
            productImgAlt="Front of men's Classic Denim Jacket."
            productImgUrl={imgUrl}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.stock}
            productCategory={product.category}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setData={setData}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
