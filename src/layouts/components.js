import React, {Component} from 'react';
import logo from "../assets/images/brandlogo.png";
import {} from "react-dom"
import { withRouter } from 'react-router-dom';

class HeaderNoRoute extends Component {
    render(){
        const { location } = this.props
        return (
            <div>
                { location.pathname !== "/" &&
                <div className="headerCtn">
                    <div className= "appWidth">
                        <img src={logo} className="brandLogo"/>
                    </div>
                </div>
                }
            </div>
        )
    }
}
export const Header = withRouter(HeaderNoRoute)