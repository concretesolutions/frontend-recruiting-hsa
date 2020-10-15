import React from 'react'

export const Home = () => {
    return (
        <div className="home-container">
            <div className="home-containerTittle">
                <h3 className="home-partOneTitle">Github</h3>
                <h3 className="home-partTwoTitle">Search</h3>
            </div>
            <div className="home-containerInput">
                <div className="home-borderInput">
                    <input className="home-input" type="text"/>
                    <button className="home-btnInput">
                        <img className="home-imgInput" src="https://i.ibb.co/QD0q88v/lupa.png" alt="Lupa de búsqueda"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
