import React, { Component } from 'react';
import { getUserData, getUserRepos } from './lookup'
import { UserCard, RepoCard } from '../webcomponents'

/* const userFail = {

} */
export class UserDetail extends Component {

    /* Component that requests and contains the elements that display user information */

    constructor(props){
        super(props)
        this.state = {
            userData: false,
            userRepos:false,
            isFetching: true,
        }
    }

    async componentDidMount(){
        this.getUser()
    }

    async componentDidUpdate(prevProps){
        if (prevProps.match.params.id !== this.props.match.params.id){
            await this.getUser()
        }
    }

    getUser = async () => {
        const user = await getUserData(this.props.match.params.id)
        const userRepos = await getUserRepos(this.props.match.params.id)
        if (user.status === 200 && userRepos.status === 200){
            this.setState({ userData:user.data, userRepos:userRepos.data, isFetching:false })
        }
        else{
            this.setState({ userData:null, userRepos:null, isFetching:false })
        }
    }

    render () {
        const { userData } = this.state

        return (
            <div>
                {/* if not fetching and user data has been gotten */}
                {this.state.userData && !this.state.isFetching &&
                    <div className="userViewCtn">
                        <div className="userDetailCtn">
                            <UserCard userData={userData}/>
                        </div>
                        <div className="userReposCtn">
                            {/* check if the user have any repo */}
                            {this.state.userRepos.length > 0 ?
                                /* if yes, show the repos. */
                                this.state.userRepos.map((repo, index)=> {
                                    return <RepoCard repoData={repo} key={index}/>
                                })
                            :   /* if not, then show a message */
                                <div>
                                    Este usuario aun no ha creado un repositorio
                                </div>
                            }
                        </div>
                    </div>
                }
                {/* if user does not exists */}
                {!this.state.isFetching && this.state.userData===null &&
                    <div className="userViewDoesNotExist">
                        El usuario no existe.
                    </div>
                }
            </div>
        );
    }
}
