import React from 'react'
import cerificate from '../../assets/StudentImages/Certificate.png'

const Certificate = () => {
  return (
    <>
        <div className='bg-white bg-shadow rounded-md p-4'>
            <div className=' p-2'>
                <p className=' border-b-2 border-[#1e1e1e57] font-montserrat font-semibold text-2xl text-[#1E1E1E] p-3 w-[315px]'>Claimed Certificates (2)</p>
            </div>
            <div className=' flex flex-wrap items-center px-3 py-6 justify-evenly'>
                <img src={cerificate} alt="" />
                <img src={cerificate} alt="" />
            </div>
        </div>
    </>
  )
}

export default Certificate