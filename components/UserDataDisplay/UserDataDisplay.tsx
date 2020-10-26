import { UserInterface, ReposInterface } from '../../domain/user';
import IconTextItem from '../IconTextItem/IconTextItem';

const UserDataDisplay: React.FunctionComponent<UserInterface> = ({ userData, userRepos }) => {
    let stars = 0;
    userRepos.map((repo: ReposInterface) => {
        stars += repo.stargazers_count;
    });
    return (
        <div className={`container-full mt-4`}>
            <div className={`side-bar`}>
                <a href={userData.html_url} rel="noreferrer" target="_blank">
                    <img src={userData.avatar_url} alt={userData.login} />
                    <h1>{userData.name || userData.login}</h1>
                    <h2 className={`fw-l c-neutro`}>{userData.login}</h2>
                </a>
                {userData.company && (
                    <IconTextItem icon="/svg/organization-icon.svg" text={userData.company} />
                )}
                {userData.location && (
                    <IconTextItem icon="/svg/location-icon.svg" text={userData.location} />
                )}
                <IconTextItem icon="/svg/star-icon.svg" text={stars} />
                <IconTextItem icon="/svg/repositories-icon.svg" text={userData.public_repos} />
                <IconTextItem icon="/svg/followers-icon.svg" text={userData.followers} />
            </div>
            <div className={`side-container`}>
                {userRepos
                    .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1))
                    .map((repo) => (
                        <div key={repo.node_id} className={`mb-3`}>
                            <a href={repo.html_url} rel="noreferrer" target="_blank">
                                <h3 className={`c-primary`}>{repo.name}</h3>
                            </a>
                            {repo.description && <p className={`fw-l mb-1`}>{repo.description}</p>}
                            <IconTextItem icon="/svg/star-icon.svg" text={repo.stargazers_count} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default UserDataDisplay;
