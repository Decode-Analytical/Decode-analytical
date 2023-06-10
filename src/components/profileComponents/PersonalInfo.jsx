import React from 'react'
import { Link } from "react-router-dom"


export default function PersonalInfo() {
  return (
    <>
        <section>
            <form action="" method="post">
                <div className='pb-20'>
                    <div className=" mx-5 p-5 rounded-lg bg-white space-y-8">
                        <div className="">
                            <p className="">
                                Personal Information 
                            </p>
                        </div>

                        <div className="">
                            <label htmlFor="altMail">Alternative Mail</label> <br />
                            <input type="mail" placeholder='Alternative Mail' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="">
                            <label htmlFor="phone">Phone Number</label> <br />
                            <input type="phone" placeholder='eg. +234 8000000000' required className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="">
                            <label htmlFor="country">Country</label> <br />
                            <input type="text" placeholder='eg. Nigeria' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="">
                            <label htmlFor="Nationality">Nationality</label> <br />
                            <input type="text" placeholder='eg. Nigerian' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="">
                            <label htmlFor="region">State/Region</label> <br />
                            <input type="text" placeholder='eg. Lagos' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="">
                            <label htmlFor="address">Address</label> <br />
                            <input type="mail" placeholder='12, Joe Smith avenue, Ikeja.' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                        </div>

                        <div className="  flex justify-end text-center text-white">
                            <Link to="/TecHistory">
                                <button type='' className='bg-[#01051D] w-20 border border-[#01051D] hover:bg-white hover:text-[#01051D] hover:font-bold'>
                                    NEXT 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </>
  )
}
