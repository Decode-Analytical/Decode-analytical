import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsFileLock } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";



export default function () {
    

                // STATE FOR THE  STATIC SIDE BAR ARROW
    const [open, setOpen] = useState(true);
   
                // STATE FOR THE ICONS AND THEIR LABELS TO EASE IN AND OUT WHEN THE SIDE NAV ARROW IS CLICKED 
    const [overDrop, setOverDrop] = useState(false);

                // STATE FOR THE COURSE DROP DOWN SELECTION VALUE
    const [coursesDropValue, SetCoursesDropValue] = useState('');

                // FUNCTION TO HANDLE THE SELECTED COURSE
    const handleCourseChange = (event) => {
        SetCoursesDropValue(event.target.value);
    };


    
  return (              // ALL ICONS FROM REACT ICONS
    <>
        <section>
            <div className= {`hidden md:block bg-[#02061F] h-screen space-y-4 lg:space-y-32 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-700 sticky top-0 z-10 text-white  `}>

                <div className="space-y-10 ">
                    <BsArrowLeftShort onClick={() => setOpen(!open)} className={`bg-white text-[#02061F] text-2xl rounded-full absolute -right-2 top-20 border border-[#02061F] cursor-pointer ${!open && "rotate-180"} `}/>
                    
                    <Link to = "/Dashboard">
                        <div className=" inline-flex space-x-2">
                            <RxDashboard className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && "rotate-[360deg]"}`}/>
                            <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50 `}>
                                Dashboard
                            </h1>
                        </div> <br />
                    </Link>


                                {/*  THE COURSES DROP DOWN OPTIONS */}

                    <div className=" inline-flex space-x-2">
                        <BsBook className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <Link to = '/premiumCourses'>
                            <label className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                                Courses
                            </label> <br />
                        </Link>

                    </div> <br />





                    <div className=" inline-flex space-x-2">
                        <BsAward className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                            Certificate
                        </h1>
                    </div> <br />
                </div>


                <div className=" space-y-6">
                    <div className=" inline-flex space-x-2">
                        <BsQuestionLg className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                            Support
                        </h1>
                    </div> <br />

                    <div className=" inline-flex space-x-2">
                        <BsFileLock className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                            LogOut
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}