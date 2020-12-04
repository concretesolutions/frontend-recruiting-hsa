import React from "react";
import Link from "react-router-dom/Link";
import styles from "./Logo.module.scss";

const Logo = ({ size }) => {
  return (
    <div
      className={`${styles.logo__container} ${styles[`logo__size--${size}`]}`}
    >
      <Link to="/">
        <a>
          <div>
            Github <span>Search</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

Logo.defaultProps = {
  size: "default",
};

export default Logo;
