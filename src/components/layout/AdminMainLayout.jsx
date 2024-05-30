import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileHeader from "../ProfileHeader";
import ProtectedLayout from "./ProtectedLayout";
import AdminSidebar from "../AdminSidebar";

const AdminMainLayout = ({ noShadow }) => {
  const [menuOpen, setMenuopen] = useState(false);
  const location = window.location.pathname;

  const setPage = () => {
    if (location === "/admin-dashboard/home") {
      return "Dashboard";
    } else if (location === "/admin-dashboard/courses") {
      return "Courses";
    } else if (location === "/admin-dashboard/messages") {
      return "Messages";
    } else if (location === "/admin-dashboard/wallet") {
      return "Wallet";
    } else if (location === "/admin-dashboard/tools") {
      return "Tools";
    } else if (location === "/admin-dashboard/help-center") {
      return "Help Center";
    } else if (location === "/admin-dashboard/profile") {
      return "Profile";
    } else if (location === "/admin-dashboard/settings") {
      return "Settings";
    }
  };

  const toggleOpenMenu = () => {
    setMenuopen(true);
  };
  const toggleCloseMenu = () => {
    setMenuopen(false);
  };
  return (
    <div className="md:flex mb-6">
      <div className={`md:w-[85px] ${menuOpen ? "" : "hidden md:block"}`}>
        <div
          className="block md:hidden fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.31)]"
          onClick={toggleCloseMenu}
        ></div>
        <AdminSidebar
          menuOpen={menuOpen}
          toggleOpenMenu={toggleOpenMenu}
          toggleCloseMenu={toggleCloseMenu}
        />
      </div>
      <div className="w-full">
        <div className="w-screen md:w-[85vw] mx-auto">
          <ProfileHeader title={setPage()} toggleOpenMenu={toggleOpenMenu} />
          <div
            className={`mt-[50px] ${
              noShadow ? "" : "bg-shadow px-4 md:px-10 py-8 md:py-16"
            } rounded-lg mx-auto w-[95%] md:w-[100%]`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProtectedLayout(AdminMainLayout);
