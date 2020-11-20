import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


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
            <button type="submit" className="searchBarBtn" value="Submit" > <i className="fas fa-search"/> </button>
        </form>
    )
}

export function UserSummary (props) {

    let history = useHistory();

    const handleSearch = () => {
        history.push(`/users/${props.userInfo}`)
    }

    return (
        <div className="userSummaryCtn">
            <img src={props.userData.avatar_url} className="userSummaryAvatar" onClick={handleSearch}/>
        </div>
    )
}