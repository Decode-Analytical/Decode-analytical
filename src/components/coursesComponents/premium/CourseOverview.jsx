import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default function CourseOverview({ _id }) {
    const courseURL = `https://decode-mnjh.onrender.com/api/course/viewAllCourses/CourseOverView/${_id}`;
    const apiKey = import.meta.env.VITE_API_KEY;
    const token = apiKey;


    const [courseDetails, setCourseDetails] = useState({});


    useEffect(() => {
        // Make an API request to fetch more information about the course using courseId
        const fetchCourseDetails = async () => {
          try {
            const response = await Axios.get(courseURL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCourseDetails(response.data.courses);
          } catch (error) {
            console.error('Error fetching course details:', error);
            console.log(_id)
          }
        };
    
        fetchCourseDetails();
      }, [_id]);

    return (
        <>
            <section className='max-w-[1000px] m-auto'>
                <div className="px-[5%] md:w-[90%]">
                    <div className="">
                        <p className="text-3xl mt-20 font-bold">
                            Course Overview 
                        </p>

                        <p className="text-xs md:text-sm mt-5">
                            This course will teach you the fundamentals of {/*UI design and how to create visually appealing user interfaces. You will study the fundamental tools, layouts, mockups, and techniques that product designers use to create remarkable interfaces.*/}
                        </p>
                    </div>

                    <div className="mt-10 flex justify-between">
                        <p className="font-bold text-2xl">
                            {/* {showAllCourses ? `${courses.length} Courses` : '3 Courses'} */}
                            Module
                        </p>

                        <p className="hidden md:block font-bold text-2xl">
                            What you will cover in this course
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
