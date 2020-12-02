import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import styles from "./Home.module.scss";
import { fetchUsername } from "../../webservices";

const Home = () => {
  // const onChange = (e) => {
  //   console.log("prueba: ", e.target.value);
  //   fetchUsername(e.target.value);
  // };

  return (
    <div className={styles.home__container}>
      <Logo />
      <SearchBox fetchUsername={fetchUsername} />
    </div>
  );
};

export default Home;
