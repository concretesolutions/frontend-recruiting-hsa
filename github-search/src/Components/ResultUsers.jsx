import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import UserNotFound from './UserNotFound';


export const ResultUsers = () => {
    let { users, repos, search } = useContext(UserContext)
    let totalStars = 0

//  Contador total de estrellas
    const starCounter = () => {
        repos.map((item) => {
            return totalStars += item.stargazers_count
        })
    } 
    starCounter()

    return (
        <>
        { search !== users.login ? 
            <UserNotFound />
         :  
            <div className="resultUsers-container">
            <div className="resultUsers-user">
                <div className="resultUsers-container-user">
                    <div>
                        <a target="blank" href={users.html_url}>
                            <img className="resultUsers-userImgProfile" src={users.avatar_url} alt="Imágen de perfil"/>
                        </a>
                    </div>
                    <div>
                        <p className="resultUsers-userName"><b>{users.name}</b></p>
                        <a target="blank" href={users.html_url}>
                            <p className="resultUsers-userLogin">{users.login}</p>
                        </a>
                    </div>
                </div>

                <div className="resultUsers-container-infoIcons">
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/vzmyq3y/circles.png" alt="ícono biografía"/>
                        <p className="resultUsers-userLogin">{users.bio}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/yNVhgdH/circle.png" alt="ícono email"/>
                        <p className="resultUsers-userLogin">{users.email}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/svyC4pB/star.png" alt="ícono estrella"/>
                        <p className="resultUsers-userLogin">{totalStars}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/6JdDJmn/box.png" alt="ícono repositorios"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/TPLKfgS/followers.png" alt="ícono seguidores"/>
                        <p className="resultUsers-userLogin">{users.followers}</p>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="resultUsers-repos">
                {
                    repos.map((item) => (
                        <div key={item.id} className="resultUsers-oneRepo">
                            <a target="blank" href={item.html_url}>
                                <h6 className="resultUsers-reposName">{item.name}</h6>
                            </a>
                            <p className="resultUsers-reposDescription">{item.description}</p>
                            <div className="resultUsers-container-Stars">
                                <img className="resultUsers-userImg-repos" src="https://i.ibb.co/svyC4pB/star.png" alt="Estrellas"/>
                                <p className="resultUsers-numberStart">{item.stargazers_count}</p>
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
