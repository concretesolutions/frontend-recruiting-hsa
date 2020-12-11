import React from 'react'
import './../styles/search.css';
import search from '../assets/img/Search.svg';
import {Link} from 'react-router-dom'



class Search extends React.Component{
   
        state ={
            user: ''
    }
    onChange=async e => {
        e.persist();
        await this.setState  ( {user:e.target.value}); 
          
        
    }
    searchU() {
        fetch('https://api.github.com/users/' +  this.state.user)
        .then(response => {
            return response.json();
          })
          .then(response => {
            console.log(response);
          })
    }
        
    render () {
        return(
            <div className="search-container">
                
                <input 
                name="user"
                className="search-input"
                 type="text"
                 placeholder="ingrese usuario de busqueda"
                 value={this.state.user}
                 onChange={this.onChange}
                  />
                <button
                   onClick={()=>{this.searchU()}}
                  className="search"
                  >
                     <Link to="/user"><img src={search} /> </Link>
                </button>
                
            </div>
        )                 
            
        
    }
}

export default Search 