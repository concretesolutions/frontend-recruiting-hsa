import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.scss";
import { fetchUser } from "../../webservices";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { routes } from "../../Routes";

const SearchBox = () => {
  const { userInfo } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const onChange = () => {
    if (search) {
      fetchUser(search)
        .then((res) => {
          userInfo(res.data);
          setSearch("");
          res.data && history.push(routes.details(res.data.login));
        })
        .catch((error) => error && history.push(routes.notfound()));
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const onKeyEnter = (event) => {
    if (event.key === "Enter") {
      onChange();
    }
  };

  return (
    <div className={styles.searchbox__container}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleInputChange}
        onKeyPress={onKeyEnter}
        className={styles.searchbox__input}
      />
      <button
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
