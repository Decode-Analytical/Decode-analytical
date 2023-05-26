import React from 'react'
import Rectangle16 from '../homeGridComponents/Rectangle16.png'
import Rectangle17 from '../homeGridComponents/Rectangle17.png'
import Rectangle18 from '../homeGridComponents/Rectangle18.png'




export default function HomeGrid() {
  return (
    <>
        <section>
            <div className=" py-20 md:py-40 space-y-14 text-sm max-w-3xl m-auto">
                <div className=" md:flex justify-between items-center">
                    <img src={Rectangle18} alt="" className=' md:max-w-[300px] rounded-3xl' />
                    <p className=" max-w-[400px]">
                        <span className=" font-bold md:text-xl ">
                            Develop practical skills on the go
                        </span> <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis totam facere, eaque molestiae modi, consequatur dolor deserunt animi quasi magnam illum aspernatur architecto esse officia laudantium rerum ad obcaecati?
                    </p>
                </div>

                <div className="md:flex justify-between items-center">
                    <img src={Rectangle17} alt="" className='md:max-w-[300px] rounded-3xl'/>
                    <p className="max-w-[400px]">
                        <span className=" font-bold md:text-xl">
                            Learn the basic  fundamentals from stratch
                        </span> <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis totam facere, eaque molestiae modi, consequatur dolor deserunt animi quasi magnam illum aspernatur architecto esse officia laudantium rerum ad obcaecati?
                    </p>
                </div>


                <div className="md:flex justify-between items-center">
                    <img src={Rectangle16} alt="" className='md:max-w-[300px] rounded-3xl' />
                    <p className="max-w-[400px]">
                        <span className=" font-bold md:text-xl">
                            Learn the basic  fundamentals from stratch
                        </span> <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis totam facere, eaque molestiae modi, consequatur dolor deserunt animi quasi magnam illum aspernatur architecto esse officia laudantium rerum ad obcaecati?
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}
