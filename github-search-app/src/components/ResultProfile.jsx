import React from 'react'
import './cssComponents/resultProfile.css'
import NotFound from './NotFound'


const ResultProfile = (props) => {
    //Order by count of stars
    props.repos.sort((a,b) => (
        a.stargazers_count  > b.stargazers_count  ? -1 : a.stargazers_count  < b.stargazers_count  ? 1 : 0
    )) 

    return (
        <>
        { props.userName !== props.data.login ? 
            <NotFound/>
        :
        <div className="resultContainer">
            <div className="resultProfile">
                <div className="resultProfileNameImage">
                    <div className="resultProfileImage">
                        <a target="blank" href={props.data.html_url}>
                        <img className="profileImg" src={props.data.avatar_url} alt="Foto de perfil de usuario"/>
                        </a>
                    </div>
                    <div className="resultProfileName">
                        <p className="resultProfileNameText"><b>{props.data.name}</b></p>
                        <a target="blank" href={props.data.html_url}>
                        <p className="resultProfileLogin">{props.data.login}</p>
                        </a>
                    </div>
                </div>

                <div className="resultProfileIcons">
                    <div className="profileIcons">
                        <img className="resultIcons" src="https://i.ibb.co/vzmyq3y/circles.png" alt="Icono Biografia"/>
                        <p className="resultProfileLogin">{props.data.bio}</p>
                    </div>
                </div>  
                <div className="resultProfileIcons">
                    <div className="profileIcons">
                        <img className="resultIcons" src="https://i.ibb.co/yNVhgdH/circle.png" alt="Icono Email"/>
                        <p className="resultProfileLogin">{props.data.email}</p>
                    </div>
                </div>
                <div className="resultProfileIcons">
                    <div className="profileIcons">
                        <img className="resultIcons" src="https://i.ibb.co/svyC4pB/star.png" alt="Icono Estrella"/>
                        <p className="resultProfileLogin">{props.data.stars}</p>
                    </div>
                </div>
                <div className="resultProfileIcons">
                    <div className="profileIcons">
                        <img className="resultIcons" src="https://i.ibb.co/6JdDJmn/box.png" alt="Icono Repositorios"/>
                        <p className="resultProfileLogin">{props.data.public_repos}</p>
                    </div>
                </div>
                <div className="resultProfileIcons">
                    <div className="profileIcons">
                        <img className="resultIcons" src="https://i.ibb.co/TPLKfgS/followers.png" alt="ícono seguidores"/>
                        <p className="resultProfileLogin">{props.data.followers}</p>
                    </div>
                </div>  
            </div>
            
            <div className="resultProfileRepos">
                {
                    props.repos.map((item) =>(
                        <div key={item.id} className="resultProfileRepo">
                            <a target="blank" href={props.data.html_url}>
                                <h6 className="resultProfileRepoName">{item.name}</h6>
                            </a>
                            <p className="resultProfileRepoDesc">{item.description}</p>
                            <div className="resultProfileStars">
                                <img className="resultProfileRepoImg" src="https://i.ibb.co/svyC4pB/star.png" alt="Estrellas"/>
                                <p className="resultProfileStarsCount">{item.stargazers_count}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
              
        </div>
        }
        </>
    )
}

export default ResultProfile
