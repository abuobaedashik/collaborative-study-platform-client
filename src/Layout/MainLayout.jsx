import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared Components/Navbar';
import Footer from '../Shared Components/Footer';

const MainLayout = () => {
    const location = useLocation()
    const noNavFoot =['/login', '/signup'].includes(location.pathname);
    return (
        <div >
             <div className="">
             {noNavFoot || <Navbar></Navbar>}
             </div>
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;