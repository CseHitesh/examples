import { object, string } from "zod";

import { FcGoogle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { Link } from "react-router-dom";
import React from "react";
import { googleLoginPopup } from "../../services/utils/helpers";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../store/slices/authSlice";
import { toast } from 'react-toastify';

const loginSchema = object({
    email: string().email({ message: "Invalid email address" }).min(1),
    password: string().min(8, "Password Must be 8 Char"),
});

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const dispatch = useDispatch()

    const handleGoogleLogin = async () => {

        try {
            const user = await googleLoginPopup()

            console.log({ user });

        } catch (error) {

            console.log({ error });
        }
    };


    const onSubmit = async (data) => {

        try {

            await dispatch(loginUser(data)).unwrap()
            toast.success("Login successfully")
        } catch (error) {
            toast.error(error.message)

        }


    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                    <FcInTransit size={60} className="my-2" />
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("email")}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}

                        <input
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("password")}
                            placeholder="Password"
                            type="password"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* <div className="flex justify-center items-center">
                        <button className="  py-2 px-4 rounded border w-full mt-3" onClick={handleGoogleLogin}>
                            Sign in with <FcGoogle className="inline-block ml-1" />
                        </button>
                    </div> */}

                    <p className="mt-4 text-center">
                        Not a member?{" "}
                        <Link className="text-blue-500 cursor-pointer" to={`/register`}>
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
