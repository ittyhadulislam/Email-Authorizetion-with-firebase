// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { userProvider } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(userProvider)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children
    }

    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default PrivateRoute;