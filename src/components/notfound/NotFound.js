import React from 'react';
import '../notfound/NotFound.css';

class NotFound extends React.Component {

    render() {
        return (
            <div style={{display: this.props.showMessage}} id="notfound-message" >
                Usuario no encontrado :(
            </div>
        );
    } 
}

export default NotFound;