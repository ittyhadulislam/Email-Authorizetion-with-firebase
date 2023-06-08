// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { userProvider } from './../AuthProvider/AuthProvider';

const Registration = () => {

    const { handelRegistration } = useContext(userProvider)

    const createUser = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, email, password)

        handelRegistration(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                e.target.reset()
                //
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })

    }

    return (
        <form onSubmit={createUser}>
            <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered input-primary w-full max-w-xs mb-2" /><br />
            <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered input-primary w-full max-w-xs mb-2" required /><br />
            <input type="password" name='password' placeholder="Enter Password" className="input input-bordered input-primary w-full max-w-xs mb-4" required /><br />
            <button className="btn btn-outline btn-primary">Register</button>
        </form>
    );
};

export default Registration;