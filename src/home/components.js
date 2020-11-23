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
                <div className="homeTextsCtn">
                    <h1>
                    ! Explora Github como nunca antes !
                    </h1>
                    <h2>
                        Prueba Ingresando algún nombre de perfil como por ejemplo: "Hola","fabpot","andrew", etc ...
                    </h2>
                </div>
            </div>
        </div>
    )
}