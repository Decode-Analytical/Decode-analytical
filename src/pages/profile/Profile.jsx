import React from 'react'
import { NavLink } from "react-router-dom";

const Profile = () => {
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
      <div className="flex flex-row">

      </div> 
    </>
  )
}

export default Profile