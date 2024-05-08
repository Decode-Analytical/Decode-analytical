import React, { useContext, useMemo } from "react";
import { CgCloseR } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { UserProfileContext } from "../../context/UserProfileContext";

const Sidebar = ({
  toggleOpenMenu,
  toggleCloseMenu,
  menuOpen,
  btnLinks,
  role,
}) => {
  const userProfile = useContext(UserProfileContext);

  const { logout } = useLogout();
  const currentRoute = useLocation().pathname;

  const isCurrentRoute = (path) => currentRoute.includes(path);

  return (
    <div
      onMouseEnter={toggleOpenMenu}
      onMouseLeave={toggleCloseMenu}
      className={`flex flex-col 
      ${menuOpen ? "w-[250px]" : "w-[85px]"} 
         h-screen text-gray3 fixed left-0 bg-white1 px-4 gap-10 z-50 transition-[width] duration-700 ease-in-out uppercase bg-shadow`}
    >
      <span
        onClick={toggleCloseMenu}
        className="md:hidden absolute top-1 right-2"
      >
        <CgCloseR className="text-xl" />
      </span>
      <div className={`flex items-start min-h-[65px] px-1 gap-4 mt-10`}>
        <Link to="/admin-dashboard/profile">
          <div className="w-[50px] h-[50px] overflow-hidden rounded-full grid place-items-center">
            {userProfile?.picture[0]?.path ? (
              <img
                className="max-w-[50px] object-cover object-center scale-[1.3]"
                src={userProfile?.picture[0]?.path}
              />
            ) : (
              <div className="flex justify-center items-center min-w-[50px] h-[50px] bg-gray-400 rounded-full">
                <IoPerson className="text-[30px] text-white1" />
              </div>
            )}
          </div>
        </Link>
        <div
          className={`transition-[display] duration-700 ease-in-out overflow-hidden`}
        >
          <Link to="/admin-dashboard/profile">
            <p className="text-xl min-w-[160px] font-medium">
              {userProfile?.firstName}
            </p>
          </Link>
          <p className="font-semibold px-2 bg-[#005508] rounded-md text-sm text-white1 w-fit uppercase">
            {role}
          </p>
        </div>
      </div>
      <div className={`flex flex-col gap-4`}>
        {btnLinks.map((item, index) => (
          <div key={index} className={`text-gray3 flex gap-2`}>
            <NavLink
              onClick={toggleCloseMenu}
              to={item.link}
              className={`flex gap-4 px-3 py-2  font-bold rounded-md cursor-pointer items-center duration-500  ${
                menuOpen ? "w-[215px]" : ""
              } transition-[width] duration-700 ease-in-out overflow-hidden ${
                isCurrentRoute(item.path)
                  ? "bg-[#E6E7EE] text-gray3 font-bold"
                  : ""
              }`}
            >
              <div>{item?.icon}</div>
              <div className="min-w-[160px] ">{item?.name}</div>
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
            <div className="min-w-[160px] uppercase flex justify-start">
              Logout
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
