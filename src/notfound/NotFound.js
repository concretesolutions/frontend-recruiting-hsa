import React, {Component} from 'react';
import GitHubSearchTitle from '../components/GitHubSearchTitle';
import SearchButton from '../components/SearchButton';
import NotFoundComp from '../components/NotFoundComp';

export default class NotFound extends Component{
    render(){
        return(
            <div>
                <div style={header}>
                    <GitHubSearchTitle/>
                    <SearchButton/>
                </div>
                <div style={userNotFoundText}>
                    <NotFoundComp/>
                </div>
            </div>
        );
    }
}

const header = {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
}

const userNotFoundText = {
    marginTop: "10%"
}