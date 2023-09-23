import React from 'react'
import iconHeading from "../../assets/dashboardicon1.png"
import rafiki from "../../assets/rafiki.png"
import certification from "../../assets/certification.png"
import completed from "../../assets/completed.png"
import lunchTime from "../../assets/lunch-time.png"
import toolsImage from "../../assets/tools.png"
import forumsImage from "../../assets/forums.png"
import coursesImage from "../../assets/course.png"
import EnrolledCourseCard from '../../components/courseCard/EnrolledCourseCard'
import ListCourseCard from '../../components/courseCard/ListCourseCard'
import { NavLink } from 'react-router-dom'

const MyCourse = () => {
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
        },
        {
          title: "Pouf !",
          progress: 50,
        }
      ]
    
  return (
    <div className='bg-gray-50'>
      <div className="flex flex-col fixed top-0 bottom-0 lg:left-0 border-r-2 w-16 overflow-y-auto text-center bg-gray-900 profile-sidebar">
      </div>

      <div className='flex flex-1 bg-white '>
        <div className='flex justify-between flex-1 shadow-md px-28'>
            <h2 className='text-3xl font-extrabold flex items-center'>My Courses</h2>
            <img src={iconHeading} alt="" />
        </div>
      </div>

      <ul className='flex flex-wrap px-28 mt-6 justify-between'>
        <li className='flex p-4 shadow-md'>
            <div className='w-24 pr-3'>
                <p className='text-gray-600'>On going courses</p>
                <h3 className='font-bold text-center text-xl'>3</h3>
            </div>
            <img src={rafiki} alt="On going courses" />
        </li>
        <li className='flex p-4 shadow-md'>
            <div className='w-24 pr-3'>
                <p className='text-gray-600'>Completed courses</p>
                <h3 className='font-bold text-center text-xl'>9</h3>
            </div>
            <img src={lunchTime} alt="On going courses" />
        </li>
        <li className='flex p-4 shadow-md'>
            <div className='w-24 pr-3'>
                <p className='text-gray-600'>Total Time Learning</p>
                <h3 className='font-bold text-center text-xl'>4h 22m</h3>
            </div>
            <img src={completed} alt="On going courses" />
        </li>
        <li className='flex p-4 shadow-md'>
            <div className='w-24 pr-3'>
                <p className='text-gray-600'>Claimed Certificate</p>
                <h3 className='font-bold text-center text-xl'>5</h3>
            </div>
            <img src={certification} alt="On going courses" />
        </li>
      </ul>

      <div className='px-28'>
        <EnrolledCourseCard title="On Going Courses (3)" course={listCoursesTest[0]} />
      </div>
      <div className='px-28'>
        <ListCourseCard title="Completed Courses" list={listCoursesTest} />
      </div>

      <div className='px-28'>
        <ListCourseCard title="Similar Courses" list={listCoursesTest} />
      </div>
      <div className='px-28'>
        <ListCourseCard title="Recommanded Courses" list={listCoursesTest} />
      </div>
      <div className='px-28'>
        <ListCourseCard title="Recently Viewed Courses" list={listCoursesTest} />
      </div>

      <nav className='px-28 mt-6 mx-6 mb-16'>
        <ul className='flex gap-4'>
            <li key="nav-dashboard" className='flex-1 bg-gray-100'>
            <NavLink end to="/profile/dashboard" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900 ${isActive && "border-b-2 border-b-gray-950 font-semibold text-gray-950"}`}>
                    <h3 className='font-bold'>Go to Forum</h3>
                    <img src={forumsImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
            <li key="nav-dashboard" className='flex-1 bg-gray-100'>
            <NavLink end to="/profile/dashboard" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900 ${isActive && "border-b-2 border-b-gray-950 font-semibold text-gray-950"}`}>
                    <h3 className='font-bold'>Go to Courses</h3>
                    <img src={coursesImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
            <li key="nav-dashboard" className='flex-1 bg-gray-100'>
            <NavLink end to="/profile/dashboard" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900 ${isActive && "border-b-2 border-b-gray-950 font-semibold text-gray-950"}`}>
                    <h3 className='font-bold'>Go to Tools</h3>
                    <img src={toolsImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default MyCourse
