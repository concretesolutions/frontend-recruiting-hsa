import React, {Component} from 'react';
import GitHubSearTitle from '../components/GitHubSearchTitle';
import SearchButton from '../components/SearchButton';
import Profile from '../components/Profile';

export default class Details extends Component{

    render(){
        return (
            <div>
                <div style={header}>
                    <GitHubSearTitle/>
                    <SearchButton/>
                </div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={columnProfile}>
                                <Profile/>
                            </td>
                            <td style={columnPulls}>

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
    width: "20%",
    paddingLeft: "20px"
}

const columnPulls = {
    width: "80%",
    paddingRight: "20px"
}