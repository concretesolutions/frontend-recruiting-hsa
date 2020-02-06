import React from 'react';
import GitHubSearchTitle from '../components/GitHubSearchTitle'
import SearchButton from '../components/SearchButton';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from '../details/Details';
import NotFound from '../notfound/NotFound';

export default function Home(){
    return (
        <Router>
            <Route exact path="/" render={()=>{
                return (
                <div>
                    <div style={gitHub}><GitHubSearchTitle/></div>
                    <div style={search}><SearchButton/></div>
                </div>
                );
            }}>
            </Route>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/notfound" component={NotFound}/>
        </Router>
    );
}

const gitHub = {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    marginTop: "10%"
}

const search = {
    width: "100%",
    justifyContent: "center",
    display: "flex"
}