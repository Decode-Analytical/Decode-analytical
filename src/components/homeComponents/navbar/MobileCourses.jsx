import React from 'react'

export default function MobileCourses() {
  return (
    <>
        <section>
            <div className="text-center my-10 border border-[#02061F]  text-[#02061F] rounded-md shadow-2xl mx-10">
                <div className=" m-2">
                    <p className=" text-2xl font-bold">
                        Courses
                    </p>
                </div>

                <div className="">
                    <ul className=" my-5 space-y-3">
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Java</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>PHP</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Python</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Flutter</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>C++</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Ethical Hacking</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>UI/UX</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>R</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>React.JS</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>React Native</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Vue.JS</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Angular</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Kotlin</li>
                        <li className=' cursor-pointer hover:bg-gray-300 rounded'>Web Development</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}