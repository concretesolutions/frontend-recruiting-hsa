import React from 'react';

const Error = ({ error }) =>
{
    console.log({ error });
    return (
        <div className="col-span-3">
            <h1 className="text-2xl text-center text-acc">Sorry User not found :(</h1>
        </div>
    );
};

export default Error;