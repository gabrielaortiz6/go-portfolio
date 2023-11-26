import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import blackBg from '../assets/images/black-bg.jpg';


const Layout = () => {
  return (
    //TO DO: do svg noise filter or timelapse of drawing as bg
    //TO DO: border
    //TO DO: dark & light mode toggle
    <body className='bg'>
       <div className='element'>
        <Header />
        <Footer />
        </div>
    </body>
  );
};

export default Layout;