import React, { useContext } from 'react'
import { ConsumerContext } from '../Context/ConsumerContext'
import { withRouter } from "react-router-dom";

const Home = (props) => {
    let { setSearch, search, searchUser } = useContext(ConsumerContext)

//  Búsqueda y cambio en la ruta
    const searchRoute = () => {
        searchUser()
        props.history.push('/results')
    }

    return (
        <div className="homeContain">
            <div className="homeTitle">
                <h3 className="homeTitleGithub">Github</h3>
                <h3 className="HomeTitleSearch">Search</h3>
            </div>
            <div className="homeInputBar">
                <div className="homeBorderInput">
                    <input className="homeInput" value={search} type="text" onChange={ (e) => setSearch(e.target.value)}/>
                    <button className="homeInputBtn" onClick={() => searchRoute() }>
                        <img className="imgSearch" src="https://www.flaticon.es/svg/static/icons/svg/1617/1617460.svg" alt="Lupa de búsqueda"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home)
