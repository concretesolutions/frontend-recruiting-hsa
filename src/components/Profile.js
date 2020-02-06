import React, {Component} from 'react';

export default class Profile extends Component{
    render(){
        const profile = this.props.profile
        return (
            <div>
                <a href={profile.html_url}>
                    <img 
                        alt="Avatar" 
                        style={avatar} 
                        src={profile.avatar_url}>
                    </img>
                </a>
                <br/>
                <label style={name} >{profile.name}</label>
                <br/>
                <a style={login}  href={profile.html_url}>{profile.login}</a>
                <br/>
                <div style={row}>
                    <img 
                        alt="Contacto" 
                        style={icon} 
                        src={ require('../resources/images/contact-email-icon.png')}/>
                    <label>{profile.email}</label>
                    <br/>
                </div>
                <div style={row}>
                    <img 
                        alt="Seguidores" 
                        style={icon} 
                        src={ require('../resources/images/followers-icon.png')}/>
                    <label>{profile.followers}</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Compañia" 
                        style={icon} 
                        src={ require('../resources/images/company-icon.png')}/>
                    <label>{profile.company}</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Ubicacion" 
                        style={icon} 
                        src={ require('../resources/images/location-icon.png')}/>
                    <label>{profile.location}</label>
                    <br/>
                </div>                
                <div style={row}>
                    <img 
                        alt="Blog" 
                        style={icon} 
                        src={ require('../resources/images/blog-icon.png')}/>
                    <a href={profile.blog}>{profile.blog}</a>
                    <br/>                
                </div>
                <p>{profile.bio}</p>
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
    color: "gray",
    textDecorationLine: "none"
}

const row = {
    display: "flex",
    alignItems: "center"
}