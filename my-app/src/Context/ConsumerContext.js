import React, { useState } from 'react'
import axios from 'axios'

let ConsumerContext = React.createContext()
let { Provider, Consumer } = ConsumerContext

function ConsumerProvider({ children }) {

  const [search, setSearch] = useState('')
  const [repository, setRepository] = useState([])
  const [users, setUsers] = useState([])


  const searchUser = async () => {
    try {
        const dataUsers = await axios(`https://api.github.com/users/${search}`)
        const dataRepos = await axios(`https://api.github.com/users/${search}/repos`)
        setUsers(dataUsers.data)
        setRepository(dataRepos.data)
    } catch (error) {
        console.log(error)
    }
  }

// Orden de los repositorios

  repository.sort((a,b) => (a.stargazers_count  > b.stargazers_count  ? -1 : a.stargazers_count  < b.stargazers_count  ? 1 : 0)) 

  return (
    <Provider value={{ setSearch, users, repository, searchUser, search
    }}>
      {children}
    </Provider>
  )
}

export { ConsumerProvider, Consumer as UserConsumer, ConsumerContext }