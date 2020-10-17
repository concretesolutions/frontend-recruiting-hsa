import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { ResultUsers } from './ResultUsers';


export const Nav = () => {
    let { setSearch, search, searchUser } = useContext(UserContext)

    return (
        <>
            <div className="nav-container">
                <div className="nav-containerTittle">
                    <h3 className="nav-partOneTitle">Github</h3>
                    <h3 className="nav-partTwoTitle">Search</h3>
                </div>
                <div className="nav-containerInput">
                    <div className="nav-borderInput">
                        <input className="nav-input" placeholder="Nombre de usuario" value={search} type="text" onChange={ (e) => setSearch(e.target.value)} />
                        <button className="nav-btnInput" onClick={() => searchUser() }>
                            <img className="nav-imgInput" src="https://i.ibb.co/QD0q88v/lupa.png" alt="Lupa de búsqueda"/>
                        </button>
                    </div>
                </div>
            </div>
            <ResultUsers />
        </>
    )
}

export default Nav;
