import React from 'react'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';


const Layout = ({ Children }) => {
    return (
        <>
           <Header/>
           <div className='content'>{Children}
            <h1>WELCOME TO FINANCE MANAGER</h1>
           </div>
           <Footer />
        </>
    );
};

export default Layout