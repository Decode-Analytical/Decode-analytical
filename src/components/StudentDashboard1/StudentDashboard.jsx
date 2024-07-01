import React,{useState,useContext} from 'react'
import NavBar from './NavBar'
import SmallCard from './SmallCard'
import CourseDash from './CourseDash'
import DashCourse from './DashCourse'
import Certificate from './Certificate'
import Charts from './Charts'
import Dashcourse1 from './Dashcourse1'
import Dashcourse2 from './Dashcourse2'
import Dashcourse3 from './Dashcourse3'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'
import { useFetchCourses } from '../../hooks/UsefetchStudent'


const StudentDashboard = () => {
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
        Dashboard="Dashboard" />
        <div className='bg-white bg-shadow rounded-sm p-[60px] flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>
            <div className='text-[#1E1E1E] font-montserrat font-bold text-3xl'>Welcome back, Victoria</div>
            <div className=' max-lg: flex items-center justify-between gap-6 w-[100%] flex-wrap max-md:justify-center'>
              <SmallCard
                title='Ongoing Course'
                count={`${ongoingCourses?.length}`}
                 />
              <SmallCard
                title='Completed Course'
                count={`${completedCourses?.length}`}
                 />
              <SmallCard
                title='Claimed Certificate'
                count='0'
                 />
              <SmallCard
                title='Find more Course'
                count='Explore+'
                 />
            </div>
          </div>
          <div>
            <CourseDash ongoing={ongoingCourses}/>
          </div>
          <div className='bg-white bg-shadow rounded-md p-4'>
            <DashCourse completed={completedCourses}/>
          </div>
          <div>
            <Certificate/>
          </div>
          <div>
            <Charts/>
          </div>
          <div >
            <Dashcourse1/>
          </div>
          <div >
            <Dashcourse2/>
          </div>
          <div >
            <Dashcourse3/>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboard