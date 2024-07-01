import React, { useState } from 'react'
import SideNav from '../../components/StudentDashboard1/SideNav'
import { Outlet } from 'react-router-dom'
import StudentDashboard from '../../components/StudentDashboard1/StudentDashboard';
import StudentCourse from '../../components/StudentCourses/StudentCourse';

const StudentCourses = () => {
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
        <div className='w-[90%] h-[700px] absolute right-0'>
          <StudentCourse />
        </div>
      </div>
    </>
  )
}

export default StudentCourses