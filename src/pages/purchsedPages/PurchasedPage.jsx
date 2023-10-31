import React, {useState} from 'react'

import {BsPencil} from "react-icons/bs"


import dashboardicon1 from '../../assets/dashboardicon1.png'

import CoursesPurchased from '../../components/myPurchases/CoursesPurchased'
import Points from '../../components/myPurchases/Points'
import PurchasedHistory from '../../components/myPurchases/PurchasedHistory'

export default function PurchasedPage() {
  const [activePage, SetActivePage] = useState(1);

  return (
    <>
      <nav className=' bg-white sticky top-0 '>
        <div className=" mt-10 flex justify-between items-center mx-[5%]">
          <h2 className=" text-4xl">
            My Purchases
          </h2>
          <img src={dashboardicon1} alt="" className=' w-20'/>
        </div>

        <div className=" sm:flex justify-between mt-3 mx-[5%]">
          <div className=" space-x-5 text-sm">
            <a onClick={()=> SetActivePage(1)} className=" cursor-pointer">
              courses products
            </a>

            <a onClick={()=> SetActivePage(2)} className="cursor-pointer">
              points earned
            </a>

            <a onClick={()=> SetActivePage(3)} className=" cursor-pointer">
              history
            </a>
          </div>

          <div className=" flex items-center mt-2 md:mt-0">
            <BsPencil />

            <p className=" pl-2 text-[10px] cursor-pointer">
              Update your payment method
            </p>
          </div>
        </div>
      </nav> 
      <hr className=' text-[#cecece]'/>
      
      <section>
        <div className={` ${activePage === 1 ? 'block' :'hidden'}`}>
          <CoursesPurchased />
        </div>
        
        <div className={` ${activePage === 2 ? 'block' :'hidden'}`}>
          <Points />
        </div>
        
        <div className={` ${activePage === 3 ? 'block' :'hidden'}`}>
          <PurchasedHistory />
        </div>
      </section>
    </>
  )
}
