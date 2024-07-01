import React from 'react'

const SmallCard = ({title,count}) => {
  return (
    <>
        <div className='bg-white bg-shadow rounded-md px-5 py-10 flex-1 min-w-[258px] max-w-[300px]'>
            <div className='flex flex-col justify-between gap-4'>
                <p className=' font-montserrat font-medium text-xl'>{title}</p>
                <div className=' font-montserrat font-bold text-2xl'>{count}</div>
            </div>
        </div>
    </>
  )
}

export default SmallCard