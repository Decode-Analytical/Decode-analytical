import React from "react";
import logo from "../assets/adminDashboardImages/logo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const ProfileHeader = ({ title, toggleOpenMenu }) => {
  return (
    <div className="flex justify-between items-center mx-auto  w-[95%] md:w-full">
      <button onClick={toggleOpenMenu} className="md:hidden">
        <RxHamburgerMenu className="text-4xl  " />
      </button>
      {title && (
        <h2 className="font-bold hidden md:block text-[26px]">{title}</h2>
      )}
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[50px]" />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default ProfileHeader;
