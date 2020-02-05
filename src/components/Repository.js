import React,{Component} from 'react';

export default class Repository extends Component{
    render(){
        return(
            <div>
                <label style={title}>Titulo repositorio</label>
                <br/>
                <label style={description}>Descripcion repositorio</label>
                <br/>
                <div style={row}>
                    <img 
                        alt="Seguidores" 
                        style={icon} 
                        src={ require('../resources/images/followers-icon.png')}/>
                    <label>999999999999999</label>
                    <br/>
                </div>
            </div>
        );
    }
}

const title = {
    fontSize: "2em",
    fontWeight: "bold"
}

const icon = {
    width: "25px",
    height: "25px",
    marginRight: "5px"
}

const description = {
    fontSize: "1.5em",
    color:"gray"
}

const row = {
    display: "flex",
    alignItems: "center"
}