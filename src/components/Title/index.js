import React from 'react';
import './title.css';


const Title = ({ className, text }) => {
    return (
        <div>
            <h1 className={className}>{text}</h1>
        </div>
    )
}

export default Title;