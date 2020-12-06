import React from 'react'

const notFound = () => {
    const notFoundFace = "☹"
    
    return (
        <div className="notFound">
            <h1 className="notFoundTitle"> UPS! No encontramos al usuario {notFoundFace}</h1>
        </div>
    )
}

export default notFound;