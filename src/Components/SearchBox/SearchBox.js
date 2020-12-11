import React, { useState } from "react";
import { ReactComponent as Search } from "../../Images/Search.svg";
import "./SearchBox.scss";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const [alert, setalert] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const search = () => {
    if (value === "") {
      setalert("ingrese algun nombre para buscar");
    }
  };

  return (
    <>
      <div className="form">
        <input
          className="search-box"
          type="text"
          onChange={handleChange}
          placeholder={"Buscar"}
        />
        <Link to={value === "" ? "/" : `/details?${value}`}>
          <button className="search-button" onClick={search}>
            <Search />
          </button>
        </Link>
      </div>
      <p className="alert">{alert}</p>
    </>
  );
};

export default SearchBox;
