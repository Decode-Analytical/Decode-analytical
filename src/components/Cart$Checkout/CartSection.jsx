import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export const CartSection = ({ cartimage, title }) => {
  return (
    <>
      <div className='flex border-b-2 py-4 px-2 gap-6'>
        <div className=' flex gap-4'>
          <div>
            <img className=' w-[110px] h-[110px]' src={cartimage} alt="" />
          </div>
          <div className=' flex flex-col gap-3'>
            <div className=' font-montserrat font-bold text-xl text-[#040E53]'>{title}</div>
            <p className=' font-montserrat font-normal text-xs text-[#1E1E1E]'>By Mavin Dee</p>
            <div className='flex gap-1 items-center flex-wrap'>
              <p className=' font-montserrat text-[#E6D805] text-xs'>4.6</p>
              <div className=' flex gap-1 items-center'>
                <FaStar className=' text-[#E6D805] text-xs' />
                <FaStar className=' text-[#E6D805] text-xs' />
                <FaStar className=' text-[#E6D805] text-xs' />
                <FaRegStar className=' text-[#1E1E1E] text-xs' />
              </div>
              <p className=' font-montserrat font-normal text-xs text-[#303030]'>(24232 ratings)</p>
            </div>
            <div className=' flex items-center gap-4 flex-wrap'>
              <p className=' font-montserrat font-normal text-xs text-[#303030]'>22 Total Hours</p>
              <p className=' font-montserrat font-normal text-xs text-[#303030] list-item'>35 Lectures</p>
              <p className=' font-montserrat font-normal text-xs text-[#303030] list-item'>Intermediates</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>
            <p className=' font-montserrat font-normal text-base text-[#E81515]'>Remove</p>
            <p className=' font-montserrat font-normal text-base text-[#040E53]'>Save for Later</p>
          </div>
          <div>
            <div className='flex items-center'>
              <p className=' font-montserrat font-bold text-2xl text-[#040E53]'>₦6500</p>
              <MdLocalOffer className='text-[#040E53]' />
            </div>
            <p className=' font-montserrat font-normal text-lg text-[#3030303]'>₦34900</p>
          </div>
        </div>
      </div>
    </>
  )
}
export const CartCode = () => {
  return (
    <>
      <div className=' flex flex-col'>
        <div>
          <div className=' font-montserrat font-semibold text-[#303030] text-xl'>Total:</div>
          <div className=' font-montserrat font-bold text-[40px] text-[#303030]'>₦19500</div>
          <p className=' font-montserrat font-normal text-[25px] text-[#303030]'>₦104,700</p>
          <p className=' font-montserrat font-normal text-[25px] text-[#303030]'>75% off</p>
          <NavLink exact="true" to="/studentDashboard/checkout">
            <button className=' bg-[#040E53] text-[#D9DBE5] rounded-md px-10 py-2 font-montserrat font-semibold text-sm'>Checkout</button>
          </NavLink>
        </div>
        <div>
          <div className=' font-montserrat font-bold text-[22px] text-[#303030]'>Promotion</div>
          <input className='rounded-md p-2 w-[180px]' type="text" placeholder='Enter coupon code' />
          <br />
          <button className=' bg-[#040E53] text-[#D9DBE5] rounded-md py-2 px-10 font-montserrat font-semibold text-sm'>Apply</button>
        </div>
      </div>
    </>
  )
}
export default CartSection