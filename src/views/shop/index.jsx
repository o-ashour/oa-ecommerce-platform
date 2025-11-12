import imgUrl from "../../assets/images/product_images/Veste en denim classique.png";
import ProductItem from "../../components/ProductItem";
import Filter from "../../components/Filter";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

function Shop({
  cartItems,
  setCartItems,
  data,
  setData,
  setShowToast,
  showToast,
  setTotalNItemsInCart,
}) {
  const [filteredData, setFilteredData] = useState(data);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    category: "All",
    sort: "Name",
  });

  const [sortByOptions, setSortByOptions] = useState([
    { name: "Name", current: true },
    { name: "Price: Low to High", current: false },
    { name: "Price: High to Low", current: false },
  ]);

  const handleChange = (e) => {
    setFilters((prevVal) => {
      return { ...prevVal, name: e.target.value };
    });
  };

  useEffect(() => {
    const categoryArr = [];
    data.forEach((element) => categoryArr.push(element.category));
    const newSet = new Set(categoryArr);
    const categoriesArr = [{ name: "All", current: true }];
    [...newSet].forEach((category) =>
      categoriesArr.push({ name: category, current: false })
    );
    setCategories(categoriesArr);
  }, [data]);

  useEffect(() => {
    let filteredArr = [];
    if (filters.category === "All") {
      filteredArr = data
        .filter((item) =>
          item.name.toLowerCase().includes(filters.name.trim().toLowerCase())
        )
        .sort((a, b) => {
          if (filters.sort === "Name") {
            return b.name < a.name;
          } else if (filters.sort === "Price: Low to High") {
            return a.price - b.price;
          } else if (filters.sort === "Price: High to Low") {
            return b.price - a.price;
          }
        });
    } else {
      filteredArr = data
        .filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(filters.name.trim().toLowerCase()) &&
            item.category === filters.category
        )
        .sort((a, b) => {
          if (filters.sort === "Name") {
            return b.name < a.name;
          } else if (filters.sort === "Price: Low to High") {
            return a.price - b.price;
          } else if (filters.sort === "Price: High to Low") {
            return b.price - a.price;
          }
        });
    }
    setFilteredData(filteredArr);
  }, [filters, data]);

  return (
    <div className={styles.shopContainerOuter}>
      <div className={styles.productFilterWrapper}>
        <input
          type="text"
          placeholder="filter products by name"
          onChange={handleChange}
        />
        <div className={styles.productFilterInnerWrapper}>
          <Filter
            name="category"
            data={data}
            categories={categories}
            setCategories={setCategories}
            setFilters={setFilters}
          />
          <Filter
            name="sortBy"
            data={data}
            sortByOptions={sortByOptions}
            setSortByOptions={setSortByOptions}
            setFilters={setFilters}
          />
        </div>
      </div>

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
            cartItems={cartItems}
            setCartItems={setCartItems}
            setData={setData}
            data={data}
            setShowToast={setShowToast}
            showToast={showToast}
            setTotalNItemsInCart={setTotalNItemsInCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
