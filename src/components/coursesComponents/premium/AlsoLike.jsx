import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Ellipse from '../../../assets/courses Images/Ellipse.png';
import { BsClockHistory } from 'react-icons/bs';

export default function AlsoLike() {
    const courseURL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
    const apiKey = import.meta.env.VITE_API_KEY;

    const token = apiKey;

    // VIEW THE COURSES STATE
    const [courses, setCourses] = useState([]);

    // VIEW DETAILS BUTTON HANDLER, SO ONE BUTTON DOES NOT TRIGGER ALL BUTTONS TO ACTION
    const [courseDetails, setCourseDetails] = useState({});

    const toggleDetails = (courseId) => {
        setCourseDetails((prevState) => ({
            ...prevState,
            [courseId]: !prevState[courseId],
        }));
    };

    //   FETCHING THE API
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

    // Divide the courses into groups of 3, that is makin the CSS display maximum of 3 per row
    const coursesInGroups = [];
    for (let i = 0; i < courses.length; i += 3) {
        coursesInGroups.push(courses.slice(i, i + 3));
    }

    return (
        <>
            <section className="mx-[5%] mt-20 mb-20">
                <div className="max-w-[1100px] m-auto">
                    <h2 className="text-3xl">You might also like</h2>
                </div>

                <div className="max-w-[1100px] m-auto">
                    {coursesInGroups.map((courseGroup, groupIndex) => (
                        <div className="md:flex justify-between" key={groupIndex}>
                            {courseGroup.map((course) => (
                                <div className="w-full md:max-w-[350px] px-2" key={course._id}>
                                    <div className="mt-5 border p-3 rounded-lg border-gray">
                                        {course.course_image && course.course_image[0] && course.course_image[0].path && (
                                            <img src={course.course_image[0].path} alt="" className="w-full" />
                                        )}

                                        <p className="font-bold mt-2 mx-3">{course.course_title}</p>

                                        <div className="mt-2 flex items-center mx-3">
                                            <img src={Ellipse} alt="" />
                                            <p className="ml-3">by Jane Doe</p>
                                        </div>

                                        <p className="mx-3">Rating: {course.ratings}</p>

                                        <div className="mt-3 flex justify-between mx-3">
                                            <p className="flex items-center space-x-2">
                                                <BsClockHistory />
                                                <span>2h 30m</span>
                                            </p>

                                            <p className="">Beginners</p>
                                        </div>

                                        <div className="mt-2 flex justify-between mx-3">
                                            <button onClick={() => toggleDetails(course._id)}>View Course</button>

                                            <p className="">{course.isPaid_course}</p>
                                        </div>

                                        {courseDetails[course._id] && (
                                            <div className="text-gray text-xs w-[90%] m-auto">{course.course_description}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
