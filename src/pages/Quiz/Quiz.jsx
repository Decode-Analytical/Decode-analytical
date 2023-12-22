import React from 'react'
import customersImage from '../../assets/Images/customersImage.png';
import favIcon from '../../assets/favIcon.png';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className='w-full bg-gray-200'>
     <div className='w-[100%] h-[100%]'>
            <div className='w-[auto] h-auto flex items-center justify-between pl-4 pr-4'>
               <div className='p-2  w-fit h-fit rounded-full border-[1px] border-blue-600'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>  
               </div>

               <div>
                <img src={favIcon} alt="logo"/>
               </div>

               <div>
                <img src={customersImage}  alt="Image" />
               </div>

            </div>

          <div className='w-full h-[560px]'>
            <Outlet />
          </div>


            <div>
            <hr  className='h-[2px] w-[full] bg-gray-500 '/>
            </div>  

            <div className='w-full h-fit flex justify-end p-6 '>
                 <Link to="/dashboard/quiz/secondpage"><button className='pl-4 pr-4 pt-2 pb-2 bg-[#040E53] text-white rounded-md '>Continue</button></Link>
            </div>
     </div>
    </div>
  )
}

export default Quiz