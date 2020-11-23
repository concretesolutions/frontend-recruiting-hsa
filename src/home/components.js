import React from 'react';
import logo from "../assets/images/brandbig.png";
import { SearchBar } from "../webcomponents"

/* Home Component Module */

export function Home () {
    return (
        <div className="homeViewCtn">
            <div className= "homeYellowBackground"/>
            <div className="homeLogoCtn">
                <img src={logo} className="brandLogoBig"/>
            </div>
            <div className="homeSearchBarCtn">
                <SearchBar/>
            </div>
            <div className="homeTitleCtn">
                <h1>
                ! Explora Github como nunca antes !
                </h1>
            </div>
        </div>
    )
}