import json from "../../../data.json";
import styles from "./style.module.css";

const sortOptions = [
  { name: "Name", current: true },
  { name: "Price: Low to High", current: false },
  { name: "Price: High to Low", current: false },
];

const categoryArr = [];
json.forEach((element) => categoryArr.push(element.category));
const newSet = new Set(categoryArr);
const categories = [{ name: "All", current: true }];
[...newSet].forEach((category) =>
  categories.push({ name: category, current: false })
);

function FilterDialog({ name }) {
  const options = {
    sortBy: sortOptions,
    category: categories,
  };

  return (
    <ul className={styles.dialog}>
      <div className={styles.dialogInnerWrapper}>
        {options[name].map((option) => (
          <li key={option.name}>
            <button
              className={
                option.current ? styles.dialogBtnActive : styles.dialogBtn
              }
            >
              {option.name}
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
}

export default FilterDialog;
