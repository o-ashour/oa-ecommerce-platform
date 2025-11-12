import styles from "./style.module.css";

function SearchBar({ setFilters }) {
  const handleChange = (e) => {
    setFilters((prevVal) => {
      return { ...prevVal, name: e.target.value };
    });
  };

  return (
    <input
      type="text"
      placeholder="filter products by name"
      onChange={handleChange}
      className={styles.searchBar}
    />
  );
}

export default SearchBar;
