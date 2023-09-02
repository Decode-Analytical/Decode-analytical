import React from 'react'

export default function CourseOverview() {
  return (
    <>
        <section className='max-w-[1000px] m-auto'>
            <div className=" px-[5%] md:w-[90%]">
                <div className="">
                    <p className=" text-3xl mt-5">
                        Course Overview 
                    </p>

                    <p className=" text-xs md:text-sm">
                        This course will teach you the fundamentals of UI design and how to create visually appealing user interfaces. You will study the fundamental tools, layouts, mockups, and techniques that product designers use to create remarkable interfaces.
                    </p>
                </div>

                <div className=" mt-5 flex justify-between">
                    <p className=" font-bold">
                        14 Courses
                    </p>

                    <p className=" hidden md:block font-bold">
                        What you will cover in this course
                    </p>
                </div>

                <div className="">
                    <div className=" mt-1 md:flex justify-between">
                        <p className="">
                            Introduction to UI/UX design
                        </p>

                        <p className=" text-xs">
                            32:34 mins
                        </p>
                    </div>

                    {/* THIS DOWN WILL BE DELETED WHEN WE HAVE ACCESS TO THE BACKEND WE WILL MAP THROUGH */}

                    <div className=" mt-5 md:flex justify-between">
                        <p className="">
                            Introduction to UI/UX design
                        </p>

                        <p className=" text-xs">
                            32:34 mins
                        </p>
                    </div>

                    <div className=" mt-5 md:flex justify-between">
                        <p className="">
                            Introduction to UI/UX design
                        </p>

                        <p className=" text-xs">
                            32:34 mins
                        </p>
                    </div>

                    <div className=" mt-5 md:flex justify-between">
                        <p className="">
                            Introduction to UI/UX design
                        </p>

                        <p className=" text-xs">
                            32:34 mins
                        </p>
                    </div>

                    <div className=" mt-5 md:flex justify-between">
                        <p className="">
                            Introduction to UI/UX design
                        </p>

                        <p className=" text-xs">
                            32:34 mins
                        </p>
                    </div>

                    <div className="">
                        <button className=' mt-5 w-28 border border-purple-700 text-purple-700 text-lg rounded-md'>
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
