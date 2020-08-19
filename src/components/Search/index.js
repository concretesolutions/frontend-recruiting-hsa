import React from 'react';
import './search.css';


const Search = ({ className, onClick, src }) => {
    return (
        <div>
            <button className={className} onClick={onClick}>
                <img src={src} alt="search icon"></img>
            </button>
        </div>
    )
}

export default Search;