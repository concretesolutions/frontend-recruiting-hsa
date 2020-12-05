import React from 'react'

const ResultProfile = (props) => {
    console.log(props.userName)

    return (
        <div>
            usuario: {props.userName}
        </div>
    )
}

export default ResultProfile
