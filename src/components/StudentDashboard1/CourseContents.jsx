import React from 'react'
import { useRef } from 'react'

const CourseContents = ({image,level,course,hours,profile,author,continu,select}) => {
    const ref = useRef()
    let first = ref?.current?.value
    // console.log(first);


    return (
        <>
            <div className=' max-lg:flex flex pt-6 justify-between items-center max-md:flex-col max-sm:flex-col align-middle gap-2'>
                <div className=' max-md:w-[20%] max-sm:w-[100%] text-center flex items-center justify-center sm:w-[300px]'>
                    <img className=' max-lg:w-[180px] max-md:w-[250px] max-sm:w-[200px] sm:w-[170px] rounded-md w-[150px]' src={image} alt="course" />
                </div>
                <div className='flex flex-col gap-2 bg-slate-600 w-[60%] max-sm:w-[90%]'>
                    <div>
                        <p className=' font-montserrat font-normal text-base'>{level}</p>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' font-montserrat font-semibold text-2xl'>{course}</div>
                        <div>
                            <div className='flex flex-col gap-2'>
                                <div className=" flex justify-between items-center  gap-5 rounded-full">
                                    <progress className='prog' ref={ref} value={49} max={100}></progress>
                                    <h5 className=' font-montserrat font-bold text-base mt-[-10px]'>{first}%</h5>
                                </div>
                                <div className=' font-montserrat font-medium text-base text-[#303030]'>{hours}</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src={profile} alt="" />
                            <div className=' font-montserrat font-normal text-sm'>{author}</div>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-3 items-center w-[20%]'>
                    <button className=' rounded-lg py-3 px-5 text-white bg-[#040E53]'>{continu}</button>
                    <p className=' font-montserrat font-semibold text-sm text-[#E81515]'>{select}</p>
                </div>
            </div>
        </>
    )
}

export default CourseContents

