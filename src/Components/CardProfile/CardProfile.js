import React from "react";
import profile from "../../Images/profile.jpeg";
import "./CardProfile.scss";
//icons
import Organization from "../../Images/organization.svg";
import Location from "../../Images/location.svg";
import Star from "../../Images/star.svg";
import Repo from "../../Images/repositorie.svg";
import Followers from "../../Images/followers.svg";
const CardProfile = ({ userProfile }) => {
  const {
    avatar_url,
    name,
    login,
    company,
    location,
    public_repos,
    followers,
    html_url,
  } = userProfile;
  return (
    <div className="card">
      <a href={html_url} target="_blank" rel="noreferrer">
        <img
          src={avatar_url === null ? profile : avatar_url}
          className="profile-image"
          alt="foto de perfil"
        />
      </a>
      <div className="card-content">
        <a href={html_url} target="_blank" rel="noreferrer">
          {name === null ? "Sin Nombres" : name}
        </a>
        <p className="mail">
          {login === null ? "Sin nombre de usuario" : login}
        </p>

        <ul>
          <li>
            <img src={Organization} alt="Organization-icon" className="icon" />
            <p>{company === null ? "Sin Compañia" : company}</p>
          </li>
          <li>
            <img src={Location} alt="Location-icon" className="icon" />
            <p>{location === null ? "Sin Locacion" : location}</p>
          </li>
          <li>
            <img src={Star} alt="Star-icon" className="icon" />
            <p>9.900</p>
          </li>
          <li>
            <img src={Repo} alt="Repo-icon" className="icon" />
            <p>{public_repos}</p>
          </li>
          <li>
            <img src={Followers} alt="Followers-icon" className="icon" />
            <p>{followers}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProfile;
