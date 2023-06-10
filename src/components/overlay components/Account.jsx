import React from 'react'
import { Link } from "react-router-dom"
import { BsKey } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";


export default function Account() {
  return (
    <>
        <section>
            <div className=" text-[#02061F] bg-white rounded-lg p-2">
                <p className=" pl-2 font-bold">
                    Adams steve
                </p>
                <p className=" pl-2">
                    Student
                </p>
                <hr className=' bg-gray-700'/>

                <div className=" text-sm space-y-3 mt-5">
                    <p className=" flex cursor-pointer items-center">
                        <BsPerson className=' text-3xl mr-2 border-2 border-[#02061F] rounded-full' />
                        Update Student Profile
                    </p>

                    <p className=" flex cursor-pointer items-center">
                        <BsPerson className=' text-3xl mr-2 border-2 border-[#02061F] rounded-full' />
                        User Profile
                    </p>

                    <Link to="/PasswordReset" >
                    <p className=" mt-2 flex cursor-pointer items-center">
                        <BsKey className='  text-3xl mr-2'/> 
                        Change Password
                    </p>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}
