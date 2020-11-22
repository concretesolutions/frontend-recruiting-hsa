import React, { Component } from 'react';
import { getUserData, getUserRepos } from './lookup';
import { UserCard, RepoCard } from '../webcomponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const userNotFound = {
    name: "No encontrado",
    login: "No encontrado",
    avatar_url: "https://i.kym-cdn.com/profiles/icons/big/000/071/040/404%20is%20not%20found.jpg",
    html_url: "https://frontend-recruiting-hsa.herokuapp.com",
    email: "?",
    bio: "?",
    followers: "?",
    following: "?"
}
export class UserDetail extends Component {

    /* Component that requests and contains the elements that display user information */

    constructor(props){
        super(props)
        this.state = {
            userData: null, /* variable to store the user data */
            userRepos: [], /* stack to store the user repositories */
            isFetching: true,
            currentPage: 1,
            reposPerPage: 5, /*  control the number of elements per page in the pagination */
            rateLimitExceedeed:false
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
        /* function to fetch the user data and his repositories */
        const user = await getUserData(this.props.match.params.id)
        const userRepos = await getUserRepos(this.props.match.params.id)
        /* User gotten */
        if (user.status === 200 && userRepos.status === 200){
            this.setState({ userData:user.data, userRepos:userRepos.data, isFetching:false, rateLimitExceedeed:false })
        }
        /* if the API rate limit by the ip has been exceeded, then the API will response this error. */
        else if (user.status === 403){
            this.setState({ userData:null, userRepos:[], isFetching:false, rateLimitExceedeed:true })
        }
        /* user not found or another error. */
        else{
            this.setState({ userData:null, userRepos:[], isFetching:false, rateLimitExceedeed:false})
        }
    }

    handlePagination = (number) => {
        this.setState({currentPage: number })
    }

    render () {
        const { userData, userRepos, currentPage, reposPerPage } = this.state
        /* pagination logic  */
        const indexOfLastRepo = currentPage * reposPerPage
        const indexOfFirstRepo = indexOfLastRepo - reposPerPage
        const currentRepos = userRepos.slice(indexOfFirstRepo, indexOfLastRepo)
        const lastPage = Math.ceil(userRepos.length / reposPerPage)
        return (
            <div>
                {/* if not fetching and user data has been gotten */}
                {this.state.userData && !this.state.isFetching &&
                    <div className="userViewCtn">
                        <div className="userDetailCtn">
                            <UserCard userData={userData}/>
                        </div>
                        <div className="userReposCtn">
                            <h1>Repositorios</h1>
                            {/* check if the user have any repo */}
                            {this.state.userRepos.length > 0 ?
                                /* if yes, show the repos. */
                                currentRepos.map((repo, index)=> {
                                    return <RepoCard repoData={repo} key={index}/>
                                })
                            :   /* if not, then show a message */
                                <h2>
                                    Este usuario aún no ha creado un repositorio...
                                </h2>
                            }
                            {/* Pagination Buttons */}
                            <div className="paginationCtn">
                                {/* disable decrease button if the user is on first page */}
                                {   currentPage === 1 ?
                                    <button disabled className="paginationBtn decrease"><FontAwesomeIcon icon={faArrowLeft}/></button>:
                                    <button className="paginationBtn decrease" onClick={()=>{this.handlePagination(currentPage - 1)}}><FontAwesomeIcon icon={faArrowLeft}/></button>
                                }
                                <div className="paginationCurrentPage">{currentPage+"/"+ lastPage}</div>
                                {/* disable increase button if the user is on last page */}
                                {   currentPage === lastPage || lastPage === 0 ?
                                    <button disabled className="paginationBtn increase"><FontAwesomeIcon icon={faArrowRight}/></button>:
                                    <button className="paginationBtn increase" onClick={()=>{this.handlePagination(currentPage + 1)}}><FontAwesomeIcon icon={faArrowRight}/></button>
                                }
                            </div>
                        </div>
                    </div>
                }
                {/* if user does not exists */}
                {!this.state.isFetching && this.state.userData===null &&
                    <div className="userViewCtn">
                        <div className="userDetailCtn">
                            <UserCard userData={userNotFound}/>
                        </div>
                        <div className="userReposCtn">
                            {
                                this.state.rateLimitExceedeed ?
                                <h1>Has hecho demasiadas solicitudes a la API de github, debes intentarlo más tarde :( </h1>:
                                <h1>Usuario {this.props.match.params.id} no ha sido encontrado :( </h1>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}
