import React from 'react'
import { NavBars } from '../StudentDashboard1/NavBar'
import image1 from '../../assets/StudentImages/analysisphone.png'
import image2 from '../../assets/StudentImages/jsimage.png'
import { AiFillCreditCard } from "react-icons/ai";
import image0 from '../../assets/StudentImages/master.png'
import image from '../../assets/StudentImages/visa.png'
import image3 from '../../assets/StudentImages/titan.png'
import image4 from '../../assets/StudentImages/paying.png'
import image5 from '../../assets/StudentImages/paystack.png'
const Payments = () => {
    return (
        <>
            <div>
                <NavBars />
                <div className='block lg:flex py-12 px-8 justify-between w-full border'>
                    <div className=' flex flex-col gap-[80px] mx-auto md:w-[80%] lg:w-[70%] sm:w-[100%] '>
                        <div className='flex flex-col gap-6 border-b pb-10'>
                            <div className=' font-montserrat font-bold text-[#303030] text-[40px]'>Checkout</div>
                            <p className=' font-montserrat font-semibold text-3xl text-[#303030]'>Select a Payment Method</p>
                            <div className='flex flex-col gap-4 bg-shadow'>
                                <div className='flex items-center p-4 justify-between bg-white bg-shadow rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" />
                                        <div className='flex items-center gap-2'>
                                            <AiFillCreditCard size={25}/>
                                            <div className=' font-montserrat font-bold text-xl text-[#303030] w-[200px]'>Credit/Debit Card</div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <img className='w-10 h-6' src={image0} alt="" />
                                        <img className='w-10 h-6' src={image} alt="" />
                                        <img className='w-10 h-6' src={image3} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-center p-4 justify-between bg-white bg-shadow rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" />
                                        <div className='flex items-center'>
                                            <img src={image4} alt="" />
                                            <div className=' font-montserrat font-bold text-xl text-[#303030] w-[200px]'>Paypal</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 justify-between bg-white bg-shadow rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <input type="radio" />
                                        <div className='flex items-center gap-2'>
                                            <img src={image5} alt="" />
                                            <div className=' font-montserrat font-bold text-xl text-[#303030] w-[200px]'>Paystack</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div className=' font-montserrat font-bold text-3xl text-[#303030]'>Order Details</div>
                            <div>
                                <div className='flex border-b py-4 justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[80px] h-[80px]' src={image1} alt="" />
                                        <div className=' font-montserrat font-semibold text-2xl text-[#303030]'>Data Analytis</div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className=' font-montserrat font-semibold text-2xl text-[#303030]'>₦6,500</p>
                                        <p className=' font-montserrat font-medium text-xl text-[#303030] text line-through'>₦34,500</p>
                                    </div>
                                </div>
                                <div className='flex border-b py-4 justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[80px] h-[80px]' src={image2} alt="" />
                                        <div className=' font-montserrat font-semibold text-2xl text-[#303030]'>Data Analytis</div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className=' font-montserrat font-semibold text-2xl text-[#303030]'>₦6,500</p>
                                        <p className=' font-montserrat font-medium text-xl text-[#303030] text line-through'>₦34,500</p>
                                    </div>
                                </div>
                                <div className='flex border-b py-4 justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-[80px] h-[80px]' src={image1} alt="" />
                                        <div className=' font-montserrat font-semibold text-2xl text-[#303030]'>Data Analytis</div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className=' font-montserrat font-semibold text-2xl text-[#303030]'>₦6,500</p>
                                        <p className=' font-montserrat font-medium text-xl text-[#303030] text line-through'>₦34,500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-shadow rounded-sm md:w-[55%] md:mt-4 md:mx-auto lg:w-[25%]  h-[300px] px-6 py-10 flex flex-col gap-2'>
                        <div className=' flex flex-col gap-4'>
                            <div>Summary</div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <p>Course fee</p>
                                    <p>95000 NGN</p>
                                </div>
                                <div className='flex justify-between border-b-2 pb-4'>
                                    <p>Discount</p>
                                    <p>-50000 NGN</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Discount</p>
                                    <p>-50000 NGN</p>
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#040E53] py-3 px-8 rounded-md'>Proceed</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payments