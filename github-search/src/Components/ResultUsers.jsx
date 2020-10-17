import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'


export const ResultUsers = () => {

    let { users, repos } = useContext(UserContext)
    let totalStars = 0

    const starCounter = () => {
        repos.map((item) => {
            totalStars += item.stargazers_count
        })
    } 
    starCounter()

    return (
        <div className="resultUsers-container">
            <div className="resultUsers-user">
                <div>
                    <a target="blank" href={users.html_url}>
                        <img className="resultUsers-userImgProfile" src={users.avatar_url} alt="Imágen de perfil"/>
                    </a>
                </div>
                <p className="resultUsers-userName"><b>{users.name}</b></p>
                <a target="blank" href={users.html_url}>
                    <p className="resultUsers-userLogin">{users.login}</p>
                </a>

                <div className="resultUsers-container-infoIcons">
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/F6nQTyq/circles.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.login}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/yNVhgdH/circle.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.type}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/svyC4pB/star.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{totalStars}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/6JdDJmn/box.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div className="resultUsers-icons">
                        <img className="resultUsers-userImg" src="https://i.ibb.co/TPLKfgS/followers.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.followers}</p>
                    </div>
                </div>
            </div>

            <div className="resultUsers-repos">
                {
                    repos.map((item) => (
                        <div key={item.id} className="">
                            <h1 className="resultUsers-reposName">{item.name}</h1>
                            <p className="resultUsers-reposDescription">{item.description}</p>
                            <div className="resultUsers-container-Stars">
                                <img className="resultUsers-userImg" src="https://i.ibb.co/svyC4pB/star.png" alt="Estrellas"/>
                                <p className="resultUsers-numberStart">{item.stargazers_count}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
