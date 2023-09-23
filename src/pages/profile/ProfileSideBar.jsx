import React from 'react'
import { NavLink } from "react-router-dom";

const ProfileSideBar = () => {
    const listOptions = [
        {
          title: "Dashboard",
          url: "/profile/dashboard"
        },
        {
          title: "Courses",
          url: "/profile/courses"
        },
        {
          title: "Forum",
          url: "/profile/forum"
        },
        {
          title: "Messages",
          url: "/profile/messages"
        },
        {
          title: "Tools",
          url: "/profile/tools"
        },
        {
          title: "Help center",
          url: "/profile/help"
        },
        {
          title: "Settings",
          url: "/profile/settings"
        },
        {
          title: "Log out",
          url: "/profile/logout"
        },
      ]
  return (
    <>
      <div className="flex flex-col fixed top-0 bottom-0 lg:left-0 border-r-2 w-[300px] overflow-y-auto text-center bg-white profile-sidebar">
          <div className="flex flex-col items-center pt-5 profile-sidebar-heading">
            <img src='https://cdn.vcgamers.com/news/wp-content/uploads/2022/01/paquito-ml-3.jpg' alt='profile' 
              className='w-16 h-16 my-2 rounded-full'  />
              <h2 className='font-bold'>Papaquito Vuenaos</h2>
              <div className='text-sm my-1'>
                Reg. Student
              </div>
              <button className='border my-1 px-4 py-2 rounded-md text-xs border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white'>Edit Profile</button>
          </div>

          <ul className="flex flex-col mt-9 profile-sidebar-options">
            {listOptions.map(el => {
              return (
              <li className='flex flex-row cursor-pointer'>
                <NavLink to={el.url} 
                  className={({isActive})=> `py-3 flex-1 hover:bg-cyan-100 hover:font-semibold ${isActive && "border-l-2 border-l-gray-950"}`}
                  >{el.title}
                </NavLink>
              </li>
              )
            })}
            <li className='flex flex-row cursor-pointer mt-4'>
              <NavLink to="/profile/become_instructor" 
                className="py-3 flex-1 font-semibold"
                >Become Instructor
              </NavLink>
            </li>
          </ul>
        </div>
    </>
  )
}

export default ProfileSideBar
