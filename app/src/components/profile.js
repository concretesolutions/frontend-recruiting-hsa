import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
const Profile = ({ profile }) =>
{
    return (
        <div className="relative flex flex-col">
            <a rel="noreferrer" target="_blank" href={ profile.html_url } className="absolute top-0 left-0 w-full h-full text-transparent">Go to profile</a>
            <img alt="profile-picture" title="profile picture" src={ profile.avatar_url } width="300px" height="300px" />
            <h2 className="text-3xl font-thin">{ profile.name }</h2>
            <p className="mb-2">{ profile.bio }</p>
            <p className>Followers: <span className="font-bold">{ profile.followers }</span></p>
            <p className>Following: <span className="font-bold">{ profile.following }</span></p>
            {
                profile.email ? <div className="flex items-center"><span className="mr-2 text-xl"><HiOutlineMail /></span> { profile.email } </div> : null
            }

        </div>
    );
};

export default Profile;