import React, {Component} from 'react';

export default class GitHubSearchTitle extends Component {
    render(){
        return (
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><label style={github}>Github</label></td>
                            <td><label style={search}>Search</label></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const search = {
    fontSize: "3em",
    fontStyle: "oblique"
};

const github = {
    display: "block",
    fontSize: "3em",
    marginBlockStart: "0.67em",
    marginBlockEnd: "0.67em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold"
}