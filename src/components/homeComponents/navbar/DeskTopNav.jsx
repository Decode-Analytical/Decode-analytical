import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsFileLock } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import Account from "../../overlay components/Account";

export default function () {
  const [open, setOpen] = useState(true);

  const [overDrop, setOverDrop] = useState(false);

  return (
    // ALL ICONS FROM REACT ICONS
    <>
      <section>
        <div
          className={`hidden bg-[#02061F] h-screen md:grid grid-rows-[1fr_auto] p-5 ${
            open ? "w-72" : "w-20"
          } duration-700 sticky top-0 z-10 text-white`}
        >
          <div className="space-y-6">
            <BsArrowLeftShort
              onClick={() => setOpen(!open)}
              className={`bg-white text-[#02061F] text-xl rounded-full absolute -right-2 top-20 border border-[#02061F] cursor-pointer ${
                !open && "rotate-180"
              } `}
            />

            {/* Dashboard  */}
            <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
              <RxDashboard
                className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer duration-500`}
                // ${open && "rotate-[360deg]"}
              />
              <h1
                className={`text-xl font-semibold cursor-pointer duration-700 ${
                  !open && "scale-0"
                } hover:opacity-50 `}
              >
                Dashboard
              </h1>
            </div>

            {/* Account */}
            <div>
              <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                <BsPerson
                  className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer duration-500 ${
                    open && ""
                  }`}
                />
                <h1
                  onClick={() => setOverDrop(!overDrop)}
                  className={`text-xl cursor-pointer font-semibold duration-700 ${
                    !open && "scale-0"
                  } hover:opacity-50`}
                >
                  Account
                </h1>
              </div>

              {/* ACCOUNT OVERLAY FOR STATIC NAVBAR IMPORTED FROM OVERLAY COMPONENT FOLDER */}
              {overDrop && (
                <div className={` duration-150 ${!open && "scale-0"}`}>
                  <Account />
                </div>
              )}
            </div>

            {/* Courses */}
            <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
              <BsBook
                className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer duration-500 ${
                  open && ""
                }`}
              />
              <h1
                className={`text-xl font-semibold cursor-pointer duration-700 ${
                  !open && "scale-0"
                } hover:opacity-50`}
              >
                Courses
              </h1>
            </div>

            {/* Certificate */}
            <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
              <BsAward
                className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${
                  open && ""
                }`}
              />
              <h1
                className={`text-xl font-semibold cursor-pointer duration-700 ${
                  !open && "scale-0"
                } hover:opacity-50`}
              >
                Certificate
              </h1>
            </div>
          </div>

          <div className="space-y-6">
            {/* Support */}
            <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
              <BsQuestionLg
                className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${
                  open && ""
                }`}
              />
              <h1
                className={`text-xl font-semibold cursor-pointer duration-700 ${
                  !open && "scale-0"
                } hover:opacity-50`}
              >
                Support
              </h1>
            </div>

            {/* Logout */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-5">
              <BsFileLock
                className={`bg-white text-[#02061F] p-2 text-4xl rounded cursor-pointer  float-left duration-500 ${
                  open && ""
                }`}
              />
              <h1
                className={`text-xl font-semibold cursor-pointer duration-700 ${
                  !open && "scale-0"
                } hover:opacity-50`}
              >
                LogOut
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
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

{
  /* <div onClick={()=> setSlideSide (!slideSide)} className=" text-4xl cursor-pointer hidden md:block border border-blue-950 rounded-full mx-4 px-1 pb-1 ">
            &#9776;
        </div>



        <div className="">
            {sideSlide}
        </div> */
}
