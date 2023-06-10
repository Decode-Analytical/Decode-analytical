import React from 'react'
import Instruction from '../../components/profileComponents/Instruction'
import PersonalInfo from '../../components/profileComponents/PersonalInfo'

export default function Profile() {
  return (
    <>
        <section>
            <div className=" bg-gray-200 min-h-screen">
                <div className=" max-w-[1080px] m-auto">
                    <div className=''>
                        <Instruction />
                        <PersonalInfo/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
