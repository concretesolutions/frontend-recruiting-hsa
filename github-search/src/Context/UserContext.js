import React, { useState } from 'react'
import axios from 'axios'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])

  const searchUser = async () => {
    try {
        const dataUsers = await axios(`https://api.github.com/users/${search}`)
        const dataRepos = await axios(`https://api.github.com/users/${search}/repos`)
        setUsers(dataUsers.data)
        setRepos(dataRepos.data)
    } catch (error) {
        console.log(error)
    }
  }

// Orden de repos por estrellas
  repos.sort((a,b) => (a.stargazers_count  > b.stargazers_count  ? -1 : a.stargazers_count  < b.stargazers_count  ? 1 : 0)) 

  return (
    <Provider value={{ setSearch, users, repos, searchUser, search
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }