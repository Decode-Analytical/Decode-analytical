import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import ProfileHeader from "./ProfileHeader";

const ProfileLayout = ({ title, px, children }) => {
  const [menuOpen, setMenuopen] = useState(false);
  const toggleMenu = () => {
    setMenuopen(!menuOpen);
  };
  return (
    <div className="md:flex mb-6">
      <div className={`md:w-[85px] ${menuOpen ? "" : "hidden md:block"}`}>
        <AdminSidebar />
      </div>
      <div className="w-full">
        <div className="md:w-[85vw]  mx-auto">
          <ProfileHeader title={title} toggleMenu={toggleMenu} />
          <div className="mt-[50px] bg-shadow rounded-lg  mx-auto first:place-items-center py-8 md:py-16 w-[95%] md:w-[100%] px-4 md:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
