import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminSidebar2 from "./AdminSidebar2";
import ProfileHeader from "./ProfileHeader";
import { RxHamburgerMenu } from "react-icons/rx";

const ProfileLayout = ({ title, px, children }) => {
  const [menuOpen, setMenuopen] = useState(false);
  const toggleMenu = () => {
    setMenuopen(!menuOpen);
  };
  return (
    <div className="md:flex mb-6">
      <button onClick={toggleMenu}>
        <RxHamburgerMenu className="text-4xl ml-7 md:hidden" />
      </button>

      <div className={`md:w-[85px] ${menuOpen ? "" : "hidden md:block"}`}>
        <AdminSidebar />
      </div>
      <div className="w-full">
        <div className="md:w-[85vw]  mx-auto">
          <ProfileHeader title={title} />
          <div
            className={`mt-[50px] bg-shadow rounded-lg  mx-auto first:place-items-center py-16 ${
              px || "px-10"
            }
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
