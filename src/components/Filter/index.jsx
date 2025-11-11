import { useState } from "react";
import FilterDialog from "./Dialog";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./style.module.css";

const filterTitleOptions = [
  { name: "category", title: "Category" },
  { name: "sortBy", title: "Sort" },
];

function Filter({
  name,
  data,
  categories,
  setCategories,
  setFilters,
  sortByOptions,
  setSortByOptions,
}) {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (e) => {
    if (name === "category") {
      const updatedCategories = categories.map((category) => {
        if (category.name === e.target.value) {
          return { ...category, current: true };
        }

        return { ...category, current: false };
      });

      setCategories(updatedCategories);
      setFilters((prevVal) => {
        return { ...prevVal, category: e.target.value };
      });
    } else if (name === "sortBy") {
      const updatedSortByOptions = sortByOptions.map((sortByOption) => {
        if (sortByOption.name === e.target.value) {
          return { ...sortByOption, current: true };
        }

        return { ...sortByOption, current: false };
      });

      setSortByOptions(updatedSortByOptions);
      setFilters((prevVal) => {
        return { ...prevVal, sort: e.target.value };
      });
    }
  };

  return (
    <div className={styles.filterWrapper}>
      <button
        onClick={() => setShowDialog((prevVal) => !prevVal)}
        className={styles.filterTitleBtn}
      >
        {filterTitleOptions.map((filterTitleOption) =>
          filterTitleOption.name === name ? filterTitleOption.title : null
        )}
        <ChevronDownIcon />
      </button>
      {showDialog && (
        <FilterDialog
          categories={categories}
          name={name}
          data={data}
          handleClick={(e) => handleClick(e, name)}
          sortByOptions={sortByOptions}
        />
      )}
    </div>
  );
}

export default Filter;
