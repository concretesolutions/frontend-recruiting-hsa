import React, {Component} from 'react';
import GitHubSearchTitle from '../components/GitHubSearchTitle';
import SearchButton from '../components/SearchButton';
import Profile from '../components/Profile';
import Repository from '../components/Repository';
import {Redirect} from "react-router-dom";

export default class Details extends Component{

    render(){
        if(this.props.location.state === undefined){
            return <Redirect to="/"/>
        }

        const profile = this.props.location.state.profile
        const repositoryList = this.props.location.state.repositoryList
        return (
            <div>
                <div style={header}>
                    <GitHubSearchTitle/>
                    <SearchButton/>
                </div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td valign="top" style={columnProfile}>
                                <Profile profile={profile}/>
                            </td>
                            <td style={columnPulls}>
                            {
                                repositoryList.map(repository =>{
                                    return <Repository key={repository.id} repository={repository}/>
                                })
                            }
                            </td>
                        </tr>
                    </tbody>
                </table>
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

const columnProfile = {
    width: "30%",
    paddingLeft: "20px"
}

const columnPulls = {
    width: "70%",
    paddingLeft: "30px",
    paddingRight: "30px"
}