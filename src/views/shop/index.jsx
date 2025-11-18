import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import ProductItem from "../../components/ProductItem";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import FilterPanel from "../../components/FilterPanel";
import { getProductCategoriesFromData } from "../../utils";
import { useSelector } from "react-redux";

function Shop({ setShowToast, showToast }) {
  const products = useSelector(state => state.products);
  const [filteredData, setFilteredData] = useState(products);
  const [filters, setFilters] = useState({
    name: "",
    category: "All",
    sort: "Name",
  });
  const [categories, setCategories] = useState([
    { name: "All", current: true },
  ]);

  useEffect(() => {
    const productCategories = getProductCategoriesFromData(
      { name: "All", current: true },
      products
    );

    setCategories(productCategories);
  }, [products]);

  useEffect(() => {
    function sortByComparisonFn(a, b) {
      if (filters.sort === "Name") {
        return b.name < a.name;
      } else if (filters.sort === "Price: Low to High") {
        return a.price - b.price;
      } else if (filters.sort === "Price: High to Low") {
        return b.price - a.price;
      }
    }
    function isNameMatch(item) {
      return item.name
        .toLowerCase()
        .includes(filters.name.trim().toLowerCase());
    }
    let filteredArr = [];
    if (filters.category === "All") {
      filteredArr = products.filter(isNameMatch);
    } else {
      filteredArr = products.filter(
        (item) => isNameMatch(item) && item.category === filters.category
      );
    }
    setFilteredData(filteredArr.sort(sortByComparisonFn));
  }, [filters, products]);

  return (
    <div className={styles.shopContainerOuter}>
      <FilterPanel
        setFilters={setFilters}
        categories={categories}
        setCategories={setCategories}
      />

      <div className={styles.shopContainerInner}>
        {filteredData.map((product) => (
          <ProductItem
            key={product.id}
            productId={product.id}
            productImgAlt="Front of men's Classic Denim Jacket."
            productImgUrl={imgUrl}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.stock}
            productCategory={product.category}
            setShowToast={setShowToast}
            showToast={showToast}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
