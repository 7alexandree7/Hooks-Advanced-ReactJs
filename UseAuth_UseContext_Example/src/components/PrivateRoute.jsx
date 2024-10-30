import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';


function PrivateRoute ({children}) {
    const auth = useAuth()

    return auth.isAuthenticated ? children : <Navigate  to='/login'/>
}


export default PrivateRoute