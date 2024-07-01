import React, { useRef } from 'react'
// import profile1 from '../../assets/StudentImages/Profile1.png'
import profile from '../../assets/StudentImages/Profile pic.png'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const CourseFrame = ({imageProp,second,author,level,Continu,rate,stage}) => {
  const ref = useRef()
  let first = ref?.current?.value
  // console.log(first);
  // console.log(imageProp);
  return (
    <>
      <div className='bg-white bg-shadow rounded-am py-2 px-3'>
        <div>
          <img src={imageProp} alt="" />
        </div>
        <div>
          <div className=' font-montserrat font-semibold text-base text-[#1E1E1E] w-[170px]'>{second}</div>
          <progress className='progs' ref={ref} value={100} max={100}></progress>
          <div className=' font-montserrat font-bold text-base'>{first}% Complete</div>
          <div className='flex gap-2'>
            <img src={profile} alt="" />
            <div className=' font-montserrat font-normal text-sm'>{author}</div>
          </div>
          <div className=' flex gap-1'>
            <div className=' flex gap-1'>
              <FaStar className=' text-[#E6D805] text-xs' />
              <FaStar className=' text-[#E6D805] text-xs' />
              <FaStar className=' text-[#E6D805] text-xs' />
              <FaRegStar className=' text-[#1E1E1E] text-xs' />
            </div>
            <p className=' font-montserrat font-normal text-xs'>{stage}</p>
            <p className=' font-montserrat font-normal text-xs'>{rate}</p>
          </div>
          <div className='flex gap-1 items-center'>
            <IoMdTime />
            <p className=' font-montserrat font-normal text-xs text-[#1E1E1E]'>{level}</p>
          </div>
          <button className='border border-[#040E53] rounded-3xl font-montserrat font-semibold text-xs'>{Continu}</button>
        </div>
      </div>
    </>
  )
}

export default CourseFrame