import React from "react";
import MainSideBar from "./mainSideBar";
import ProfileNavbar from "../utils/ProfileNavbar";

const Layout = ({ title, px, children }) => {
  return (
    <div className="flex">
      <div className="w-[80px]">
        <MainSideBar />
      </div>
      <div className="mx-auto">
        <div className="w-[90vw]">
          <ProfileNavbar title={title} />
          <div
            className={`mt-[50px] bg-shadow rounded-lg  mx-auto place-items-center py-24 px-${
              px || "8"
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

export default Layout;
