import React from 'react'


export default function PremiumComponents() {
  return (
    <>
        <section>
            <div className="">
                                {/* BG-IMG CLASS IMPORTED FROM APP.CSS */}
                <div className="bg-img text-white bg-cover bg-no-repeat bg-center h-64 " >
                    <div className=" w-3/4 m-auto pt-4">
                        <p className="mt-5 text-2xl ">
                            Courses 
                        </p>

                        <p className="text-sm mb-5 mt-2">
                            Empower your digital journey
                        </p>

                        <form action="/search" method="get">
                            <input type="text" placeholder='search' name='courses' className='p-1 w-full rounded-xl'/>
                        </form>

                        <div className=" mt-3 flex justify-between w-[150px]">
                            <button className=" text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300 ">Free</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">Paid</button>
                            <button className="text-sm bg-white text-black p-1 rounded-2xl hover:bg-slate-300">All level</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
