import React from "react";
import LayoutDetails from "../../Layout/LayoutDetails/LayoutDetails";
import "./details.scss";
import CardProfile from "../../Components/CardProfile/CardProfile";
import Star from "../../Images/star.svg";
//hooks
import useApi from "../../Hooks/useApi";
import useApiRepo from "../../Hooks/useApiRepo";
const Details = () => {
  const { userData } = useApi(window.location.search.slice(1));
  const { repoData } = useApiRepo(window.location.search.slice(1));

  return (
    <LayoutDetails>
      <div className="content">
        <div className="content_profile">
          <CardProfile userProfile={userData} />
        </div>
        <div className="content_repo">
          {repoData.map((repos, index) => {
            return (
              <div className="repos" key={index}>
                <a href={repos.html_url} target="_blank" rel="noreferrer">
                  {repos.name === null ? "Sin Nombre" : repos.name}
                </a>
                <p>
                  {repos.description === null
                    ? "Sin Descripcion"
                    : repos.description}
                </p>
                <div className="stars">
                  <img src={Star} alt="Star-icon" className="icon" />
                  <p>{repos.stargazers_count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutDetails>
  );
};

export default Details;
