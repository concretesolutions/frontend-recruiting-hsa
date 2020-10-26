import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { UserInterface } from '../../../domain/user';
import Header from '../../../components/Header/Header';
import UserDataDisplay from '../../../components/UserDataDisplay/UserDataDisplay';

const url = 'https://api.github.com/users/';

const NotFound = () => (
    <div className="container-static ta-c">
        <h4 className="c-primary mt-5 fs-4">Usuario no encontrado :(</h4>
    </div>
);

const User: React.FunctionComponent<UserInterface> = ({ userData, userRepos, userHasInfo }) => {
    const router = useRouter();
    const { user } = router.query;
    return (
        <div className="page">
            <Header value={user.toString()} />
            {userHasInfo ? (
                <UserDataDisplay userData={userData} userRepos={userRepos} />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const resUser = await fetch(`${url}${params.user}`);
    const resRepos = await fetch(`${url}${params.user}/repos`);
    const userRepos = await resRepos.json();
    const userData = await resUser.json();
    const userHasInfo = resUser.status === 200;
    return { props: { userData, userRepos, userHasInfo } };
};

export default User;
