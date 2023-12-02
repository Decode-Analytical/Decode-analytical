import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';


import {BsClockHistory} from "react-icons/bs"
import {BsStack} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsAward} from "react-icons/bs"
import {BsFillRssFill} from "react-icons/bs"

const apiKey = import.meta.env.VITE_API_KEY;
const token = apiKey;

export default function PremiumHero(props) {
    const {
        course_title, 
        course_image, 
        isPaid_course, 
        isPrice_course,
    } = props;
    const { _id } = useParams();
    
    // The status code state to display succesfully enrolled or alredy enrolled
    const [statusCode, setStatusCode] = useState(null);

    // The OK button state
    const [ok, setOk] = useState(true);

    const bgUrl = course_image[0].path;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('_id:', _id);
    
        // Use the token in your request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          },
        };
    
        try {
          const response = await fetch(`https://decode-mnjh.onrender.com/api/student/studentPost/${_id}`, requestOptions);
    
          setStatusCode(response.status);
    
          if (!response.ok) {
            console.error('Error:', response.status, response.statusText);
            // You might want to handle different response types here
            const errorText = await response.text();
            console.error('Error Content:', errorText);
          } else {
            const data = await response.json();
            console.log('Success:', data);
          }
        } catch (error) {
          console.error('Error:', error);
        }

        // here we set the OK back to true so that everytime the ok is false, when we click on enroll, it will still display the "Already enroled"
        setOk(true)  
      };
    

    //   handle the OK button
    const handleOkClick = () => {
        setOk(false);
      };
    
  return (
    <>
        <section>
            <div style={{ backgroundImage: `url(${bgUrl})`}} className= ' relative bg-cover bg-no-repeat bg-center  md:h-[550px] mt-10 p-10' >

                    {/* Message based on status code */}
                {statusCode === 200 && ok && (
                    <div className=' bg-white w-4/5 md:w-[90%] rounded-md h-[70%] flex flex-col items-center justify-center border border-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <p className=' text-center text-2xl'>Registration Successful!</p>

                        <button onClick={handleOkClick} className=' bg-blue-600 text-white rounded-sm text-xl p-4 mt-5'>
                            OK
                        </button>
                        {/* You can add more content to your success message */}
                    </div>
                )}

                
                {statusCode === 409 && ok && (
                    <div className=' bg-white w-4/5 md:w-[90%] rounded-md h-[70%] flex flex-col items-center justify-center border border-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <p className=' text-center text-2xl'>
                            Already Enrolled.
                        </p>

                        <button onClick={handleOkClick} className=' bg-blue-600 text-white rounded-sm text-xl p-4 mt-5'>
                            OK
                        </button>
                        {/* You can add more content or style this message */}
                    </div>
                )}

                <div className=" md:max-w-[95%] m-auto">
                    <p className=' bg-[#D9DBE5] rounded-xl px-6 md:mt-24 w-fit'>
                        {isPaid_course}
                    </p>

                    <div className=" text-white text-3xl md:text-6xl font-bold mt-1">
                        {course_title}
                    </div>

                    <div className=" text-white">
                        <div className=" mt-5 max-w-[485px] md:flex justify-between">
                            <p className=" flex items-center space-x-2">
                                <BsStack /> <span>14 Modules</span>
                            </p>

                            <p className=" flex space-x-2 items-center">
                                <BsClockHistory /> <span>2:50 hours to complete</span>
                            </p>
                        </div>

                        <div className=" mt-5 max-w-[500px] md:flex justify-between">
                            <p className="flex items-center space-x-2">
                                <BsFillRssFill /> <span>Learn online at your own pace</span>
                            </p>

                            <p className="flex items-center space-x-2">
                                <BsAward /> <span>Certificate of Completion</span>
                            </p>
                        </div>

                        <div className=" mt-5">
                            <p className="flex items-center space-x-2">
                                <BsFillPeopleFill /> <span>248  Students enrolled</span>
                            </p>

                            <form onSubmit={handleSubmit}>
                                <button type="submit" className='px-2 mt-3 bg-yellow-500 text-black'>
                                    Enroll Now for {isPrice_course}
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}