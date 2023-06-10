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
    

    const [open, setOpen] = useState(true);
   
    const [overDrop, setOverDrop] = useState(false);
    
  return (              // ALL ICONS FROM REACT ICONS
    <>
        <section>
            <div className= {`hidden md:block bg-[#02061F] h-screen space-y-4 lg:space-y-32 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-700 sticky top-0 z-10 text-white  `}>

                <div className="space-y-6 ">
                    <BsArrowLeftShort onClick={() => setOpen(!open)} className={`bg-white text-[#02061F] text-2xl rounded-full absolute -right-2 top-20 border border-[#02061F] cursor-pointer ${!open && "rotate-180"} `}/>

                    <div className=" inline-flex space-x-2">
                        <RxDashboard className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && "rotate-[360deg]"}`}/>
                        <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50 `}>
                            Dashboard
                        </h1>
                    </div> <br />


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

                            


                    <div className=" inline-flex space-x-2">
                        <BsBook className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${open && ""}`}/>
                        <h1 className={` block text-xl cursor-pointer duration-700 ${!open && "scale-0"} hover:opacity-50`}>
                            Courses
                        </h1>
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







// const [slideSide, setSlideSide] = useState (false);
    //     let sideSlide

    //     if (slideSide) {
    //         sideSlide = 
    //         <section className=" absolute top-0 w-[10%]  text-white mt-20  bg-[#02061F] flex flex-col justify-center origin-left animate-open-menu">
    //                 <nav className=" flex flex-col min-h-screen items-center  space-y-36 py-8">
    //                     <div className=" space-y-10">
    //                         <div className="">
    //                             <Link to=''> Dashboard</Link>
    //                         </div> 

    //                         <div className="">
    //                             <Link to=''> Account</Link>
    //                         </div> 

    //                         <div className="">
    //                             <Link to=''> Courses</Link>
    //                         </div> 

    //                         <div className="">
    //                             <Link to=''> Certificate</Link>
    //                         </div> 
    //                     </div>

    //                     <div className=" space-y-10">
    //                         <div className="">
    //                             <Link to=''> Support</Link>
    //                         </div>
                            

    //                         <div className="">
    //                             <Link to=''> Log out</Link>
    //                         </div>
    //                     </div>
    //                 </nav>
    //         </section>
    //     }








{/* <div onClick={()=> setSlideSide (!slideSide)} className=" text-4xl cursor-pointer hidden md:block border border-blue-950 rounded-full mx-4 px-1 pb-1 ">
            &#9776;
        </div>



        <div className="">
            {sideSlide}
        </div> */}