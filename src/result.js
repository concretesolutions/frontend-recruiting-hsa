import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBox, faGlobe, faMap, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons'

const Result = () => {
    let { username } = useParams();

    const [flag, setFlag] = useState();

    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [user, setUser] = useState('');
    const history = useHistory();

    const searchUser = (e) => {
        e.preventDefault();
        history.push('/result/'+ user);
    };

    const getRepoData = () => {
        const url = 'https://api.github.com/users/' + username + '/repos';
        let reposArray = [];
        fetch(url, { method: 'get' })
            .then(
                function(response) {
                    if(response.status === 200) {
                        response.json().then(function(data){
                            
                            for(let repo of data) {
                                
                                reposArray.push({
                                    id: repo.id,
                                    name: repo.name,
                                    description: repo.description,
                                    forks_count: repo.forks_count,
                                });
                                
                            }
                            setUserRepos(reposArray);
                        });
                    } 
                }
            );
    };

    const getUserData = () => {
        const url = 'https://api.github.com/users/' + username;
        fetch(url, { method: 'get' })
            .then(
                function(response) {
                    if(response.status === 200) {
                        setFlag(true);
                        response.json().then(function(data){
                            setUserData({
                                avatar_url: data.avatar_url,
                                name: data.name,
                                login: data.login,
                                bio: data.bio,
                                location: data.location,
                                public_repos: data.public_repos,
                                followers: data.followers,
                                following: data.following,
                            }
                            

                            );
                            
                        });
                        //getRepoData();
                    } else {
                        setFlag(false);
                    }
                }
            );
    };


    useEffect(getUserData, [username]);
    useEffect(getRepoData, [username]);
    
    
    return (
        <div className="container">
            
            <div>
                <div className="searchBoxResult">
                    <div className="searchTitleResult">
                        <span className="spanBold">Github</span> <span  className="spanItalic">Search</span>
                    </div>
                    <form>
                        <input onChange={(e)=>setUser(e.target.value)} type="text" name="search" />
                        <button onClick={searchUser}><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
                { flag ?
                <div className="resultsContainer">
                    <div className="leftCol">
                        <div className="profilePicture">
                            <img src={userData.avatar_url} alt="user" width="100%" />
                        </div>
                        <div className="profileName">{userData.name}</div>
                        <div className="profileUsername">{userData.login}</div>
                        <ul className="userData">
                            <li><FontAwesomeIcon icon={faGlobe} />&nbsp;&nbsp;{userData.bio}</li>
                            <li><FontAwesomeIcon icon={faMap} />&nbsp;&nbsp;{userData.location}</li>
                            <li><FontAwesomeIcon icon={faStar} />&nbsp;&nbsp;{userData.following}</li>
                            <li><FontAwesomeIcon icon={faBox} />&nbsp;&nbsp;{userData.public_repos}</li>
                            <li><FontAwesomeIcon icon={faUsers} />&nbsp;&nbsp;{userData.followers}</li>
                        </ul>
                    </div>
                    <div className="rightCol">
                        {
                            userRepos.map(repo => (
                                <div key={repo.id} className="repoContainer">
                                    <div className="repoTitle">{repo.name}</div>
                                    <div className="repoDesc">{repo.description}</div>
                                    <div className="repoStars"><FontAwesomeIcon icon={faStar} />&nbsp;&nbsp;{repo.forks_count}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                : 
                <div className="resultsContainer">
                    <h2>User not found :(</h2>
                </div>
                }
            </div>
            
        </div>
    );
};

export default Result;