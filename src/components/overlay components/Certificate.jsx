import React from 'react'

const Certificate = () => {
  return (
    <div className='bg-white'>
    <div className='bg-[#040E53] rounded-md mt-10 mr-60 ml-60 h-24 font-
    Montserrat' >
      <div class='text-white text-center pt-7 text-xl'>
        <p>Course completion certificate</p>
      </div>
      <div class= 'text-[#E6D805] text-center pl-5 pt-3 text-xs'>
        <p>Please allow 24 hours after course completion to make your certificate available.</p>
      </div>
        <div class='border border-sky-500 text-[#040E53] rounded-md mt-6 pb-8'>
          <div class="flex space-x-6">
          <p class="underline underline-offset-1 font-bold">All courses</p>
          <p class='font-bold'>Certificate</p>
          </div>
          <br></br>
          <ul class="flex space-x-10 font-medium text-sm">
            <li>Course name</li>
            <li>Score</li>
            <li>Completion date</li>
            <li>Attempts</li>
            <li>Certificate</li>
          </ul>
          
        </div>
    </div>
    </div>
  )
}

export default Certificate