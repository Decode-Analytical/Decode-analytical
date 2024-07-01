import React, { useState, useContext, useEffect } from 'react'
import NavBar from '../StudentDashboard1/NavBar'
import { CiSearch } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import image1 from '../../assets/StudentImages/animation.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'
import { useFetchMessages } from '../../hooks/UsefetchStudent'

const StudentMessages = () => {
    const [messageNumber, setmessageNumber] = useState(0)
    const [visible, setvisible] = useState(false)
    const handleFocus = () => {
        setvisible(true)
    }
    const handleBlur = () => {
        setvisible(false)
    }
    const [users, setusers] = useState({})
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            setusers(user)
        }
    }, [user])

    const { fetchData: fetchStudentMessages, data: studentMessages, loading, error } = useFetchMessages()
    // console.log(fetchData);
    useEffect(() => {
        fetchStudentMessages()
    }, [])
      const sentMessage = studentMessages?.messages
      console.log(sentMessage);

    //   const ongoingCourses = courses?.filter((item) =>
    //     item?.isCourseCompleted === false
    //   )

    //   const completedCourses = courses?.filter((item) =>
    //     item?.isCourseCompleted === true
    //   )
    //   console.log(ongoingCourses, 'ongoing');
    //   console.log(completedCourses, 'completed');
    //   console.log(courses, 'Courses');
    return (
        <>
            <div className='p-[20px] flex flex-col gap-5'>
                <NavBar
                    Dashboard="Messages" />
                <div className=' bg-white bg-shadow h-[700px]'>
                    <div className=' px-3 py-10 border-b-2'>
                        <p className=' font-montserrat font-semibold text-3xl'>You have {sentMessage.length} unread messages</p>
                    </div>
                    <div className='flex'>
                        <div className=' bg-[#E8E8E866] w-[40%] h-[580px]'>
                            <div className=' border-b-2 px-8 py-4 flex justify-between'>
                                <div className=' flex rounded-md border w-[245px]'>
                                    <input className=' w-[200px] border-none' type="text" placeholder='search messages' />
                                    <CiSearch className=' bg-[#040E53] text-white h-[35px] w-[45px] rounded-tr-md rounded-br-md' />
                                </div>
                                <button
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className=' px-2 py-2 border rounded-md w-[80px] h-[35px] relative'>
                                    <div
                                        className=' flex items-center justify-between'>
                                        <p>All</p>
                                        <MdKeyboardArrowDown />
                                    </div>
                                    {
                                        visible && (

                                            <div className=' bg-white text-black mt-[10px] absolute p-2 border'>
                                                <div>All</div>
                                                <div>Unread</div>
                                                <div>Groups</div>
                                            </div>
                                        )
                                    }
                                </button>
                                <div>
                                    <FiEdit size={35} className='bg-[#040E53] text-white h-[35px] w-[45px] rounded-md flex items-center justify-center' />
                                </div>
                            </div>
                            <div>
                                {sentMessage?.length > 0 ? (
                                    sentMessage?.map((element,index)=>(
                                        <div key={index}>
                                            <div>{element.id}</div>
                                        </div>
                                    ))
                                ):(
                                    <div>
                                        <p>No Message is available</p>
                                    </div>
                                )

                                }
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={image1} alt="" />
                                <p className=' font-montserrat font-medium text-2xl text-[#040E53]'>Select a message thread to read it here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentMessages