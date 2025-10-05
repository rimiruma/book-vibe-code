import React from 'react';
import Navbar from '../../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <div>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;