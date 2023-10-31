import React from 'react';


export default function CourseOverview( props ) {
    const { course_description } = props;
    return (
        <>
            <section className='max-w-[1000px] m-auto'>
                <div className="px-[5%] md:w-[90%]">
                    <div className="">
                        <p className="text-3xl mt-20 font-bold">
                            Course Overview 
                        </p>

                        <p className="text-xs md:text-sm mt-5">
                            {course_description}
                        </p>
                    </div>

                    <div className="mt-10 flex justify-between">
                        <p className="font-bold text-2xl">
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
