import React, { useState } from 'react'
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
import MainSideBar from '../../components/mainSideBar'

const Dashboard = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJmMTZmNWNhMTUzYTY0YWU4OTFkM2UiLCJpYXQiOjE2OTc4MzAzMDUsImV4cCI6MTY5NzkxNjcwNX0.Bm9kg8SGPja1olDSz0Mj4Nm0wmU_rWiN8xe_mn6TthM"
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('...')
  const [imgUrl, setImgUrl] = useState('...')
  const [user, setUser] = useState({name:"...", imgUrl: ""})

  const fetchUserData = () => {
    fetch('https://decode-mnjh.onrender.com/api/user/viewProfile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("data data:",data);
      const name = (`${data.user.firstName} ${data.user.lastName}`)
      setUser({name: name, imgUrl: 'https://cdn.vcgamers.com/news/wp-content/uploads/2022/01/paquito-ml-3.jpg'})
      fetchEnrolledCourses()
    })
    .catch(error => {
      console.error(error);
    });
  }

  const [listCourses, setListCourses] = useState([]);
  const fetchEnrolledCourses = () => {
    fetch('https://decode-mnjh.onrender.com/api/student/studentGet', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.studentRegisteredCourses)
      setListCourses(data.studentRegisteredCourses);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
    });
  }


  if (loading) {
    fetchUserData()
    return (
      <div className='w-full h-full min-h-[500px] flex justify-center items-center'>Loading...</div>
    )
  }
  return (
    <>
    <MainSideBar name={user.name} imgUrl={user.imgUrl} />

    <div className='flex flex-1 bg-bwhite'>
      <div className='flex justify-between flex-1 shadow-md px-3 md:px-20'>
          <h2 className='text-3xl font-extrabold flex items-center'>My Dashboard</h2>
          <img src={iconHeading} alt="" />
      </div>
    </div>
    <div className='bg-gray-50 flex flex-col justify-center md:ml-20'>

      <ul className='flex flex-wrap mt-6 justify-evenly'>
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

        <EnrolledCourseCard title="On Going Courses (3)" course={listCourses[0]} />

        <ListCourseCard title="Completed Courses" list={listCourses} />

      {/* Claimed certificat */}
      <div>
        <div className='flex justify-between pt-3 pb-2 border-b-2 mb-4 mx-6 mt-6'>
            <h3 className='font-semibold text-lg'>Claimed Certification (5)</h3>
            <p className='text-gray-400'>see all</p>
        </div>
        <div className='flex flex-wrap justify-evenly gap-2'>
            <div className='h-80 w-[40%] bg-pink-300 rounded min-w-[300px]'>
                {/* certificate image here */}
            </div>
            <div className='h-80 w-[40%] bg-pink-300 rounded min-w-[300px]'>
                {/* certificate image here */}
            </div>
        </div>
      </div>
        <ListCourseCard title="Similar Courses" list={listCourses} />

        <ListCourseCard title="Recommanded Courses" list={listCourses} />

        <ListCourseCard title="Recently Viewed Courses" list={listCourses} />


      <nav className='mt-6 mb-16 mx-6'>
        <ul className='flex flex-wrap justify-evenly gap-4'>
            <li key="nav-dashboard" className='flex-1 bg-gray-100 min-w-[250px]'>
            <NavLink end to="/profile/dashboard" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900`}>
                    <h3 className='font-bold'>Go to Forum</h3>
                    <img src={forumsImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
            <li key="mycourses" className='flex-1 bg-gray-100 min-w-[250px]'>
            <NavLink end to="/mycourses" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900`}>
                    <h3 className='font-bold'>Go to Courses</h3>
                    <img src={coursesImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
            <li key="profile" className='flex-1 bg-gray-100 min-w-[250px]'>
            <NavLink end to="/profile/dashboard" 
                className={({isActive})=> `flex items-center flex-1 justify-evenly p-6 shadow-md text-gray-900`}>
                    <h3 className='font-bold'>Go to Tools</h3>
                    <img src={toolsImage} alt="" className='w-40 ml-4' />
            </NavLink>
            </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Dashboard
