import { FcGoogle, FcInTransit } from 'react-icons/fc';
import React, { useState } from 'react';
import { object, string } from 'zod';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { googleLoginPopup } from '../../services/utils/helpers';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = object({
    name: string()
        .min(3, { message: 'Please enter a valid name' })
        .max(50, { message: 'Name should be at most 50 characters' }),
    email: string()
        .email({ message: 'Invalid email address' })
        .min(1, { message: 'Email is required' })
        .max(255, { message: 'Email should be at most 255 characters' }),
    password: string()
        .min(8, { message: 'Password should be at least 8 characters' })
        .max(50, { message: 'Password should be at most 50 characters' }),
    // confirmPassword: string().ref('password', { message: 'Passwords do not match' }),
});

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleRegister = async () => {

        try {
            const user = await googleLoginPopup()

            console.log({ user });

        } catch (error) {

            console.log({ error });
        }

    }


    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        // Dispatch actions or perform further actions as needed
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                <FcInTransit size={60} className="my-2" />
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register('name')}
                        placeholder="Enter your name"
                        type="text"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register('email')}
                        placeholder="Email"
                        type="email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className="relative flex justify-center items-center">
                        <input
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register('password')}
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register('confirmPassword')}
                        placeholder="Confirm Password"
                        type={showPassword ? 'text' : 'password'}
                    />


                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex justify-center items-center">
                    <button className="py-2 px-4 rounded border w-full mt-3" onClick={handleGoogleRegister}>
                        Sign up with <FcGoogle className="inline-block ml-1" />
                    </button>
                </div>

                <p className="mt-4 text-center">
                    Already a member?{' '}
                    <Link className="text-blue-500 cursor-pointer" to={`/login`}>
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
