import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faAt,
  faBookOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.scss";

const Card = ({
  name,
  username,
  followers,
  email,
  bio,
  avatar,
  urlProfile,
}) => {
  console.log("PROPS: ", bio);

  return (
    <div className={styles.card__container}>
      <div className={styles.image__container}>
        <a href={urlProfile}>
          <img src={avatar} alt="" />{" "}
        </a>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__name}>
          <a href={urlProfile}>
            <h3>{name || username}</h3>
          </a>
          <p>{username}</p>
        </div>
        <div className={styles.card__userInfo}>
          {followers !== "" && (
            <p>
              <FontAwesomeIcon
                icon={faUserFriends}
                size="lg"
                className={styles.card__icon}
              />
              {followers}
            </p>
          )}
          {email && (
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className={styles.card__icon}
              />
              {email}
            </p>
          )}
          {bio && (
            <p>
              <FontAwesomeIcon
                icon={faBookOpen}
                size="lg"
                className={styles.card__icon}
              />
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
