import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from '../../services/utils/firebase.js';

import { login } from '../../redux/slices/authSlice.js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function Login() {
    // use state constants for the the form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();



    const loginToApp = (e) => {
        e.preventDefault();

        // Sign in an existing user with Firebase
        signInWithEmailAndPassword(auth, email, password)
            // returns  an auth object after a successful authentication
            // userAuth.user contains all our user details
            .then((userAuth) => {
                // store the user's information in the redux state
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                );

                toast.success("Login Successfully!")
            })
            // display the error if any
            .catch((err) => {
                alert(err);
            });
    };



    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <form className="space-y-4">


                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                    />

                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    />

                    <button
                        type="submit"
                        onClick={loginToApp}
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Not a member?{' '}
                    <Link
                        className="text-blue-500 cursor-pointer"

                        to={`/register`}
                    >
                        Register Now
                    </Link>
                </p>
            </div>
        </div>

    );
}

export default Login;
