import React, {Component} from 'react';
import GitHubSearchTitle from '../components/GitHubSearchTitle';
import SearchButton from '../components/SearchButton';
import Profile from '../components/Profile';
import Repository from '../components/Repository';

export default class Details extends Component{

    render(){
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
                                <Profile/>
                            </td>
                            <td style={columnPulls}>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
                                <Repository/>
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