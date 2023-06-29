import React from "react";

export default function CustomReviews({ comments }) {
  return (
    <>
      <section className=" md:flex justify-between">
        {comments.map(({ id, author, text }) => (
          <div
            key={id}
            className=" border rounded-md mx-5 items-center min-w-44 lg:w-48 px-2 py-3 mt-5"
          >
            <p className="text-yellow-400 ">
              {author} {/* AUTHOR WOULD COME FROM THE FORM REVIEW NAME */}
            </p>

            <p className="text-sm text-white">{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
