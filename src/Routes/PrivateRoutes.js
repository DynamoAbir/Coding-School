import React, { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <Loading></Loading>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/signin' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;