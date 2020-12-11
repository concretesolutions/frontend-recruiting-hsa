import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useHistory } from "react-router-dom";

const SearchForm = ({ small, term, setTerm }) =>
{

  const history = useHistory();

  function handleSubmit (e)
  {
    e.preventDefault();
    history.push(`/user/${ term }`);
  }
  return (
    <form onSubmit={ handleSubmit } className="relative flex items-stretch justify-center w-full form-control">
      <input required className={ `${ small && small === true ? 'w-full p-2' : 'w-4/6 p-4' } rounded rounded-b-none rounded-r-none shadow-md ` } type="text" value={ term } onChange={ (e) => { setTerm(e.target.value); } } />
      <button className="p-2 px-10 text-2xl text-white rounded bg-acc h-100" type="submit"><IoIosSearch /></button>
    </form>
  );
};

export default SearchForm;