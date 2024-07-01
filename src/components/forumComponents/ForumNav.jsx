import React from 'react'

import statistics from '../../assets/forum imgs/statistics.png'

export default function ForumNav() {
  return (
    <>
        <nav>
          <div className=" flex justify-between items-center mx-[5%] my-20">
            <h3 className=" text-2xl text-gray-600 font-bold">
              Forum
            </h3>

            <img src={statistics} alt="" className=' w-16'/>
          </div>
        </nav>
    </>
  )
}
