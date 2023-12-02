import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

import cuate from '../../assets/forum imgs/cuate.png'
import { AuthContext } from '../../context/AuthContext';


export default function EnrolledComponent() {
    const [data, setData] = useState(null);
    const { token } = useContext(AuthContext);
    useEffect(() => {
        const registeredCourses = 'https://decode-mnjh.onrender.com/api/student/studentGet';
        console.log('Token:', token);
    
        axios.get(registeredCourses, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(response => {
              setData(response.data);
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
        </section>
    </>
  )
}
  