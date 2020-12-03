import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./CardRepository.module.scss";

const CardRepository = ({ title, description, score, url }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__content}>
        <a href={url}>
          <h3>{title}</h3>
        </a>
        {/* <p>{username}</p> */}
        <p>{description}</p>
        <div className={styles.card__content__score}>
          <p>
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              className={styles.card__icon}
            />
            {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRepository;
