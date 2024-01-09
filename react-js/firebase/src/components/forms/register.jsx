import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, updateProfile } from "../../services/utils/firebase";

import { login } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

function Register() {
    // use state constants for the the form inputs       
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();


    const register = (e) => {
        e.preventDefault();
        // Create a new user with Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {

                console.log({ userAuth })

                // Update the newly created user with a display name and a picture
                updateProfile(userAuth.user, {
                    displayName: name,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        );
                        toast.success("Registered Successfully");
                    })
                    .catch((error) => {

                        console.log({ error });
                        toast.error("Failed to update user profile");
                    });
            })
            .catch((err) => {
                toast.error(err.customData._tokenResponse.error.message || "Error");
            });
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <form className="space-y-4">
                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name    "
                        type="text"
                    />


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
                        onClick={register}
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already a  member?{' '}
                    <Link
                        className="text-blue-500 cursor-pointer"

                        to={`/login`}
                    >
                        Login Now
                    </Link>
                </p>
            </div>
        </div>

    );
}

export default Register;
