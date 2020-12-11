import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Repo = ({ repo }) =>
{
    return (
        <div className="relative flex flex-col w-full p-6 rounded shadow-md">
            <a rel="noreferrer" target="_blank" href={ repo.html_url } className="absolute top-0 left-0 w-full h-full text-transparent">Go to repo</a>
            <h4 className="mb-2 text-xl text-acc">{ repo.name }</h4>
            <p className="mb-2 text-sm">{ repo.description }</p>
            <div className="flex items-center"><span className="mr-1 text-xl"><AiOutlineStar /></span>{ repo.stargazers_count }</div>
        </div>
    );
};

export default Repo;