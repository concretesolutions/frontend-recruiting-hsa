import React from 'react';
import { consumerUse } from '../ConsumerUser/consumerUse.js';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
    let { setFound, found, foundUser } = []

    //Para buscar usuarios y cambiar la ruta

    const search = () => { 
        foundUser ()
        props.history.push('/results')

    }
    return (
        <div className="homeView">
            <div className= "homeTitle">
                <h1 className="titleGitHub">Github</h1>
                <h1 className="titleSearch">Search</h1>
            </div>
            <div className="homeInputBar">
                <div className="homeInputBorder">
                    <input className="homeInput" value={found} type="text" onChange={ (e)  => setFound(e.target.value)}/>
                    <button className ="homeButtonSearch" onClick={() => search} >
                        <img className="SearchImage" src="https://img.icons8.com/pastel-glyph/64/000000/search--v3.png" alt ="Lupa" />
                    </button>

                </div>
            </div>
        </div>
            
            
        
    )
}

export default withRouter(Home)