import React from "react";
import Search from './../components/Search'
import Title from './../components/Title'
import './../styles/Navbar.css'
class Navbar extends React.Component {

  render() {
    return (
      <div className="container">
           <Title/>
           
            <Search/> 
      </div>
    );
  }
}

export default Navbar;
