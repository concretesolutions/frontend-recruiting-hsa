import React,{Component} from 'react';

export default class NotFoundComp extends Component{
    render(){
        return(
            <div style={notFoundContainer}>
                <label style={notFoundText} >Usuario no encontrado :(</label>
            </div>
        );
    }
}

const notFoundContainer = {    
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
}

const notFoundText = {    
    fontSize: "3em"
}