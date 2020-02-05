import React from 'react';
import Search from '../search/Search';
import Detail from '../detail/Detail';
import Repository from '../repository/Repository';
import NotFound from '../notfound/NotFound';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           detail: {},
           repository: [],
           showDetail: 'none',
           showRepository: 'none',
           showMessage: 'none'
        }

        this.updateDetailUser = this.updateDetailUser.bind(this);
        this.updateRepositoryUser = this.updateRepositoryUser.bind(this);
        this.updateNotFound = this.updateNotFound.bind(this);
    }

    updateDetailUser = (detail) => {
        this.setState({
            detail: detail,
            showDetail: 'block',
            showMessage: 'none'
        });
    }

    updateRepositoryUser = (repository) => {
        this.setState({
            repository: repository,
            showRepository: 'block',
            showMessage: 'none'
        });
    }

    updateNotFound = () => {
        this.setState({
            detail: {},
            repository: [],
            showDetail: 'none',
            showRepository: 'none',
            showMessage: 'block'
        });
    }
    

    render() {
        return (
            <div>
              <h1>Github Search</h1>
              <Search updateDetailProp = {this.updateDetailUser} updateRepositoryProps = {this.updateRepositoryUser} updateNotFoundProps = {this.updateNotFound}/>
              <Detail showDetail = {this.state.showDetail} detailProps= {this.state.detail} />
              <Repository showRepository = {this.state.showRepository} repositoryProps = {this.state.repository}/>
              <NotFound showMessage = {this.state.showMessage}/>
            </div>
        );
    } 
}

export default Home;