import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import logo from "../../assets/adminDashboardImages/logo.png";
import { useFetchAdminProfile } from "../../hooks/useFetchAdmin";
import { IoPerson } from "react-icons/io5";

export const AdminSubLayout = () => {
  const navigate = useNavigate();
  // const authUser = JSON.parse(localStorage.getItem("user")).user;

  const { fetchData: fetchAdminProfile, data: adminProfile } =
    useFetchAdminProfile();

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const authUser = adminProfile?.user;
  return (
    <div>
      <div className="bg-shadow py-2">
        <div className="w-[90%] mx-auto max-w-[1280px] ">
          <div className="flex justify-between items-center  ">
            <div>
              <Link to="/admin-dashboard/profile">
                {authUser?.picture[0]?.path ? (
                  <img
                    className="w-[40px] h-[40px] rounded-full object-cover object-center"
                    src={authUser?.picture[0]?.path}
                  />
                ) : (
                  <div className="flex justify-center items-center min-w-[40px] h-[40px] bg-gray-400 rounded-full">
                    <IoPerson className="text-[30px] text-white1" />
                  </div>
                )}
              </Link>
            </div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[50px]" />
            </Link>
            <button
              className="border border-blue1 px-4 py-1 rounded-md text-blue1"
              onClick={() => navigate(-1)}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[97%] md:w-[90%] mx-auto max-w-[1280px] my-[60px] ">
        <Outlet />
      </div>
    </div>
  );
};
export default ProtectedLayout(AdminSubLayout);
