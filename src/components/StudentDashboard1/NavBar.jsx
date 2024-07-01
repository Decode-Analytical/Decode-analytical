import React from 'react'
import Logo from '../../assets/StudentImages/logo.png'
import { IoIosSearch } from "react-icons/io";

const NavBar = ({Dashboard}) => {
  return (
    <>
      <div className=' w-full flex items-center justify-between bg-white bg-shadow py-2 px-2'>
        <h1 className='text-[#1E1E1E] font-montserrat font-bold text-4xl'>{Dashboard}</h1>
        <img src={Logo} alt="" />
        <div className='bg-white rounded-md flex items-center bg-shadow p-2'>
          <IoIosSearch />
          <input className=' bg-transparent border-none outline-none' type="text" placeholder='Search' />
        </div>
        
      </div>
    </>
  )
}
export const NavBars = ({Dashboard}) => {
  return (
    <>
      <div className=' w-full flex items-center justify-between bg-white py-2 px-2 border-b-2'>
        <h1 className='text-[#1E1E1E] font-montserrat font-bold text-4xl'>{Dashboard}</h1>
        <img src={Logo} alt="" />
        <button className=' border-2 border-[#040E53] text-[#040E53] px-4 py-3 font-montserrat rounded-md text-base'>Exit</button>
      </div>
    </>
  )
}

export default NavBar