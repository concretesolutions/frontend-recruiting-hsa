import React from 'react';
import Repo from './repo';

const ReposBox = ({ repos }) =>
{
    const orderedRepos = repos.sort((repo1, repo2) =>
    {
        return repo1.stargazers_count - repo2.stargazers_count;
    }).reverse();

    return (
        <div className="col-span-3 md:col-span-2">
            {
                orderedRepos.map((repo) =>
                {
                    return (<Repo key={ repo.id } repo={ repo } />);
                })
            }
        </div>
    );
};

export default ReposBox;