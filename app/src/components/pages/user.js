import React from 'react';
import { useParams } from 'react-router-dom';
import { HTTP } from '../../helpers/http-commonn';
import Page from '../page';
import SearchForm from '../searchForm';
import Profile from '../profile';
import ReposBox from '../reposBox';
import Error from '../error';

const User = ({ props }) =>
{
  const { username } = useParams();
  const [ term, setTerm ] = React.useState(username);
  const [ profile, setProfile ] = React.useState(null);
  const [ repos, setRepos ] = React.useState([]);
  const [ error, setError ] = React.useState(null);
  React.useEffect(() =>
  {
    fetchUser(term);
    fetchUserRepos(term);
  }, [ username ]);


  function fetchUser (username)
  {
    return HTTP.get(`users/${ username }`).then((response) =>
    {
      setError(null);
      setProfile(response.data);
    }).catch((error) =>
    {
      console.log({ error });
      setProfile(null);
      setError({ error });
    });
  };

  function fetchUserRepos (username)
  {
    HTTP.get(`users/${ username }/repos`).then((response) =>
    {
      console.log({ response });
      setError(null);
      setRepos(response.data);
    }).catch((error) =>
    {
      console.log({ error });
      setRepos(null);
      setError({ error });
    });
  }


  return (
    <Page>
      <div className="container grid w-full grid-cols-3 gap-4 mx-auto mb-4 ">

        <h2 className="col-span-3 text-3xl font-thin md:col-span-1 whitespace-nowrap"><span className="font-mono font-thin">Github</span> Search</h2>
        <div className="col-span-3 mb-4 md:col-span-2">
          <SearchForm small term={ term } setTerm={ setTerm } />
        </div>
      </div>
      <div className="container grid w-full grid-cols-3 gap-4 mx-auto">
        {
          !!profile ? <Profile profile={ profile } /> : null
        }
        {
          !!repos ? <ReposBox repos={ repos } /> : null
        }
        {
          !!error ? <Error error={ error } /> : null
        }
      </div>
    </Page>
  );
};

export default User;