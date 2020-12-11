import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./LayoutDetails.scss";
const LayoutDetails = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="box">
          <h1>GitHub</h1>
        </div>
        <div className="box">
          <SearchBox />
        </div>
      </header>
      {children}
    </>
  );
};

export default LayoutDetails;
