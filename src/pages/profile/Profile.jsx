import React from 'react'

import CourseCard from '../../components/courseCard/courseCard';
import ProfileSideBar from './ProfileSideBar';
import { NavLink } from 'react-router-dom';


const Profile = () => {


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

            <div className='flex flex-col'>
              <div className='flex flex-col mt-16 mx-6 border border-gray-300 rounded-2xl p-3'>
                <div className='flex justify-between pt-3 pb-2 border-b-2 mb-4'>
                  <h3 className='font-semibold text-lg'>Ongoing Courses</h3>
                  <p className='text-gray-400'>see all ongoing courses</p>
                </div>
                <CourseCard />
              </div>
              <div className='flex flex-row'>
              <CourseCard />
              <CourseCard />
              <CourseCard />

              </div>
            </div>

        </div> 
      </div> 
    </>
  )
}

export default Profile