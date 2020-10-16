import React from 'react'

export const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-containerTittle">
                <h3 className="nav-partOneTitle">Github</h3>
                <h3 className="nav-partTwoTitle">Search</h3>
            </div>
            <div className="nav-containerInput">
                <div className="nav-borderInput">
                    <input className="nav-input" type="text"/>
                    <button className="nav-btnInput">
                        <img className="nav-imgInput" src="https://i.ibb.co/QD0q88v/lupa.png" alt="Lupa de búsqueda"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
