import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='w-full min-h-screen mx-auto p-1   '>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
