import React, { Component } from 'react';
import { getUserData, getUserRepos } from './lookup'

export class UserDetail extends Component {

    /* Component that requests and contains the elements that display user information */

    constructor(props){
        super(props)
        this.state = {
            userData: null,
            userRepos:null,
            isFetching: true,
        }
    }

    async componentDidMount(){
        const user = await getUserData(this.props.match.params.id)
        const userRepos = await getUserRepos(this.props.match.params.id)
        if (user.status === 200 && userRepos.status === 200){
            this.setState({ userData:user.data, userRepos:userRepos.data, isFetching:false })
        }
        else{
            this.setState({ userData:null, userRepos:null, isFetching:false })
        }
    }

    async componentDidUpdate(prevProps){
        if (prevProps.match.params.id !== this.props.match.params.id){
            const user = await getUserData(this.props.match.params.id)
            const userRepos = await getUserRepos(this.props.match.params.id)
            if (user.status === 200 && userRepos.status === 200){
                this.setState({ userData:user.data, userRepos:userRepos.data, isFetching:false })
            }
            else{
                this.setState({ userData:null, userRepos:null, isFetching:false })
            }
        }
    }

    render () {
        return (
            <div>
                <p>LOCACION {this.props.location.pathname}</p>
                <h1>Usuario!</h1>
                {this.state.userData && !this.state.loading &&
                    <p>{this.state.userData.login}</p>
                }
            </div>
        );
    }
}
