import React, { useState } from 'react'
import './cssComponents/search.css'


const Search = () => {

    const [data, setData] = useState({});
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState ([]);

    const onChangeHandler = e => {
        setUserName(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();
        //Calling GitHub API
        const user = await fetch(`https://api.github.com/users/${userName}`); 
        const userJson = await user.json();
        //Fetching repo from user
        const repos = await fetch(userJson.repos_url);
        const repoJson = await repos.json();

        if (userJson) {
            setData(userJson);
            setRepos(repoJson);
        }
    };

    return (
        <div className="searchContainer">
            <div className="title">
                <h3 className="titleOne">Github</h3>
                <h3 className="titleTwo">Search</h3>
            </div>
            <div className="searchInput">
                <input 
                type="text" 
                className="searchName" 
                placeholder="Buscar nombre de usuario"
                value={userName}
                onChange={onChangeHandler}
                />
                <button
                className="searchBtn"
                type="submit"
                onClick={submitHandler}
                >
                <i className="fas fa-search"></i>  
                </button>
            </div>                        
        </div>
    )
}

export default Search
