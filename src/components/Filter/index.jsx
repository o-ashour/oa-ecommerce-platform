import { useState } from "react";
import FilterDialog from "./Dialog";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./style.module.css";

const filterTitleOptions = [
  { name: "category", title: "Category" },
  { name: "sort", title: "Sort" },
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

  const setFilterMenuSelection = (state, setState, selectedVal) => {
    const newState = state.map((item) => {
      return { ...item, current: item.name === selectedVal };
    });

    setState(newState);
  };

  const handleClick = (e) => {
    const selectedVal = e.target.value;
    if (name === "category") {
      setFilterMenuSelection(categories, setCategories, selectedVal);
    } else if (name === "sort") {
      setFilterMenuSelection(sortByOptions, setSortByOptions, selectedVal);
    }
    setFilters((prevVal) => {
      return { ...prevVal, [name]: selectedVal };
    });
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
          handleClick={handleClick}
          sortByOptions={sortByOptions}
        />
      )}
    </div>
  );
}

export default Filter;
