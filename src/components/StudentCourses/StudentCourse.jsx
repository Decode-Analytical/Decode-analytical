import React, { useEffect, useContext, useState } from 'react'
// import NavBar from './NavBar'
import SmallCard from '../StudentDashboard1/SmallCard'
import CourseDash from '../StudentDashboard1/CourseDash'
import DashCourse from '../StudentDashboard1/DashCourse'
import Certificate from '../StudentDashboard1/Certificate'
import Charts from '../StudentDashboard1/Charts'
import Dashcourse1 from '../StudentDashboard1/Dashcourse1'
import Dashcourse2 from '../StudentDashboard1/Dashcourse2'
import Dashcourse3 from '../StudentDashboard1/Dashcourse3'
import NavBar from '../StudentDashboard1/NavBar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'
import { useFetchCourses } from '../../hooks/UsefetchStudent'

const StudentCourse = () => {
  const [users, setusers] = useState({})
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      setusers(user)
    }
  }, [user])

  const { fetchData: fetchStudentCourses, data: StudentCourses, loading, error } = useFetchCourses()
  useEffect(() => {
    fetchStudentCourses()
  }, [])
  const courses = StudentCourses?.studentRegisteredCourses
  console.log(courses);

  const ongoingCourses = courses?.filter((item) =>
    item?.isCourseCompleted === false
  )
  
  const completedCourses = courses?.filter((item) =>
    item?.isCourseCompleted === true
  )
  console.log(ongoingCourses, 'ongoing');
  console.log(completedCourses, 'completed');
  console.log(courses, 'Courses');



  return (
    <>
      <div className=' p-[20px] flex flex-col gap-5'>
        <NavBar
          Dashboard="Courses" />
        <div className='bg-white bg-shadow rounded-sm p-[60px] flex flex-col gap-10'>
          <div>
            <CourseDash ongoing={ongoingCourses} />
          </div>
          <div className='bg-white bg-shadow rounded-md p-4'>
            <DashCourse completed={completedCourses} />
          </div>
          <div >
            <Dashcourse1 />
          </div>
          <div >
            <Dashcourse2 />
          </div>
          <div >
            <Dashcourse3 />
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentCourse