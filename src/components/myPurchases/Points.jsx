import React from 'react'

import {BsStar} from "react-icons/bs"


import earned from '../../assets/purchases/earned.png'

export default function Points() {
  return (
    <>
        <section>
            <div className="">
                <div className=" mt-20">
                    <img src={earned} alt="" className=' w-60 m-auto'/>

                    <div className=" w-96 m-auto text-center  mt-5">
                        <p className=" text-2xl text-grey">
                          You haven’t earned any point yet.
                        </p>

                        <p className=" text-xs text-gray">
                          To start earning points, start and complete any course today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
