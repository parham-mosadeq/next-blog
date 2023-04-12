import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='w-full mx-auto my-2 flex items-center  justify-center flex-col '>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
