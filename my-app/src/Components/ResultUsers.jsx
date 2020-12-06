import React, { useContext } from 'react'
import { ConsumerContext } from '../Context/ConsumerContext'
import NotFound from './NotFound';


export const ResultUsers = () => {
    let { users, repository, search } = useContext(ConsumerContext)
    let totalStars = 0

//  Star Counter
    const starCounter = () => {
        repository.map((item) => {
            return totalStars += item.stargazers_count
        })
    } 
    starCounter()

    return (
        <>
        { search !== users.login ? 
            <NotFound />
         :  
            <div className="resultUserContain">
            <div className="resultUsers-user">
             <div className="resultUserContain-user">
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

            <div className="resultUserContain-infoIcons">

              <div className="resultUsers-icons">
                <img className="resultUsers-userImg" src="http://imgfz.com/i/3bLO8iH.png" alt="biography"/>
                 <p className="resultUsers-userLogin">{users.bio}</p>
              </div>

              <div className="resultUsers-icons">
                <img className="resultUsers-userImg" src="http://imgfz.com/i/HSOWtUM.png" alt="email"/>
                 <p className="resultUsers-userLogin">{users.email}</p>
              </div>

              <div className="resultUsers-icons">
                <img className="resultUsers-userImg" src="http://imgfz.com/i/pQTkICi.png" alt="star"/>
                 <p className="resultUsers-userLogin">{totalStars}</p>
              </div>

               <div className="resultUsers-icons">
                <img className="resultUsers-userImg" src="http://imgfz.com/i/UqZAg1Y.png" alt="repository"/>
                 <p className="resultUsers-userLogin">{users.public_repos}</p>
               </div>

               <div className="resultUsers-icons">
                 <img className="resultUsers-userImg" src="http://imgfz.com/i/UF50ChE.png" alt="followers"/>
                 <p className="resultUsers-userLogin">{users.followers}</p>
               </div>

            </div>
            </div>

            <div className="separation"></div>

            <div className="resultUsers-repository">
                {
                    repository.map((item) => (
                        <div key={item.id} className="resultUsers-oneRepo">
                            <a target="blank" href={item.html_url}>
                                <h6 className="resultUsers-repositoryName">{item.name}</h6>
                            </a>
                            <p className="resultUsers-repositoryDescription">{item.description}</p>
                            <div className="resultUserContain-Stars">
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
