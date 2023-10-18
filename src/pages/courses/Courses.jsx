import React from "react";


export default function Courses() {
    return(
        <>
        

        <section className="cart-bg p-[3rem] lg:p-[8rem] text-white bg-cover w-100% font-montserrat whitespace-break-spaces">
            <h1 className="font-extrabold text-6xl pb-11">Courses</h1>
            <p className="text-2xl">Empower Your Digital Journey With Us</p>
            <div className="flex text-center left-[20px] text-black mt-4 max-w-[50rem] rounded-md">
            <div className="dropdown relative inline-block">
  <button className="addbtn bg-white p-[20px] rounded-s-md ">All</button>
  <div className="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[160px] shadow-md z-10">
    <a className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"href="#">Course 1</a>
    <a className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"href="#">Course 2</a>
    <a className="text-black px-[12px] py-[16px] no-underline block hover:bg-[#ddd]"href="#">Course 3</a>
  </div>
</div>
                <input placeholder="Search All Courses" className="bg-white p-[20px] w-full outline-none rounded-e-md border-none"/>
            </div>
            <div className="flex justify-start gap-3 p-[2rem] text-black">
                <p className="p-[10px] px-[20px] rounded-full bg-white">Free</p>
                <p className="p-[10px] px-[20px] rounded-full bg-white">Paid</p>
                <p className="p-[10px] rounded-full bg-white">All Courses</p>
            </div>
        </section>
        </>
    )
}