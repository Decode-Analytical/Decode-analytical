import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrPrevious } from "react-icons/gr";
export default function PremiumComponents() {
  return (
    <>
      <main>
        <div className="bg-img mt-20 text-white bg-cover bg-no-repeat bg-center h-64 md:h-[557px] flex flex-col justify-center">
          <div class="w-[797px] h-[255px] border-solid  pl-64 gap-6 ">
            <h2 class="font-bold text-6xl text-white pt-8 pb-4">Courses</h2>
            <p class=" font-medium text-xl pb-4 pt-4">
              Empower Your Digital Journey with Us
            </p>
            <form className=" w-[676px] h-12 gap-6 rounded flex bg-white justify-between border-none outline-0 items-center">
              <select
                id="courseOption"
                name="courses"
                className="text-black h-11 w-28 p-3 font-black outline-0 "
              >
                <option value="All" className="text-black text-sm font-black">
                  All
                </option>
                <option
                  value="Coding"
                  className="text-black text-sm font-black"
                >
                  Coding
                </option>
                <option value="Data" className="text-black text-sm font-black">
                  Data
                </option>
                <option
                  value="Finance"
                  className="text-black text-sm font-black"
                >
                  Finance
                </option>
              </select>
              <input
                type="text"
                className="h-6 w-[522px] font-normal text-sm text-gray-600  outline-0 border-l border-gray-600 border-solid pl-2"
                placeholder="Search all categories "
              ></input>
              <button type="submit" className="bg-white pr-4">
                <FiSearch className="text-gray-600 w-5 h-5" />
              </button>
            </form>
          </div>
          <div className="gap-4 flex text-black font-semibold text-sm pl-64 ">
            <button className="bg-white rounded-3xl py-1.5 px-3 hover:translate-y-1 transition-all duration-75">
              Free
            </button>
            <button className="bg-white rounded-3xl py-1.5 px-3 hover:translate-y-1 transition-all duration-75">
              Paid
            </button>
            <button className="bg-white rounded-3xl py-1.5 px-3.5 hover:translate-y-1 transition-all duration-75">
              AllLevels
            </button>
          </div>
          <div className="rounded-full border-white border-2 border-solid  text-white w-14 h-14 flex items-center justify-center text-current">
            <GrPrevious className="fill-white stroke-white stroke-2 text-white" />
          </div>
        </div>
      </main>
      {/* <section>
            <div className=""> */}
      {/* BG-IMG CLASS IMPORTED FROM APP.CSS */}
      {/* <div className="bg-img mt-20 text-white bg-cover bg-no-repeat bg-center h-64 md:h-[400px] " >
                    <div className=" w-3/4 m-auto pt-4">
                        <p className="mt-5 text-2xl ">
                            Courses 
                        </p>

                        <p className="text-sm mb-5 mt-2">
                            Empower your digital journey
                        </p>

                        <form action="/search" method="get">
                            <input type="text" placeholder='search' name='courses' className='p-1 w-full  rounded-xl md:w-1/2'/>
                        </form>

                        <div className=" mt-3 flex justify-between w-[150px]">
                            <button className=" text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300 ">Free</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">Paid</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">All level</button>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  );
}
