import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.scss";
const SearchBox = (props) => {
  const [usernameState, setUsernameState] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    props.fetchUsername(usernameState);
  };

  const handleInputChange = (event) => {
    setUsernameState(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={styles.searchbox__container}>
      <input
        type="text"
        name="search"
        onChange={handleInputChange}
        className={styles.searchbox__input}
        // placeholder="search..."
      />
      <button
        href="/#"
        type="submit"
        onClick={onChange}
        className={styles.searchbox__button}
      >
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className={styles.searchbox__icon}
        />
      </button>
    </div>
  );
};
export default SearchBox;
