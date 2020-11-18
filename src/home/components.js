import React from 'react';
import logo from "../assets/images/brandbig.png";

export function Home () {
    return (
        <div>
            <div className="homeLogoCtn">
                <img src={logo} className="brandLogoBig"/>
            </div>
            <h1>Prueba!</h1>
        </div>
    )
}