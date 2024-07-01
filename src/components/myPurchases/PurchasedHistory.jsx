import React from 'react'


import history from '../../assets/purchases/history.png'
export default function PurchasedHistory() {
  return (
    <>
        <section>
            <div className="">
                <div className=" mt-20">
                    <img src={history} alt="" className=' w-60 m-auto'/>

                    <div className=" w-96 m-auto text-center  mt-5">
                        <p className=" text-2xl text-grey">
                          No history found.
                        </p>

                        <p className=" text-xs text-gray">
                          Start learning today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
