import React from 'react';
import GitHubSearchTitle from '../components/GitHubSearchTitle'
import SearchButton from '../components/SearchButton';

export default function Home(){
    return (
        <div>
            <div style={gitHub}><GitHubSearchTitle/></div>
            <div style={search}><SearchButton/></div>
        </div>
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