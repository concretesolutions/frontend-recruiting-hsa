import React, {Component} from 'react';

export default class Profile extends Component{
    render(){
        return (
            <div>
                <img 
                    alt="Avatar" 
                    style={avatar} 
                    src="https://avatars2.githubusercontent.com/u/176295?v=4">
                </img>
                <br/>
                <label style={name}>Jon Gjengset</label>
                <br/>
                <label style={login}>jonhoo</label>
                <br/>
                <div style={row}>
                    <img 
                        alt="Contacto" 
                        style={icon} 
                        src={ require('../resources/images/contact-email-icon.png')}/>
                    <label>correo@correo.cl</label>
                    <br/>
                </div>
                <div style={row}>
                    <img 
                        alt="Seguidores" 
                        style={icon} 
                        src={ require('../resources/images/followers-icon.png')}/>
                    <label>1943</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Compañia" 
                        style={icon} 
                        src={ require('../resources/images/company-icon.png')}/>
                    <label>Massachusetts Institute of Technology</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Ubicacion" 
                        style={icon} 
                        src={ require('../resources/images/location-icon.png')}/>
                    <label>Cambridge, MA</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Blog" 
                        style={icon} 
                        src={ require('../resources/images/blog-icon.png')}/>
                    <a href="https://thesquareplanet.com">https://thesquareplanet.com</a>
                    <br/>                
                </div>
                <p>PhD student in MIT's Parallel and Distributed Operating Systems Group. Rustacean. A fan of making things secure, fast, scalable, and well-documented.</p>
                <br/>
            </div>
        );
    }
}

const icon = {
    width: "25px",
    height: "25px",
    marginRight: "5px"
}

const avatar = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    border: "5px solid #37474f",
    boxShadow: "inset 0px 0px 10px #37474f"
}

const name = {
    fontSize: "2.5em",
    fontWeight: "bold"
}

const login = {
    fontSize: "1.5em",
    color: "gray"
}

const row = {
    display: "flex",
    alignItems: "center"
}