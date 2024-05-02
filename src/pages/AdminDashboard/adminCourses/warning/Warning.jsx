import React from 'react'
import "../CreateVideo.css"
import notification from "../../../../assets/adminDashboardImages/notification.svg"; 

const Warning = ({title, description, planeButton, button, id}) => {
  return (
    <div className='flex justify-center items-center absolute w-[100%] h-[100vh]'>
        <div className='bg-white w-[500px] flex flex-col gap-5 p-10 rounded-lg'>
            <div className='flex justify-between'>
              <h1 className='text-blue1 text-bold bold'>{title}</h1>
              <img src={notification} width={30} alt="" />
            </div>
            <div className='w-full h-[2px] bg-gray-200 rounded'></div>
            <p>{description}</p>
            
            <div className='flex justify-end gap-5 mt-10'>
              <button className='bg-white text-sm text-blue1 border rounded px-3'>{planeButton}</button>
              <button className='bg-blue1 py-2 px-10 rounded text-white'>{button}</button>
            </div>
        </div>
    </div>
  )
}

export default Warning