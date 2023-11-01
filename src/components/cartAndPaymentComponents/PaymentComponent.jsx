import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import mastercard from '../../assets/Images/mastercard.png'
import paystack from '../../assets/Images/paystack.png'
import visa from '../../assets/Images/visa.png'
import courseSelected from '../../assets/Images/courseSelected.png'
import customersImage from '../../assets/Images/customersImage.png'

export default function PaymentComponent() {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentChange = (paymentMethod) => {
      setSelectedPayment(paymentMethod);
    };
  return (
    <>
        <section className='max-w-[1100px] m-auto items-center'>
            <div className=' mx-[5%] my-10 md:flex justify-between'>
                <div className=" ">
                    <Link to = ''>
                        <button className=' border border-black text-[.7rem] px-2'>
                            Go back
                        </button>
                    </Link>

                    <div className=" flex items-center justify-between md:space-x-24">
                        <p className=" text-3xl md:text-5xl font-extrabold mt-5">
                            Check Out
                        </p>

                        <p className=" bg-[#F7F3B2] text-[.7em] rounded-2xl mt-7 p-2 w-32">
                            <span className=' font-bold'>2,452</span> already enrolled!
                        </p>
                    </div>

                    <div className=" md:w-[500px]">
                        <div className="">
                            <p className=" text-xl md:text-3xl font-bold mt-4">
                                Select a payment method
                            </p>
                        </div>

                        <div className="">
                            <div className=" sm:flex justify-between">
                                <div className={`flex bg-[#dddddd] rounded-md items-center mt-5 md:mt-3 w-fit ${selectedPayment === 'master' ? 'bg-blue-400' : ''}`}>
                                    <div className=" text-sm inline-flex font-bold py-2 mx-3">
                                        <input type="checkbox" name='master' checked={selectedPayment === 'master'} onChange={() => handlePaymentChange('master')} className=' mr-1' />
                                        <span className=" min-w-max">
                                            master/debit card
                                        </span>
                                    </div>

                                    <div className="flex pr-5">
                                        <img src={mastercard} alt="mastercard/visa" />
                                        <img src={visa} alt="" />
                                    </div>
                                </div>


                                    {/* PAYSTACK CHECKBOX */}
                                <div className={`flex bg-[#dddddd]  rounded-md items-center mt-5 md:mt-3 w-fit ${selectedPayment === 'paystack' ? 'bg-blue-400' : ''}`}>
                                    <div className=" text-sm flex font-bold py-2 mx-3">
                                        <input type="checkbox" name='paystack' checked={selectedPayment === 'paystack'} onChange={() => handlePaymentChange('paystack')}className=' mr-1'/>
                                        <span className="">
                                            paystack
                                        </span>
                                    </div>

                                    <img src={paystack} alt="paystack" className=' w-10 md:mr-5 pr-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* THE SUMMARY DIV */}

                <div className=" space-y-4 mt-16">
                    <p className=" text-3xl mt-4 font-bold">
                        Summary 
                    </p>

                    <p className="">
                        Course Fee:
                        <span className=" ml-4 font-extrabold">
                            95,000 NGN 
                        </span>
                    </p>

                    <p className="">
                        Discount: 
                        <span className=" ml-7 font-extrabold">
                            -45,000 NGN 
                        </span>
                    </p>

                    <p className="">
                        Total: 
                        <span className=" ml-14 font-extrabold">
                            50,000 NGN
                        </span>
                    </p>
                </div> 
            </div>
        </section>



        {/* ==================================================== */}
        {/* THE ORDER DETAILS SECTION */}

        <section className=" mx-[5%] md:max-w-[1000px] md:m-auto py-10 ">
            <div className="">
                <div className="">
                    <p className=" text-3xl font-bold">
                        Order Details 
                    </p>

                    <p className=" text-xl my-5">
                        {/* Number Of Courses Selected will be IN HERE */}1 Course
                    </p>
                </div>


                <div className=" sm:flex justify-between lg:max-w-[60%] items-center border rounded-lg border-[#cfcfcf] p-3">
                    <div className="">
                        <img src={courseSelected} alt="" className=''/>
                    </div>


                    <div className=" space-y-2 mx-2 ">
                        <p className=" text-xl font-bold">
                            Data Analytics 
                        </p>

                        <div className=" inline-flex items-center">
                            <img src={customersImage} alt="" />
                            <p className=" ml-3 text-sm">
                                By: Lionel Messi
                            </p>
                        </div>

                        <p className="">
                            {/* RATING STARS WILL BE HERE */}
                        </p>

                        <div className=" flex justify-between">
                            <p className="">
                                2hrs 30m
                            </p>

                            <p className=" ">
                                Beginner 
                            </p>
                        </div>

                        <div className=" inline-flex">
                            <Link to = "/paystackCard/15000">
                                <button className=' border border-black px-2 hover:bg-gray-400 hover:font-extrabold'>
                                    15,000
                                </button>
                            </Link>

                            <p className=" line-through ml-9">
                                45,000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
