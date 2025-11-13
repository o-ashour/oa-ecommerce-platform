import { useState } from "react";
import styles from "./style.module.css";
import Filter from "../Filter";
import SearchBar from "./SearchBar";

function FilterPanel({ setFilters, data, categories, setCategories }) {
  const [sortByOptions, setSortByOptions] = useState([
    { name: "Name", current: true },
    { name: "Price: Low to High", current: false },
    { name: "Price: High to Low", current: false },
  ]);

  return (
    <div className={styles.productFilterWrapper}>
      <SearchBar setFilters={setFilters} />
      <div className={styles.productFilterInnerWrapper}>
        <Filter
          name="category"
          data={data}
          categories={categories}
          setCategories={setCategories}
          setFilters={setFilters}
        />
        <Filter
          name="sort"
          data={data}
          sortByOptions={sortByOptions}
          setSortByOptions={setSortByOptions}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
}

export default FilterPanel;
