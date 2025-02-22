import {  useContext } from "react";

import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import gif from "../assets/others/loader2.gif";
import { AuthContext } from "../Provider/Auth/Authprovider";


const AdminRoute = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    const [isAdmin,isAdminLoading] =useAdmin()
    const location =useLocation()
    // console.log(location);
    if (loader || isAdminLoading) {
        return <p className="mt-10">
            {/* <img src={gif} alt="gif loading" /> */}
            <div>loading</div>
        </p>
    }
    if (user && isAdmin ) {
     return children
   } return <Navigate state={{from: location}} replace to='/login'></Navigate>

};

export default AdminRoute;