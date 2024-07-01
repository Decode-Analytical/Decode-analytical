import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import {BsStar} from "react-icons/bs";
import purchaseImg from '../../assets/purchases/purchaseImg.png';
import Ellipse2 from '../../assets/purchases/Ellipse2.png';

import { AuthContext } from '../../context/AuthContext';

const courseURL = 'https://server-eight-beige.vercel.app/api/course/viewAllCourses';

export default function RecommendedCourses() {
    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([]); 

    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(courseURL, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
  
          if (response.data && response.data.courses) {
            setCourses(response.data.courses);
            console.log('response:', response.data);
            // console.log(modules);
            console.log(user.accessToken, 'Token at Recommended Courses');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchCourses();
    }, [user.accessToken]);
  return (
    <>
                {/* ============================RECOMMENDED COURSES========================= */}
        <section className=' mx-[5%] mt-20'>
            <div className=" max-w-[1080px] m-auto flex justify-between pb-5">
                <p className=" text-2xl font-bold">
                    Recommended Courses
                </p>

                <p className=" cursor-pointer text-xs">
                    see all &gt;
                </p>
            </div>

            <div className=" max-w-[1080px] m-auto md:flex justify-between">
                {courses.map((course) => (
                    <div key={course._id} className="space-y-4 shadow-2xl pb-8 px-3">
                    <img src={course.course_image[0]?.path} alt="" className="w-full" />

                    <p className="font-bold">{course.course_title}</p>

                    <div className="flex space-x-3 items-center">
                        <BsStar />
                        <p className="">4/5</p>
                        <p className="">(124 verified ratings)</p>
                    </div>

                    <div className="flex items-center">
                        <img src={Ellipse2} alt="" className="w-10 mr-3" />
                        <p className={`by ${course.userId}`}>by Mac Kingsley</p>
                    </div>
                    </div>
                ))}
            </div>         
        </section>



        {/* ============================RECENTLY VIEWED COURSES========================= */}
        <section className=' mx-[5%] my-40'>
            <div className=" max-w-[1080px] m-auto flex justify-between pb-5">
                <p className=" text-2xl font-bold">
                    Recently viewed Courses
                </p>

                <p className=" cursor-pointer text-xs">
                    see all &gt;
                </p>
            </div>

            <div className=" max-w-[1080px] m-auto md:flex justify-between">
                <div className=" space-y-4 shadow-2xl pb-8 px-3">
                    <img src={purchaseImg} alt="" className=' w-full ' />

                    <p className=" font-bold">
                        Early design and it's principle
                    </p>

                    <div className=" flex space-x-3 items-center">
                        <BsStar />

                        <p className="">
                            4/5
                        </p>

                        <p className="">
                            (124 verified ratings)
                        </p>
                    </div>

                    <div className=" flex items-center">
                        <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                        <p className="">
                            by Victoria Olayode
                        </p>
                    </div>
                </div>


                        {/* CODES FROM HERE WILL BE CLEARED AFTER PRODUCTION */}
                <div className=" space-y-4 shadow-2xl pb-8 px-3 mt-20 md:mt-0">
                    <img src={purchaseImg} alt="" className=' w-full ' />

                    <p className=" font-bold">
                        Early design and it's principle
                    </p>

                    <div className=" flex space-x-3 items-center">
                        <BsStar />

                        <p className="">
                            4/5
                        </p>

                        <p className="">
                            (124 verified ratings)
                        </p>
                    </div>

                    <div className=" flex items-center">
                        <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                        <p className="">
                            by Victoria Olayode
                        </p>
                    </div>
                </div>

                <div className=" space-y-4 shadow-2xl pb-8 px-3 mt-20 md:mt-0">
                    <img src={purchaseImg} alt="" className=' w-full ' />

                    <p className=" font-bold">
                        Early design and it's principle
                    </p>

                    <div className=" flex space-x-3 items-center">
                        <BsStar />

                        <p className="">
                            4/5
                        </p>

                        <p className="">
                            (124 verified ratings)
                        </p>
                    </div>

                    <div className=" flex items-center">
                        <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                        <p className="">
                            by Victoria Olayode
                        </p>
                    </div>
                </div>

                <div className=" space-y-4 shadow-2xl pb-8 px-3 mt-20 md:mt-0">
                    <img src={purchaseImg} alt="" className=' w-full ' />

                    <p className=" font-bold">
                        Early design and it's principle
                    </p>

                    <div className=" flex space-x-3 items-center">
                        <BsStar />

                        <p className="">
                            4/5
                        </p>

                        <p className="">
                            (124 verified ratings)
                        </p>
                    </div>

                    <div className=" flex items-center">
                        <img src={Ellipse2} alt="" className=' w-10 mr-3'/>
                        <p className="">
                            by Victoria Olayode
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
