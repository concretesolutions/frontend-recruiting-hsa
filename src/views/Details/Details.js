import React, { useState, useEffect, useContext } from "react";
import Card from "../../components/Card";
import Searchbox from "../../components/SearchBox";
import Logo from "../../components/Logo";
import CardRepository from "../../components/CardRepository";
import { fetchUserRepo } from "../../webservices";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./Details.module.scss";

const Details = () => {
  const { user, userRepository, userRepo } = useContext(GlobalContext);
  const [repositoryState, setRepositoryState] = useState([]);

  useEffect(() => {
    fetchUserRepo(user.login).then((res) => {
      userRepo(res.data);
    });
  }, [user]);

  useEffect(() => {
    let repository = [];
    if (userRepository && Array.isArray(userRepository)) {
      repository = userRepository.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      setRepositoryState(repository);
    }
  }, [userRepository]);

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
          {repositoryState.length !== 0 &&
            repositoryState.map((repo) => (
              <div className={styles.details__repository_item}>
                <CardRepository
                  key={repo.id}
                  title={repo.name}
                  description={repo.description !== null}
                  score={repo.stargazers_count}
                  url={repo.html_url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
