import { useState } from "react";
import FilterDialog from "./Dialog";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./style.module.css";

const filterTitleOptions = [
  { name: "category", title: "Category" },
  { name: "sortBy", title: "Sort" },
];

function Filter({ name }) {
  const [showDialog, setShowDialog] = useState(false);

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
      {showDialog && <FilterDialog name={name} />}
    </div>
  );
}

export default Filter;
