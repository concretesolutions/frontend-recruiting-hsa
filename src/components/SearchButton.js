import React, {Component} from 'react';


export default class SearchButton extends Component{
    render(){
        return (
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" style={searchInput}/>
                            </td>
                            <td>
                                <button style={searchButton}>
                                    <img 
                                        alt="Búsqueda" 
                                        style={searchIcon} 
                                        src={ require('../resources/images/search-icon.png')}>
                                    </img>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const searchButton = {
    background: "#607d8b",
    border : "none",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    cursor: "pointer"
};

const searchIcon = {
    width: "45px",
    height: "45px"
}

const searchInput = {
    width: "600px",
    height: "40px",
    borderRadius: "5px",
    border: "1px solid #607d8b"
}