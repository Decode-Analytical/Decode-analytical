import React from 'react'
import CourseCard from '../../components/courseCard/CourseCard';

const ListCourseCard = (props) => {
    const {title, list} = props
  return (
    <>
      {/* Completed Courses */} 
      <div className='flex flex-col mt-6 mx-6 border border-gray-300 rounded-2xl p-3'>
        <div className='flex justify-between pt-3 pb-2 mb-4'>
            <h3 className='font-semibold text-lg'>{title}</h3>
            <p className='text-gray-400'>see all</p>
        </div>
        <ul className='flex flex-wrap justify-evenly gap-4'>
            {list.map(el => (
                <li className='w-72'>
                    <CourseCard data={el} />
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default ListCourseCard
