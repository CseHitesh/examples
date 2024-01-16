import { FcInTransit } from "react-icons/fc";
import React, { useReducer, useState } from "react";
import { object, string } from "zod";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import { toast } from "react-toastify";

const schema = object({
    userName: string()
        .min(3, { message: "Please enter a valid username" })
        .max(50, { message: "username should be at most 50 characters" }),
    fullName: string()
        .min(3, { message: "Please enter a valid name" })
        .max(50, { message: "Name should be at most 50 characters" }),
    email: string()
        .email({ message: "Please enter a valid email" })
        .min(1, { message: "Email is required" })
        .max(255, { message: "Email should be at most 255 characters" }),
    password: string()
        .min(8, { message: "Password should be at least 8 characters" })
        .max(50, { message: "Password should be at most 50 characters" }),
    confirmPassword: string()

        .min(1, { message: "Confirm Password is required" }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    });

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const passwordReducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE_PASSWORD":
                return { ...state, password: !state.password };
            case "TOGGLE_CONFIRM_PASSWORD":
                return { ...state, confirmPassword: !state.confirmPassword };
            default:
                return state;
        }
    };

    const dispatch = useDispatch();
    const [localState, reducerDispatch] = useReducer(passwordReducer, {
        password: false,
        confirmPassword: false,
    });

    const togglePassword = (e) => {
        reducerDispatch({ type: "TOGGLE_PASSWORD" });
    };

    const toggleConfirmPassword = (e) => {
        reducerDispatch({ type: "TOGGLE_CONFIRM_PASSWORD" });
    };

    const onSubmit = async (data) => {
        try {
            await dispatch(registerUser(data)).unwrap();
            toast.success("User Register Successfully");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                <FcInTransit size={60} className="my-2" />
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register("fullName")}
                        placeholder="Enter your Full Name"
                        type="text"
                    />
                    {errors.fullName && (
                        <p className="text-red-500">{errors.fullName.message}</p>
                    )}

                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register("userName")}
                        placeholder="Enter your username"
                        type="text"
                    />
                    {errors.userName && (
                        <p className="text-red-500">{errors.userName.message}</p>
                    )}

                    <input
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        {...register("email")}
                        placeholder="Enter your Email"
                        type="email"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                    )}

                    <div className="relative flex justify-center items-center">
                        <input
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("password")}
                            placeholder="Enter your Password"
                            type={localState.password ? "text" : "password"}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            onClick={togglePassword}
                        >
                            {localState.password ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                    )}
                    <div className="relative flex justify-center items-center">
                        <input
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("confirmPassword")}
                            placeholder="Enter your confirm Password"
                            type={localState.confirmPassword ? "text" : "password"}
                        />

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            onClick={toggleConfirmPassword}
                        >
                            {localState.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="text-red-500">{errors.confirmPassword.message}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                {/* <div className="flex justify-center items-center">
                    <button className="py-2 px-4 rounded border w-full mt-3" onClick={handleGoogleRegister}>
                        Sign up with <FcGoogle className="inline-block ml-1" />
                    </button>
                </div> */}

                <p className="mt-4 text-center">
                    Already a member?{" "}
                    <Link className="text-blue-500 cursor-pointer" to={`/login`}>
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
