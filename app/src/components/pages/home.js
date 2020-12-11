import React from 'react';
import Page from '../page';
import SearchForm from '../searchForm';

const Home = () =>
{
  const [ term, setTerm ] = React.useState('');
  return (
    <Page home>
      <h1 className="font-thin text-8xl"><span className="font-mono font-thin">Github</span> Search</h1>
      <SearchForm term={ term } setTerm={ setTerm } />
    </Page>
  );
};

export default Home;