import React from "react";
import Navbar from './../components/Navbar'
import './../styles/user.css'
import organization from './../assets/img/organization.svg';
import location from './../assets/img/location.svg';
import star from './../assets/img/star.svg';
import repositorie from './../assets/img/repositorie.svg';
import followers from './../assets/img/followers.png';
class User extends React.Component {

  render() {
    return (
      <div>
           <Navbar/>
      <div className="info-container">
        <div className="user-container">
           <div className="avatar">
              <img src='https://avatars2.githubusercontent.com/u/3306019?v=4'/>
           </div>
           <h1> Nombre </h1>
           <h2> biography</h2>
           <h4><img src={organization}/> &nbsp; blabla </h4>
           <h4><img src={location} />&nbsp; blabla </h4>
           <h4><img src= {star} /> &nbsp; blabla </h4>
           <h4><img src={repositorie} /> &nbsp; blabla </h4>
           <h4><img src={followers} /> &nbsp; blabla </h4>
            </div>
        <div className="repos-container">
            <div className="repos"> 
                <h1>REPO'S NAME</h1>
                <h4> detalle</h4>
                <h5> 342</h5>
            </div>
        </div>
      </div>
      </div>
      
      
    );
  }
}

export default User;
