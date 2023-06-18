import React, {useState} from 'react'
import { Link } from "react-router-dom"


import logo from "./logo.png"




export default function navBar() {
                    // MOBILE DROPDOWN CONTENT
    const [showDropDown, setShowDropDown] = useState (false);
    let dropDown;

    if (showDropDown) {
        dropDown =
            <section className=" absolute top-0 w-full text-2xl text-white mt-20 bg-[#02061F] flex flex-col justify-center origin-top animate-open-menu">
                <nav className=" flex flex-col min-h-screen items-center space-y-8 py-8">
                    <Link to="/" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Decode LMS
                    </Link>

                    <Link to="/Dashboard" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Dashboard
                    </Link>

                    <Link to="/Account" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Account
                    </Link>

                    <Link to="/mobileCourses" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Courses
                    </Link>

                    <Link to="" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Certificate
                    </Link>

                    <Link to="/LoginSignUp" onClick={()=> setShowDropDown (!showDropDown)} className=" hover:opacity-80">
                        Login
                    </Link>
                </nav>
            </section>  
    }

    return ( 
    <>
      <div className="sticky top-0 z-10">
            <section className="bg-gray-200 ">
                <nav className="max-w-[1330px] m-auto  ">
                    <div className=" flex justify-between text-blue-950  items-center mx-2 ">


                                {/* LINKS FOR MOBILE DROPDOWN */}
                        <div className=" cursor-pointer">
                            <Link to="/">
                                <img src={logo} alt="Analytical logo" />
                            </Link>
                        </div>


                        <div className="hidden md:block">
                            <Link to='/LoginSignUp' className=" bg-blue-950 text-white py-1 px-4 border border-blue-950 hover:bg-white hover:text-blue-950">
                                Login
                            </Link>
                        </div>


                            {/* THE HAMBUGER ICON FOR MOBILE */}
                        <div onClick={()=> setShowDropDown (!showDropDown)} className=" text-3xl cursor-pointer md:hidden border border-blue-950 rounded-full px-2 pb-1 ">
                            &#9776;
                        </div>
                    </div>
                </nav>

                        {/*======== THE HAMBUGER MENU FOR SMALLER SCREEN DEVICES======= */}
                    <div className="">
                        {dropDown}
                    </div>
            </section>
      </div>

      
      </>
    )
}