import React, { useContext } from 'react'
import { ConsumerContext } from '../Context/ConsumerContext'
import { ResultUsers } from './ResultUsers';
import { Link } from "react-router-dom";


export const Navbar = () => {
    let { setSearch, search, searchUser } = useContext(ConsumerContext)

    return (
        <>
            <nav className="contain">
                <div className="titleContain">
                    <Link to="/" className="navbarLink">
                        <h3 className="titleGithub">Github</h3>
                    </Link>
                    <Link to="/" className="navbarLink">
                        <h3 className="titleSearch">Search</h3>
                    </Link>
                </div>
                <div className="inputContain">
                    <div className="borderInput">
                        <input className="input" placeholder="Nombre de usuario" value={search} type="text" onChange={ (e) => setSearch(e.target.value)} />
                        <button className="btnSearch" onClick={() => searchUser() }>
                            <img className="imgSearch" src="https://www.flaticon.es/svg/static/icons/svg/1617/1617460.svg" alt="Busqueda de usario"/>
                        </button>
                    </div>
                </div>
            </nav>
            <ResultUsers />
        </>
    )
}

export default Navbar;