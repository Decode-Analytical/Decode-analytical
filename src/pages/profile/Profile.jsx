import React, { useState, useContext } from 'react'

import CourseCard from '../../components/courseCard/CourseCard';
import ProfileSideBar from './ProfileSideBar';
import { NavLink } from 'react-router-dom';
import ListCourseCard from '../../components/courseCard/ListCourseCard';
import EnrolledCourseCard from '../../components/courseCard/EnrolledCourseCard';

import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';


const Profile = () => {
  /*
  use my logins

    email: spacemars666@gmail.com
    pass:0000000000
  */
    const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('...')
  const [imgUrl, setImgUrl] = useState('...')
  const [userP, setUserP] = useState({name:"...", imgUrl: ""});

  const profileUrl = 'https://server-eight-beige.vercel.app/api/user/viewProfile';

  const enrolledURL= 'https://server-eight-beige.vercel.app/api/student/studentGet'

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

  const fetchUserData = () => {
    fetch(profileUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const name = (`${data.user.firstName} ${data.user.lastName}`)
      setUserP({name: name, imgUrl: 'https://cdn.vcgamers.com/news/wp-content/uploads/2022/01/paquito-ml-3.jpg'})
      fetchEnrolledCourses()
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
  }

  const [listCourses, setListCourses] = useState([]);
  const fetchEnrolledCourses = () => {
    fetch(enrolledURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.studentRegisteredCourses)
      setListCourses(data.studentRegisteredCourses);
      setLoading(false)
    })
    .catch(error => {
      console.error(error);
    });
  }


  if (loading) {
    fetchUserData()
    return (
      <div className='w-full h-full min-h-[500px] flex justify-center items-center'>
        <Loader />
      </div>
    )
  }
  return (
    <>
      <div className="flex flex-row">
        <ProfileSideBar name={userP.name} imgUrl={user.imgUrl}/>
        <div className="flex flex-col lg:ml-[300px] flex-1">{/* column2 */}
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
              
              <EnrolledCourseCard title="Ongoing Courses" course={listCourses[0]} />

              {/* Completed Courses */} 
              <ListCourseCard title="Completed Courses (6)" list={listCourses} />
              {/* Completed Courses */} 
              <ListCourseCard title="Claimed Certificate (3)" list={listCourses} />

            </div>

        </div> 
      </div> 
    </>
  )
}

export default Profile