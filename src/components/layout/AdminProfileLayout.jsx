import React, { useState } from "react";
import AdminSidebar from "../sidebar/AdminSidebar";
import ProfileHeader from "../ProfileHeader";

const ProfileLayout = ({ title, children }) => {
  const [menuOpen, setMenuopen] = useState(false);

  const toggleOpenMenu = () => {
    setMenuopen(true);
  };
  const toggleCloseMenu = () => {
    setMenuopen(false);
  };
  return (
    <div className="md:flex mb-6">
      <div className={`md:w-[85px] ${menuOpen ? "" : "hidden md:block"}`}>
        <AdminSidebar
          menuOpen={menuOpen}
          toggleOpenMenu={toggleOpenMenu}
          toggleCloseMenu={toggleCloseMenu}
        />
      </div>
      <div className="w-full">
        <div className="w-screen md:w-[85vw]  mx-auto">
          <ProfileHeader title={title} toggleOpenMenu={toggleOpenMenu} />
          <div className="mt-[50px] bg-shadow rounded-lg  mx-auto  py-8 md:py-16 w-[95%] md:w-[100%] px-4 md:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
