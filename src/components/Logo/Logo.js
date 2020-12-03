import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ size }) => {
  return (
    <div
      className={`${styles.logo__container} ${styles[`logo__size--${size}`]}`}
    >
      <a href="/">
        <div>
          Github <span>Search</span>
        </div>
      </a>
    </div>
  );
};

Logo.defaultProps = {
  size: "default",
};

export default Logo;
