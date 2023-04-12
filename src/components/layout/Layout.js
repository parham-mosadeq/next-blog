import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='w-full mx-auto my-2 flex items-center  justify-center flex-col '>
        {children}
      </main>
    </>
  );
};

export default Layout;
