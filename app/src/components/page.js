import React from 'react';

const Page = ({ children, home }) =>
{
  return (
    <div className={ `${ home === true ? 'justify-center' : '' } flex flex-col items-center min-h-screen p-4` }>
      { children }
    </div>
  );
};

export default Page;