import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { ResultUsers } from './ResultUsers';
import { Link } from "react-router-dom";


export const Nav = () => {
    let { setSearch, search, searchUser } = useContext(UserContext)

    return (
        <>
            <nav className="nav-container">
                <div className="nav-containerTittle">
                    <Link to="/" className="nav-link">
                        <h3 className="nav-partOneTitle">Github</h3>
                    </Link>
                    <Link to="/" className="nav-link">
                        <h3 className="nav-partTwoTitle">Search</h3>
                    </Link>
                </div>
                <div className="nav-containerInput">
                    <div className="nav-borderInput">
                        <input className="nav-input" placeholder="Nombre de usuario" value={search} type="text" onChange={ (e) => setSearch(e.target.value)} />
                        <button className="nav-btnInput" onClick={() => searchUser() }>
                            <img className="nav-imgInput" src="https://i.ibb.co/QD0q88v/lupa.png" alt="Lupa de búsqueda"/>
                        </button>
                    </div>
                </div>
            </nav>
            <ResultUsers />
        </>
    )
}

export default Nav;
