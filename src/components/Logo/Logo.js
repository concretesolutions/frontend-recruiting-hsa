import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo__container}>
      <h1>
        Github <span>Search</span>
      </h1>
    </div>
  );
};
export default Logo;
