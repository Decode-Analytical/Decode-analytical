import React from 'react'
import logo from './Logo.png'
import profile from './profile.jpg'
import logo2 from './logo__2.png'
import {RiDashboardFill} from 'react-icons/ri'
import {IoIosMail} from 'react-icons/io'
import {AiTwotoneTool,AiOutlinePlus} from 'react-icons/ai'
import {MdHelpCenter} from 'react-icons/md'
import {FaBookOpen, FaComments} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import {BsThreeDotsVertical} from 'react-icons/bs'


const index = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-16 w-full bg-white shadow-lg'></div>
        <div className='flex'>
        <div className=' w-20 h-[717px] bg-neutral-950 flex flex-col items-center'> 
        <img src={logo} alt='logo' className='w-11 h-7 mt-10'/>
        <div className='flex flex-col gap-2 items-center mt-9'>
            <img src={profile} alt='logo' className='w-11 h-11 rounded-full	object-cover' />
            <p className='text-white tracking-widest font-bold text-base'>RG</p>
        </div>
        <div className='flex flex-col items-center gap-10 mt-32'>
            <a href='#' >
                <RiDashboardFill className='text-white w-6 h-6'/>
            </a>
            <a href='#' >
                <FaBookOpen className='text-white w-6 h-6'/>
            </a>
            <a href='#' >
                <AiTwotoneTool className='text-white w-6 h-6'/>
            </a>
            <a href='#' >
                <FaComments className='text-white w-6 h-6'/>
            </a>
            <a href='#' >
                <IoIosMail className='text-white w-6 h-6'/>
            </a>
            <a href='#' >
                <MdHelpCenter className='text-white w-6 h-6'/>
            </a>


        </div>
        </div>
        {/* box with logo and Message title */}
        <div className='flex flex-col mx-20 w-full h-[717px] '>
            <div className='flex  h-[93px] items-center justify-between shadow-lg mb-2'>
                 {/* box with logo and Message title */}
                 <p className='font-black text-4xl text-stone-500 pl-14'>Messages</p>
                 <img src={logo2} className='w-24 h-18 pr-4'/>
            </div>
             {/* Message content*/}
            <div className='h-[600.71px] shadow-xl bg-zinc-100 rounded flex'>
                {/* group message */}
                <div className='h-full  bg-white w-[416px]' >
                    <div className='w-full h-[98px] border-b-2 border-solid border-zinc-300 flex justify-between items-center px-3.5'>
                        <button href='#'><BiSearch className='text-stone-600 w-6 h-6 ' /></button>
                        
                        <div className='flex gap-6 text-stone-600'>
                            <button href='#'> <AiOutlinePlus className='w-6 h-6'/></button>
                            <button href='#'> <BsThreeDotsVertical className='w-6 h-6'/></button>
                           
                           
                        </div>

                    </div>

                </div>



            </div>


        </div>
        </div>

    </div>
  )
}

export default index