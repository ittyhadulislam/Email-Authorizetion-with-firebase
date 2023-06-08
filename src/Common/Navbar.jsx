// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userProvider } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(userProvider)
    return (
        <nav className='p-4'>
            <Link className='p-4 link-hover' to={"/"}>Home</Link>
            {user &&
                <>
                    <Link className='p-4 link-hover' to={"/profile"}>Profile</Link>
                    <Link className='p-4 link-hover' to={"/orders"}>Orders</Link>
                </>}
            <Link className='p-4 link-hover' to={"/login"}>Login</Link>
            <Link className='p-4 link-hover' to={"/register"}>Register</Link>
        </nav>
    );
};

export default Navbar;