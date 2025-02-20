import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared Components/Navbar';

const MainLayout = () => {
    return (
        <div >
             <div className="">
               <Navbar></Navbar>
             </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;