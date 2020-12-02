import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.scss";
const SearchBox = () => {
  const handleClick = () => {
    console.log("search Click");
  };
  return (
    <div className={styles.searchbox__container}>
      <input
        type="text"
        name="search"
        className={styles.searchbox__input}
        // placeholder="search..."
      />
      <a href="/#" onClick={handleClick} className={styles.searchbox__button}>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className={styles.searchbox__icon}
        />
      </a>
    </div>
  );
};
export default SearchBox;
