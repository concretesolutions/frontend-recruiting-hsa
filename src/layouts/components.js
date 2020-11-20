import React, {Component} from 'react';
import logo from "../assets/images/brandlogo.png";
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../webcomponents'

/* Header Component - top of the page */
export function Header () {
    const location  = useLocation()
    return (
        <div>
            {location.pathname !== "/" &&
                <div className="headerCtn">
                    <div className= "appWidth">
                        <a href = "/">
                            <img src={logo} className="brandLogo"/>
                        </a>
                        <SearchBar/>
                    </div>
                </div>
            }
        </div>
    )
}

/* Footer Component - bottom of the page */
export class Footer extends Component {
    render(){
        return (
            <footer className="footerCtn">
                <div className="footer">

                </div>
            </footer>
        )
    }
}