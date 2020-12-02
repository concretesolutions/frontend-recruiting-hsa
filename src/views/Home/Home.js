import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home__container}>
      <Logo />
      <SearchBox />
    </div>
  );
};

export default Home;
