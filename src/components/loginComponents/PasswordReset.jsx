import React from 'react'

export default function PasswordReset() {
  return (
    <>
        <section>
            <div className=" max-w-[500px] m-auto text-[#02061F]">
                <div className=" border p-10 rounded-md shadow-2xl mt-10 mx-5">
                    <p className=" text-2xl font-bold">
                        User Profile 
                    </p>

                    <div className=" space-y-8">
                        <p className=" mt-10 font-bold">
                            Password Settings
                        </p>

                        <div className="">
                            <label htmlFor="currentPassword">Current Password</label> <br />
                            <input type="password" className=' border  border-[#02061F] outline-none p-2'/>
                        </div>

                        <div className="">
                            <label htmlFor="currentPassword">New Password</label> <br />
                            <input type="password" className=' border  border-[#02061F] outline-none p-2'/>
                        </div>

                        <div className="">
                            <label htmlFor="currentPassword">Confirm New Password</label> <br />
                            <input type="password" className=' border  border-[#02061F] outline-none p-2'/>
                        </div>
                    </div>


                    <div className=" ">
                        <button type='submit' className='bg-[#040E53] text-white w-[100px] rounded-sm py-1 mt-5'>
                            update
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
