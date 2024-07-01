import React,{useState} from 'react'
import { GrNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";

const TopCourseCard = ({Next, Prev,end,things}) => {
    
    return (
        <>
            <div className='flex justify-between border-b-2 p-1'>
                <p className=' font-montserrat font-semibold max-lg:text-2xl max-md:text-xl max-sm:text-sm'>{things}</p>
                <div className='flex items-center gap-1'>
                    <p>See all</p>
                    <button onClick={Next}>
                        <GrNext />
                    </button>

                    {end && <button onClick={Prev}>
                        <IoChevronBack />
                    </button>}
                </div>
            </div>
        </>
    )
}

export default TopCourseCard