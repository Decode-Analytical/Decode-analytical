import React, { useState } from 'react'
import CourseContents from './CourseContents';
import TopCourseCard from './TopCourseCard';
import image from '../../assets/StudentImages/courseimg.png'
import profile from '../../assets/StudentImages/Profile pic.png'

const CourseDash = ({ongoing}) => {
  const [end, setEnd] = useState(false)

  const [index, setindex] = useState(0)
  const Next = () => {

    if (index == 2) {
      setEnd(false)
      setindex(0)
    } else {
      setindex(index + 1)
      setEnd(true)
      console.log(index);
    }

  }


  const Prev = () => {
    if (index == 0) {
      setindex(2)
      setEnd(true)
    } else if (index == 1) {
      setindex(index - 1)
      setEnd(false)
    }
    else {
      setindex(index - 1)
      setEnd(true)
    }


  }
  return (
    <>
      <div className='bg-white bg-shadow rounded-md p-4'>
        <div className=''>
          <TopCourseCard
          Next={Next}
          Prev={Prev}
          index={index}
          end={end}
          things={`Ongoing Course(${ongoing?.length}) `}
          />
          <div>
            {
            // index == 0 && 
            ongoing?.length > 0 ?(
            ongoing?.map((element, index)=>(
              
              <CourseContents key={index}
              image={element.image[0].path}
              level="Immediate"
              course={element.title}
              hours="34h 15m left"
              profile={profile}
              author="by Gabrielle Torrez"
              continu="Continue Learning"
              select="Unenroll"/>
            ))
          ):(
            <p>No ongoing course</p>
          )
            }
            
            {index == 1 && 
            <CourseContents 
            image={image}
            level="Immediate"
            course="Introduction to javascripts"
            hours="14h 15m left"
            profile={profile}
            author="by Gabrielle Torrez"
            continu="Continue Learning"
            select="Unenroll"/>}
            {index == 2 && 
            <CourseContents 
            image={image}
            level="Immediate"
            course="Introduction to Figma"
            hours="24h 15m left"
            profile={profile}
            author="by Gabrielle Torrez"
            continu="Continue Learning"
            select="Unenroll"/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDash

