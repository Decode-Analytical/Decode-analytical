import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function CourseOverview(_id) {
    let { courseId } = useParams()
    const courseURL = `https://decode-mnjh.onrender.com/api/course/viewAllCourses?_id=${_id}`;
    const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
    const token = apiKey;
    console.log(useParams())
    console.log(courseId)


    const [courseDetails, setCourseDetails] = useState([]);


    useEffect(() => {
        // Make an API request to fetch more information about the course using courseId
        const fetchCourseDetails = async () => {
          try {
            const response = await fetch(courseURL, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
            const data = await response.json();
            console.log(data)
            setCourseDetails(data.courses)

          } catch (error) {
            console.error('Error fetching course details:', error);
            // console.log(_id)
          }
        };
    
        fetchCourseDetails();
      }, []);

    return (
        <>
            <section className='max-w-[1000px] m-auto font-montserrat'>
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
                   <p>{courseDetails[0]._id}</p>
                </div>
            </section>
        </>
    );
}
