import React from 'react'
import Header from './header'
import Footer from './footer'

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