import React from 'react'

export default function AboutInstructor() {
  return (
    <>
        <section>
            <div className="text-[#303030] flex justify-between mt-12">
                <div className=" w-32 text-center">
                    <p className=" text-[.7em]">
                        Total Students
                    </p>

                    <p className=" md:text-2xl font-extrabold">
                        1,002,004
                    </p>
                </div>

                <div className=" w-32 text-center">
                    <p className=" text-[.7em]">
                        Total Courses Created
                    </p>

                    <p className=" md:text-2xl font-extrabold">
                        40,200
                    </p>
                </div>

                <div className=" w-32 text-center">
                    <p className=" text-[.7em]">
                        Total Reviews
                    </p>

                    <p className=" md:text-2xl font-extrabold">
                        20,000
                    </p>
                </div>
            </div>



            <div className="">
                <div className=" mt-10">
                    <p className=" text-3xl">
                        About Victoria
                    </p>

                    <p className=" text-[.7em] mt-5">
                        Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel. Et lacus eget pretium tristique porta suspendisse id. Viverra lectus egestas donec sed condimentum proin etiam at est. Tellus morbi pellentesque ullamcorper ac eu nisl habitant. Nunc velit libero sed iaculis sed tincidunt. Sit nec convallis neque consequat. Blandit etiam elementum hendrerit ut. Ipsum suscipit ipsum enim sed in eros tristique proin. Ultrices maecenas faucibus viverra commodo molestie elit. Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel. Et lacus eget pretium tristique porta suspendisse id.
                    </p>

                    <button className=" border px-3 rounded-full absolute text-[.6em] right-20 md:right-40">
                        more
                    </button>
                </div>

                {/* <div className=" right-0"> */}
                    {/* <button className=" border px-3 rounded-full absolute right-5">
                        more
                    </button> */}
                {/* </div> */}
            </div>
        </section>
    </>
  )
}
