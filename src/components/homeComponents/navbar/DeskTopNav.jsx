import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsFileLock } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import Account from '../../overlay components/Account';



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


                    <div className="">
                        <div className=" inline-flex space-x-2">
                            <BsPerson className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                            <h1 onClick={ () => setOverDrop(!overDrop)} className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                                Account
                            </h1> <br />
                        </div> 
                            {/* ACCOUNT OVERLAY FOR STATIC NAVBAR IMPORTED FROM OVERLAY COMPONENT FOLDER */}
                            {overDrop && <div className={` duration-150 ${!open && "scale-0"}`}>
                                <Account />
                            </div>}
                    </div><br />

                            

                                {/*  THE COURSES DROP DOWN OPTIONS */}

                    <div className=" inline-flex space-x-2">
                        <BsBook className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <label className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                            Courses
                        </label> <br />

                        <select name="courses" id="courses"  onChange={handleCourseChange} className={` text-sm bg-[#02061F] duration-100 ${!open && "scale-0"} max-w-[100px]`}>
                            <option value="select">--SELECT--</option>
                            <option value="Java">Java</option>
                            <option value="Php">PHP</option>
                            <option value="Python">Python</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="C++">C++</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Cyber Security">Ethical Hacking</option>
                            <option value="Product Design">UI/UX</option>
                            <option value="R">R</option>
                            <option value="React.JS">React.JS</option>
                            <option value="React Native">React Native</option>
                            <option value="Vue.JS">Vue.JS</option>
                            <option value="Angular">Angular</option>
                            <option value="Kotlin">Kotlin</option>
                            <option value="HTML/CSS & JS">Web Development</option>
                        </select>
                    </div> <br />





                                    {/* IF YOU WISH TO DISPLAY THE SELECTED OPTION FROM THE COURSES, YOU CAN DISPLAY IT WITH THIS PARAGRAPH */}
                    <div className="">
                        <p className="">
                            {coursesDropValue}
                        </p>
                    </div>


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