// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { userProvider } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(userProvider)
    return (
        <div>
            <h1>Your Email : {user.email}</h1>
            <p>Does email verified: {user.emailVerified ? <span>Verified</span> : <span>Not verified</span>}</p>
            <p>UID No: {user.uid}</p>
        </div>
    );
};

export default Profile;