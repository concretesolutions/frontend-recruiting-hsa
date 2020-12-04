import React from "react";
import Logo from "../../components/Logo";
import Searchbox from "../../components/SearchBox";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notfound__container}>
      <div className={styles.notfound__searchbox__container}>
        <div className={styles.notfound__logo}>
          <Logo size="small" />
        </div>
        <div className={styles.notfound__searchbox}>
          <Searchbox />
        </div>
      </div>
      <div className={styles.notfound__message}>
        <span> User not found :(</span>
      </div>
    </div>
  );
};

export default NotFound;
