import React, {useState} from 'react'

export default function AddReview() {
    const [showReview, setShowReview] = useState(false)
    let review

    if (showReview) {
        review =
        <form action="">
            <div className=" my-5 w-3/4 m-auto md:w-[200px] space-y-5">
                <div className="">
                    <input type="text" placeholder='FirstName' required className=' border border-blue-950 rounded-sm pl-2'/>
                </div>

                <div className="">
                    <input type="text" placeholder='LastName' className=' border border-blue-950 rounded-sm pl-2'/>
                </div>


                <div className="">
                    <textarea name='review' placeholder='Review' required className=' border border-blue-950 rounded-sm pl-2 w-48'/>
                </div>

                <div className=" w-36 m-auto">
                    <button type='submit' className=' bg-blue-950 text-white py-2 px-5 hover:bg-white hover:text-blue-950 border border-blue-950'>
                        Submit Review
                    </button>
                </div>
            </div>
        </form>
    }



  return (
    <>
        <section>
            <div className="">
                <div className="">
                    <div className=" text-center  w-36 m-auto">
                        <button onClick={()=> setShowReview(!showReview)} className=' text-[#040E53] border  border-[#040E53] hover:bg-blue-950 hover:text-white text-xs px-5 py-2'>
                            Add your review
                        </button>
                    </div>

                    <div className="">
                        {review}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
