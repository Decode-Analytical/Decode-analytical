import React from 'react'
import Instruction from './Instruction'

export default function () {
  return (
    <>
        <section className='bg-gray-200'>
            <div className="  max-w-[1080px] m-auto">
                <div className="">
                    <Instruction />
                </div>

                <div className="">
                    <form action="" method="post">
                        <div className='pb-20'>
                            <div className=" mx-5 p-5 rounded-lg bg-white space-y-8">
                                <div className="">
                                    <p className="">
                                        Tech History 
                                    </p>
                                </div>

                                <div className="">
                                    <label htmlFor="duration">How long have you been in  tech?</label> <br />
                                    <input type="text" placeholder='One year' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                                </div>

                                <div className="">
                                    <label htmlFor="os">What type of OS do you have access to</label> <br />
                                    <input type="text" placeholder='eg. Windows OS' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                                </div>

                                <div className="">
                                    <label htmlFor="reason">Why are you taking this training?</label> <br />
                                    <input type="text" placeholder='eg. hsgdGXGDUYRHNICIHDUNRGUY' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                                </div>

                                <div className="">
                                    <label htmlFor="jobType">What type of job do you want?</label> <br />
                                    <input type="text" placeholder='eg. hgdbxywguygerusfudg u' className=' w-full px-3 py-1 border border-gray-500 rounded-md' />
                                </div>

                                <div className="  flex justify-between text-center text-white">
                                    <button className='bg-[#01051D] w-20 border border-[#01051D] hover:bg-white hover:text-[#01051D] hover:font-bold'>
                                        Previous 
                                    </button>

                                    <button type='' className='bg-[#01051D] w-20 border border-[#01051D] hover:bg-white hover:text-[#01051D] hover:font-bold'>
                                        Save 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
