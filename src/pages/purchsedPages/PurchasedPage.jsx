import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import dashboardicon1 from '../../assets/dashboardicon1.png';
import CoursesPurchased from '../../components/myPurchases/CoursesPurchased';
import Points from '../../components/myPurchases/Points';
import PurchasedHistory from '../../components/myPurchases/PurchasedHistory';
import RecommendedCourses from '../../components/myPurchases/RecommendedCourses';

export default function PurchasedPage() {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <nav className='bg-white sticky top-0'>
        <div className='mt-10 flex justify-between items-center mx-[5%]'>
          <h2 className='text-4xl'>My Purchases</h2>
          <img src={dashboardicon1} alt='' className='w-20' />
        </div>

        <div className='sm:flex justify-between mt-3 mx-[5%]'>
          <div className='space-x-5 text-sm'>
            <a
              onClick={() => setActivePage(1)}
              className={`cursor-pointer ${activePage === 1 ? 'text-[#030f2cc4] text-xl underline' : ''}`}
            >
              courses products
            </a>

            <a
              onClick={() => setActivePage(2)}
              className={`cursor-pointer ${activePage === 2 ? 'text-[#030f2cc4] text-xl underline' : ''}`}
            >
              points earned
            </a>

            <a
              onClick={() => setActivePage(3)}
              className={`cursor-pointer ${activePage === 3 ? 'text-[#030f2cc4] text-xl underline' : ''}`}
            >
              history
            </a>
          </div>

          <div className='flex items-center mt-2 md:mt-0'>
            <BsPencil />

            <p className='pl-2 text-[10px] cursor-pointer'>Update your payment method</p>
          </div>
        </div>
      </nav>
      <hr className='text-[#cecece]' />

      <section>
        <div className={`${activePage === 1 ? 'block' : 'hidden'}`}>
          <CoursesPurchased />
        </div>

        <div className={`${activePage === 2 ? 'block' : 'hidden'}`}>
          <Points />
        </div>

        <div className={`${activePage === 3 ? 'block' : 'hidden'}`}>
          <PurchasedHistory />
        </div>

        <div className="">
          <RecommendedCourses />
        </div>
      </section>
    </>
  );
}
