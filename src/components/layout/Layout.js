import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <main className='w-full mx-auto my-2 flex items-center  justify-center flex-col '>
        {children}
      </main>
    </>
  );
};

export default Layout;
