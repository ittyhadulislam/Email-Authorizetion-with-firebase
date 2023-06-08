// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const userProvider = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handelRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const manageUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }

    }, [])

    const authInfo = {
        user,
        loading,
        handelRegistration,
        manageUser,
        logOut,
    }

    // console.log(authInfo.user)


    return (
        <userProvider.Provider value={authInfo}>
            {children}
        </userProvider.Provider>
    );
};

export default AuthProvider;