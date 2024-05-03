import React from 'react'
import "../CreateVideo.css"
import notification from "../../../../assets/adminDashboardImages/notification.svg"; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Warning = ({title, description, planeButton, button, id, handleMoreModules}) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center absolute w-[100%] h-[100%]'>
        <div className='bg-white w-[500px] flex flex-col gap-5 p-10 rounded-lg'>
            <div className='flex justify-between'>
              <h1 className='text-blue1 text-bold bold'>{title}</h1>
              <img src={notification} width={30} alt="" />
            </div>
            <div className='w-full h-[2px] bg-gray-200 rounded'></div>
            <p>{description}</p>
            
            <div className='flex items-center justify-end gap-5 mt-10'>
              <Link to="/admin-dashboard/courses/create-new-course/create-quiz" className='text-blue1 font-bold '>+ Add a Quiz</Link>
              <button  onClick={handleMoreModules}  className='bg-white text-sm text-blue1 border rounded px-3'>{planeButton}</button>
              <Link to="/admin-dashboard/courses" className='bg-blue1 py-2 px-10 rounded text-white'>{button}</Link>
            </div>
        </div>
    </div>
  )
}

export default Warning