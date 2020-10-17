import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { withRouter } from "react-router-dom";

const Home = (props) => {
    let { setSearch, search, searchUser } = useContext(UserContext)

    const ups = () => {
        searchUser()
        props.history.push('/detalles')
    }

    return (
        <div className="home-container">
            <div className="home-containerTittle">
                <h3 className="home-partOneTitle">Github</h3>
                <h3 className="home-partTwoTitle">Search</h3>
            </div>
            <div className="home-containerInput">
                <div className="home-borderInput">
                    <input className="home-input" value={search} type="text" onChange={ (e) => setSearch(e.target.value)}/>
                    <button className="home-btnInput" onClick={() => ups() }>
                        <img className="home-imgInput" src="https://i.ibb.co/QD0q88v/lupa.png" alt="Lupa de búsqueda"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home)