import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiSquaresFourBold } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "../hooks/useLogout";
import { IoPerson } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";

const AdminSidebar = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;

  const { logout } = useLogout();
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
      path: "home",
      link: "/admin-dashboard/home",
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
      icon: <LuWallet className="text-[30px]" />,
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
  ];

  return (
    <div
      onMouseEnter={toggleOpenMenu}
      onMouseLeave={toggleCloseMenu}
      className={`flex flex-col 
      ${menuOpen ? "w-[250px]" : "w-[85px]"} 
         h-screen text-gray3 fixed left-0 bg-white1 px-4 gap-10 z-50 transition-[width] duration-700 ease-in-out uppercase bg-shadow`}
    >
      <div className={`flex items-start min-h-[65px] px-1 gap-4 mt-10`}>
        {authUser?.picture[0]?.path ? (
          <img
            className="max-w-[50px] mt-1 rounded-full"
            src={authUser?.picture[0]?.path}
          />
        ) : (
          <div className="flex justify-center items-center min-w-[50px] h-[50px] bg-gray-400 mt-1 rounded-full">
            <IoPerson className="text-[30px] text-white1" />
          </div>
        )}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } transition-[display] duration-700 ease-in-out  overflow-hidden`}
        >
          {menuOpen && (
            <p className="text-xl min-w-[160px] font-medium">
              {authUser?.firstName}
            </p>
          )}
          {menuOpen && (
            <p className="font-semibold px-2 bg-[#005508] rounded-md text-sm text-white1 w-fit">
              INSTRUCTOR
            </p>
          )}
        </div>
      </div>
      <div className={`flex flex-col gap-4`}>
        {sideBarItems.map((item, index) => (
          <div key={index} className={`text-gray3 flex gap-2`}>
            <NavLink
              onClick={toggleCloseMenu}
              to={item.link}
              className={`flex gap-4 px-3 py-2  font-bold rounded-md cursor-pointer items-center duration-500  ${
                menuOpen ? "w-[215px]" : ""
              } transition-[width] duration-700 ease-in-out overflow-hidden`}
              // style={{
              //   ...(currentRoute.includes(item?.path)
              //     ? {
              //         backgroundColor: "#D9DBE5",
              //         color: "#303030",
              //         fontWeight: 700,
              //       }
              //     : {}),
              // }}
            >
              <div>{item?.icon}</div>
              {menuOpen && <div className="min-w-[160px] ">{item?.name}</div>}
            </NavLink>
          </div>
        ))}
        <div className={`text-gray3 flex gap-2`}>
          <button
            onClick={logout}
            className={`flex gap-4 px-3 py-2 hover:bg-gray1 font-bold  hover:text-gray3 rounded-md cursor-pointer items-center duration-500  ${
              menuOpen ? "w-[215px]" : ""
            } transition-[width] duration-700 ease-in-out overflow-hidden`}
          >
            <div>
              <FiLogOut className="text-[30px]" />
            </div>
            {menuOpen && (
              <div className="min-w-[160px] uppercase flex justify-start">
                Logout
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
