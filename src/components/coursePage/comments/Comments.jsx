import React, {useState, useEffect} from 'react'
import { AiFillStar } from "react-icons/ai";
import BarComment from './BarComment';

const Comments = () => {
  const [rating, setRating] = useState(null);
  const array = new Array(5).fill(";")
  const CreateBar = ["50%", "45%", "39%", "35%", "30%"]
  useEffect(async () => {
    let comment = await fetch()
  }, [third])
  
  return (
    <section className="w-full flex flex-col justify-center bg-white items-center my-5">
      <div className="md:w-10/12">
        <h1 className="text-2xl font-bold my-3">Student Feedback</h1>
        <div className="flex gap-3 my-5">
            <div className="md:w-2/6">
                <h2 className="text-center" style={{fontSize: "5.25rem", lineHeight: "4.25rem"}}>4.0</h2>
                <div>
                  <div className="flex gap-2 justify-around">
                  {array.map((value, index) => {
                    const rantingValue = index + 1
                    return (
                      <button type="button" key={index} onClick={() => setRating(rantingValue)}>
                        <AiFillStar color={rantingValue <= rating ? "#ffc107" : "#e4e5e9" } size={25} />
                      </button>
                    )
                  })}
                  </div>
                  <h3 className="text-[#ffc107] text-xl text-center">Course Rating</h3>
                </div>
            </div>
            <div className="w-full gap-1 flex flex-col">
              {CreateBar.map((value,index) => {
                const ratingValue = CreateBar.length - index
                return (
                  <BarComment
                  barwidth= {value}
                  ratingvalue = {ratingValue}
                />
                )
              })}
            </div>
        </div>
        <h3 className="text-2xl font-bold my-3">Reviews</h3>
              
        </div>
    </section>
  )
}

export default Comments