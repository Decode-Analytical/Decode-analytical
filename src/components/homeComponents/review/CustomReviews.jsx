import React from "react";
import Rating from "../../Rating";
import customerImage from "../../../assets/Images/customersImage.png"

export default function CustomReviews({ comments }) {
  return (
    <>
      <section className="grid grid-cols-4 gap-2">
        {comments.map(({ id, author, text }) => (
          <div
            key={id}
            className="shadow-2xl rounded-md mx-5 items-center px-2 py-3 mt-5"
          >
            <div className="flex space-x-2 items-center ">
              <img src={customerImage} height={35} width={35} />  
              <p className="text-yellow-400 font-medium ">{author} </p>
            </div>
            <Rating rate={4} />

            <p className="text-sm text-white text-justify">{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
