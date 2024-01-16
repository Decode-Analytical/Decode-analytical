import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

const Header = ({closeQuiz, TotalQuiz, currentQuiz, Currentmodule, TotalComment}) => {
  let quizPercenTage = (currentQuiz + 1 / TotalQuiz ) * 100
  console.log(quizPercenTage)
  return (
    <div className="w-full text-[#6B7F99] md:flex md:justify-around md:items-center py-5">
    <div className="flex gap-3 my-2 md:my-0">
        <button type="button" onClick={() => closeQuiz()}>
            <AiOutlineClose color="#6B7F99" />
        </button>
        <h5 className="text-center w-full">Module {Currentmodule + 1} Quiz </h5>
    </div>
    <div className="flex items-center justify-center md:w-2/4 w-[90%] gap-3 my-2 md:my-0 md:mx-0 mx-4">
        <p>{currentQuiz}/{TotalQuiz}</p>
        <div className="w-full h-2 cursor-pointer bg-[#B1B4CA]">
        <div
           className="h-3 bg-[#040E53] rounded-full"
           style={{ width: `${quizPercenTage}%` }}
         >
         </div>
        </div>
        <p className='hidden md:flex'>{quizPercenTage}</p>
    </div>
    <div>
        <p className="text-center w-full">{TotalComment} Comments</p>
    </div>
</div>
  )
}

export default Header