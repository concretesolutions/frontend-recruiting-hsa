import React,{Component} from 'react';

export default class Repository extends Component{
    render(){
        const repository = this.props.repository

        return(
            <div>
                <a style={title} href={repository.html_url}>{repository.name}</a>
                <br/>
                <label style={description}>{repository.description}</label>
                <br/>
                <div style={row}>
                    <img 
                        alt="Seguidores" 
                        style={icon} 
                        src={ require('../resources/images/followers-icon.png')}/>
                    <label>{repository.stargazers_count}</label>
                    <br/>
                </div>
            </div>
        );
    }
}

const title = {
    fontSize: "2em",
    fontWeight: "bold",
    textDecorationLine: "none",
    color: "black"
}

const icon = {
    width: "25px",
    height: "25px",
    marginRight: "5px",    
    marginLeft: "auto"
}

const description = {
    fontSize: "1.2em",
    color:"gray"
}

const row = {
    display: "flex",
    alignItems: "center"
}