// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Navbar from '../Common/Navbar';
import { Link, Outlet } from 'react-router-dom';
import "./root.css"
import { userProvider } from '../AuthProvider/AuthProvider';

const Root = () => {
    const { user, logOut } = useContext(userProvider)

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error.Message)
            })
    }
    return (
        <div>
            <h1 className='text-3xl'>Context API</h1>
            {
                user ? <div>
                    <span>{user.email}</span>
                    <button className='btn' onClick={handelLogOut}>signout</button>
                </div>
                    :
                    <button className='btn'><Link to={"/login"}>Login</Link></button>
            }
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;