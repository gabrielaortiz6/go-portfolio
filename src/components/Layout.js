import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const Layout = () => {
  return (
    //TO DO: do svg noise filter instead
    //TO DO: border
    //TO DO: dark & light mode toggle
    //TO DO: LENGTHEN COLUMNS!
    <body className='border starry-background'>
      <Header />
      <Footer />
    </body>
  );
};

export default Layout;