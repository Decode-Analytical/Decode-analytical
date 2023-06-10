import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import loginPic from "../loginComponents/loginPic.png"

export default function Login() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);

    const toggleSingInUp = () =>{
        setIsSignUpVisible (!isSignUpVisible);
    }

  return (
    <>
        <section>
            <div className=" max-w-[900px] m-auto flex justify-between items-center">
                <div className="px-5 my-10 md:max-w-[300px]">
                    <div className=" flex justify-between ">
                        <p onClick={toggleSingInUp} className=" cursor-pointer bg-[#01051D] text-white px-3 py-2 hover:bg-[white] hover:text-[#01051D] border border-[#01051D]">
                            sign up 
                        </p>

                        <p onClick={toggleSingInUp} className=" cursor-pointer bg-[#01051D] text-white px-3 py-2 hover:bg-[white] hover:text-[#01051D] border border-[#01051D]">
                            sign in
                        </p>
                    </div>
                    
                    {isSignUpVisible ? (
                    <form action="" method="post">
                        <div className=" space-y-5 mt-5">
                            <div className="">
                                <label htmlFor="firstname">First Name:</label> <br />
                                <input type="text" placeholder='First Name' required className='border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>


                            <div className="">
                                <label htmlFor="lastname">Last Name:</label> <br />
                                <input type="text" placeholder='Last name' required className='border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>

                            <div className="">
                                <label htmlFor="email">Mail:</label> <br />
                                <input type="email" placeholder='Enter mail ' required className='border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>

                            <div className="">
                                <label htmlFor="phone">Phone Number:</label> <br />
                                <input type="tel" placeholder='Phone Number' required className='border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>

                            <div className="">
                                <label htmlFor="password">Password:</label> <br />
                                <input type="password" placeholder='Password' required className='border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>

                            <div className="">
                                <button type="submit" className='w-full bg-[#01051D] text-white hover:text-[#01051D] hover:text-xl hover:font-bold border border-[#01051D] py-2 hover:bg-white '>
                                    sign up
                                </button>
                            </div>


                            <div className=" ">
                                <p className="text-xs">
                                By signing up, you agree to the  
                                <span className="text-blue-900 px-1 cursor-pointer">
                                    Privacy Policy
                                </span> 
                                and 
                                <span className=" text-blue-900 px-1 cursor-pointer">
                                    Terms and Services
                                </span>
                                </p>
                            </div>
                        </div>
                    </form>) : (


                    <form action="" method="post">
                        <div className=" space-y-5 mt-5">
                            <div className="">
                                <label htmlFor="loginMail">Email:</label> <br />
                                <input type="mail" placeholder='Email' required autocomplete="off" className=' border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>


                            <div className="">
                                <label htmlFor="loginPassword">Password:</label> <br />
                                <input type="password" placeholder='Password' required className=' border border-blue-950 pl-4 rounded-sm h-10 w-full' />
                            </div>

                            <div className="">
                                <Link to='/Profile'>
                                    <button type="submit" className='w-full bg-[#01051D] border border-[#01051D] hover:bg-white text-white py-2  hover:text-[#01051D] hover:font-bold hover:text-xl'>
                                        sign in     
                                        {/* LINKING THE PROFILE PAGE TO THE LOGIN FOR THE TIME BEING SO WE CAN ACCESS THE STUDENT PROFILE PAGE FOR DEVELOPMENT PURPOSE */}
                                    </button>
                                </Link>
                            </div>

                            <div className=" ">
                                <p className="text-xs">
                                By signing in, you agree to the  
                                <span className="text-blue-900 px-1 cursor-pointer">
                                    Privacy Policy
                                </span> 
                                and 
                                <span className=" text-blue-900 px-1 cursor-pointer">
                                    Terms and Services
                                </span>
                                </p>
                            </div>
                        </div>
                    </form>)}
                </div>



                <div className="">
                    <div className="hidden md:block max-w-[500px] my-10">
                        <img src={loginPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
