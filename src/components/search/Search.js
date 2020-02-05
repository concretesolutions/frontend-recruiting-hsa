import React from 'react';
import '../search/Search.css';
import search from '../search/image/search.png';

class Search extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           user: ''
        }

        this.updateSearchUser = this.updateSearchUser.bind(this);
        this.searchUser = this.searchUser.bind(this);
        this.searchDetailUser = this.searchDetailUser.bind(this);
        this.searchRepositoryUser = this.searchRepositoryUser.bind(this);
        this.compareStargazers = this.compareStargazers.bind(this);
    }

    updateSearchUser = (e) => {
        this.setState({user: e.target.value});
    }

    searchDetailUser = () => {

        let url = process.env.REACT_APP_API_DETAIL + this.state.user;

        fetch(url, {
                method: 'GET'
            }
        )
        .then((response) => {
            return response.json()
        })
        .then((detail) => {

            if (detail.message === 'Not Found') {
                this.props.updateNotFoundProps();
                return;
            }

            this.props.updateDetailProp(detail);
        })
        .catch((error) => {
            console.log('Error: ' + error);
        }); 
        
    }

    searchRepositoryUser = () => {
        let url = process.env.REACT_APP_API_REPOSITORY + this.state.user + '/repos';

        fetch(url, {
                method: 'GET'
            }
        )
        .then((response) => {
            return response.json()
        })
        .then((repository) => {

            if (repository.message === 'Not Found') {
                this.props.updateNotFoundProps();
                return;
            }

            //Se ordena por estrellas
            repository.sort(this.compareStargazers);

            this.props.updateRepositoryProps(repository);
        })
        .catch((error) => {
            console.log('Error: ' + error);
        }); 
    }

    searchUser = (e) => {
        e.preventDefault();
        this.searchDetailUser();
        this.searchRepositoryUser();
    }

    compareStargazers( a, b ) {
        if ( a.stargazers_count > b.stargazers_count ){
          return -1;
        }
        if ( a.stargazers_count < b.stargazers_count ){
          return 1;
        }
        return 0;
    }



    render() {
        return (
            <div id="search">
                <table id="search-content">
                    <tr>
                        <td style = {{width: '60%'}}><input id="search-txt" onChange="buscaUsuario" value = {this.state.user} onChange = {this.updateSearchUser} ></input></td>
                        <td style = {{width: '40%'}}><img id="search-img" src = {search} onClick={this.searchUser}></img></td>
                    </tr>
                    
                </table>
            </div>
        );
    } 
}

export default Search;