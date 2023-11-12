import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    // do svg noise filter instead
    <div className='starry-background'>
      <Header />
      <Footer />
    </div>
  );
};

export default Layout;