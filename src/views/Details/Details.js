import React, { useEffect, useContext } from "react";
import styles from "./Details.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import Card from "../../components/Card";
import Searchbox from "../../components/SearchBox";
import Logo from "../../components/Logo";

const Details = () => {
  const { user } = useContext(GlobalContext);
  console.log("recibido: ", user.avatar_url);

  return (
    <div className={styles.details__container}>
      <div className={styles.details__searchbox__container}>
        <div className={styles.details__logo}>
          <Logo size="small" />
        </div>
        <div className={styles.details__searchbox}>
          <Searchbox />
        </div>
      </div>
      {user.length !== 0 && (
        <Card
          name={user.name || user.login}
          username={user.login}
          followers={user.followers}
          email={user.email}
          bio={user.bio}
          avatar={user.avatar_url}
          urlProfile={user.html_url}
        />
      )}
    </div>
  );
};

export default Details;
