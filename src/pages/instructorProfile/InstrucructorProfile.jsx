import React from 'react'
import InstructorHero from '../../components/instructorProfileComponents/InstructorHero'
import MainSideBar from '../../components/mainSideBar'

export default function InstrucructorProfile() {
  return (
    <>
        <div className=''>
            <div>
                <MainSideBar />
            </div>
            <div className=" mx-[5%] md:ml-[8%]">
                <InstructorHero />
            </div>
        </div>
    </>
  )
}
