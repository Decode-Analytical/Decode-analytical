import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function CourseOverview() {
    const courseURL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
    const apiKey = import.meta.env.VITE_API_KEY;
    const token = apiKey;

    // VIEW THE COURSES STATE
    const [courses, setCourses] = useState([]);
    const [showAllCourses, setShowAllCourses] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await Axios.get(courseURL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data && response.data.courses) {
                    setCourses(response.data.courses);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCourses();
    }, [token]);

    const visibleCourses = showAllCourses ? courses : courses.slice(0, 3);
    const buttonText = showAllCourses ? 'View Less' : 'View All';

    return (
        <>
            <section className='max-w-[1000px] m-auto'>
                <div className="px-[5%] md:w-[90%]">
                    <div className="">
                        <p className="text-3xl mt-20 font-bold">
                            Course Overview 
                        </p>

                        <p className="text-xs md:text-sm mt-5">
                            This course will teach you the fundamentals of UI design and how to create visually appealing user interfaces. You will study the fundamental tools, layouts, mockups, and techniques that product designers use to create remarkable interfaces.
                        </p>
                    </div>

                    <div className="mt-10 flex justify-between">
                        <p className="font-bold text-2xl">
                            {showAllCourses ? `${courses.length} Courses` : '3 Courses'}
                        </p>

                        <p className="hidden md:block font-bold text-2xl">
                            What you will cover in this course
                        </p>
                    </div>

                    <div className="mt-10 space-y-5">
                        {visibleCourses.map((course, index) => (
                            <div className="mt-1 md:flex justify-between" key={course._id}>
                                <p className="">
                                    {course.course_title}
                                </p>

                                <p className="text-xs">
                                    32:34 mins
                                </p>
                            </div>
                        ))}

                        {courses.length > 3 && (
                            <div className="">
                                <button
                                    className='mt-5 w-28 border border-purple-700 text-purple-700 text-lg rounded-md hover:bg-purple-300'
                                    onClick={() => setShowAllCourses(!showAllCourses)}
                                >
                                    {buttonText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
