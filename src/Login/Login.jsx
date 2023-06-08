// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { userProvider } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { manageUser } = useContext(userProvider)

    const handelLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)

        manageUser(email, password)
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
        <div>
            <form onSubmit={handelLogin}>
                <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered input-primary w-full max-w-xs mb-2" /><br />
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <button className="btn btn-outline btn-primary mb-4" >Login</button>
            </form>
            <p>Forget Password? <a className='link link-primary link-hover'>Reset Here</a></p>
        </div>
    );
};

export default Login;