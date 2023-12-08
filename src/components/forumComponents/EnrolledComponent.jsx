import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

import cuate from '../../assets/forum imgs/cuate.png'
import { AuthContext } from '../../context/AuthContext';


export default function EnrolledComponent() {
    const [responseData, setResponseData] = useState(null);
    const { token } = useContext(AuthContext);
    useEffect(() => {
        const registeredCourses = 'https://server-eight-beige.vercel.app/api/student/studentGet';
        console.log('Token:', token);
    
        axios.get(registeredCourses, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(response => {
                setResponseData(response.data);
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
              console.log('Full error response:', error.response);
            });
        }, []);
  return (
    <>
        <section className=' mx-[5%] mb-20'>
            {responseData ? (
                <div className=' md:flex flex-wrap gap-[90px] max-w-[1100px] m-auto'>
                    {responseData.studentRegisteredCourses.map(course => (
                    <div key={course._id} className='  basis-52 grow space-y-2 max-w-[450px] mt-10 md:mt-0 border border-gray-400 p-4 rounded-md'>
                        {/* ACCESSING REGISTERED COURSES */}
                        <img src={course.image[0].path} alt={course.title} />

                        <p className='  font-bold text-xl'>
                            <span className="text-2xl">
                                Title:    
                            </span> {course.title}
                        </p>

                        <p className=''> 
                            <span className=" font-bold text-2xl">
                                Description:
                            </span> {course.description}
                        </p>

                        <p className=''>
                            <span className=" font-bold text-2xl">
                                Price:
                            </span> {course.price.$numberDecimal}</p>
                        {/* You can access other properties similarly */}
                    </div>
                    ))}
              </div>
            ) : 


                    // IF STUDENT HAVE NOT REGISTERED IT WILL RENDER WHAT IS BELOW
            (
                <div className="">
                    <div className=" w-[200px] m-auto py-10">
                        <img src={cuate} alt="" />
                    </div>

                    <div className=" text-center">
                        <p className=" text-xl font-bold">
                            You haven’t enrolled in a course yet!
                        </p>

                        <p className=" text-xl font-bold">
                            But don’t worry, we can help you get started.
                        </p>

                        <p className=" text-xs">
                            Go to the homepage to view course you may enroll. Click the button below to get started.
                        </p>
                    </div>

                    <Link to='/'>
                        <div className=" w-28 m-auto ">
                            <button className=" p-2 text-white rounded-md bg-[#040E53] hover:bg-[#0a1a83] mt-5">
                                Homepage
                            </button>
                        </div>
                    </Link>
                </div>
            )}
        </section>
    </>
  )
}
  