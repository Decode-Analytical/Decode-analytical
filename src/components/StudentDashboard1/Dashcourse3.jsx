import React, { useState } from 'react'
import TopCourseCard from './TopCourseCard';
import CourseFrame from './CourseFrame';
import image2 from '../../assets/StudentImages/profiledash.png'
import image3 from '../../assets/StudentImages/designimage.png'
import image4 from '../../assets/StudentImages/figmaimage.png'
import image5 from '../../assets/StudentImages/jsimage.png'
import image6 from '../../assets/StudentImages/mysqlimage.png'


const Dashcourse3 = () => {
    const [end, setEnd] = useState(false)
    const [index, setindex] = useState(0)
    const Next = () => {

        if (index == 2) {
            setEnd(false)
            setindex(0)
        } else {
            setindex(index + 1)
            setEnd(true)
            console.log(index);
        }

    }


    const Prev = () => {
        if (index == 0) {
            setindex(2)
            setEnd(true)
        } else if (index == 1) {
            setindex(index - 1)
            setEnd(false)
        }
        else {
            setindex(index - 1)
            setEnd(true)
        }


    }
    return (
        <>
            <div>
                <div className=''>
                    <TopCourseCard
                        Next={Next}
                        Prev={Prev}
                        index={index}
                        end={end}
                        things='Recently Viewed'
                    />
                    <div className='flex w-[100%] gap-12 mt-4 overflow-auto items-center justify-center'>
                        <CourseFrame
                            imageProp={image2}
                            second="Early Design and its Principle (Part 2)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll" />
                        <CourseFrame
                            imageProp={image3}
                            second="Early Design and its Principle (Part 3)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll" />
                        <CourseFrame
                            imageProp={image4}
                            second="Early Design and its Principle (Part 4)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll" />
                        <CourseFrame
                            imageProp={image5}
                            second="Early Design and its Principle (Part 5)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll" />
                        <CourseFrame
                            imageProp={image6}
                            second="Early Design and its Principle (Part 6)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll" />
                        {/* {index == 0 && <CourseContents />} */}
                        {/* {index == 1 && "next page"} */}
                        {/* {index == 2 && 'another'} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashcourse3