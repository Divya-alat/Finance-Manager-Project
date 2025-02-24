import React from 'react'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';


const Layout = ({ Children }) => {
    return (
        <>
           <Header/>
           <div className='content'>{Children}</div>
           <Footer />
        </>
    );
};

export default Layout