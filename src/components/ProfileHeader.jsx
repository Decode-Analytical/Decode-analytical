import React from "react";
import logo from "../assets/adminDashboardImages/logo.png";
import SearchBar from "./SearchBar";

const ProfileHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mx-auto w-[90%] md:w-full">
      {title && <h2 className="font-bold text-[26px]">{title}</h2>}
      <div>
        <img src={logo} alt="logo" className="w-[50px]" />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default ProfileHeader;
