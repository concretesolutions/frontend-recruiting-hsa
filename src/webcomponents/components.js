import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


export function SearchBar () {

    const [inputTxt, setInputTxt] = useState("");
    let history = useHistory();

    const handleInputChange = (event) => {
        setInputTxt(event.target.value)
    }

    const handleSearch = () => {
        history.push(`/users/${inputTxt}`)
    }

    return (
        <form onSubmit={handleSearch} className="searchBarCtn">
            <input className="searchBarInput" value={inputTxt} onChange={handleInputChange} placeholder="Búsca a usuarios aquí"/>
            <button type="submit" className="searchBarBtn" value="Submit" > <FontAwesomeIcon icon={faSearch}/> </button>
        </form>
    )
}

export function UserSummary (props) {

    return (
        <div className="userSummaryCtn">
            <UserCard userURL={props.userData.html_url} avatarURL={props.userData.avatar_url}
                userName={props.userData.name} userLogin={props.userData.login} />
        </div>
    )
}

export function UserCard (props) {

    return(
        <div className="userCardCtn">
            <a href={props.userURL} className="userCardAvatarCtn">
                <img src={props.avatarURL} className="userCardAvatar"/>
            </a>
            <div className="userCardInfoCtn">
                <h1>{props.userName}</h1>
                <h2>{props.userLogin} </h2>
                <h3>{}</h3>
            </div>
        </div>
    )
}