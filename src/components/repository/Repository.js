import React from 'react';
import '../repository/Repository.css';
import star from '../repository/image/star.png';

class Repository extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            urlRepository: ''
        }

        this.updateURLRepository = this.updateURLRepository.bind(this);
    }

    updateURLRepository = (url) => {
        window.location = url;
    };

    render() {
        return (
            <div style={{display: this.props.showRepository}} id="repository-container">
                {this.props.repositoryProps.map((repository, id) => (
                    <div key = {id} className="repository-block">
                        <h3 className="repository-name" onClick={()=> this.updateURLRepository(repository.html_url)}>{repository.name}</h3>
                        <p className="repository-paragraph">{repository.description}</p>
                        <p className="repository-paragraph"><img className="stargazers-icon" src = {star} /> {repository.stargazers_count}</p>
                    </div>
                ))}
            </div>
        );
    }

}

export default Repository;