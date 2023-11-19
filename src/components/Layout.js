import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const Layout = () => {
  return (
    //TO DO: do svg noise filter or timelapse of drawing as bg
    //TO DO: border
    //TO DO: dark & light mode toggle
    <body className='bg-color'>
      <Header />
      <Footer />
    </body>
  );
};

export default Layout;