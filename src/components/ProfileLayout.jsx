import React from "react";
import ProfileHeader from "../utils/ProfileHeader";
import AdminSidebar from "./AdminSidebar";

const ProfileLayout = ({ title, px, children }) => {
  return (
    <div className="flex mb-6">
      <div className="max-w-[80px]">
        <AdminSidebar />
        <div className="md:w-[80px]" />
      </div>
      <div className="w-full">
        <div className="md:w-[90vw]  mx-auto">
          <ProfileHeader title={title} />
          <div
            className={`mt-[50px] bg-shadow rounded-lg  mx-auto place-items-center py-20 px-${
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

export default ProfileLayout;
