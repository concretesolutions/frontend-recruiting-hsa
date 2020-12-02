import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.scss";
import { fetchUser } from "../../webservices";

const SearchBox = () => {
  const [userState, setUserState] = useState("");
  const onChange = (e) => {
    // e.preventDefault();
    try {
      fetchUser(userState)
        .then((res) => {
          console.log("res.data: ", res.data);
        })
        .finally(() => {
          // setIsLoading(false);
          console.log("finally");
        });
    } catch (err) {
      // setError(err);
      // setIsLoading(false);
      console.log("error: ", err);
    }
  };

  const handleInputChange = (event) => {
    setUserState(event.target.value);
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
