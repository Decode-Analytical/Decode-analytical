import React, {useState} from 'react'


                    // THIS COMPONENT IS HANDLING THE REVIEW INPUTS (FORM)... FROM NAME TO SUBMIT REVIEW BUTTON

export default function AddReview({onSubmit}) {

    const [newComment, setNewComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newComment.trim() !== '') {
        onSubmit(newComment);
        setNewComment('');
        }
    };




                // THIS FORM WILL BE RENDERED BELOW AS {REVIEW}, PASSED TO THE "REVIEW" VARIABLE

    const [showReview, setShowReview] = useState(false)
    let review

    if (showReview) {
        review =
        <form action="" onSubmit={handleSubmit}>
            <div className=" my-5 w-3/4 m-auto md:w-[200px] space-y-5 ">
                <div className="">
                    <input type="text" placeholder='FirstName' required className=' border border-blue-950 w-full rounded-sm pl-2'/>
                </div>

                <div className="">
                    <input type="text" placeholder='LastName' className=' border border-blue-950 w-full rounded-sm pl-2'/>
                </div>


                <div className="">
                    <textarea name='review' value={newComment} onChange={handleInputChange} placeholder='Review' required className=' border border-blue-950 rounded-sm pl-2 w-full'/>
                </div>

                <div className=" w-36 m-auto">
                    <button type='submit' className=' bg-blue-950 text-white py-2 px-5 hover:bg-white hover:text-blue-950 border border-blue-950'>
                        Submit Review
                    </button>
                </div>
            </div>
        </form>
    }

                        // THE ADD REVIEW BUTTON IS BUTTON IS JUST TO TOGGLE WHEN TO SHOW THE FOR AND OFF

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

                            {/* THE REVIEW VARIABLE ABOVE IS PASSED IN THE JSX, IT WILL DISPLAY HERE  ie. THE INPUTS FOR THE REVIEW*/}
                        {review}
                </div>
            </div>
        </section>
    </>
  )
}
