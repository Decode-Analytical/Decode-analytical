import React from 'react'
import InstructorHero from '../../components/instructorProfileComponents/InstructorHero'
import MainSideBar from '../../components/mainSideBar'
import AboutInstructor from '../../components/instructorProfileComponents/AboutInstructor'
import CoursesCreated from '../../components/instructorProfileComponents/CoursesCreated'

export default function InstrucructorProfile() {
  return (
    <>
        <div className=' bg-[#dddddd] min-h-screen'>
            <div>
                <MainSideBar />
            </div>
            <div className=" mx-[5%] sm:ml-[12%] px-[5%] bg-[#eeeeee]">
                <InstructorHero />
                <AboutInstructor />
                <CoursesCreated />
            </div>
        </div>
    </>
  )
}
