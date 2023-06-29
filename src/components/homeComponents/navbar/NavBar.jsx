import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/SVG/Logo.svg";

export default function navBar() {
  // MOBILE DROPDOWN CONTENT
  const [showDropDown, setShowDropDown] = useState(false);
  let dropDown;

  if (showDropDown) {
    dropDown = (
      <section className=" absolute top-0 w-full text-5xl text-white mt-20 bg-[#02061F] flex flex-col justify-center origin-top animate-open-menu">
        <nav className=" flex flex-col min-h-screen items-center space-y-8 py-8">
          <Link
            to="/"
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Decode LMS
          </Link>

          <Link
            to=""
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Dashboard
          </Link>

          <Link
            to=""
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Account
          </Link>

          <Link
            to=""
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Courses
          </Link>

          <Link
            to=""
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Certificate
          </Link>

          <Link
            to="/LoginSignUp"
            onClick={() => setShowDropDown(!showDropDown)}
            className=" hover:opacity-80"
          >
            Login
          </Link>
        </nav>
      </section>
    );
  }

  return (
    <>
      <nav className="grid grid-cols-2 text-blue-950 items-center">
        {/* LINKS FOR MOBILE DROPDOWN */}
        <div className=" cursor-pointer">
          <Link to="/">
            <img src={logo} width={101} height={80} alt="Analytical logo" />
          </Link>
        </div>

        <Link to="/LoginSignUp" className="place-self-end">
          <button className="bg-[#040E53] text-white py-4 px-14 border text-lg rounded-md">
            Login
          </button>
        </Link>

        {/* THE HAMBUGER ICON FOR MOBILE */}
        {/* <div
          onClick={() => setShowDropDown(!showDropDown)}
          className=" text-4xl cursor-pointer md:hidden border border-blue-950 rounded-full px-1 pb-1 "
        >
          &#9776;
        </div> */}
      </nav>

<<<<<<< HEAD
      {/*======== THE HAMBUGER MENU FOR SMALLER SCREEN DEVICES======= */}
      {/* <div className="">{dropDown}</div> */}
    </>
  );
}
=======

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
>>>>>>> 4334ed0f9f188bf8838255d2b3f49f6fbcaef663
