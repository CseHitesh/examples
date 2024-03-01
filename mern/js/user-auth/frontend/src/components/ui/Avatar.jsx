import React, { useState } from "react";

const Avatar = ({ name, email, onSignOut }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div className="user-avatar relative">
      <div
        className=" rounded-full bg-white  cursor-pointer"
        alt="User Avatar"
        onClick={toggleUserInfo}
      >
        <span class=" px-2 py-2">{name.charAt(0)}</span>
      </div>
      {showUserInfo && (
        <div className="bg-white absolute top-10 right-0 rounded border-[1px] border-black py-1">
          <h3 className="cursor-pointer hover:bg-gray-800 hover:text-white p-1">
            {name}
          </h3>
          <p className="cursor-pointer hover:bg-gray-800 hover:text-white p-1">
            {email}
          </p>
          <hr className="border-1 border-black  " />

          <span
            className="cursor-pointer hover:bg-gray-800 hover:text-white p-1 block"
            onClick={onSignOut}
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
