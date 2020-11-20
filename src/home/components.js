import React from 'react';
import logo from "../assets/images/brandbig.png";
import { SearchBar } from "../webcomponents"

export function Home () {
    return (
        <div className="homeViewCtn">
            <div className= "homeYellowBackground"/>
            <div className="homeLogoCtn">
                <img src={logo} className="brandLogoBig"/>
            </div>
            <div className="homeSearchBar">
                <SearchBar/>
            </div>
        </div>
    )
}