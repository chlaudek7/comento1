import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ authenticated, component: Component }) => {
    //  console.log("d"+authenticated)
   return (
    
    (!authenticated)? <Navigate to="/login"/> : Component
   )
};

export default AuthRoute;