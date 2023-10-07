import React from 'react'

import CourseCard from '../../components/courseCard/CourseCard';
import ProfileSideBar from './ProfileSideBar';
import { NavLink } from 'react-router-dom';
import ListCourseCard from '../../components/courseCard/ListCourseCard';
import EnrolledCourseCard from '../../components/courseCard/EnrolledCourseCard';


const Profile = () => {
  const listCoursesTest = [
    {
      title: "Can coffee make you a better developer?",
      progress: 36,
    },
    {
      title: "No, I love café",
      progress: 12,
    },
    {
      title: "Course help me!",
      progress: 99,
    }
  ]

  return (
    <>
      <div className="flex flex-row">
        <ProfileSideBar />
        <div className="flex flex-col ml-[300px] flex-1">{/* column2 */}
            <header className='flex flex-col border-b-2 px-6 pt-4'>
              <h2 className='font-bold text-2xl'>Welcom to your dashboard</h2>
              <nav className='mt-3'>
                <ul className='flex gap-4'>
                  <li key="nav-dashboard">
                    <NavLink end to="/profile/dashboard" 
                      className={({isActive})=> `flex-1 pb-2 block  text-gray-400 ${isActive && "border-b-2 border-b-gray-950 font-semibold text-gray-950"}`}
                      >Dashbord
                    </NavLink>
                  </li>
                  <li key="nav-point">
                    <NavLink to="/profile/dashboard/point" 
                      className={({isActive})=> `flex-1 pb-2 block text-gray-400  ${isActive && "border-b-2 border-b-gray-950 font-semibold text-gray-950"}`}
                      >Points
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>

            {/* Dashbord content (will change when click on profile) */} 
            <div className='flex flex-col'>
              {/* Ongoing Courses */} 
              <EnrolledCourseCard title="Ongoing Courses" course={listCoursesTest[0]} />

              {/* Completed Courses */} 
              <ListCourseCard title="Completed Courses (6)" list={[...listCoursesTest, ...listCoursesTest]} />
              {/* Completed Courses */} 
              <ListCourseCard title="Claimed Certificate (3)" list={listCoursesTest} />

            </div>

        </div> 
      </div> 
    </>
  )
}

export default Profile