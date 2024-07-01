import React, { useState } from 'react'
import SideNav from '../../components/StudentDashboard1/SideNav'
import { Outlet } from 'react-router-dom'
import StudentDashboard from '../../components/StudentDashboard1/StudentDashboard';

const StudentIndex = () => {
  const [menuOpen, setMenuopen] = useState(false);

  const toggleOpenMenu = () => {
    setMenuopen(true);
  };
  const toggleCloseMenu = () => {
    setMenuopen(false);
  };
  return (
    <>
      <div className=' flex items-center justify-between w-[100%] h-[100vh]'>
        <SideNav
          menuOpen={menuOpen}
          toggleOpenMenu={toggleOpenMenu}
          toggleCloseMenu={toggleCloseMenu}
          className=' w-[10%]'
        />
        <div className='w-[90%] h-[700px] absolute right-0'>
          <Outlet />
          {/* <StudentDashboard /> */}
        </div>
      </div>
    </>
  )
}

export default StudentIndex