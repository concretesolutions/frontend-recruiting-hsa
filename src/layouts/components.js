import React, {Component} from 'react';
import logo from "../assets/images/brandlogo.png";
import { useLocation } from 'react-router-dom';
import { SearchBar, IconWithText } from '../webcomponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
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
                <div className="appWidth">
                    <a href="https://drive.google.com/file/d/11eRLzP-uG5PoDOjk1DknQ5fn-J5j7Eyr/view?usp=sharing" target="_blank">
                        <IconWithText leftIcon={<FontAwesomeIcon icon={faFileAlt}/>} text={`Curriculum`}/>
                    </a>
                    <a href="https://www.linkedin.com/in/tomas-fuentes-395156105/" target="_blank">
                        <IconWithText leftIcon={<FontAwesomeIcon icon={faLinkedin}/>} text={`Perfil de Linkedin`}/>
                    </a>
                    <h2>
                        por Tomás Fuentes
                    </h2>
                </div>
            </footer>
        )
    }
}