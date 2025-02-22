import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import { AuthContext } from '../Provider/Auth/Authprovider';

const PrivateRoute = ({children}) => {
    const {user, loader}=useContext(AuthContext)
    const location =useLocation()
    // console.log(location);
    if (loader) {
        return <p className="mt-10">
            {/* <img src={gif} alt="gif loading" /> */}
            loading now
        </p>
    }
    if (user && user?.email ) {
     return children
   } return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default PrivateRoute;