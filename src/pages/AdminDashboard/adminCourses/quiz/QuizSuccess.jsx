import React from 'react'
import { Link } from 'react-router-dom'
import quizsuccess from "../../../../assets/adminDashboardImages/quizsuccess.svg";

const QuizSuccess = () => {
  return (
    <div className='flex justify-center items-center pt-10 '>
        <div className='w-[280px] flex flex-col items-center justify-center gap-2'>
            <div className='w-[165px]'>
                <img src={quizsuccess} alt="" />
            </div>
            <h1 className='font-bold text-[35px] text-center'>Quiz Created!</h1>
            <p className='text-center'>You have successfully added a quiz to your lesson. Press continue to go to your dashboard</p>
            <Link to="/admin-dashboard/home" className='bg-blue1 w-full mt-10 p-4 text-white1 rounded text-center'>Continue</Link>
        </div>
    </div>
  )
}

export default QuizSuccess