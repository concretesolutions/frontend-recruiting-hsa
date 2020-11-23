import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const searchUser = (e) => {
        e.preventDefault();
        history.push('/result/'+ username);
    };

    
    return (
        <div className="container flex">
            <div className="searchBoxcontainer">
                <div className="searchTitle">
                    <span className="spanBold">Github</span> <span className="spanItalic">Search</span>
                </div>
                <form>
                    <input type="text" name="search" onChange={(e)=>setUsername(e.target.value)}/>
                    <button onClick={searchUser}><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>
    );
}

export default Home;