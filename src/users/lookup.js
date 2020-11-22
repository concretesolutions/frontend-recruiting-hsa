import axios from "axios";

export const getUserData = async (userName) => {
    const result = await axios.get(`https://api.github.com/users/${userName}`)
    .then(res => {
        return res
    })
    .catch((err)=>{return err.response})
    return result
}

export const getUserRepos = async (userName) => {
    const result = await axios.get(`https://api.github.com/users/${userName}/repos`)
    .then(res => {
        return res
    })
    .catch((err)=>{return err.response})
    return result
}

