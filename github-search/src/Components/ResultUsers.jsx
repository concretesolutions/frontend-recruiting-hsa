import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'


export const ResultUsers = () => {

    let { users } = useContext(UserContext)

    return (
        <div className="resultUsers-container">
            <div className="resultUsers-user">
                <img className="resultUsers-userImg" src={users.avatar_url} alt="Imágen de perfil"/>
                <h4 className="resultUsers-userName">{users.name}</h4>
                <p className="resultUsers-userLogin">{users.login}</p>
                <div>
                    <div>
                        <img className="resultUsers-userImg" src="https://i.ibb.co/yNVhgdH/circle.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div>
                        <img className="resultUsers-userImg" src="https://i.ibb.co/F6nQTyq/circles.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div>
                        <img className="resultUsers-userImg" src="https://i.ibb.co/svyC4pB/star.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div>
                        <img className="resultUsers-userImg" src="https://i.ibb.co/c63NFx2/box.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.public_repos}</p>
                    </div>
                    <div>
                        <img className="resultUsers-userImg" src="https://i.ibb.co/svyC4pB/star.png" alt="Imágen de perfil"/>
                        <p className="resultUsers-userLogin">{users.followers}</p>
                    </div>
                </div>
            </div>

            <div className="resultUsers-repos">
                <h1 className="resultUsers-reposName"></h1>
                <p className="resultUsers-reposDescription"></p>
                <div className="resultUsers-container-Stars">
                    {/* <img src="https://i.ibb.co/svyC4pB/star.png" alt="Estrellas"/> */}
                    <p className="resultUsers-numberStart"></p>
                </div>
            </div>
        </div>
    )
}
