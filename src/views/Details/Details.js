import React, { useEffect, useContext } from "react";
import styles from "./Details.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import Card from "../../components/Card";
import Searchbox from "../../components/SearchBox";
import Logo from "../../components/Logo";
import CardRepository from "../../components/CardRepository";

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
      <div className={styles.details__user__container}>
        <div className={styles.details__user_card}>
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

        <div className={styles.details__user_repository}>
          <CardRepository
            title="Search Movies with React"
            description="muchas librerias React, hooks, otras"
            score="345"
          />
          <CardRepository
            title="Search Movies with React"
            description="muchas librerias React, hooks, otras"
            score="345"
          />
          <CardRepository
            title="Search Movies with React"
            description="muchas librerias React, hooks, otras"
            score="345"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
