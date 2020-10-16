import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Nav = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [repos, setRepos] = useState([])


    const searchUser = async () => {
        console.log(search)

        try {
            const dataUsers = await axios(`https://api.github.com/users/${search}`)
            const dataRepos = await axios(`https://api.github.com/users/${search}/repos`)
            setUsers(dataUsers)
            setRepos(dataRepos)
        } catch (error) {
            console.log(error)
        }

    }

    console.log(users)
    console.log(repos)
    
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
        </>
    )
}

export default Nav;
