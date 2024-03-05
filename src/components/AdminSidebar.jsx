import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiSquaresFourBold } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { BiWalletAlt } from "react-icons/bi";

const AdminSidebar = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;
  const currentRoute = useLocation().pathname;

  const [menuOpen, setMenuopen] = useState(false);

  const toggleOpenMenu = () => {
    setMenuopen(true);
  };
  const toggleCloseMenu = () => {
    setMenuopen(false);
  };
  const sideBarItems = [
    {
      name: "Dashboard",
      icon: <PiSquaresFourBold className="text-[32px]" />,
      path: "dashboard",
      link: "/admin-dashboard/dashboard",
    },
    {
      name: "Courses",
      icon: <FiBookOpen className="text-[30px]" />,
      path: "courses",
      link: "/admin-dashboard/courses",
    },
    {
      name: "Messages",
      icon: <FaRegEnvelope className="text-[30px]" />,
      path: "messages",
      link: "/admin-dashboard/messages",
    },
    {
      name: "Wallet",
      icon: <BiWalletAlt className="text-[30px]" />,
      path: "wallet",
      link: "/admin-dashboard/wallet",
    },
    {
      name: "Tools",
      icon: <FiTool className="text-[30px]" />,
      path: "tools",
      link: "/admin-dashboard/tools",
    },
    {
      name: "Help Center",
      icon: <GrCircleQuestion className="text-[30px]" />,
      path: "help-center",
      link: "/admin-dashboard/help-center",
    },
    {
      name: "Settings",
      icon: <LuSettings className="text-[30px]" />,
      path: "settings",
      link: "/admin-dashboard/settings",
    },
    {
      name: "Logout",
      icon: <FiLogOut className="text-[30px]" />,
      link: "/admin-dashboard/logout",
    },
  ];

  return (
    <div
      onMouseEnter={toggleOpenMenu}
      onMouseLeave={toggleCloseMenu}
      className={`flex flex-col 
      ${menuOpen ? "w-[250px]" : "w-[95px]"} 
         h-screen text-white fixed left-0 bg-blue1 px-4 gap-10 z-50 transition-[width] duration-1000 ease-in-out uppercase`}
    >
      <div className={`flex items-start min-h-[65px] px-1 gap-4 mt-10`}>
        <img
          className="max-w-[50px] mt-1 rounded-full"
          src={authUser.picture[0].path}
        />
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } transition-[display] duration-1000 ease-in-out  overflow-hidden`}
        >
          {menuOpen && (
            <p className="text-xl min-w-[160px] font-medium">
              {authUser.firstName}
            </p>
          )}
          {menuOpen && (
            <p className="font-semibold px-2 bg-[#005508] rounded-md text-sm w-fit">
              INSTRUCTOR
            </p>
          )}
        </div>
      </div>
      <div className={`flex flex-col gap-4`}>
        {sideBarItems.map((item, index) => (
          <div key={index} className={`text-white flex gap-2`}>
            <NavLink
              onClick={toggleCloseMenu}
              to={item.link}
              className={`flex gap-4 px-3 py-2 hover:bg-gray1 font-bold  hover:text-blue1 rounded-md cursor-pointer items-center duration-500  ${
                menuOpen ? "w-[215px]" : ""
              } transition-[width] duration-1000 ease-in-out overflow-hidden`}
              style={{
                ...(currentRoute.endsWith(item.path)
                  ? {
                      backgroundColor: "#D9DBE5",
                      color: "#040E53",
                      fontWeight: 700,
                    }
                  : {}),
              }}
            >
              <div>{item.icon}</div>
              {menuOpen && <div className="min-w-[160px] ">{item.name}</div>}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
