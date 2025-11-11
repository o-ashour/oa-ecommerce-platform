import styles from "./style.module.css";

function FilterDialog({ name, handleClick, categories, sortByOptions }) {
  const options = {
    sortBy: sortByOptions,
    category: categories,
  };

  return (
    <ul className={styles.dialog}>
      <div className={styles.dialogInnerWrapper}>
        {options[name].map((option) => (
          <li key={option.name}>
            <button
              value={option.name}
              onClick={handleClick}
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
