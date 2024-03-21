import React from "react";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/adminDashboardImages/logo.png";

const ProfileHeader2 = ({ to }) => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;
  return (
    <div className="bg-shadow py-2">
      <div className="w-[90%] mx-auto max-w-[1280px] ">
        <div className="flex justify-between items-center  ">
          <div>
            {authUser?.picture[0]?.path ? (
              <img
                className="max-w-[40px] mt-1 rounded-full"
                src={authUser?.picture[0]?.path}
              />
            ) : (
              <div className="flex justify-center items-center min-w-[50px] h-[50px] bg-gray-400 mt-1 rounded-full">
                <IoPerson className="text-[30px] text-white1" />
              </div>
            )}
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[50px]" />
          </Link>
          <Link
            className="border border-blue1 px-4 py-1 rounded-md text-blue1"
            to={to}
          >
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader2;
