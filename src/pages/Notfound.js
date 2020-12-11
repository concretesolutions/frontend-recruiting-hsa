import React from "react";
import Navbar from './../components/Navbar'

class Notfound extends React.Component {

  render() {
    return (
      <div>
           <Navbar/> 
            <div className="notfound">
                <h1> User not found :(</h1>
                
            </div>
            
      </div>
     
      

    );
  }
}

export default Notfound;
