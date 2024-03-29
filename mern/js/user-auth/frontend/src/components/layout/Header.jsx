import React from "react";
import { FcInTransit } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../ui/Avtar";

const Header = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch({ type: "logout" });
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center gap-2">
            <FcInTransit size={40} className="my-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              User-Auth
            </span>
          </Link>

          {!user ? (
            <div className="flex items-center lg:order-2">
              <Link
                to="/register"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 border-[1px]"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            </div>
          ) : (
            <>
              <Avatar
                name={user?.fullName}
                email={user?.email}
                onSignOut={onSignOut}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
