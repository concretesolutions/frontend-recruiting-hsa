import React from 'react';
import './input.css';


const Input = ({placeholder, type, className, onChange, value}) =>{
    return(
        <input placeholder={placeholder} type={type} className={className} onChange={onChange} value={value}>
        </input>
    )
}

export default Input;