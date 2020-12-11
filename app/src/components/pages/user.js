import React from 'react';
import {useParams} from 'react-router-dom';

const User  = ({props}) =>{
    const {username} = useParams();
    return(
        <div>USER {username}</div>
    )
}

export default User;