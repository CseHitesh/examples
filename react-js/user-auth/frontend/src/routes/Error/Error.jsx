import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-lg">Oops! Page not found.</p>
                <p className="mt-4">
                    It looks like you're lost in the universe.
                    <br />
                    Let's get you back to a safer place.
                </p>
                <button
                    className="mt-6 bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-purple-200 focus:outline-none"
                    onClick={() => navigateToHome()} // Replace with your navigation logic
                >
                    Go Home
                </button>
            </div>
        </div>

    );
}