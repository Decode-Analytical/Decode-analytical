import React, {useState} from 'react'
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
                <div className="mx-5 my-10 max-w-[200px]">
                    <div className=" flex justify-between ">
                        <p onClick={toggleSingInUp} className=" cursor-pointer bg-blue-950 text-white px-3 py-2 hover:bg-blue-900">
                            sign up 
                        </p>

                        <p onClick={toggleSingInUp} className=" cursor-pointer bg-blue-950 text-white px-3 py-2 hover:bg-blue-900">
                            sign in
                        </p>
                    </div>
                    
                    {isSignUpVisible ? (
                    <form action="" method="post">
                        <div className=" space-y-5 mt-5">
                            <div className="">
                                <label htmlFor="firstname">First Name:</label> <br />
                                <input type="text" placeholder='First Name' required className='border border-blue-950 pl-1' />
                            </div>


                            <div className="">
                                <label htmlFor="lastname">Last Name:</label> <br />
                                <input type="text" placeholder='Last name' required className='border border-blue-950 pl-1' />
                            </div>

                            <div className="">
                                <label htmlFor="email">Mail:</label> <br />
                                <input type="email" placeholder='Enter mail ' required className='border border-blue-950 pl-1' />
                            </div>

                            <div className="">
                                <label htmlFor="phone">Phone Number:</label> <br />
                                <input type="tel" placeholder='Phone Number' required className='border border-blue-950 pl-1' />
                            </div>

                            <div className="">
                                <label htmlFor="password">Password:</label> <br />
                                <input type="password" placeholder='Password' required className='border border-blue-950 pl-1' />
                            </div>

                            <div className="">
                                <button type="submit" className='min-w-[181px] bg-blue-950 text-white py-2 hover:bg-blue-900 '>
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
                                <input type="mail" placeholder='Email' required className=' border border-blue-950 pl-1' />
                            </div>


                            <div className="">
                                <label htmlFor="loginPassword">Password:</label> <br />
                                <input type="password" placeholder='Password' required className=' border border-blue-950 pl-1' />
                            </div>

                            <div className="">
                                <button type="submit" className='min-w-[181px] bg-blue-950 text-white py-2 hover:bg-blue-900'>
                                    sign in
                                </button>
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
                    <div className="hidden md:block max-w-[400px] my-10">
                        <img src={loginPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
